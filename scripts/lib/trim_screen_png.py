#!/usr/bin/env python3
"""Trim uniform dark margins from a screen-only mockup PNG and fit to target size."""
from __future__ import annotations

import os
import sys
from pathlib import Path

from PIL import Image

TARGET_WIDTH = int(os.environ.get("MIRAVELYS_TRIM_WIDTH", "780"))
TARGET_HEIGHT = int(os.environ.get("MIRAVELYS_TRIM_HEIGHT", "1688"))
TARGET_ASPECT = TARGET_WIDTH / TARGET_HEIGHT
EDGE_SHAVE_PX = 4
MAX_EDGE_SHAVE_PX = 48


def _edge_is_margin(pixels, width: int, height: int, depth: int = 6) -> bool:
    samples: list[tuple[int, int, int]] = []
    for x in range(0, width, max(1, width // 28)):
        for y in range(depth):
            samples.append(pixels[x, y])
            samples.append(pixels[x, height - 1 - y])
    for y in range(0, height, max(1, height // 28)):
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
    return variance < 220 and max(avg) < 125


def _trim_margins(image: Image.Image) -> Image.Image:
    current = image.convert("RGB")
    shaved = 0
    while shaved < MAX_EDGE_SHAVE_PX:
        width, height = current.size
        if width < 200 or height < 400:
            break
        if not _edge_is_margin(current.load(), width, height):
            break
        current = current.crop(
            (EDGE_SHAVE_PX, EDGE_SHAVE_PX, width - EDGE_SHAVE_PX, height - EDGE_SHAVE_PX)
        )
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


def reshape_screen_png(input_path: Path, output_path: Path | None = None) -> tuple[int, int]:
    output_path = output_path or input_path
    image = Image.open(input_path)
    image = _trim_margins(image)
    image = _fit_display_aspect(image)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path, format="PNG", optimize=True)
    return image.size


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: trim_screen_png.py <input.png> [output.png]", file=sys.stderr)
        return 1
    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else input_path
    size = reshape_screen_png(input_path, output_path)
    print(f"{size[0]}x{size[1]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
