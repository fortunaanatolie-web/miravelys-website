#!/usr/bin/env python3
"""Generate hashed web icon families from canonical app masters.

Run locally (needs sibling product repos). Do not run on Vercel.
Outputs:
  public-site/identities/<id>/
  src/config/appIdentityAssets.js
"""
from __future__ import annotations

import hashlib
import json
import math
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT.parent
OUT_ROOT = ROOT / "public-site" / "identities"
ASSETS_JS = ROOT / "src" / "config" / "appIdentityAssets.js"
WEBSITE_SVG = ROOT / "public-site" / "favicon.svg"

SOURCES = {
"miravelys": {
        "kind": "app",
        "favicon_master": PROJECTS / "miravelys-/Miravelys/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-ios-1024.png",
        "apple_touch_master": PROJECTS / "miravelys-/Miravelys/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-ios-1024.png",
        "small": {},
        "theme": "#f7f3ed",
        "background": "#061818",
        "name": "Miravelys",
        "short_name": "Miravelys",
    },
    "mirascribe": {
        "kind": "app",
        "favicon_master": PROJECTS / "MiraScribe/Mirascribe/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png",
        "apple_touch_master": PROJECTS / "MiraScribe/Tools/MirascribeIconMaster.png",
        "small": {
            16: PROJECTS / "MiraScribe/Mirascribe/Assets.xcassets/AppIcon.appiconset/icon_16x16.png",
            32: PROJECTS / "MiraScribe/Mirascribe/Assets.xcassets/AppIcon.appiconset/icon_32x32.png",
            64: PROJECTS / "MiraScribe/Mirascribe/Assets.xcassets/AppIcon.appiconset/icon_64x64.png",
        },
        "theme": "#0d0f14",
        "background": "#0d0f14",
        "name": "MiraScribe",
        "short_name": "MiraScribe",
    },
    "miraveris": {
        "kind": "app",
        "favicon_master": PROJECTS / "MiraVeris/Sources/MiraVeris/Resources/AppIcon/MiraVeris-AppIcon-1024.png",
        "apple_touch_master": PROJECTS / "MiraVeris/Sources/MiraVeris/Resources/AppIcon/MiraVeris-AppIcon-1024.png",
        "small": {
            16: PROJECTS / "MiraVeris/Sources/MiraVeris/Resources/Assets.xcassets/AppIcon.appiconset/appicon_16x16@1x.png",
            32: PROJECTS / "MiraVeris/Sources/MiraVeris/Resources/Assets.xcassets/AppIcon.appiconset/appicon_32x32@1x.png",
            128: PROJECTS / "MiraVeris/Sources/MiraVeris/Resources/Assets.xcassets/AppIcon.appiconset/appicon_128x128@1x.png",
        },
        "theme": "#e3eefc",
        "background": "#1e3a5f",
        "name": "MiraVeris",
        "short_name": "MiraVeris",
    },
    "miravoxis": {
        "kind": "app",
        "favicon_master": PROJECTS / "Miravoxis/MiraVoxis/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png",
        "apple_touch_master": PROJECTS / "Miravoxis/Tools/MiraVoxisVoiceWordsIconMaster.png",
        "small": {
            16: PROJECTS / "Miravoxis/MiraVoxis/Assets.xcassets/AppIcon.appiconset/icon_16x16.png",
            32: PROJECTS / "Miravoxis/MiraVoxis/Assets.xcassets/AppIcon.appiconset/icon_32x32.png",
            64: PROJECTS / "Miravoxis/MiraVoxis/Assets.xcassets/AppIcon.appiconset/icon_64x64.png",
        },
        "theme": "#0847bb",
        "background": "#062a6e",
        "name": "MiraVoxis",
        "short_name": "MiraVoxis",
    },
}


def content_hash(paths: list[Path]) -> str:
    digest = hashlib.sha256()
    for path in paths:
        digest.update(path.read_bytes())
    return digest.hexdigest()[:8]


def cubic(p0, p1, p2, p3, t: float):
    u = 1 - t
    return (
        u ** 3 * p0[0] + 3 * u ** 2 * t * p1[0] + 3 * u * t ** 2 * p2[0] + t ** 3 * p3[0],
        u ** 3 * p0[1] + 3 * u ** 2 * t * p1[1] + 3 * u * t ** 2 * p2[1] + t ** 3 * p3[1],
    )


def stroke_cubic(draw: ImageDraw.ImageDraw, p0, p1, p2, p3, radius: float, fill):
    steps = 240
    for i in range(steps + 1):
        x, y = cubic(p0, p1, p2, p3, i / steps)
        draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=fill)


def render_website_mark(size: int, full_bleed: bool) -> Image.Image:
    """Rasterize the canonical website SVG geometry."""
    scale = size / 64
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    plate = (6, 24, 24, 255)
    stroke = (66, 224, 212, 255)
    gold = (232, 196, 160, 255)
    if full_bleed:
        draw.rectangle((0, 0, size - 1, size - 1), fill=plate)
    else:
        radius = 17 * scale
        draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=plate)

    def pt(x, y):
        return (x * scale, y * scale)

    width = 4.5 * scale
    stamp = max(width / 2, 1.2)
    stroke_cubic(draw, pt(17, 43.5), pt(25.5, 42.5), pt(30.5, 37.5), pt(32, 21), stamp, stroke)
    stroke_cubic(draw, pt(32, 21), pt(34.2, 37.5), pt(39.2, 42.5), pt(47, 43.5), stamp, stroke)
    cx, cy, cr = 32 * scale, 20 * scale, 4 * scale
    draw.ellipse((cx - cr, cy - cr, cx + cr, cy + cr), fill=gold)
    return img


def resize_rgba(im: Image.Image, size: int) -> Image.Image:
    return im.convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)


def save_png(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, format="PNG", optimize=True)


def make_og(icon: Image.Image, background: str, dest: Path) -> None:
    canvas = Image.new("RGB", (1200, 630), background)
    mark = icon.convert("RGBA")
    target = 360
    mark = resize_rgba(mark, target)
    x = (1200 - target) // 2
    y = (630 - target) // 2
    canvas.paste(mark, (x, y), mark)
    dest.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(dest, format="JPEG", quality=88, optimize=True, progressive=True)


def write_manifest(path: Path, name: str, short_name: str, theme: str, icon_192: str, icon_512: str, start_url: str) -> None:
    payload = {
        "name": name,
        "short_name": short_name,
        "display": "browser",
        "start_url": start_url,
        "theme_color": theme,
        "background_color": theme,
        "icons": [
            {"src": icon_192, "sizes": "192x192", "type": "image/png"},
            {"src": icon_512, "sizes": "512x512", "type": "image/png"},
        ],
    }
    path.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")


def public_url(path: Path) -> str:
    rel = path.relative_to(ROOT / "public-site").as_posix()
    return f"/{rel}"


def generate_app(app_id: str, spec: dict) -> dict:

    if spec["kind"] != "website-svg" and not Path(spec["favicon_master"]).exists():
        print(f"Skipping {app_id}, master not found: {spec['favicon_master']}")
        return None
    out_dir = OUT_ROOT / app_id
    if out_dir.exists():
        for child in out_dir.iterdir():
            if child.is_file():
                child.unlink()
    out_dir.mkdir(parents=True, exist_ok=True)

    if spec["kind"] == "website-svg":
        svg = Path(spec["svg"])
        digest = content_hash([svg])
        favicon_master = render_website_mark(1024, full_bleed=False)
        apple_master = render_website_mark(1024, full_bleed=True)
        small = {
            16: render_website_mark(16, full_bleed=False),
            32: render_website_mark(32, full_bleed=False),
            48: render_website_mark(48, full_bleed=False),
        }
        og_source = Path(spec["og"])
    else:
        favicon_path = Path(spec["favicon_master"])
        apple_path = Path(spec["apple_touch_master"])
        small_paths = spec.get("small", {})
        digest = content_hash([favicon_path, apple_path, *small_paths.values()])
        favicon_master = Image.open(favicon_path).convert("RGBA")
        apple_master = Image.open(apple_path).convert("RGBA")
        small = {}
        for size, path in small_paths.items():
            small[size] = Image.open(path).convert("RGBA")
        if 16 not in small:
            small[16] = resize_rgba(favicon_master, 16)
        if 32 not in small:
            small[32] = resize_rgba(favicon_master, 32)
        if 48 not in small:
            source_48 = small.get(64) or small.get(128) or favicon_master
            small[48] = resize_rgba(source_48, 48)
        og_source = None

    files = {}
    files["icon16"] = out_dir / f"icon-16.{digest}.png"
    files["icon32"] = out_dir / f"icon-32.{digest}.png"
    files["icon48"] = out_dir / f"icon-48.{digest}.png"
    files["appleTouchIcon"] = out_dir / f"apple-touch.{digest}.png"
    files["icon192"] = out_dir / f"icon-192.{digest}.png"
    files["icon512"] = out_dir / f"icon-512.{digest}.png"
    files["faviconIco"] = out_dir / f"favicon.{digest}.ico"
    files["manifest"] = out_dir / "manifest.webmanifest"

    save_png(small[16] if small[16].size == (16, 16) else resize_rgba(small[16], 16), files["icon16"])
    save_png(small[32] if small[32].size == (32, 32) else resize_rgba(small[32], 32), files["icon32"])
    save_png(small[48] if small[48].size == (48, 48) else resize_rgba(small[48], 48), files["icon48"])
    save_png(resize_rgba(apple_master, 180), files["appleTouchIcon"])
    save_png(resize_rgba(apple_master, 192), files["icon192"])
    save_png(resize_rgba(apple_master, 512), files["icon512"])

    resize_rgba(small[48], 48).save(
        files["faviconIco"],
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    if og_source is not None:
        og_url = "/og-miravelys.jpg"
    else:
        files["ogImage"] = out_dir / f"og.{digest}.jpg"
        make_og(favicon_master, spec["background"], files["ogImage"])
        og_url = public_url(files["ogImage"])

    icon192_url = public_url(files["icon192"])
    icon512_url = public_url(files["icon512"])
    write_manifest(
        files["manifest"],
        spec["name"],
        spec["short_name"],
        spec["theme"],
        icon192_url,
        icon512_url,
        "/" if app_id == "miravelys" else f"/{app_id}",
    )

    assets = {
        "faviconSvg": "/favicon.svg" if app_id == "miravelys" else None,
        "faviconIco": public_url(files["faviconIco"]),
        "icon16": public_url(files["icon16"]),
        "icon32": public_url(files["icon32"]),
        "icon48": public_url(files["icon48"]),
        "appleTouchIcon": public_url(files["appleTouchIcon"]),
        "icon192": icon192_url,
        "icon512": icon512_url,
        "ogImage": og_url,
        "manifest": public_url(files["manifest"]),
        "hash": digest,
    }
    return assets


def main() -> None:
    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    all_assets = {}
    for app_id, spec in SOURCES.items():
        print(f"generating {app_id}")
        res = generate_app(app_id, spec)
        if res: all_assets[app_id] = res

    js = (
        "/** Generated by scripts/generate_app_identity_assets.py. Do not edit by hand. */\n"
        f"export const APP_IDENTITY_ASSETS = {json.dumps(all_assets, indent=2)};\n"
    )
    ASSETS_JS.write_text(js, encoding="utf-8")
    print(f"wrote {ASSETS_JS.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
