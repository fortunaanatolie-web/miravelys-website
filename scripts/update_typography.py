import re

file_path = "src/styles/site-typography.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add slightly tighter tracking to headings
content = re.sub(
    r'(\.site-shell h1, \.site-shell h2, \.site-shell h3 \{[^}]*?letter-spacing:\s*)[^;]+;',
    r'\1-0.03em;',
    content
)

# And if there's no tracking set on h1/h2, let's add it to the root typography
content += """
.site-shell h1, .site-shell h2, .site-shell h3 {
  letter-spacing: -0.02em;
}
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated site-typography.css")
