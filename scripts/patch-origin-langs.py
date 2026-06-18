#!/usr/bin/env python3
"""Patch originCopy.js with expanded story blocks for all non-English languages."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'src/i18n/originCopy.js'

LANGS = ['ro', 'fr', 'hi', 'zh', 'de', 'ja', 'es', 'pt']

BLOCK_LABELS = {
    'ro': {
        'opening': 'Momente simple', 'theSearch': 'O căutare lungă', 'theRealization': 'Cu ce poate începe claritatea',
        'momentStory': 'Momentul devine poveste', 'writingMirror': 'Scrisul ca dezlegare', 'separatingLayers': 'Separarea straturilor',
        'patternsWithoutLabels': 'Tipare fără etichete', 'bodyCalm': 'Și corpul are nevoie de calm', 'whyExists': 'De ce există Miravelys',
    },
    'fr': {
        'opening': 'Moments simples', 'theSearch': 'Une longue quête', 'theRealization': 'Par où la clarté peut commencer',
        'momentStory': 'Le moment devient une histoire', 'writingMirror': 'Écrire pour démêler', 'separatingLayers': 'Séparer les couches',
        'patternsWithoutLabels': 'Des schémas sans étiquette', 'bodyCalm': 'Le corps a aussi besoin de calme', 'whyExists': 'Pourquoi Miravelys existe',
    },
    'hi': {
        'opening': 'साधारण पल', 'theSearch': 'एक लंबी खोज', 'theRealization': 'स्पष्टता कहाँ से शुरू हो सकती है',
        'momentStory': 'पल कहानी बन जाता है', 'writingMirror': 'लिखना — सुलझाने के लिए', 'separatingLayers': 'परतें अलग करना',
        'patternsWithoutLabels': 'बिना label के patterns', 'bodyCalm': 'शरीर को भी शांति चाहिए', 'whyExists': 'Miravelys क्यों है',
    },
    'zh': {
        'opening': '简单的时刻', 'theSearch': '漫长的寻找', 'theRealization': '清晰可能从哪里开始',
        'momentStory': '片刻变成故事', 'writingMirror': '书写是为了理清', 'separatingLayers': '分离层次',
        'patternsWithoutLabels': '不带标签的模式', 'bodyCalm': '身体也需要平静', 'whyExists': 'Miravelys 为何存在',
    },
    'de': {
        'opening': 'Einfache Momente', 'theSearch': 'Eine lange Suche', 'theRealization': 'Wo Klarheit beginnen kann',
        'momentStory': 'Der Moment wird zur Geschichte', 'writingMirror': 'Schreiben zum Entwirren', 'separatingLayers': 'Die Schichten trennen',
        'patternsWithoutLabels': 'Muster ohne Etikett', 'bodyCalm': 'Der Körper braucht auch Ruhe', 'whyExists': 'Warum Miravelys existiert',
    },
    'ja': {
        'opening': 'シンプルな瞬間', 'theSearch': '長い探求', 'theRealization': '明晰さはどこから始まるか',
        'momentStory': '瞬間が物語になる', 'writingMirror': 'ほどくための書くこと', 'separatingLayers': '層を分ける',
        'patternsWithoutLabels': 'ラベルのないパターン', 'bodyCalm': '体にも静けさが必要', 'whyExists': 'Miravelys が存在する理由',
    },
    'es': {
        'opening': 'Momentos simples', 'theSearch': 'Una búsqueda larga', 'theRealization': 'Por dónde puede empezar la claridad',
        'momentStory': 'El momento se convierte en historia', 'writingMirror': 'Escribir para desenredar', 'separatingLayers': 'Separar las capas',
        'patternsWithoutLabels': 'Patrones sin etiqueta', 'bodyCalm': 'El cuerpo también necesita calma', 'whyExists': 'Por qué existe Miravelys',
    },
    'pt': {
        'opening': 'Momentos simples', 'theSearch': 'Uma busca longa', 'theRealization': 'Por onde a clareza pode começar',
        'momentStory': 'O momento torna-se história', 'writingMirror': 'Escrever para desembaraçar', 'separatingLayers': 'Separar as camadas',
        'patternsWithoutLabels': 'Padrões sem rótulo', 'bodyCalm': 'O corpo também precisa de calma', 'whyExists': 'Por que o Miravelys existe',
    },
}

META = {
    'ro': 'Povestea Miravelys — un spațiu privat de reflecție pentru a scrie ce se simte încurcat, a separa momentul de povestea din jur și a te întoarce la tine cu mai multă blândețe.',
    'fr': "L'histoire de Miravelys — un espace privé pour écrire ce qui semble emmêlé, séparer le moment de l'histoire autour, et revenir à vous avec plus de bienveillance.",
    'hi': 'Miravelys की कहानी — उलझे हुए एहसास को लिखने, पल को उसकी कहानी से अलग करने और अधिक दयालुता के साथ खुद की ओर लौटने के लिए एक private reflection space।',
    'zh': 'Miravelys 的故事——一个私密反思空间，用于书写感到纠缠的内容，将片刻与围绕它的故事分开，并以更多善意回归自我。',
    'de': 'Die Geschichte hinter Miravelys — ein privater Raum zum Schreiben dessen, was sich verknäuft, zum Trennen des Moments von der Geschichte darum und zum Zurückkehren zu sich mit mehr Güte.',
    'ja': 'Miravelys の物語 — もつれた感覚を書き、瞬間とその周りの物語を分け、より大きな優しさを持って自分へ戻るためのプライベートな内省の場。',
    'es': 'La historia de Miravelys — un espacio privado para escribir lo que se siente enredado, separar el momento de la historia a su alrededor y volver a ti con más amabilidad.',
    'pt': 'A história do Miravelys — um espaço privado para escrever o que parece emaranhado, separar o momento da história em volta e regressar a si com mais bondade.',
}

INTRO = {
    'ro': ['Cele mai frumoase idei nu vin când stăm în fața unui ecran gol încercând să forțăm ceva genial.', 'Ele se nasc în cele mai simple momente cotidiene — când te gândești cel mai puțin, dar ceva în interior caută de mult o formă. Așa a apărut Miravelys.'],
    'fr': ['Les plus belles idées ne viennent pas lorsque nous sommes assis devant un écran vide à forcer notre génie.', "Elles naissent dans les moments les plus simples — quand on y pense le moins, mais que quelque chose en nous cherche depuis longtemps à prendre forme. C'est ainsi qu'est né Miravelys."],
    'hi': ['सबसे खूबसूरत विचार तब नहीं आते जब हम खाली स्क्रीन के सामने बैठकर कुछ प्रतिभाशाली निकालने की कोशिश करते हैं।', 'वे सबसे सरल, रोजमर्रा के क्षणों में पैदा होते हैं — जब आप सबसे कम सोच रहे होते हैं, लेकिन अंदर कुछ लंबे समय से आकार की तलाश में होता है। Miravelys ऐसे ही आया।'],
    'zh': ['最美好的想法往往不是坐在空白屏幕前绞尽脑汁时降临的。', '它们往往诞生在最简单、最日常的时刻——当你最不去想它的时候，内心深处却早已在寻找一种形式。Miravelys 正是这样诞生的。'],
    'de': ['Die schönsten Ideen kommen nicht, wenn wir vor einem leeren Bildschirm sitzen und versuchen, uns etwas Geniales abzuverlangen.', 'Sie werden in den einfachsten, alltäglichsten Momenten geboren — wenn man am wenigsten darüber nachdenkt, aber etwas in einem drinnen schon lange nach einer Form sucht. So entstand Miravelys.'],
    'ja': ['最も素晴らしいアイデアは、何も書かれていない画面の前で無理に天才的なものを絞り出そうとしている時にはやってきません。', 'それは最もシンプルで日常的な瞬間——あなたがそのことについて最も考えていない時、しかし内なる何かが長い間形を求めていた時——に生まれます。Miravelys もまさにそのようにして生まれました。'],
    'es': ['Las ideas más hermosas no llegan cuando estamos sentados frente a una pantalla vacía intentando exprimir algo genial.', 'Nacen en los momentos más simples y cotidianos, cuando menos piensas en ello, pero algo en tu interior lleva tiempo buscando forma. Así surgió Miravelys.'],
    'pt': ['As ideias mais belas não surgem quando estamos sentados perante um ecrã vazio a tentar forçar algo genial.', 'Elas nascem nos momentos mais simples e quotidianos — quando menos pensamos no assunto, mas algo dentro de nós procura há muito uma forma. Foi assim que surgiu o Miravelys.'],
}

# Block paragraph content keyed by lang then block key
T = json.loads((ROOT / 'scripts/origin-translations.json').read_text(encoding='utf-8'))


def fmt_block(key: str, paras: list[str]) -> str:
    lines = ',\n'.join(f'        {json.dumps(p, ensure_ascii=False)}' for p in paras)
    return f'    "{key}": {{\n      "paragraphs": [\n{lines}\n      ]\n    }}'


def slice_lang(text: str, lang: str) -> tuple[int, int, str]:
    marker = f'const {lang} = '
    start = text.index(marker)
    nxt = text.find('\nconst ', start + len(marker))
    export_idx = text.index('\nexport const originCopy')
    end = nxt if nxt != -1 else export_idx
    return start, end, text[start:end]


def patch_lang(text: str, lang: str) -> str:
    start, end, chunk = slice_lang(text, lang)
    t = T[lang]

    chunk = re.sub(
        r'"blockLabels": \{[\s\S]*?\},',
        f'"blockLabels": {json.dumps(BLOCK_LABELS[lang], ensure_ascii=False, indent=4)},',
        chunk,
        count=1,
    )
    chunk = re.sub(
        r'"description": "[^"]*"',
        f'"description": {json.dumps(META[lang], ensure_ascii=False)}',
        chunk,
        count=1,
    )
    chunk = re.sub(
        r'"intro": \[[\s\S]*?\],',
        f'"intro": {json.dumps(INTRO[lang], ensure_ascii=False, indent=4)},',
        chunk,
        count=1,
    )

    for key in ['opening', 'writingMirror', 'bodyCalm', 'whyExists']:
        chunk = re.sub(
            rf'"{key}": \{{\s*"paragraphs": \[[\s\S]*?\]\s*\}}',
            fmt_block(key, t[key]),
            chunk,
            count=1,
        )

    if '"theSearch": {' not in chunk:
        ins = fmt_block('theSearch', t['theSearch']) + ',\n    ' + fmt_block('theRealization', t['theRealization'])
        chunk = re.sub(r'("opening": \{[\s\S]*?\}\s*,)(\s*"momentStory")', r'\1\n    ' + ins + r',\n\2', chunk, count=1)

    if '"patternsWithoutLabels": {' not in chunk:
        chunk = re.sub(
            r'("separatingLayers": \{[\s\S]*?\}\s*,)(\s*"bodyCalm")',
            r'\1\n    ' + fmt_block('patternsWithoutLabels', t['patternsWithoutLabels']) + r',\n\2',
            chunk,
            count=1,
        )

    return text[:start] + chunk + text[end:]


def main() -> None:
    text = TARGET.read_text(encoding='utf-8')
    for lang in LANGS:
        text = patch_lang(text, lang)
    TARGET.write_text(text, encoding='utf-8')
    print('patched', ', '.join(LANGS))


if __name__ == '__main__':
    main()
