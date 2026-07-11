import re

file_path = "src/styles/site-presentation.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add the keyframes if they don't exist
if "@keyframes hero-breathe" not in content:
    content += """
@keyframes hero-breathe {
  0%, 100% {
    transform: scale(1) translateY(0);
    opacity: 0.22;
  }
  50% {
    transform: scale(1.05) translateY(-2%);
    opacity: 0.35;
  }
}
"""

# Replace the hero-keynote__beam--gold style
content = re.sub(r'\.hero-keynote__beam--gold \{[^\}]+\}', '''.hero-keynote__beam--gold {
  width: 70vw;
  height: 50vh;
  top: -10%;
  left: -15%;
  background: radial-gradient(circle at center, hsla(43, 40%, 58%, 0.4) 0%, hsla(43, 30%, 30%, 0.1) 40%, transparent 70%);
  animation: hero-breathe 8s ease-in-out infinite;
}''', content)

# Replace the hero-keynote__beam--lavender style
content = re.sub(r'\.hero-keynote__beam--lavender \{[^\}]+\}', '''.hero-keynote__beam--lavender {
  width: 60vw;
  height: 45vh;
  top: 15%;
  right: -10%;
  background: radial-gradient(circle at center, hsla(270, 30%, 50%, 0.3) 0%, hsla(270, 20%, 30%, 0.1) 40%, transparent 70%);
  animation: hero-breathe 10s ease-in-out infinite reverse;
}''', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated site-presentation.css")
