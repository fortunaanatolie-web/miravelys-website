import re

file_path = "src/styles/site-origin.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the grid-column spanning
content = re.sub(r'\.origin-block\[data-origin-block="[^"]*"\] \{ grid-column: span \d+; \}\n', '', content)

# Add our new classes
new_classes = """
.origin-block[data-origin-block="0"] { grid-column: span 12; }
.origin-block[data-origin-block="1"] { grid-column: span 4; }
.origin-block[data-origin-block="2"] { grid-column: span 4; }
.origin-block[data-origin-block="3"] { grid-column: span 4; }

@media (max-width: 60rem) {
  .origin-block[data-origin-block="1"],
  .origin-block[data-origin-block="2"],
  .origin-block[data-origin-block="3"] {
    grid-column: span 12;
  }
}
"""

content = content.replace(".origin-block--split {", new_classes + "\n.origin-block--split {")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated site-origin.css")
