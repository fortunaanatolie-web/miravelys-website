import re

file_path = "src/styles/site-phone-mockup.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the phone frame background
content = re.sub(
    r'background:\n\s+linear-gradient\(145deg, rgba\(42, 46, 50, 1\) 0%, rgba\(15, 17, 20, 1\) 46%, rgba\(5, 6, 8, 1\) 100%\);',
    'background:\n    linear-gradient(145deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);',
    content
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated site-phone-mockup.css")
