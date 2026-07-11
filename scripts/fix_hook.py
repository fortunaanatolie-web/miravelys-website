import re

file_path = "src/hooks/useMiravelysScreenshot.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove the early return block for cached legacy assets
content = re.sub(
    r'\s*const cached = legacyAsset \? resolveLegacyScreenshotUrl\(locale, legacyAsset\) : \'\';\s*if \(cached\) \{\s*finish\(\{ src: cached, status: \'legacy-fallback\', missing: null \}\);\s*return;\s*\}',
    '',
    content
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated useMiravelysScreenshot.js")
