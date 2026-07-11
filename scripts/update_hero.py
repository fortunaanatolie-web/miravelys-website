import re

file_path = "src/i18n/siteCopy.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

translations = {
    "ru": {
        "subtitle": "Тихая ясность. Для моментов, когда вас переполняют эмоции.",
        "primary": "Начать свой путь"
    },
    "ro": {
        "subtitle": "Claritate tăcută. Pentru momentele care te copleșesc.",
        "primary": "Începe călătoria"
    },
    "fr": {
        "subtitle": "Une clarté paisible. Pour les moments qui vous submergent.",
        "primary": "Commencer votre voyage"
    },
    "hi": {
        "subtitle": "शांत स्पष्टता। उन पलों के लिए जो आपको अभिभूत कर देते हैं।",
        "primary": "अपनी यात्रा शुरू करें"
    },
    "zh": {
        "subtitle": "宁静的清晰。为你不知所措的时刻。",
        "primary": "开始你的旅程"
    },
    "de": {
        "subtitle": "Ruhige Klarheit. Für die Momente, die dich überwältigen.",
        "primary": "Beginne deine Reise"
    },
    "ja": {
        "subtitle": "静かな明確さ。圧倒されそうな瞬間のために。",
        "primary": "旅を始める"
    },
    "es": {
        "subtitle": "Claridad tranquila. Para los momentos que te abruman.",
        "primary": "Comienza tu viaje"
    },
    "pt": {
        "subtitle": "Clareza silenciosa. Para os momentos que te dominam.",
        "primary": "Comece a sua jornada"
    }
}

for lang, trans in translations.items():
    # Find the hero section for the specific language
    # We look for: "<lang>": { ... "hero": { ... "subtitle": "...", ... "primary": "..."
    # Actually, simpler: search for "subtitle": "..." right after "title": "Miravelys",
    
    # We can match the language block
    lang_pattern = f'"{lang}": \\{{.*?"hero": \\{{.*?"subtitle": "(.*?)".*?"primary": "(.*?)"'
    
    # We will just do a targeted replace for subtitle and primary inside each language's hero block.
    # A safer way:
    hero_pattern = re.compile(rf'("{lang}": \{{.*?"hero": \{{.*?"subtitle": ")[^"]+(",\s*"body": "[^"]+",\s*"primary": ")[^"]+(")', re.DOTALL)
    
    def repl(m):
        return f'{m.group(1)}{trans["subtitle"]}{m.group(2)}{trans["primary"]}{m.group(3)}'
    
    content = hero_pattern.sub(repl, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated siteCopy.js")
