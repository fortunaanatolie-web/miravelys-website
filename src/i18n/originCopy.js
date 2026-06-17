/**
 * Founder origin story — written-only editorial page.
 * No screenshots, phone mockups, external methods, or named references.
 */

function buildOriginContent(data) {
  return {
    meta: data.meta,
    eyebrow: data.eyebrow,
    title: data.title,
    intro: data.intro,
    blockLabels: data.blockLabels,
    blocks: data.blocks,
    cta: data.cta,
    ctaPrimary: data.ctaPrimary,
    ctaSecondary: data.ctaSecondary,
  };
}

const en = {
  "meta": {
    "title": "How Miravelys Was Born — Miravelys",
    "description": "The story behind Miravelys: a private reflection space for noticing what happened, what the mind may have added, and what feels closer to truth now.",
    "ogTitle": "How Miravelys Was Born",
    "ogDescription": "A quiet origin story about honest writing, separating the moment from the story, calming the body, and returning with more kindness."
  },
  "eyebrow": "The origin",
  "title": "How Miravelys was born",
  "cta": "Read the story",
  "ctaPrimary": "Join early access",
  "ctaSecondary": "Return to the experience",
  "blockLabels": {
    "opening": "A quiet search",
    "momentStory": "The moment becomes a story",
    "writingMirror": "Writing as a mirror",
    "separatingLayers": "Separating the layers",
    "bodyCalm": "The body needs calm too",
    "whyExists": "Why Miravelys exists"
  },
  "intro": [
    "Miravelys did not begin as another app idea.",
    "It began with a question many people quietly carry: why does one small moment sometimes become a whole story inside us?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "There were moments that hurt more than they seemed to deserve. A sentence. A silence. A change in someone’s tone. Something small on the outside, but suddenly large inside.",
        "I began to notice that the pain was not always only in the event itself. Often, it was also in the meaning my mind placed around it.",
        "What happened was one layer.",
        "What I felt was another.",
        "What my mind made it mean was often the loudest layer of all."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "The mind can move very quickly when it wants to protect us. It gathers a glance, a pause, a mistake, a feeling, and turns them into something that sounds certain.",
        "After enough repetition, a story can begin to feel less like a thought and more like a self-portrait.",
        "A pause can become rejection.",
        "A look can become proof.",
        "A mistake can become identity.",
        "A feeling can become a fact.",
        "A fear can become a belief."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "Writing became the first gentle space where those stories could be seen.",
        "Not polished journaling. Not beautiful diary writing. Just the honest sentence that was already there: this hurt; I felt small; I think they are leaving; I do not know why this feels so big.",
        "When a thought is written down, it can stop being the whole sky for a moment. It becomes something you can sit beside.",
        "Write what feels tangled before it becomes a conclusion.",
        "Write the fear without making it the final answer.",
        "Write enough to see the space between the moment and the story."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "That space became the heart of Miravelys.",
        "The app was created to help separate the layers gently, without forcing certainty and without deciding for the user.",
        "What happened.",
        "What was felt.",
        "What the body reacted to.",
        "What the mind may have added.",
        "What belief may be present.",
        "What still remains unknown.",
        "Noticing a belief is not the same as judging it. Some beliefs may have protected us once. Miravelys simply gives them a quiet place to be seen, softened, questioned, or left alone."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "But clarity does not always begin in the mind.",
        "Sometimes the body is too tense, tired, or overwhelmed to look clearly. In those moments, the kindest first step may be to breathe, slow down, listen, or rest.",
        "That is why Miravelys includes breathing, meditation, sleep support, and grounding sounds. They are there for the moments when the body needs softness before the mind needs answers.",
        "A place to breathe.",
        "A place to listen.",
        "A place to let the night be gentle.",
        "A place to return to the present before trying to understand everything."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys exists because people do not always need to be pushed toward a conclusion.",
        "Sometimes they need a private place that can hold the experience without taking control of it.",
        "A place where the user decides what fits.",
        "A place where a repeated story can become visible without becoming identity.",
        "A place where uncertainty is allowed to stay uncertain.",
        "A place where what feels familiar can be gently compared with what feels closer to truth now.",
        "Miravelys is not about fixing who you are.",
        "It is about helping you return to yourself slowly, privately, and with more kindness than before."
      ]
    }
  }
};

const ru = {
  "meta": {
    "title": "Как родился Miravelys — Miravelys",
    "description": "История Miravelys: личное пространство для честного письма, где можно увидеть, что произошло, что мог добавить ум и что сейчас ощущается ближе к правде.",
    "ogTitle": "Как родился Miravelys",
    "ogDescription": "Тихая история о письме, разделении момента и истории вокруг него, заботе о теле и возвращении к себе с большей добротой."
  },
  "eyebrow": "История рождения",
  "title": "Как родился Miravelys",
  "cta": "Прочитать историю",
  "ctaPrimary": "Ранний доступ",
  "ctaSecondary": "Вернуться к опыту",
  "blockLabels": {
    "opening": "Тихий поиск",
    "momentStory": "Момент становится историей",
    "writingMirror": "Письмо как зеркало",
    "separatingLayers": "Разделить слои",
    "bodyCalm": "Телу тоже нужен покой",
    "whyExists": "Зачем существует Miravelys"
  },
  "intro": [
    "Miravelys родился не как очередная идея для приложения.",
    "Он начался с вопроса, который многие носят очень тихо: почему один маленький момент иногда превращается внутри нас в целую историю?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "Бывали моменты, которые ранили сильнее, чем будто бы должны были. Фраза. Молчание. Изменившийся тон. Снаружи — что-то небольшое, а внутри вдруг очень большое.",
        "Постепенно я начал замечать: боль не всегда живёт только в самом событии. Часто она живёт ещё и в смысле, которым ум окружает это событие.",
        "То, что произошло, было одним слоем.",
        "То, что я почувствовал, — другим.",
        "А то, что ум решил об этом, часто звучало громче всего."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "Ум умеет действовать очень быстро, когда пытается нас защитить. Он берёт взгляд, паузу, ошибку, чувство — и превращает их во что-то, что кажется несомненным.",
        "Если это повторяется достаточно долго, история начинает ощущаться не как мысль, а почти как портрет себя.",
        "Пауза может стать отвержением.",
        "Взгляд может стать доказательством.",
        "Ошибка может стать личностью.",
        "Чувство может стать фактом.",
        "Страх может стать убеждением."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "Письмо стало первым мягким местом, где эти истории можно было увидеть.",
        "Не идеальный дневник. Не красивые страницы. Просто честная фраза, которая уже была внутри: мне больно; я почувствовал себя маленьким; кажется, они уходят; я не понимаю, почему это так сильно.",
        "Когда мысль записана, она на мгновение перестаёт быть всем небом. Она становится чем-то, рядом с чем можно посидеть.",
        "Записать то, что спуталось, пока оно не стало выводом.",
        "Записать страх, не превращая его в окончательный ответ.",
        "Записать достаточно, чтобы увидеть пространство между моментом и историей."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "Из этого пространства и выросло сердце Miravelys.",
        "Приложение создано, чтобы мягко разделять слои, не заставляя делать выводы и не решая за человека.",
        "Что произошло.",
        "Что чувствовалось.",
        "На что отреагировало тело.",
        "Что мог добавить ум.",
        "Какое убеждение может быть рядом.",
        "Что пока остаётся неизвестным.",
        "Заметить убеждение — не значит осудить его. Некоторые убеждения могли когда-то защищать нас. Miravelys просто даёт им тихое место, где их можно увидеть, смягчить, проверить или оставить в покое."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "Но ясность не всегда начинается в уме.",
        "Иногда тело слишком напряжено, устало или перегружено, чтобы смотреть ясно. Тогда самый добрый первый шаг — дышать, замедлиться, послушать или отдохнуть.",
        "Поэтому в Miravelys есть дыхание, медитация, поддержка сна и заземляющие звуки. Они нужны для моментов, когда телу нужна мягкость раньше, чем уму нужны ответы.",
        "Место, где можно дышать.",
        "Место, где можно слушать.",
        "Место, где ночь может быть мягче.",
        "Место, где можно вернуться в настоящее до попытки всё понять."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys существует потому, что человеку не всегда нужно, чтобы его подталкивали к выводу.",
        "Иногда нужно личное место, которое может бережно удержать переживание, не забирая управление.",
        "Место, где пользователь сам решает, что подходит.",
        "Место, где повторяющаяся история становится видимой, но не превращается в личность.",
        "Место, где неопределённость может оставаться неопределённой.",
        "Место, где знакомое можно мягко сравнить с тем, что сейчас ощущается ближе к правде.",
        "Miravelys не о том, чтобы исправить себя.",
        "Он о том, чтобы помогать возвращаться к себе медленно, лично и с большей добротой, чем раньше."
      ]
    }
  }
};

const ro = {
  "meta": {
    "title": "Cum s-a născut Miravelys — Miravelys",
    "description": "Povestea din spatele Miravelys: un spațiu privat de reflecție pentru a observa ce s-a întâmplat, ce poate a adăugat mintea și ce se simte mai aproape de adevăr acum.",
    "ogTitle": "Cum s-a născut Miravelys",
    "ogDescription": "O poveste liniștită despre scris sincer, separarea momentului de poveste, calmarea corpului și întoarcerea la tine cu mai multă blândețe."
  },
  "eyebrow": "Originea",
  "title": "Cum s-a născut Miravelys",
  "cta": "Citește povestea",
  "ctaPrimary": "Acces timpuriu",
  "ctaSecondary": "Înapoi la experiență",
  "blockLabels": {
    "opening": "O căutare tăcută",
    "momentStory": "Momentul devine poveste",
    "writingMirror": "Scrisul ca oglindă",
    "separatingLayers": "Separarea straturilor",
    "bodyCalm": "Și corpul are nevoie de calm",
    "whyExists": "De ce există Miravelys"
  },
  "intro": [
    "Miravelys nu s-a născut ca încă o idee de aplicație.",
    "A început cu o întrebare pe care mulți o poartă în tăcere: de ce un moment mic devine uneori o poveste întreagă în noi?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "Au existat momente care au durut mai mult decât părea firesc. O propoziție. O tăcere. O schimbare de ton. În afară, ceva mic. Înăuntru, dintr-odată, ceva mare.",
        "Am început să observ că durerea nu era mereu doar în eveniment. Adesea era și în sensul pe care mintea îl așeza în jurul lui.",
        "Ce s-a întâmplat era un strat.",
        "Ce am simțit era altul.",
        "Iar ce a făcut mintea să însemne acel moment era adesea cel mai puternic strat."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "Mintea se poate mișca foarte repede atunci când încearcă să ne protejeze. Adună o privire, o pauză, o greșeală, un sentiment și le transformă în ceva care sună sigur.",
        "Dacă se repetă destul, o poveste poate începe să pară mai puțin ca un gând și mai mult ca un portret de sine.",
        "O pauză poate deveni respingere.",
        "O privire poate deveni dovadă.",
        "O greșeală poate deveni identitate.",
        "Un sentiment poate deveni fapt.",
        "O frică poate deveni convingere."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "Scrisul a devenit primul spațiu blând în care aceste povești puteau fi văzute.",
        "Nu jurnal perfect. Nu pagini frumoase. Doar propoziția sinceră care era deja acolo: m-a durut; m-am simțit mic; cred că pleacă; nu știu de ce pare atât de mare.",
        "Când un gând este scris, pentru o clipă nu mai este tot cerul. Devine ceva lângă care poți sta.",
        "Scrie ce se simte încâlcit înainte să devină concluzie.",
        "Scrie frica fără să o faci răspuns final.",
        "Scrie suficient cât să vezi spațiul dintre moment și poveste."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "Acest spațiu a devenit inima Miravelys.",
        "Aplicația a fost creată pentru a separa straturile cu blândețe, fără să forțeze certitudinea și fără să decidă în locul utilizatorului.",
        "Ce s-a întâmplat.",
        "Ce s-a simțit.",
        "La ce a reacționat corpul.",
        "Ce poate a adăugat mintea.",
        "Ce convingere poate fi prezentă.",
        "Ce rămâne încă necunoscut.",
        "A observa o convingere nu înseamnă a o judeca. Unele convingeri poate ne-au protejat cândva. Miravelys le oferă doar un loc liniștit în care pot fi văzute, înmuiate, întrebate sau lăsate în pace."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "Dar claritatea nu începe mereu în minte.",
        "Uneori corpul este prea încordat, obosit sau copleșit ca să privească limpede. Atunci primul pas mai blând poate fi să respiri, să încetinești, să asculți sau să te odihnești.",
        "De aceea Miravelys include respirație, meditație, sprijin pentru somn și sunete de ancorare. Sunt acolo pentru momentele în care corpul are nevoie de moliciune înainte ca mintea să aibă nevoie de răspunsuri.",
        "Un loc pentru respirație.",
        "Un loc pentru ascultare.",
        "Un loc unde noaptea poate fi mai blândă.",
        "Un loc pentru a reveni în prezent înainte de a încerca să înțelegi totul."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys există pentru că oamenii nu au mereu nevoie să fie împinși spre o concluzie.",
        "Uneori au nevoie de un loc privat care să țină experiența fără să preia controlul asupra ei.",
        "Un loc unde utilizatorul decide ce se potrivește.",
        "Un loc unde o poveste repetată poate deveni vizibilă fără să devină identitate.",
        "Un loc unde incertitudinea poate rămâne incertitudine.",
        "Un loc unde familiarul poate fi comparat blând cu ce se simte acum mai aproape de adevăr.",
        "Miravelys nu este despre a repara cine ești.",
        "Este despre a te ajuta să revii la tine încet, în privat și cu mai multă bunătate decât înainte."
      ]
    }
  }
};

const fr = {
  "meta": {
    "title": "Comment Miravelys est né — Miravelys",
    "description": "L’histoire de Miravelys : un espace privé de réflexion pour voir ce qui s’est passé, ce que l’esprit a peut-être ajouté et ce qui semble plus juste maintenant.",
    "ogTitle": "Comment Miravelys est né",
    "ogDescription": "Une histoire calme sur l’écriture honnête, la séparation du moment et de l’histoire, l’apaisement du corps et le retour à soi avec plus de douceur."
  },
  "eyebrow": "L’origine",
  "title": "Comment Miravelys est né",
  "cta": "Lire l’histoire",
  "ctaPrimary": "Accès anticipé",
  "ctaSecondary": "Retour à l’expérience",
  "blockLabels": {
    "opening": "Une recherche silencieuse",
    "momentStory": "Le moment devient une histoire",
    "writingMirror": "Écrire comme dans un miroir",
    "separatingLayers": "Séparer les couches",
    "bodyCalm": "Le corps aussi a besoin de calme",
    "whyExists": "Pourquoi Miravelys existe"
  },
  "intro": [
    "Miravelys n’est pas né comme une idée d’application de plus.",
    "Il a commencé par une question que beaucoup portent en silence : pourquoi un petit moment devient-il parfois toute une histoire en nous ?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "Il y a eu des moments qui faisaient plus mal qu’ils n’auraient dû. Une phrase. Un silence. Un changement de ton. Peu de chose à l’extérieur, mais soudain quelque chose de vaste à l’intérieur.",
        "J’ai commencé à remarquer que la douleur ne venait pas toujours seulement de l’événement. Elle venait aussi du sens que l’esprit posait autour de lui.",
        "Ce qui s’est passé était une couche.",
        "Ce que j’ai ressenti en était une autre.",
        "Ce que mon esprit en a fait était souvent la couche la plus bruyante."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "L’esprit va très vite lorsqu’il veut nous protéger. Il rassemble un regard, une pause, une erreur, un ressenti, puis les transforme en quelque chose qui semble certain.",
        "À force de répétition, une histoire peut finir par ressembler moins à une pensée qu’à un portrait de soi.",
        "Une pause peut devenir un rejet.",
        "Un regard peut devenir une preuve.",
        "Une erreur peut devenir une identité.",
        "Un ressenti peut devenir un fait.",
        "Une peur peut devenir une croyance."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "L’écriture est devenue le premier espace doux où ces histoires pouvaient être vues.",
        "Pas un journal parfait. Pas de belles pages. Seulement la phrase honnête qui était déjà là : cela m’a blessé ; je me suis senti petit ; je crois qu’ils s’éloignent ; je ne sais pas pourquoi cela prend tant de place.",
        "Quand une pensée est écrite, elle cesse un instant d’être tout le ciel. Elle devient quelque chose auprès de quoi l’on peut s’asseoir.",
        "Écrire ce qui est emmêlé avant que cela devienne une conclusion.",
        "Écrire la peur sans en faire la réponse finale.",
        "Écrire assez pour voir l’espace entre le moment et l’histoire."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "Cet espace est devenu le cœur de Miravelys.",
        "L’application a été créée pour aider à séparer les couches avec douceur, sans forcer la certitude et sans décider à la place de la personne.",
        "Ce qui s’est passé.",
        "Ce qui a été ressenti.",
        "Ce à quoi le corps a réagi.",
        "Ce que l’esprit a peut-être ajouté.",
        "La croyance qui peut être présente.",
        "Ce qui reste encore inconnu.",
        "Remarquer une croyance ne veut pas dire la juger. Certaines croyances nous ont peut-être protégés autrefois. Miravelys leur offre simplement un lieu calme où elles peuvent être vues, adoucies, questionnées ou laissées en paix."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "Mais la clarté ne commence pas toujours dans l’esprit.",
        "Parfois, le corps est trop tendu, fatigué ou submergé pour regarder clairement. Dans ces moments-là, le premier pas le plus doux peut être de respirer, ralentir, écouter ou se reposer.",
        "C’est pourquoi Miravelys inclut respiration, méditation, soutien du sommeil et sons d’ancrage. Ils sont là lorsque le corps a besoin de douceur avant que l’esprit ait besoin de réponses.",
        "Un lieu pour respirer.",
        "Un lieu pour écouter.",
        "Un lieu où la nuit peut rester douce.",
        "Un lieu pour revenir au présent avant d’essayer de tout comprendre."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys existe parce que les gens n’ont pas toujours besoin d’être poussés vers une conclusion.",
        "Parfois, ils ont besoin d’un lieu privé capable de contenir l’expérience sans en prendre le contrôle.",
        "Un lieu où la personne décide ce qui lui correspond.",
        "Un lieu où une histoire répétée peut devenir visible sans devenir une identité.",
        "Un lieu où l’incertitude peut rester incertaine.",
        "Un lieu où le familier peut être comparé doucement à ce qui semble plus juste maintenant.",
        "Miravelys ne sert pas à réparer qui vous êtes.",
        "Il sert à vous aider à revenir à vous lentement, en privé, avec plus de douceur qu’avant."
      ]
    }
  }
};

const hi = {
  "meta": {
    "title": "Miravelys कैसे जन्मा — Miravelys",
    "description": "Miravelys की कहानी: एक निजी चिंतन-स्थान, जहाँ देखा जा सके कि क्या हुआ, मन ने क्या जोड़ा होगा, और अभी क्या अधिक सच्चा लगता है।",
    "ogTitle": "Miravelys कैसे जन्मा",
    "ogDescription": "ईमानदार लेखन, पल और कहानी को अलग देखने, शरीर को शांत करने और अपने पास अधिक दयालुता से लौटने की शांत कहानी।"
  },
  "eyebrow": "आरंभ",
  "title": "Miravelys कैसे जन्मा",
  "cta": "कहानी पढ़ें",
  "ctaPrimary": "शीघ्र पहुँच",
  "ctaSecondary": "अनुभव पर लौटें",
  "blockLabels": {
    "opening": "एक शांत खोज",
    "momentStory": "पल कहानी बन जाता है",
    "writingMirror": "लेखन एक दर्पण की तरह",
    "separatingLayers": "परतों को अलग करना",
    "bodyCalm": "शरीर को भी शांति चाहिए",
    "whyExists": "Miravelys क्यों है"
  },
  "intro": [
    "Miravelys किसी और ऐप-विचार की तरह शुरू नहीं हुआ।",
    "यह एक ऐसे प्रश्न से शुरू हुआ जिसे बहुत लोग चुपचाप ढोते हैं: एक छोटा-सा पल कभी-कभी हमारे भीतर पूरी कहानी क्यों बन जाता है?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "कुछ पल ऐसे थे जो अपेक्षा से अधिक चुभे। एक वाक्य। एक चुप्पी। किसी के स्वर में हल्का बदलाव। बाहर से छोटी बात, भीतर अचानक बहुत बड़ी।",
        "धीरे-धीरे समझ आया कि पीड़ा हमेशा केवल घटना में नहीं होती। कई बार वह उस अर्थ में भी होती है जो मन उस घटना के चारों ओर बना देता है।",
        "जो हुआ, वह एक परत थी।",
        "जो महसूस हुआ, वह दूसरी परत थी।",
        "और मन ने उसका जो अर्थ बनाया, वह अक्सर सबसे ऊँची आवाज़ था।"
      ]
    },
    "momentStory": {
      "paragraphs": [
        "जब मन हमें बचाना चाहता है, वह बहुत तेज़ चलता है। वह एक नज़र, एक विराम, एक गलती, एक भावना को जोड़ता है और उन्हें किसी निश्चित बात जैसा बना देता है।",
        "बार-बार दोहरने पर एक कहानी विचार कम और अपने ही चित्र जैसी अधिक लगने लगती है।",
        "एक विराम अस्वीकार जैसा लग सकता है।",
        "एक नज़र प्रमाण बन सकती है।",
        "एक गलती पहचान बन सकती है।",
        "एक भावना तथ्य जैसी लग सकती है।",
        "एक डर विश्वास बन सकता है।"
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "लिखना पहला कोमल स्थान बना जहाँ इन कहानियों को देखा जा सकता था।",
        "न पूर्ण डायरी। न सुंदर भाषा। बस वही सच्चा वाक्य जो भीतर पहले से था: यह चुभा; मैं छोटा महसूस हुआ; लगता है वे दूर जा रहे हैं; पता नहीं यह इतना बड़ा क्यों लग रहा है।",
        "जब कोई विचार लिख दिया जाता है, वह कुछ देर के लिए पूरा आकाश नहीं रहता। वह कुछ ऐसा बनता है जिसके पास बैठा जा सके।",
        "जो उलझा है उसे निष्कर्ष बनने से पहले लिखना।",
        "डर को अंतिम उत्तर बनाए बिना लिखना।",
        "इतना लिखना कि पल और कहानी के बीच की जगह दिख सके।"
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "यही जगह Miravelys का हृदय बनी।",
        "ऐप को परतों को धीरे से अलग देखने में मदद करने के लिए बनाया गया, बिना निश्चितता थोपे और बिना उपयोगकर्ता की जगह निर्णय लिए।",
        "क्या हुआ।",
        "क्या महसूस हुआ।",
        "शरीर ने किस पर प्रतिक्रिया दी।",
        "मन ने क्या जोड़ा होगा।",
        "कौन-सा विश्वास मौजूद हो सकता है।",
        "क्या अभी भी अज्ञात है।",
        "किसी विश्वास को देखना उसे गलत ठहराना नहीं है। कुछ विश्वासों ने शायद कभी हमें बचाया हो। Miravelys उन्हें बस एक शांत जगह देता है जहाँ उन्हें देखा, नरम किया, परखा या वैसे ही छोड़ा जा सके।"
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "पर स्पष्टता हमेशा मन से शुरू नहीं होती।",
        "कभी शरीर इतना तना, थका या भरा होता है कि साफ़ देखना कठिन हो जाता है। तब पहला दयालु कदम साँस लेना, धीमा होना, सुनना या विश्राम करना हो सकता है।",
        "इसीलिए Miravelys में साँस, ध्यान, नींद का सहारा और स्थिरता देने वाली ध्वनियाँ हैं। वे उन पलों के लिए हैं जब शरीर को उत्तरों से पहले कोमलता चाहिए।",
        "साँस लेने की जगह।",
        "सुनने की जगह।",
        "रात को थोड़ा नरम रहने देने की जगह।",
        "सब कुछ समझने से पहले वर्तमान में लौटने की जगह।"
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys इसलिए है क्योंकि लोगों को हर बार किसी निष्कर्ष की ओर धकेले जाने की ज़रूरत नहीं होती।",
        "कभी उन्हें ऐसी निजी जगह चाहिए जो अनुभव को थाम सके, पर नियंत्रण अपने हाथ में न ले।",
        "ऐसी जगह जहाँ उपयोगकर्ता तय करता है कि क्या सही बैठता है।",
        "ऐसी जगह जहाँ दोहरती कहानी दिख सकती है, पर पहचान नहीं बनती।",
        "ऐसी जगह जहाँ अनिश्चितता को अनिश्चित रहने दिया जा सकता है।",
        "ऐसी जगह जहाँ परिचित लगने वाली बात को इस समय अधिक सच्चा लगने वाली बात से धीरे से मिलाया जा सके।",
        "Miravelys आपको ठीक करने के बारे में नहीं है।",
        "यह आपको धीरे-धीरे, निजी रूप से, और पहले से अधिक दयालुता के साथ अपने पास लौटने में मदद करने के बारे में है।"
      ]
    }
  }
};

const zh = {
  "meta": {
    "title": "Miravelys 如何诞生 — Miravelys",
    "description": "Miravelys 背后的故事：一个私密的反思空间，用来留意发生了什么、头脑可能添加了什么，以及此刻什么更接近真实。",
    "ogTitle": "Miravelys 如何诞生",
    "ogDescription": "一个安静的起源故事：诚实书写，分开当下与故事，先安顿身体，再带着更多温柔回到自己。"
  },
  "eyebrow": "起源",
  "title": "Miravelys 如何诞生",
  "cta": "阅读故事",
  "ctaPrimary": "加入早期访问",
  "ctaSecondary": "回到体验",
  "blockLabels": {
    "opening": "一次安静的寻找",
    "momentStory": "时刻变成故事",
    "writingMirror": "书写像一面镜子",
    "separatingLayers": "分开层次",
    "bodyCalm": "身体也需要安静",
    "whyExists": "Miravelys 为什么存在"
  },
  "intro": [
    "Miravelys 并不是作为另一个应用想法开始的。",
    "它始于许多人默默带着的一个问题：为什么一个很小的时刻，有时会在我们心里变成一整段故事？"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "有些时刻，比它看起来应有的分量更刺痛。一个句子。一段沉默。语气里很小的变化。外面只是小事，里面却突然变得很大。",
        "我开始注意到，痛感并不总是只来自事件本身。很多时候，它也来自头脑围绕事件放上的意义。",
        "发生的事是一层。",
        "感受到的是另一层。",
        "而头脑赋予它的意义，往往是最响的一层。"
      ]
    },
    "momentStory": {
      "paragraphs": [
        "当头脑想保护我们时，它会跑得很快。它抓住一个眼神、一次停顿、一个错误、一种感受，然后把它们变成听起来很确定的东西。",
        "重复得足够多之后，一个故事会不再像想法，而更像对自己的画像。",
        "一次停顿可能变成被拒绝。",
        "一个眼神可能变成证据。",
        "一个错误可能变成身份。",
        "一种感受可能变成事实。",
        "一个恐惧可能变成信念。"
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "书写成了第一个温柔的空间，让这些故事可以被看见。",
        "不是完美日记。不是漂亮文字。只是那个已经在心里的诚实句子：这让我难过；我觉得自己很小；我以为他们要离开；我不知道为什么这件事这么大。",
        "当一个念头被写下来，它会暂时不再占据整片天空。它变成可以坐在旁边看的东西。",
        "在纠结变成结论之前写下来。",
        "把恐惧写出来，但不把它当成最终答案。",
        "写到足以看见时刻与故事之间的空间。"
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "这个空间后来成了 Miravelys 的核心。",
        "应用被创建出来，是为了温柔地分开层次，不强迫确定，也不替用户下结论。",
        "发生了什么。",
        "感受到了什么。",
        "身体对什么有反应。",
        "头脑可能添加了什么。",
        "什么信念可能在场。",
        "什么仍然未知。",
        "看见一个信念，并不等于评判它。有些信念也许曾经保护过我们。Miravelys 只是给它们一个安静的位置，让它们可以被看见、放软、询问，或暂时被放下。"
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "但清晰并不总是从头脑开始。",
        "有时身体太紧、太累、太满，无法清楚地看。在那些时刻，最温柔的第一步也许是呼吸、慢下来、聆听，或休息。",
        "所以 Miravelys 包含呼吸、冥想、睡眠支持和安定声音。它们服务于那些身体先需要柔软、头脑之后再寻找答案的时刻。",
        "一个可以呼吸的地方。",
        "一个可以聆听的地方。",
        "一个让夜晚保持柔和的地方。",
        "一个在试图理解一切之前回到当下的地方。"
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys 存在，是因为人并不总是需要被推向结论。",
        "有时，人需要一个私密空间，可以承接体验，却不接管体验。",
        "一个由用户决定什么合适的地方。",
        "一个让重复故事被看见、却不变成身份的地方。",
        "一个允许未知继续未知的地方。",
        "一个把熟悉感与此刻更接近真实的东西温柔比较的地方。",
        "Miravelys 不是为了修理你是谁。",
        "它是为了帮助你慢慢地、私密地、带着更多善意回到自己。"
      ]
    }
  }
};

const de = {
  "meta": {
    "title": "Wie Miravelys entstand — Miravelys",
    "description": "Die Geschichte hinter Miravelys: ein privater Reflexionsraum, um zu bemerken, was passiert ist, was der Geist vielleicht hinzugefügt hat und was sich jetzt stimmiger anfühlt.",
    "ogTitle": "Wie Miravelys entstand",
    "ogDescription": "Eine leise Ursprungsgeschichte über ehrliches Schreiben, das Trennen von Moment und Geschichte, das Beruhigen des Körpers und eine freundlichere Rückkehr zu sich selbst."
  },
  "eyebrow": "Der Ursprung",
  "title": "Wie Miravelys entstand",
  "cta": "Die Geschichte lesen",
  "ctaPrimary": "Frühen Zugang erhalten",
  "ctaSecondary": "Zur Erfahrung zurück",
  "blockLabels": {
    "opening": "Eine stille Suche",
    "momentStory": "Der Moment wird zur Geschichte",
    "writingMirror": "Schreiben als Spiegel",
    "separatingLayers": "Die Ebenen trennen",
    "bodyCalm": "Auch der Körper braucht Ruhe",
    "whyExists": "Warum Miravelys existiert"
  },
  "intro": [
    "Miravelys begann nicht als einfach eine weitere App-Idee.",
    "Es begann mit einer Frage, die viele Menschen leise in sich tragen: Warum wird ein kleiner Moment manchmal zu einer ganzen Geschichte in uns?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "Es gab Momente, die mehr weh taten, als sie scheinbar sollten. Ein Satz. Ein Schweigen. Eine veränderte Stimme. Außen etwas Kleines, innen plötzlich etwas Großes.",
        "Ich begann zu bemerken, dass der Schmerz nicht immer nur im Ereignis selbst lag. Oft lag er auch in der Bedeutung, die der Geist darumlegte.",
        "Was passiert war, war eine Ebene.",
        "Was ich fühlte, war eine andere.",
        "Und was mein Geist daraus machte, war oft die lauteste Ebene."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "Der Geist kann sehr schnell werden, wenn er uns schützen will. Er sammelt einen Blick, eine Pause, einen Fehler, ein Gefühl und macht daraus etwas, das sicher klingt.",
        "Nach genügend Wiederholung fühlt sich eine Geschichte irgendwann weniger wie ein Gedanke an und mehr wie ein Selbstbild.",
        "Eine Pause kann zu Ablehnung werden.",
        "Ein Blick kann zum Beweis werden.",
        "Ein Fehler kann zur Identität werden.",
        "Ein Gefühl kann zur Tatsache werden.",
        "Eine Angst kann zur Überzeugung werden."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "Schreiben wurde der erste sanfte Raum, in dem diese Geschichten sichtbar werden konnten.",
        "Kein perfektes Tagebuch. Keine schönen Seiten. Nur der ehrliche Satz, der schon da war: Das hat wehgetan; ich fühlte mich klein; ich glaube, sie gehen; ich weiß nicht, warum sich das so groß anfühlt.",
        "Wenn ein Gedanke aufgeschrieben ist, ist er für einen Moment nicht mehr der ganze Himmel. Er wird zu etwas, neben dem man sitzen kann.",
        "Aufschreiben, was verworren ist, bevor es zur Schlussfolgerung wird.",
        "Die Angst schreiben, ohne sie zur endgültigen Antwort zu machen.",
        "Genug schreiben, um den Raum zwischen Moment und Geschichte zu sehen."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "Dieser Raum wurde zum Herzen von Miravelys.",
        "Die App wurde geschaffen, um Ebenen behutsam zu trennen, ohne Gewissheit zu erzwingen und ohne für die Nutzerin oder den Nutzer zu entscheiden.",
        "Was passiert ist.",
        "Was gefühlt wurde.",
        "Worauf der Körper reagiert hat.",
        "Was der Geist vielleicht hinzugefügt hat.",
        "Welche Überzeugung da sein könnte.",
        "Was noch unbekannt bleibt.",
        "Eine Überzeugung zu bemerken heißt nicht, sie zu verurteilen. Manche Überzeugungen haben uns vielleicht einmal geschützt. Miravelys gibt ihnen nur einen stillen Ort, an dem sie gesehen, weicher gemacht, befragt oder in Ruhe gelassen werden können."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "Klarheit beginnt aber nicht immer im Geist.",
        "Manchmal ist der Körper zu angespannt, müde oder überladen, um klar zu schauen. Dann kann der freundlichste erste Schritt sein: atmen, langsamer werden, zuhören oder ruhen.",
        "Darum enthält Miravelys Atmung, Meditation, Schlafunterstützung und erdende Klänge. Sie sind für die Momente da, in denen der Körper Weichheit braucht, bevor der Geist Antworten braucht.",
        "Ein Ort zum Atmen.",
        "Ein Ort zum Zuhören.",
        "Ein Ort, an dem die Nacht sanfter sein darf.",
        "Ein Ort, um in die Gegenwart zurückzukehren, bevor alles verstanden werden muss."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys existiert, weil Menschen nicht immer zu einer Schlussfolgerung gedrängt werden müssen.",
        "Manchmal brauchen sie einen privaten Ort, der die Erfahrung halten kann, ohne die Kontrolle darüber zu übernehmen.",
        "Ein Ort, an dem die Nutzerin oder der Nutzer entscheidet, was passt.",
        "Ein Ort, an dem eine wiederholte Geschichte sichtbar werden kann, ohne zur Identität zu werden.",
        "Ein Ort, an dem Ungewissheit ungewiss bleiben darf.",
        "Ein Ort, an dem Vertrautes behutsam mit dem verglichen werden kann, was sich jetzt stimmiger anfühlt.",
        "Miravelys ist nicht dazu da, dich zu reparieren.",
        "Es ist dazu da, dir zu helfen, langsam, privat und mit mehr Freundlichkeit zu dir zurückzukehren."
      ]
    }
  }
};

const ja = {
  "meta": {
    "title": "Miravelys はどのように生まれたか — Miravelys",
    "description": "Miravelys の背景にある物語。起きたこと、心が加えたかもしれない意味、そして今より真実に近く感じるものに気づくための私的な振り返りの場です。",
    "ogTitle": "Miravelys はどのように生まれたか",
    "ogDescription": "正直に書くこと、瞬間と物語を分けること、身体を落ち着けること、そしてよりやさしく自分に戻ることについての静かな物語。"
  },
  "eyebrow": "はじまり",
  "title": "Miravelys はどのように生まれたか",
  "cta": "物語を読む",
  "ctaPrimary": "早期アクセスに参加",
  "ctaSecondary": "体験に戻る",
  "blockLabels": {
    "opening": "静かな探求",
    "momentStory": "瞬間が物語になる",
    "writingMirror": "鏡としての書くこと",
    "separatingLayers": "層を分ける",
    "bodyCalm": "身体にも静けさが必要",
    "whyExists": "Miravelys が存在する理由"
  },
  "intro": [
    "Miravelys は、ただの新しいアプリのアイデアとして始まったわけではありません。",
    "それは多くの人が静かに抱えている問いから始まりました。なぜ小さな瞬間が、ときどき内側でひとつの大きな物語になるのだろう、と。"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "必要以上に痛む瞬間がありました。ひとつの言葉。沈黙。声の調子の小さな変化。外側では小さなことなのに、内側では急に大きくなる。",
        "少しずつ気づきました。痛みはいつも出来事そのものだけにあるわけではない。心がその周りに置いた意味の中にもあるのだと。",
        "起きたことは、ひとつの層でした。",
        "感じたことは、別の層でした。",
        "そして心がそこに与えた意味が、いちばん大きな音になることがありました。"
      ]
    },
    "momentStory": {
      "paragraphs": [
        "心は守ろうとすると、とても速く動きます。視線、間、失敗、感情を集め、それを確かなもののように変えてしまう。",
        "何度も繰り返されるうちに、物語は考えというより、自分の姿のように感じられることがあります。",
        "沈黙が拒絶になることがある。",
        "視線が証拠になることがある。",
        "失敗が自分そのものに見えることがある。",
        "感情が事実のように感じられることがある。",
        "恐れが信念になることがある。"
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "書くことは、その物語を見られる最初のやさしい場所になりました。",
        "完璧な日記ではありません。美しい文章でもありません。ただ、すでに内側にあった正直な一文です。傷ついた。小さく感じた。離れていく気がする。なぜこんなに大きく感じるのかわからない。",
        "思考は書かれると、しばらくのあいだ空全体ではなくなります。隣に座って眺められるものになります。",
        "絡まったものが結論になる前に書く。",
        "恐れを書きながら、それを最後の答えにはしない。",
        "瞬間と物語のあいだにある余白が見えるところまで書く。"
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "その余白が Miravelys の中心になりました。",
        "このアプリは、確かさを押しつけず、ユーザーの代わりに決めずに、層をやさしく分けるために作られました。",
        "何が起きたのか。",
        "何を感じたのか。",
        "身体は何に反応したのか。",
        "心は何を加えたのかもしれないか。",
        "どんな信念がそばにあるのかもしれないか。",
        "まだわからないことは何か。",
        "信念に気づくことは、それを責めることではありません。ある信念は、かつて私たちを守ってくれたのかもしれません。Miravelys はそれらを見たり、やわらげたり、問いかけたり、そっとしておいたりできる静かな場所を用意します。"
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "けれど、明晰さはいつも心から始まるわけではありません。",
        "身体が緊張し、疲れ、いっぱいになっていると、はっきり見ることは難しくなります。そのとき最初のやさしい一歩は、呼吸すること、ゆっくりすること、聴くこと、休むことかもしれません。",
        "だから Miravelys には、呼吸、瞑想、睡眠の支え、落ち着くための音があります。身体が答えより先にやわらかさを必要とする瞬間のためです。",
        "呼吸する場所。",
        "聴く場所。",
        "夜をやさしくしておく場所。",
        "すべてを理解しようとする前に、今に戻る場所。"
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys が存在するのは、人はいつも結論へ急がされる必要があるわけではないからです。",
        "ときには、体験を受け止めながらも、その主導権を奪わない私的な場所が必要です。",
        "何が合うかをユーザー自身が決められる場所。",
        "繰り返す物語が見えるようになっても、それが自分そのものにはならない場所。",
        "わからないことを、わからないまま置いておける場所。",
        "なじみのある感じと、今より真実に近く感じるものを、やさしく比べられる場所。",
        "Miravelys は、あなたを直すためのものではありません。",
        "ゆっくり、私的に、以前より少しやさしく、自分に戻るためのものです。"
      ]
    }
  }
};

const es = {
  "meta": {
    "title": "Cómo nació Miravelys — Miravelys",
    "description": "La historia detrás de Miravelys: un espacio privado de reflexión para notar qué ocurrió, qué pudo añadir la mente y qué se siente más cercano a la verdad ahora.",
    "ogTitle": "Cómo nació Miravelys",
    "ogDescription": "Una historia tranquila sobre escribir con honestidad, separar el momento de la historia, calmar el cuerpo y volver a ti con más amabilidad."
  },
  "eyebrow": "El origen",
  "title": "Cómo nació Miravelys",
  "cta": "Leer la historia",
  "ctaPrimary": "Acceso anticipado",
  "ctaSecondary": "Volver a la experiencia",
  "blockLabels": {
    "opening": "Una búsqueda silenciosa",
    "momentStory": "El momento se vuelve historia",
    "writingMirror": "Escribir como espejo",
    "separatingLayers": "Separar las capas",
    "bodyCalm": "El cuerpo también necesita calma",
    "whyExists": "Por qué existe Miravelys"
  },
  "intro": [
    "Miravelys no nació como otra idea de app.",
    "Empezó con una pregunta que muchas personas llevan en silencio: ¿por qué un momento pequeño a veces se convierte en toda una historia dentro de nosotros?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "Hubo momentos que dolieron más de lo esperado. Una frase. Un silencio. Un cambio de tono. Algo pequeño por fuera, pero de pronto enorme por dentro.",
        "Empecé a notar que el dolor no siempre estaba solo en el hecho. Muchas veces también estaba en el significado que la mente colocaba alrededor.",
        "Lo que ocurrió era una capa.",
        "Lo que sentí era otra.",
        "Y lo que mi mente hizo significar solía ser la capa más ruidosa."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "La mente puede moverse muy rápido cuando intenta protegernos. Toma una mirada, una pausa, un error, una sensación, y los convierte en algo que suena seguro.",
        "Con suficiente repetición, una historia puede sentirse menos como un pensamiento y más como un retrato propio.",
        "Una pausa puede volverse rechazo.",
        "Una mirada puede volverse prueba.",
        "Un error puede volverse identidad.",
        "Una sensación puede volverse hecho.",
        "Un miedo puede volverse creencia."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "Escribir se volvió el primer espacio amable donde esas historias podían verse.",
        "No un diario perfecto. No escritura bonita. Solo la frase honesta que ya estaba ahí: esto dolió; me sentí pequeño; creo que se van; no sé por qué esto se siente tan grande.",
        "Cuando un pensamiento se escribe, por un momento deja de ser todo el cielo. Se vuelve algo junto a lo que puedes sentarte.",
        "Escribir lo que está enredado antes de que se vuelva conclusión.",
        "Escribir el miedo sin convertirlo en la respuesta final.",
        "Escribir lo suficiente para ver el espacio entre el momento y la historia."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "Ese espacio se convirtió en el corazón de Miravelys.",
        "La app fue creada para ayudar a separar las capas con suavidad, sin forzar certeza y sin decidir por la persona.",
        "Qué ocurrió.",
        "Qué se sintió.",
        "A qué reaccionó el cuerpo.",
        "Qué pudo añadir la mente.",
        "Qué creencia puede estar presente.",
        "Qué sigue siendo desconocido.",
        "Notar una creencia no significa juzgarla. Algunas creencias quizá nos protegieron alguna vez. Miravelys solo les da un lugar tranquilo para ser vistas, suavizadas, preguntadas o dejadas en paz."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "Pero la claridad no siempre empieza en la mente.",
        "A veces el cuerpo está demasiado tenso, cansado o abrumado para mirar con claridad. En esos momentos, el primer paso más amable puede ser respirar, bajar el ritmo, escuchar o descansar.",
        "Por eso Miravelys incluye respiración, meditación, apoyo para el sueño y sonidos de arraigo. Están ahí para cuando el cuerpo necesita suavidad antes de que la mente necesite respuestas.",
        "Un lugar para respirar.",
        "Un lugar para escuchar.",
        "Un lugar donde la noche pueda ser más suave.",
        "Un lugar para volver al presente antes de intentar entenderlo todo."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "Miravelys existe porque las personas no siempre necesitan ser empujadas hacia una conclusión.",
        "A veces necesitan un lugar privado que sostenga la experiencia sin tomar control de ella.",
        "Un lugar donde la persona decide qué encaja.",
        "Un lugar donde una historia repetida puede hacerse visible sin volverse identidad.",
        "Un lugar donde la incertidumbre puede seguir siendo incertidumbre.",
        "Un lugar donde lo familiar puede compararse con suavidad con lo que ahora se siente más cercano a la verdad.",
        "Miravelys no trata de arreglar quien eres.",
        "Trata de ayudarte a volver a ti poco a poco, en privado y con más amabilidad que antes."
      ]
    }
  }
};

const pt = {
  "meta": {
    "title": "Como o Miravelys nasceu — Miravelys",
    "description": "A história por trás do Miravelys: um espaço privado de reflexão para perceber o que aconteceu, o que a mente talvez tenha acrescentado e o que agora parece mais próximo da verdade.",
    "ogTitle": "Como o Miravelys nasceu",
    "ogDescription": "Uma história calma sobre escrever com honestidade, separar o momento da história, acalmar o corpo e voltar a si com mais gentileza."
  },
  "eyebrow": "A origem",
  "title": "Como o Miravelys nasceu",
  "cta": "Ler a história",
  "ctaPrimary": "Acesso antecipado",
  "ctaSecondary": "Voltar à experiência",
  "blockLabels": {
    "opening": "Uma procura silenciosa",
    "momentStory": "O momento vira história",
    "writingMirror": "Escrever como espelho",
    "separatingLayers": "Separar as camadas",
    "bodyCalm": "O corpo também precisa de calma",
    "whyExists": "Por que o Miravelys existe"
  },
  "intro": [
    "O Miravelys não nasceu como mais uma ideia de app.",
    "Começou com uma pergunta que muita gente carrega em silêncio: por que um momento pequeno às vezes vira uma história inteira dentro de nós?"
  ],
  "blocks": {
    "opening": {
      "paragraphs": [
        "Houve momentos que doeram mais do que pareciam merecer. Uma frase. Um silêncio. Uma mudança de tom. Algo pequeno por fora, mas de repente enorme por dentro.",
        "Comecei a perceber que a dor nem sempre estava só no acontecimento. Muitas vezes também estava no significado que a mente colocava ao redor dele.",
        "O que aconteceu era uma camada.",
        "O que senti era outra.",
        "E o que minha mente fez aquilo significar era muitas vezes a camada mais alta."
      ]
    },
    "momentStory": {
      "paragraphs": [
        "A mente pode se mover muito rápido quando tenta nos proteger. Ela junta um olhar, uma pausa, um erro, uma sensação, e transforma tudo em algo que parece certo.",
        "Com repetição suficiente, uma história pode parecer menos um pensamento e mais um retrato de quem somos.",
        "Uma pausa pode virar rejeição.",
        "Um olhar pode virar prova.",
        "Um erro pode virar identidade.",
        "Uma sensação pode virar fato.",
        "Um medo pode virar crença."
      ]
    },
    "writingMirror": {
      "paragraphs": [
        "Escrever se tornou o primeiro espaço gentil onde essas histórias podiam ser vistas.",
        "Não um diário perfeito. Não uma escrita bonita. Só a frase honesta que já estava ali: isso doeu; me senti pequeno; acho que estão indo embora; não sei por que isso parece tão grande.",
        "Quando um pensamento é escrito, por um momento ele deixa de ser o céu inteiro. Vira algo ao lado do qual você pode sentar.",
        "Escrever o que está emaranhado antes que vire conclusão.",
        "Escrever o medo sem torná-lo a resposta final.",
        "Escrever o bastante para ver o espaço entre o momento e a história."
      ]
    },
    "separatingLayers": {
      "paragraphs": [
        "Esse espaço se tornou o coração do Miravelys.",
        "O app foi criado para ajudar a separar as camadas com delicadeza, sem forçar certeza e sem decidir pela pessoa.",
        "O que aconteceu.",
        "O que foi sentido.",
        "Ao que o corpo reagiu.",
        "O que a mente talvez tenha acrescentado.",
        "Que crença pode estar presente.",
        "O que ainda permanece desconhecido.",
        "Perceber uma crença não é julgá-la. Algumas crenças talvez tenham nos protegido um dia. O Miravelys apenas oferece um lugar quieto onde elas podem ser vistas, suavizadas, questionadas ou deixadas em paz."
      ]
    },
    "bodyCalm": {
      "paragraphs": [
        "Mas a clareza nem sempre começa na mente.",
        "Às vezes o corpo está tenso, cansado ou sobrecarregado demais para olhar com clareza. Nesses momentos, o primeiro passo mais gentil pode ser respirar, desacelerar, escutar ou descansar.",
        "Por isso o Miravelys inclui respiração, meditação, apoio ao sono e sons de ancoragem. Eles existem para quando o corpo precisa de suavidade antes que a mente precise de respostas.",
        "Um lugar para respirar.",
        "Um lugar para escutar.",
        "Um lugar onde a noite pode ficar mais suave.",
        "Um lugar para voltar ao presente antes de tentar entender tudo."
      ]
    },
    "whyExists": {
      "paragraphs": [
        "O Miravelys existe porque as pessoas nem sempre precisam ser empurradas para uma conclusão.",
        "Às vezes precisam de um lugar privado que segure a experiência sem tomar o controle dela.",
        "Um lugar onde a pessoa decide o que combina.",
        "Um lugar onde uma história repetida pode ficar visível sem virar identidade.",
        "Um lugar onde a incerteza pode continuar incerta.",
        "Um lugar onde o familiar pode ser comparado com suavidade ao que agora parece mais próximo da verdade.",
        "O Miravelys não é sobre consertar quem você é.",
        "É sobre ajudar você a voltar para si aos poucos, em privado e com mais gentileza do que antes."
      ]
    }
  }
};

export const originCopy = {
  en: buildOriginContent(en),
  ru: buildOriginContent(ru),
  ro: buildOriginContent(ro),
  fr: buildOriginContent(fr),
  hi: buildOriginContent(hi),
  zh: buildOriginContent(zh),
  de: buildOriginContent(de),
  ja: buildOriginContent(ja),
  es: buildOriginContent(es),
  pt: buildOriginContent(pt),
};

export function resolveOriginCopy(lang) {
  return originCopy[lang] ?? originCopy.en;
}
