#!/usr/bin/env python3
"""Extract the in-app screen rectangle from a full-device marketing PNG."""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

# Canonical ChatGPT device mockups in the presentation package.
CANONICAL_DEVICE = (941, 1672)

# Median bezel insets for 941×1672 device mockups (fraction of full image).
FIXED_CROP = {
    "left": 0.122,
    "top": 0.032,
    "right": 0.120,
    "bottom": 0.042,
}

TARGET_WIDTH = 780
TARGET_HEIGHT = 1688
TARGET_ASPECT = TARGET_WIDTH / TARGET_HEIGHT
ASPECT_TOLERANCE = 0.08
EDGE_SHAVE_PX = 8
MAX_EDGE_SHAVE_PX = 32


def _not_background(r: int, g: int, b: int) -> bool:
    return r > 28 or g > 28 or b > 32


def _column_average(column, height: int) -> float:
    margin = min(80, height // 5)
    step = max(1, (height - margin * 2) // 40)
    total = 0.0
    count = 0
    for y in range(margin, height - margin, step):
        r, g, b = column[y]
        total += r + g + b
        count += 1
    return total / (3 * count) if count else 0.0


def _fixed_box(width: int, height: int) -> tuple[int, int, int, int]:
    left = round(width * FIXED_CROP["left"])
    top = round(height * FIXED_CROP["top"])
    right = width - round(width * FIXED_CROP["right"])
    bottom = height - round(height * FIXED_CROP["bottom"])
    return left, top, right, bottom


def _valid_box(box: tuple[int, int, int, int], width: int, height: int) -> bool:
    left, top, right, bottom = box
    crop_w = right - left
    crop_h = bottom - top
    if crop_w < width * 0.45 or crop_h < height * 0.55:
        return False
    if crop_w > width * 0.9 or crop_h > height * 0.95:
        return False
    aspect = crop_w / crop_h
    return abs(aspect - TARGET_ASPECT) <= ASPECT_TOLERANCE


def _edge_is_bezel(pixels, width: int, height: int, depth: int = 8) -> bool:
    """True when the outer band looks like uniform device chrome."""
    samples: list[tuple[int, int, int]] = []
    for x in range(0, width, max(1, width // 24)):
        for y in range(depth):
            samples.append(pixels[x, y])
            samples.append(pixels[x, height - 1 - y])
    for y in range(0, height, max(1, height // 24)):
        for x in range(depth):
            samples.append(pixels[x, y])
            samples.append(pixels[width - 1 - x, y])

    if not samples:
        return False

    rs, gs, bs = zip(*samples)
    avg = (sum(rs) / len(rs), sum(gs) / len(gs), sum(bs) / len(bs))
    variance = sum(
        ((r - avg[0]) ** 2 + (g - avg[1]) ** 2 + (b - avg[2]) ** 2) / 3 for r, g, b in samples
    ) / len(samples)
    return variance < 180 and max(avg) < 115


def _shave_bezel(image: Image.Image) -> Image.Image:
    current = image
    shaved = 0
    while shaved < MAX_EDGE_SHAVE_PX:
        width, height = current.size
        if width < 120 or height < 220:
            break
        if not _edge_is_bezel(current.load(), width, height):
            break
        current = current.crop((EDGE_SHAVE_PX, EDGE_SHAVE_PX, width - EDGE_SHAVE_PX, height - EDGE_SHAVE_PX))
        shaved += EDGE_SHAVE_PX
    return current


def _fit_display_aspect(image: Image.Image) -> Image.Image:
    width, height = image.size
    current_aspect = width / height
    if current_aspect > TARGET_ASPECT:
        new_width = round(height * TARGET_ASPECT)
        left = (width - new_width) // 2
        image = image.crop((left, 0, left + new_width, height))
    elif current_aspect < TARGET_ASPECT:
        new_height = round(width / TARGET_ASPECT)
        top = (height - new_height) // 2
        image = image.crop((0, top, width, top + new_height))
    return image.resize((TARGET_WIDTH, TARGET_HEIGHT), Image.Resampling.LANCZOS)


def extract_screen_bbox(image: Image.Image) -> tuple[int, int, int, int]:
    width, height = image.size
    if (width, height) == CANONICAL_DEVICE:
        return _fixed_box(width, height)

    rgb = image.convert("RGB")
    pixels = rgb.load()

    left = 0
    for x in range(width):
        if any(_not_background(*pixels[x, y]) for y in range(height)):
            left = x
            break

    right = width - 1
    for x in range(width - 1, -1, -1):
        if any(_not_background(*pixels[x, y]) for y in range(height)):
            right = x
            break

    top = 0
    for y in range(height):
        if any(_not_background(*pixels[x, y]) for x in range(width)):
            top = y
            break

    bottom = height - 1
    for y in range(height - 1, -1, -1):
        if any(_not_background(*pixels[x, y]) for x in range(width)):
            bottom = y
            break

    device = rgb.crop((left, top, right + 1, bottom + 1))
    device_pixels = device.load()
    crop_width, crop_height = device.size

    inset_left = 0
    for x in range(crop_width):
        column = [device_pixels[x, y] for y in range(crop_height)]
        if _column_average(column, crop_height) > 42:
            inset_left = x
            break

    inset_right = 0
    for x in range(crop_width - 1, -1, -1):
        column = [device_pixels[x, y] for y in range(crop_height)]
        if _column_average(column, crop_height) > 42:
            inset_right = crop_width - 1 - x
            break

    inset_top = 0
    for y in range(crop_height):
        total = 0.0
        for x in range(crop_width):
            r, g, b = device_pixels[x, y]
            total += r + g + b
        if total / (3 * crop_width) > 42:
            inset_top = y
            break

    inset_bottom = 0
    for y in range(crop_height - 1, -1, -1):
        total = 0.0
        for x in range(crop_width):
            r, g, b = device_pixels[x, y]
            total += r + g + b
        if total / (3 * crop_width) > 42:
            inset_bottom = crop_height - 1 - y
            break

    auto_box = (
        left + inset_left,
        top + inset_top,
        right - inset_right + 1,
        bottom - inset_bottom + 1,
    )

    if _valid_box(auto_box, width, height):
        return auto_box

    return _fixed_box(width, height)


def crop_device_png(input_path: Path, output_path: Path, target_width: int = TARGET_WIDTH) -> tuple[int, int]:
    image = Image.open(input_path)
    box = extract_screen_bbox(image)
    screen = image.crop(box).convert("RGB")
    screen = _shave_bezel(screen)
    screen = _fit_display_aspect(screen)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    screen.save(output_path, format="PNG", optimize=True)
    return screen.size


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: extract_screen_from_device_png.py <input.png> <output.png>", file=sys.stderr)
        return 1

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    width, height = crop_device_png(input_path, output_path)
    print(f"{width}x{height}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
