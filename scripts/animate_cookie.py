import re

file_path = "src/styles/site-interactions.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add animation keyframes
if "@keyframes cookie-slide-up" not in content:
    content += """
@keyframes cookie-slide-up {
  from {
    transform: translate(-50%, 150%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}
"""

# Replace the cookie-pill style to add animation
content = re.sub(
    r'\.cookie-pill \{([^}]+)\}',
    r'.cookie-pill {\1  animation: cookie-slide-up 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}',
    content
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated site-interactions.css with animation")
