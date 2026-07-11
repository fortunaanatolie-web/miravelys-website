import re

file_path = "src/lib/miravelysScreenshots.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix screenshotGroups array
content = re.sub(
    r"'sticky-phone': \['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'privacy'\]",
    r"'sticky-phone': ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'welcome']",
    content
)

# Fix stickyPhoneSceneToCode mapping
content = re.sub(
    r"privacyControl: 'privacy'",
    r"privacyControl: 'welcome'",
    content
)

# Fix stickyPhoneLegacyAssets mapping
content = re.sub(
    r"privacy: 'screen-welcome'",
    r"welcome: 'screen-welcome'",
    content
)

# Fix mockupIdToStickyCode mapping
content = re.sub(
    r"welcome: 'privacy'",
    r"welcome: 'welcome'",
    content
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated miravelysScreenshots.js mappings")
