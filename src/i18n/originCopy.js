/**
 * Founder origin story — full localization for the cinematic Origin section.
 * Personal, warm tone. No external authors, methods, or third-party references.
 */

function buildOriginContent(data) {
  return {
    eyebrow: data.eyebrow,
    title: data.title,
    intro: data.intro,
    blockLabels: data.blockLabels,
    blocks: data.blocks,
    cta: data.cta,
  };
}

const en = {
  eyebrow: 'The beginning',
  title: 'How Miravelys Was Born',
  cta: 'Return to yourself',
  blockLabels: {
    search: 'The search',
    whatMindAdds: 'What the mind adds',
    writing: 'Writing honestly',
    questions: 'Honest questions',
    mirror: 'A quiet mirror',
    separation: 'Gentle separation',
    humility: 'What we do not claim',
    grounding: 'Grounding first',
    sounds: 'Calming sounds',
    places: 'Places to land',
    intention: 'Who it is for',
    finale: 'Returning to yourself',
  },
  intro: [
    'Miravelys was not born as just another idea for a new app.',
    'It started much earlier — in a quiet search inside myself.',
    'A search that begins when you start asking why some moments hurt more than others, why one word can echo for hours, and how a small situation can turn into a story about who you are, what you deserve, or what life is supposed to be.',
  ],
  blocks: {
    search: {
      paragraphs: ['At first, I searched outside myself.'],
      lines: [
        'In books.',
        'In ideas.',
        'In silence.',
        'In questions.',
        'In the hope that somewhere there was a clear answer that could explain why the mind creates so much pain around simple moments.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'But slowly, I began to understand something important: many times, what hurts us is not only what happened.',
        'It is what we add to what happened.',
        'And after repeating this again and again, we can begin to live inside stories that once protected us, but no longer truly belong to us.',
      ],
      transforms: [
        'A look becomes rejection.',
        'A pause becomes proof.',
        'A mistake becomes identity.',
        'A feeling becomes a fact.',
        'A fear becomes a belief.',
      ],
    },
    writing: {
      paragraphs: [
        'Miravelys was created from that quiet realization.',
        'It was created as a private place where a person can stop for a moment and write down what is happening inside — not in a perfect way, not like a beautiful diary, not to impress anyone, but honestly.',
      ],
    },
    questions: {
      items: [
        'What am I feeling?',
        'What am I believing right now?',
        'What did my mind add to this situation?',
        'What is my body reacting to?',
        'What story keeps repeating?',
        'What feels true, and what might only feel familiar?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys gives the user a space to capture these moments when they appear, or after they have passed. A belief that became loud. An emotion that arrived suddenly. A reaction that felt bigger than the situation. A thought that kept returning. A body feeling that seemed to carry something deeper.',
        'And over time, these small written moments can begin to form a quiet mirror.',
        'Not a mirror that judges.',
        'Not a mirror that says, "This is who you are."',
        'But a mirror that helps the user notice what has been repeated.',
      ],
    },
    separation: {
      paragraphs: [
        'The app can help separate the moment from the story around it, the emotion from the belief, the body reaction from the identity built around it, and the unknown from the conclusions that came too quickly.',
        'This is the heart of Miravelys.',
        'It does not tell the user what the truth is.',
        'It does not diagnose.',
        'It does not replace therapy.',
        'It does not decide who someone is.',
        'Instead, it helps the user look more gently.',
      ],
    },
    humility: {
      paragraphs: ['Miravelys was built for those small moments of honest seeing.'],
      insights: [
        'To see: this was a feeling, not a fact.',
        'This was a fear, not my whole identity.',
        'This belief may have protected me once, but maybe I do not need to live from it forever.',
        'This story appeared quickly, but maybe there is something quieter underneath it.',
      ],
    },
    grounding: {
      paragraphs: [
        'But the app is not only about writing and reflection.',
        'Because sometimes, when the body is overwhelmed, the mind cannot look clearly. Sometimes the first step is not to analyze. The first step is to breathe, feel the body, slow down, and return to the present.',
        'That is why Miravelys also includes grounding experiences: breathing, feeling awareness, meditation, sleep support, and calming sound journeys.',
      ],
    },
    sounds: {
      paragraphs: [
        'The sounds inside Miravelys were created especially for this world.',
        'They are not just background music. They are designed to feel like soft places to land — gentle atmospheres that help the body become quieter, the breath become slower, and the moment feel a little safer.',
        'These unique grounding sounds are part of the emotional language of Miravelys. They help the app feel less like a tool and more like a private place the user can return to.',
      ],
      types: [
        'Some sounds are made for breathing.',
        'Some are made for meditation.',
        'Some are made for sleep.',
        'Some are made for the moments when the user does not need more words, but needs a softer space around the body.',
      ],
    },
    places: {
      items: [
        'A place to breathe.',
        'A place to write.',
        'A place to listen.',
        'A place to notice what has been repeated.',
        'A place to calm the body before trying to understand everything with the mind.',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys was born from the belief that people do not always need to be pushed, fixed, or told who they are.',
        'Sometimes they need a quiet space where they can meet themselves honestly.',
        'A space where a tangled moment can become a little clearer.',
        'A space where an old belief can finally be seen.',
        'A space where the body can soften before the mind decides.',
        'A space where the user stays in control.',
        'A space where truth is approached gently, not forced.',
      ],
      audience: [
        'For the person who feels too much and wants to understand it softly.',
        'For the person who keeps repeating the same inner story and wants to see where it begins.',
        'For the person who wants to separate what happened from what the mind added.',
        'For the person who needs calm before clarity.',
        'For the person who is not trying to become someone else, but to come closer to what feels honest inside.',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys is not about fixing who you are.',
        'It is about helping you return to yourself — slowly, privately, and with more kindness than before.',
      ],
    },
  },
};

const ru = {
  eyebrow: 'Начало',
  title: 'Как родился Miravelys',
  cta: 'Вернуться к себе',
  blockLabels: {
    search: 'Поиск',
    whatMindAdds: 'Что добавляет ум',
    writing: 'Честное письмо',
    questions: 'Честные вопросы',
    mirror: 'Тихое зеркало',
    separation: 'Мягкое разделение',
    humility: 'Чего мы не утверждаем',
    grounding: 'Сначала заземление',
    sounds: 'Успокаивающие звуки',
    places: 'Места, где можно опуститься',
    intention: 'Для кого это',
    finale: 'Возвращение к себе',
  },
  intro: [
    'Miravelys не родился как просто очередная идея для приложения.',
    'Он начался гораздо раньше — в тихом личном поиске.',
    'В таком поиске, который начинается, когда ты вдруг спрашиваешь себя, почему некоторые моменты ранят сильнее, чем должны были бы. Почему одна фраза другого человека может часами звучать в голове. Почему маленькая ситуация может превратиться в целую историю о том, кто ты, чего ты достоин и что вообще значит жизнь.',
  ],
  blocks: {
    search: {
      paragraphs: ['Сначала я искал ответы снаружи.'],
      lines: [
        'В книгах.',
        'В идеях.',
        'В тишине.',
        'В вопросах.',
        'В надежде, что где-то есть ясный ответ, который объяснит, почему ум создаёт столько боли вокруг простых моментов.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'Но постепенно я начал понимать одну важную вещь: очень часто нас ранит не только то, что произошло.',
        'Нас ранит то, что мы добавляем к тому, что произошло.',
        'И если это повторяется снова и снова, мы начинаем жить внутри историй, которые когда-то защищали нас, но больше по-настоящему нам не принадлежат.',
      ],
      transforms: [
        'Взгляд становится отвержением.',
        'Пауза становится доказательством.',
        'Ошибка становится личностью.',
        'Чувство становится фактом.',
        'Страх становится убеждением.',
      ],
    },
    writing: {
      paragraphs: [
        'Из этого понимания и был создан Miravelys.',
        'Он был создан как личное пространство, где человек может на мгновение остановиться и записать то, что происходит внутри — не идеально, не как красивую страницу дневника, не чтобы кому-то понравиться, а честно.',
      ],
    },
    questions: {
      items: [
        'Что я чувствую?',
        'Во что я сейчас верю?',
        'Что мой ум добавил к этой ситуации?',
        'На что реагирует моё тело?',
        'Какая история повторяется снова и снова?',
        'Что ощущается правдой, а что, возможно, просто кажется знакомым?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys даёт пользователю место, чтобы сохранять такие моменты, когда они появляются или уже после того, как они прошли. Убеждение, которое стало слишком громким. Эмоцию, которая пришла внезапно. Реакцию, которая оказалась сильнее самой ситуации. Мысль, которая возвращалась снова. Ощущение в теле, будто оно несёт что-то глубже слов.',
        'Со временем эти маленькие записи могут начать складываться в тихое зеркало.',
        'Не зеркало, которое судит.',
        'Не зеркало, которое говорит: «Вот кто ты.»',
        'А зеркало, которое помогает заметить то, что повторялось.',
      ],
    },
    separation: {
      paragraphs: [
        'Приложение помогает мягко отделять сам момент от истории вокруг него, эмоцию от убеждения, реакцию тела от образа себя, который вокруг неё построился, а неизвестное — от слишком быстрых выводов.',
        'В этом сердце Miravelys.',
        'Он не говорит пользователю, что является истиной.',
        'Он не ставит диагнозы.',
        'Он не заменяет терапию.',
        'Он не решает, кто человек есть.',
        'Вместо этого он помогает смотреть мягче.',
      ],
    },
    humility: {
      paragraphs: ['Miravelys был создан для этих маленьких моментов честного видения.'],
      insights: [
        'Увидеть: это было чувство, а не факт.',
        'Это был страх, а не вся моя личность.',
        'Это убеждение, возможно, когда-то меня защищало, но, может быть, мне больше не нужно жить из него всегда.',
        'Эта история появилась быстро, но, возможно, под ней есть что-то тише.',
      ],
    },
    grounding: {
      paragraphs: [
        'Но приложение не только о письме и размышлении.',
        'Потому что иногда, когда тело перегружено, ум не может видеть ясно. Иногда первый шаг — не анализировать. Первый шаг — дышать, почувствовать тело, замедлиться и вернуться в настоящий момент.',
        'Поэтому в Miravelys есть и практики заземления: дыхание, внимание к ощущениям, медитации, поддержка сна и успокаивающие звуковые путешествия.',
      ],
    },
    sounds: {
      paragraphs: [
        'Звуки внутри Miravelys были созданы специально для этого мира.',
        'Это не просто фоновая музыка. Они задуманы как мягкие места, куда можно опуститься, — нежные атмосферы, которые помогают телу становиться тише, дыханию — медленнее, а моменту — немного безопаснее.',
        'Эти уникальные звуки заземления — часть эмоционального языка Miravelys. Они помогают приложению ощущаться не просто инструментом, а личным местом, куда можно возвращаться.',
      ],
      types: [
        'Одни звуки созданы для дыхания.',
        'Другие — для медитации.',
        'Другие — для сна.',
        'А некоторые — для тех мгновений, когда человеку не нужны новые слова, а нужно более мягкое пространство вокруг тела.',
      ],
    },
    places: {
      items: [
        'Местом, где можно дышать.',
        'Местом, где можно писать.',
        'Местом, где можно слушать.',
        'Местом, где можно заметить то, что повторялось.',
        'Местом, где тело может успокоиться до того, как ум попытается всё понять.',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys родился из веры в то, что людям не всегда нужно, чтобы их подталкивали, исправляли или говорили им, кто они.',
        'Иногда им нужно тихое пространство, где можно честно встретиться с собой.',
        'Пространство, где запутанный момент становится немного яснее.',
        'Где старое убеждение наконец можно увидеть.',
        'Где тело может смягчиться до того, как ум решит.',
        'Где пользователь остаётся главным.',
        'Где к правде приближаются мягко, а не силой.',
      ],
      audience: [
        'Для человека, который чувствует слишком много и хочет понять это бережно.',
        'Для человека, который снова и снова повторяет одну внутреннюю историю и хочет увидеть, где она начинается.',
        'Для человека, который хочет отделить то, что произошло, от того, что добавил ум.',
        'Для человека, которому нужен покой перед ясностью.',
        'Для человека, который не пытается стать кем-то другим, а хочет приблизиться к тому, что внутри ощущается честным.',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys не о том, чтобы исправить себя.',
        'Он о том, чтобы помочь вам вернуться к себе — медленно, лично и с большей добротой, чем раньше.',
      ],
    },
  },
};

const ro = {
  eyebrow: 'Începutul',
  title: 'Cum s-a născut Miravelys',
  cta: 'Întoarce-te la tine',
  blockLabels: {
    search: 'Căutarea',
    whatMindAdds: 'Ce adaugă mintea',
    writing: 'Scriere sinceră',
    questions: 'Întrebări sincere',
    mirror: 'O oglindă liniștită',
    separation: 'Separare blândă',
    humility: 'Ce nu pretindem',
    grounding: 'Ancorare mai întâi',
    sounds: 'Sunete liniștitoare',
    places: 'Locuri unde să te așezi',
    intention: 'Pentru cine este',
    finale: 'Întoarcerea la tine',
  },
  intro: [
    'Miravelys nu s-a născut ca încă o idee de aplicație.',
    'A început mult mai devreme — într-o căutare personală, tăcută.',
    'Genul de căutare care începe atunci când te întrebi de ce unele momente dor mai mult decât ar trebui. De ce o singură propoziție spusă de altcineva poate rămâne în minte ore întregi. De ce o situație mică se poate transforma într-o poveste întreagă despre cine ești, ce meriți sau ce înseamnă viața.',
  ],
  blocks: {
    search: {
      paragraphs: ['La început, am căutat în afara mea.'],
      lines: [
        'În cărți.',
        'În idei.',
        'În liniște.',
        'În întrebări.',
        'În speranța că undeva exista un răspuns clar care putea explica de ce mintea creează atât de multă durere în jurul unor momente simple.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'Dar, încet, am început să înțeleg ceva important: de multe ori, ceea ce ne doare nu este doar ce s-a întâmplat.',
        'Este ceea ce adăugăm la ce s-a întâmplat.',
        'Și, repetând asta din nou și din nou, putem ajunge să trăim în povești care cândva ne-au protejat, dar care nu ne mai aparțin cu adevărat.',
      ],
      transforms: [
        'O privire devine respingere.',
        'O pauză devine dovadă.',
        'O greșeală devine identitate.',
        'Un sentiment devine fapt.',
        'O frică devine convingere.',
      ],
    },
    writing: {
      paragraphs: [
        'Din această înțelegere s-a născut Miravelys.',
        'A fost creat ca un spațiu privat în care o persoană poate să se oprească pentru o clipă și să scrie ce se întâmplă în interior — nu perfect, nu ca într-un jurnal frumos, nu pentru a impresiona pe cineva, ci sincer.',
      ],
    },
    questions: {
      items: [
        'Ce simt?',
        'Ce cred acum?',
        'Ce a adăugat mintea mea acestei situații?',
        'La ce reacționează corpul meu?',
        'Ce poveste se repetă?',
        'Ce se simte adevărat și ce poate doar se simte familiar?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys îi oferă utilizatorului un spațiu unde poate prinde aceste momente atunci când apar sau după ce au trecut. O convingere care a devenit puternică. O emoție care a venit brusc. O reacție care s-a simțit mai mare decât situația. Un gând care s-a întors iar și iar. O senzație în corp care părea să poarte ceva mai profund.',
        'În timp, aceste mici momente scrise pot începe să formeze o oglindă liniștită.',
        'Nu o oglindă care judecă.',
        'Nu o oglindă care spune: „Asta ești tu.”',
        'Ci o oglindă care ajută utilizatorul să observe ce s-a repetat.',
      ],
    },
    separation: {
      paragraphs: [
        'Aplicația poate ajuta la separarea momentului de povestea din jurul lui, emoției de convingere, reacției corpului de identitatea construită în jurul ei și necunoscutului de concluziile care au venit prea repede.',
        'Acesta este inima Miravelys.',
        'Nu îi spune utilizatorului care este adevărul.',
        'Nu diagnostichează.',
        'Nu înlocuiește terapia.',
        'Nu decide cine este cineva.',
        'În schimb, îl ajută să privească mai blând.',
      ],
    },
    humility: {
      paragraphs: ['Miravelys a fost construit pentru aceste mici momente de vedere sinceră.'],
      insights: [
        'Să vadă: acesta a fost un sentiment, nu un fapt.',
        'Aceasta a fost o frică, nu întreaga mea identitate.',
        'Această convingere poate m-a protejat cândva, dar poate nu trebuie să trăiesc din ea pentru totdeauna.',
        'Această poveste a apărut repede, dar poate sub ea există ceva mai liniștit.',
      ],
    },
    grounding: {
      paragraphs: [
        'Dar aplicația nu este doar despre scris și reflecție.',
        'Pentru că uneori, când corpul este copleșit, mintea nu poate privi limpede. Uneori primul pas nu este analiza. Primul pas este să respiri, să simți corpul, să încetinești și să revii în prezent.',
        'De aceea Miravelys include și experiențe de ancorare: respirație, atenție la senzații, meditație, sprijin pentru somn și călătorii sonore liniștitoare.',
      ],
    },
    sounds: {
      paragraphs: [
        'Sunetele din Miravelys au fost create special pentru această lume.',
        'Nu sunt doar muzică de fundal. Sunt gândite ca locuri moi în care să te poți așeza — atmosfere blânde care ajută corpul să devină mai liniștit, respirația mai lentă și momentul puțin mai sigur.',
        'Aceste sunete unice de ancorare fac parte din limbajul emoțional al Miravelys. Ele ajută aplicația să se simtă mai puțin ca un instrument și mai mult ca un loc privat în care utilizatorul poate reveni.',
      ],
      types: [
        'Unele sunete sunt create pentru respirație.',
        'Unele sunt create pentru meditație.',
        'Unele sunt create pentru somn.',
        'Unele sunt create pentru momentele în care utilizatorul nu are nevoie de mai multe cuvinte, ci de un spațiu mai blând în jurul corpului.',
      ],
    },
    places: {
      items: [
        'Un loc unde să respiri.',
        'Un loc unde să scrii.',
        'Un loc unde să asculți.',
        'Un loc unde să observi ce s-a repetat.',
        'Un loc unde corpul se poate calma înainte ca mintea să încerce să înțeleagă totul.',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys s-a născut din credința că oamenii nu au mereu nevoie să fie împinși, reparați sau să li se spună cine sunt.',
        'Uneori au nevoie de un spațiu liniștit unde să se întâlnească sincer cu ei înșiși.',
        'Un spațiu în care un moment încâlcit poate deveni puțin mai clar.',
        'Un spațiu în care o convingere veche poate fi văzută în sfârșit.',
        'Un spațiu în care corpul se poate înmuia înainte ca mintea să decidă.',
        'Un spațiu în care utilizatorul rămâne în control.',
        'Un spațiu în care adevărul este apropiat blând, nu forțat.',
      ],
      audience: [
        'Pentru persoana care simte prea mult și vrea să înțeleagă cu blândețe.',
        'Pentru persoana care repetă aceeași poveste interioară și vrea să vadă de unde începe.',
        'Pentru persoana care vrea să separe ce s-a întâmplat de ce a adăugat mintea.',
        'Pentru persoana care are nevoie de calm înainte de claritate.',
        'Pentru persoana care nu încearcă să devină altcineva, ci să se apropie de ceea ce se simte sincer în interior.',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys nu este despre a repara cine ești.',
        'Este despre a te ajuta să te întorci la tine — încet, în privat și cu mai multă blândețe decât înainte.',
      ],
    },
  },
};

const fr = {
  eyebrow: 'Le commencement',
  title: 'Comment Miravelys est né',
  cta: 'Revenir à soi',
  blockLabels: {
    search: 'La recherche',
    whatMindAdds: 'Ce que l\'esprit ajoute',
    writing: 'Écrire avec honnêteté',
    questions: 'Questions sincères',
    mirror: 'Un miroir silencieux',
    separation: 'Séparation douce',
    humility: 'Ce que nous ne prétendons pas',
    grounding: 'L\'ancrage d\'abord',
    sounds: 'Sons apaisants',
    places: 'Des lieux où se poser',
    intention: 'Pour qui c\'est fait',
    finale: 'Revenir à soi',
  },
  intro: [
    'Miravelys n\'est pas né comme une simple idée d\'application de plus.',
    'Il a commencé bien avant — dans une recherche personnelle et silencieuse.',
    'Le genre de recherche qui commence lorsqu\'on se demande pourquoi certains moments font plus mal qu\'ils ne le devraient. Pourquoi une seule phrase dite par quelqu\'un peut rester dans l\'esprit pendant des heures. Pourquoi une petite situation peut devenir toute une histoire sur qui l\'on est, ce que l\'on mérite ou ce que signifie la vie.',
  ],
  blocks: {
    search: {
      paragraphs: ['Au début, j\'ai cherché à l\'extérieur de moi.'],
      lines: [
        'Dans les livres.',
        'Dans les idées.',
        'Dans le silence.',
        'Dans les questions.',
        'Dans l\'espoir qu\'il existait quelque part une réponse claire capable d\'expliquer pourquoi l\'esprit crée autant de douleur autour de moments simples.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'Mais peu à peu, j\'ai commencé à comprendre quelque chose d\'important : très souvent, ce qui nous blesse n\'est pas seulement ce qui s\'est passé.',
        'C\'est ce que nous ajoutons à ce qui s\'est passé.',
        'Et à force de répéter cela encore et encore, nous pouvons commencer à vivre à l\'intérieur d\'histoires qui nous ont peut-être protégés autrefois, mais qui ne nous appartiennent plus vraiment.',
      ],
      transforms: [
        'Un regard devient un rejet.',
        'Une pause devient une preuve.',
        'Une erreur devient une identité.',
        'Un ressenti devient un fait.',
        'Une peur devient une croyance.',
      ],
    },
    writing: {
      paragraphs: [
        'Miravelys est né de cette prise de conscience.',
        'Il a été créé comme un espace privé où une personne peut s\'arrêter un instant et écrire ce qui se passe à l\'intérieur — pas de manière parfaite, pas comme une belle page de journal, pas pour impressionner qui que ce soit, mais avec honnêteté.',
      ],
    },
    questions: {
      items: [
        'Qu\'est-ce que je ressens ?',
        'Qu\'est-ce que je crois en ce moment ?',
        'Qu\'est-ce que mon esprit a ajouté à cette situation ?',
        'À quoi mon corps réagit-il ?',
        'Quelle histoire se répète ?',
        'Qu\'est-ce qui semble vrai, et qu\'est-ce qui semble seulement familier ?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys offre à l\'utilisateur un espace pour saisir ces moments lorsqu\'ils apparaissent, ou après leur passage. Une croyance devenue forte. Une émotion arrivée soudainement. Une réaction plus grande que la situation. Une pensée qui revenait sans cesse. Une sensation corporelle qui semblait porter quelque chose de plus profond.',
        'Avec le temps, ces petits moments écrits peuvent commencer à former un miroir silencieux.',
        'Pas un miroir qui juge.',
        'Pas un miroir qui dit : « Voilà qui tu es. »',
        'Mais un miroir qui aide l\'utilisateur à remarquer ce qui s\'est répété.',
      ],
    },
    separation: {
      paragraphs: [
        'L\'application peut aider à séparer le moment de l\'histoire qui l\'entoure, l\'émotion de la croyance, la réaction du corps de l\'identité construite autour d\'elle, et l\'inconnu des conclusions arrivées trop vite.',
        'C\'est le cœur de Miravelys.',
        'Il ne dit pas à l\'utilisateur quelle est la vérité.',
        'Il ne diagnostique pas.',
        'Il ne remplace pas une thérapie.',
        'Il ne décide pas qui est une personne.',
        'Il aide plutôt l\'utilisateur à regarder avec plus de douceur.',
      ],
    },
    humility: {
      paragraphs: ['Miravelys a été construit pour ces petits moments de vision honnête.'],
      insights: [
        'À voir : c\'était un ressenti, pas un fait.',
        'C\'était une peur, pas toute mon identité.',
        'Cette croyance m\'a peut-être protégé autrefois, mais peut-être que je n\'ai plus besoin de vivre à partir d\'elle pour toujours.',
        'Cette histoire est apparue rapidement, mais peut-être qu\'il y a quelque chose de plus calme en dessous.',
      ],
    },
    grounding: {
      paragraphs: [
        'Mais l\'application ne parle pas seulement d\'écriture et de réflexion.',
        'Parce que parfois, lorsque le corps est submergé, l\'esprit ne peut pas regarder clairement. Parfois, la première étape n\'est pas d\'analyser. La première étape est de respirer, sentir le corps, ralentir et revenir au présent.',
        'C\'est pourquoi Miravelys inclut aussi des expériences d\'ancrage : respiration, attention aux sensations, méditation, soutien au sommeil et voyages sonores apaisants.',
      ],
    },
    sounds: {
      paragraphs: [
        'Les sons de Miravelys ont été créés spécialement pour cet univers.',
        'Ce ne sont pas de simples musiques de fond. Ils sont conçus comme des endroits doux où se poser — des atmosphères délicates qui aident le corps à devenir plus calme, la respiration plus lente et le moment un peu plus sûr.',
        'Ces sons d\'ancrage uniques font partie du langage émotionnel de Miravelys. Ils aident l\'application à ressembler moins à un outil et davantage à un lieu privé où l\'utilisateur peut revenir.',
      ],
      types: [
        'Certains sons sont faits pour respirer.',
        'Certains sont faits pour méditer.',
        'Certains sont faits pour dormir.',
        'Certains sont faits pour les moments où l\'utilisateur n\'a pas besoin de plus de mots, mais d\'un espace plus doux autour du corps.',
      ],
    },
    places: {
      items: [
        'Un lieu pour respirer.',
        'Un lieu pour écrire.',
        'Un lieu pour écouter.',
        'Un lieu pour remarquer ce qui s\'est répété.',
        'Un lieu où le corps peut se calmer avant que l\'esprit essaie de tout comprendre.',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys est né de la conviction que les gens n\'ont pas toujours besoin d\'être poussés, réparés ou définis par quelqu\'un d\'autre.',
        'Parfois, ils ont besoin d\'un espace silencieux où ils peuvent se rencontrer avec honnêteté.',
        'Un espace où un moment emmêlé peut devenir un peu plus clair.',
        'Un espace où une ancienne croyance peut enfin être vue.',
        'Un espace où le corps peut s\'adoucir avant que l\'esprit décide.',
        'Un espace où l\'utilisateur reste en contrôle.',
        'Un espace où la vérité est approchée doucement, sans être forcée.',
      ],
      audience: [
        'Pour la personne qui ressent trop et veut comprendre avec douceur.',
        'Pour la personne qui répète la même histoire intérieure et veut voir où elle commence.',
        'Pour la personne qui veut séparer ce qui s\'est passé de ce que l\'esprit a ajouté.',
        'Pour la personne qui a besoin de calme avant la clarté.',
        'Pour la personne qui ne cherche pas à devenir quelqu\'un d\'autre, mais à se rapprocher de ce qui semble honnête à l\'intérieur.',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys ne cherche pas à réparer qui vous êtes.',
        'Il vous aide à revenir à vous-même — lentement, en privé, et avec plus de douceur qu\'avant.',
      ],
    },
  },
};

const hi = {
  eyebrow: 'शुरुआत',
  title: 'Miravelys कैसे जन्मा',
  cta: 'अपने पास लौटें',
  blockLabels: {
    search: 'खोज',
    whatMindAdds: 'मन क्या जोड़ता है',
    writing: 'ईमानदारी से लिखना',
    questions: 'ईमानदार सवाल',
    mirror: 'एक शांत mirror',
    separation: 'कोमल अलगाव',
    humility: 'जो हम दावा नहीं करते',
    grounding: 'पहले grounding',
    sounds: 'शांत करने वाली आवाज़ें',
    places: 'उतरने की जगहें',
    intention: 'यह किसके लिए है',
    finale: 'अपने पास लौटना',
  },
  intro: [
    'Miravelys सिर्फ़ एक और app idea के रूप में नहीं जन्मा।',
    'यह बहुत पहले शुरू हुआ — एक शांत, निजी खोज में।',
    'ऐसी खोज, जो तब शुरू होती है जब आप खुद से पूछने लगते हैं कि कुछ पल जितना दर्द देने चाहिए, उससे ज़्यादा क्यों दर्द देते हैं। किसी दूसरे इंसान की एक बात घंटों तक मन में क्यों रहती है। एक छोटी-सी स्थिति आपके बारे में, आपकी क़ीमत के बारे में, या जीवन के अर्थ के बारे में पूरी कहानी कैसे बन जाती है।',
  ],
  blocks: {
    search: {
      paragraphs: ['शुरू में मैंने जवाब अपने बाहर खोजे।'],
      lines: [
        'किताबों में।',
        'विचारों में।',
        'चुप्पी में।',
        'सवालों में।',
        'इस उम्मीद में कि कहीं कोई साफ़ जवाब होगा, जो समझा देगा कि मन साधारण पलों के चारों ओर इतना दर्द क्यों बना देता है।',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'लेकिन धीरे-धीरे मैंने एक ज़रूरी बात समझनी शुरू की: कई बार हमें सिर्फ़ वह नहीं दुखाता जो हुआ।',
        'हमें वह दुखाता है जो हम उस घटना में जोड़ देते हैं।',
        'और जब यह बार-बार दोहरता है, तो हम ऐसी कहानियों के अंदर जीने लगते हैं जो कभी हमें बचाती थीं, लेकिन अब सच में हमारी नहीं रहीं।',
      ],
      transforms: [
        'एक नज़र rejection बन जाती है।',
        'एक pause proof बन जाता है।',
        'एक गलती identity बन जाती है।',
        'एक feeling fact बन जाती है।',
        'एक डर belief बन जाता है।',
      ],
    },
    writing: {
      paragraphs: [
        'Miravelys इसी एहसास से बना।',
        'यह एक private जगह के रूप में बनाया गया, जहाँ इंसान थोड़ी देर रुक सके और लिख सके कि अंदर क्या हो रहा है — perfect तरीके से नहीं, सुंदर diary की तरह नहीं, किसी को impress करने के लिए नहीं, बल्कि honestly.',
      ],
    },
    questions: {
      items: [
        'मैं क्या महसूस कर रहा हूँ?',
        'मैं अभी किस बात पर विश्वास कर रहा हूँ?',
        'मेरे मन ने इस situation में क्या जोड़ दिया?',
        'मेरा शरीर किस बात पर react कर रहा है?',
        'कौन-सी कहानी बार-बार लौट रही है?',
        'क्या सच जैसा महसूस होता है, और क्या शायद सिर्फ़ familiar लगता है?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys user को ये moments capture करने की जगह देता है — जब वे आते हैं, या उनके गुजर जाने के बाद। एक belief जो ज़ोर से महसूस होने लगा। एक emotion जो अचानक आया। एक reaction जो situation से बड़ा लगा। एक thought जो बार-बार लौटता रहा। शरीर का एक एहसास, जैसे वह शब्दों से गहरी कोई चीज़ उठा रहा हो।',
        'और समय के साथ, ये छोटे लिखे हुए moments एक शांत mirror बन सकते हैं।',
        'ऐसा mirror जो judge नहीं करता।',
        'ऐसा mirror जो नहीं कहता, "तुम यही हो।"',
        'बल्कि ऐसा mirror जो user को notice करने में मदद करता है कि क्या repeat होता रहा।',
      ],
    },
    separation: {
      paragraphs: [
        'App moment को उसके चारों ओर बनी story से, emotion को belief से, body reaction को उसके around बनी identity से, और unknown को जल्दी आए conclusions से अलग देखने में मदद कर सकता है।',
        'यही Miravelys का heart है।',
        'यह user को नहीं बताता कि truth क्या है।',
        'यह diagnose नहीं करता।',
        'यह therapy को replace नहीं करता।',
        'यह decide नहीं करता कि कोई कौन है।',
        'इसके बजाय, यह user को ज़्यादा gently देखने में मदद करता है।',
      ],
    },
    humility: {
      paragraphs: ['Miravelys honest seeing के इन्हीं छोटे moments के लिए बनाया गया।'],
      insights: [
        'देखने के लिए: यह feeling थी, fact नहीं।',
        'यह डर था, मेरी पूरी identity नहीं।',
        'यह belief शायद कभी मुझे protect करता था, लेकिन शायद मुझे हमेशा इसी से जीने की ज़रूरत नहीं।',
        'यह story जल्दी आ गई, लेकिन शायद इसके नीचे कुछ ज़्यादा शांत है।',
      ],
    },
    grounding: {
      paragraphs: [
        'लेकिन app सिर्फ़ writing और reflection के बारे में नहीं है।',
        'क्योंकि कभी-कभी, जब body overwhelmed होती है, mind साफ़ नहीं देख पाता। कभी-कभी पहला कदम analyze करना नहीं होता। पहला कदम होता है breathe करना, body को feel करना, slow down करना, और present में लौटना।',
        'इसीलिए Miravelys में grounding experiences भी हैं: breathing, feeling awareness, meditation, sleep support और calming sound journeys.',
      ],
    },
    sounds: {
      paragraphs: [
        'Miravelys के sounds खास इसी world के लिए बनाए गए हैं।',
        'वे सिर्फ़ background music नहीं हैं। वे soft places to land जैसे महसूस होने के लिए बनाए गए हैं — gentle atmospheres जो body को शांत, breath को धीमा, और moment को थोड़ा safer महसूस करने में मदद करते हैं।',
        'ये unique grounding sounds Miravelys की emotional language का हिस्सा हैं। वे app को सिर्फ़ tool जैसा नहीं, बल्कि एक private place जैसा महसूस कराते हैं जहाँ user लौट सकता है।',
      ],
      types: [
        'कुछ sounds breathing के लिए बने हैं।',
        'कुछ meditation के लिए।',
        'कुछ sleep के लिए।',
        'कुछ उन moments के लिए जब user को और words नहीं चाहिए, बल्कि body के around एक softer space चाहिए।',
      ],
    },
    places: {
      items: [
        'एक जगह breathe करने के लिए।',
        'एक जगह लिखने के लिए।',
        'एक जगह सुनने के लिए।',
        'एक जगह notice करने के लिए कि क्या repeat हुआ।',
        'एक जगह body को calm करने के लिए, इससे पहले कि mind सब कुछ समझने की कोशिश करे।',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys इस विश्वास से जन्मा कि लोगों को हमेशा push, fix, या define किए जाने की ज़रूरत नहीं होती।',
        'कभी-कभी उन्हें एक शांत जगह चाहिए, जहाँ वे खुद से honestly मिल सकें।',
        'एक जगह जहाँ tangled moment थोड़ा clearer हो सके।',
        'एक जगह जहाँ old belief आखिरकार दिखाई दे सके।',
        'एक जगह जहाँ body soft हो सके, इससे पहले कि mind decide करे।',
        'एक जगह जहाँ user control में रहे।',
        'एक जगह जहाँ truth को gently approach किया जाए, force नहीं किया जाए।',
      ],
      audience: [
        'Miravelys उस व्यक्ति के लिए है जो बहुत महसूस करता है और उसे softly समझना चाहता है।',
        'उस व्यक्ति के लिए जो वही inner story बार-बार repeat करता है और देखना चाहता है कि वह कहाँ शुरू होती है।',
        'उस व्यक्ति के लिए जो अलग करना चाहता है कि क्या हुआ और mind ने क्या जोड़ा।',
        'उस व्यक्ति के लिए जिसे clarity से पहले calm चाहिए।',
        'उस व्यक्ति के लिए जो कोई और बनने की कोशिश नहीं कर रहा, बल्कि अंदर जो honest लगता है उसके करीब आना चाहता है।',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys यह नहीं है कि आप कौन हैं उसे fix करे।',
        'यह आपको अपने पास लौटने में मदद करने के बारे में है — धीरे-धीरे, privately, और पहले से ज़्यादा kindness के साथ।',
      ],
    },
  },
};

const zh = {
  eyebrow: '起源',
  title: 'Miravelys 是如何诞生的',
  cta: '回到自己',
  blockLabels: {
    search: '寻找',
    whatMindAdds: '头脑添加了什么',
    writing: '诚实地书写',
    questions: '诚实的问题',
    mirror: '一面安静的镜子',
    separation: '温柔地分开',
    humility: '我们不声称什么',
    grounding: '先 grounding',
    sounds: '安抚的声音',
    places: '可以落脚的地方',
    intention: '为谁而存在',
    finale: '回到自己',
  },
  intro: [
    'Miravelys 并不是作为"又一个 app 想法"诞生的。',
    '它开始得更早——开始于一段安静的个人寻找。',
    '那种寻找，会在人开始问自己一些问题时出现：为什么有些时刻比它本该造成的伤害更痛？为什么别人一句话可以在脑海里停留好几个小时？为什么一件很小的事情，能变成关于"我是谁""我配不配""生活到底意味着什么"的一整套故事？',
  ],
  blocks: {
    search: {
      paragraphs: ['一开始，我在外面寻找答案。'],
      lines: [
        '在书里。',
        '在想法里。',
        '在沉默里。',
        '在问题里。',
        '在一种希望里：希望某个地方有一个清晰的答案，可以解释为什么头脑会围绕简单的时刻制造那么多痛苦。',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        '但慢慢地，我开始明白一件重要的事：很多时候，伤害我们的不只是发生了什么。',
        '还有我们为它添加了什么。',
        '当这一切反复发生，我们可能开始活在一些故事里——它们曾经保护过我们，但已经不再真正属于我们。',
      ],
      transforms: [
        '一个眼神变成了被拒绝。',
        '一次停顿变成了证据。',
        '一个错误变成了身份。',
        '一种感受变成了事实。',
        '一个恐惧变成了信念。',
      ],
    },
    writing: {
      paragraphs: [
        'Miravelys 正是从这个看见中被创造出来的。',
        '它被设计成一个私密空间，让人可以停下来一会儿，把内在正在发生的事情写下来——不是为了写得完美，不是为了写成漂亮的日记，也不是为了取悦任何人，而是诚实地写。',
      ],
    },
    questions: {
      items: [
        '我正在感受什么？',
        '我现在相信了什么？',
        '我的头脑给这个情况添加了什么？',
        '我的身体在对什么产生反应？',
        '哪个故事一直在重复？',
        '什么感觉像是真的，什么也许只是熟悉？',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys 给用户一个空间，让他们在这些时刻出现时，或在它们过去之后，把它们记录下来。一个突然变得很响的信念。一种忽然到来的情绪。一个比情况本身更强烈的反应。一个不断回来的念头。一种身体感觉，像是在承载比语言更深的东西。',
        '随着时间推移，这些小小的书写时刻，可能会慢慢形成一面安静的镜子。',
        '不是一面评判你的镜子。',
        '不是一面告诉你"这就是你"的镜子。',
        '而是一面帮助用户看见什么一直在重复的镜子。',
      ],
    },
    separation: {
      paragraphs: [
        '这个 app 可以帮助用户把当下发生的时刻和围绕它产生的故事分开，把情绪和信念分开，把身体反应和围绕它建立起来的身份感分开，也把未知和太快到来的结论分开。',
        '这就是 Miravelys 的核心。',
        '它不会告诉用户什么是真理。',
        '它不会诊断。',
        '它不会替代治疗。',
        '它不会决定一个人是谁。',
        '相反，它帮助用户以更温柔的方式看见。',
      ],
    },
    humility: {
      paragraphs: ['Miravelys 是为这些诚实看见的小瞬间而建立的。'],
      insights: [
        '看见：这是一种感受，不是事实。',
        '这是一个恐惧，不是我的全部身份。',
        '这个信念也许曾经保护过我，但也许我不需要永远从它出发生活。',
        '这个故事来得很快，但也许它下面还有某种更安静的东西。',
      ],
    },
    grounding: {
      paragraphs: [
        '但这个 app 不只关于书写和反思。',
        '因为有时候，当身体被压得太满，头脑就无法看清。有时候第一步不是分析。第一步是呼吸，感受身体，慢下来，回到当下。',
        '所以 Miravelys 也包含 grounding 体验：呼吸、感受觉察、冥想、睡眠支持，以及安静的声音旅程。',
      ],
    },
    sounds: {
      paragraphs: [
        'Miravelys 里的声音，是专门为这个世界创造的。',
        '它们不只是背景音乐。它们被设计成像柔软的落脚之处——温柔的氛围，帮助身体更安静，呼吸更慢，让这一刻感觉稍微安全一点。',
        '这些独特的 grounding 声音，是 Miravelys 情感语言的一部分。它们让这个 app 不只是一个工具，而更像是用户可以回来的私密空间。',
      ],
      types: [
        '有些声音为呼吸而做。',
        '有些为冥想而做。',
        '有些为睡眠而做。',
        '有些为那些不需要更多语言、只需要身体周围有一个更柔软空间的时刻而做。',
      ],
    },
    places: {
      items: [
        '一个可以呼吸的地方。',
        '一个可以书写的地方。',
        '一个可以倾听的地方。',
        '一个可以看见什么一直在重复的地方。',
        '一个让身体先安静下来，再让头脑尝试理解一切的地方。',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys 诞生于这样一种相信：人们并不总是需要被推动、被修复，或被告诉自己是谁。',
        '有时候，他们需要的是一个安静的空间，在那里可以诚实地遇见自己。',
        '一个让纠结的时刻变得稍微清晰一点的空间。',
        '一个让旧信念终于被看见的空间。',
        '一个让身体在头脑做决定之前先柔软下来的空间。',
        '一个用户始终保持掌控的空间。',
        '一个温柔靠近真实，而不是强迫真实出现的空间。',
      ],
      audience: [
        'Miravelys 为那些感受太多、却想温柔理解自己的人而存在。',
        '为那些反复经历同一个内在故事、并想看见它从哪里开始的人而存在。',
        '为那些想把真正发生的事和头脑添加的东西分开的人而存在。',
        '为那些在清晰之前需要平静的人而存在。',
        '为那些不是想变成别人，而是想靠近内在诚实感的人而存在。',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys 不是为了修复你是谁。',
        '它是为了帮助你回到自己——慢慢地，私密地，并比从前更加温柔地。',
      ],
    },
  },
};

const de = {
  eyebrow: 'Der Anfang',
  title: 'Wie Miravelys entstanden ist',
  cta: 'Zu dir zurückkehren',
  blockLabels: {
    search: 'Die Suche',
    whatMindAdds: 'Was der Verstand hinzufügt',
    writing: 'Ehrlich schreiben',
    questions: 'Ehrliche Fragen',
    mirror: 'Ein stiller Spiegel',
    separation: 'Sanfte Trennung',
    humility: 'Was wir nicht behaupten',
    grounding: 'Zuerst Erdung',
    sounds: 'Beruhigende Klänge',
    places: 'Orte zum Ankommen',
    intention: 'Für wen es ist',
    finale: 'Zu dir zurückkehren',
  },
  intro: [
    'Miravelys ist nicht einfach als eine weitere App-Idee entstanden.',
    'Es begann viel früher — in einer stillen persönlichen Suche.',
    'In der Art von Suche, die beginnt, wenn man sich fragt, warum manche Momente mehr weh tun, als sie sollten. Warum ein einziger Satz eines anderen Menschen stundenlang im Kopf bleiben kann. Warum eine kleine Situation zu einer ganzen Geschichte darüber werden kann, wer man ist, was man verdient oder was das Leben bedeutet.',
  ],
  blocks: {
    search: {
      paragraphs: ['Am Anfang suchte ich außerhalb von mir.'],
      lines: [
        'In Büchern.',
        'In Ideen.',
        'In der Stille.',
        'In Fragen.',
        'In der Hoffnung, dass es irgendwo eine klare Antwort gibt, die erklären kann, warum der Verstand um einfache Momente so viel Schmerz erschafft.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'Doch langsam begann ich etwas Wichtiges zu verstehen: Oft verletzt uns nicht nur das, was passiert ist.',
        'Es ist das, was wir dem Geschehen hinzufügen.',
        'Und wenn sich das immer wieder wiederholt, können wir beginnen, in Geschichten zu leben, die uns einst geschützt haben, aber nicht mehr wirklich zu uns gehören.',
      ],
      transforms: [
        'Ein Blick wird zu Ablehnung.',
        'Eine Pause wird zu einem Beweis.',
        'Ein Fehler wird zu Identität.',
        'Ein Gefühl wird zu einer Tatsache.',
        'Eine Angst wird zu einer Überzeugung.',
      ],
    },
    writing: {
      paragraphs: [
        'Aus dieser Erkenntnis heraus entstand Miravelys.',
        'Es wurde als privater Ort geschaffen, an dem ein Mensch für einen Moment innehalten und aufschreiben kann, was innen geschieht — nicht perfekt, nicht wie eine schöne Tagebuchseite, nicht um jemanden zu beeindrucken, sondern ehrlich.',
      ],
    },
    questions: {
      items: [
        'Was fühle ich?',
        'Woran glaube ich gerade?',
        'Was hat mein Verstand zu dieser Situation hinzugefügt?',
        'Worauf reagiert mein Körper?',
        'Welche Geschichte wiederholt sich?',
        'Was fühlt sich wahr an, und was fühlt sich vielleicht nur vertraut an?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys gibt dem Nutzer einen Raum, um diese Momente festzuhalten, wenn sie erscheinen oder nachdem sie vergangen sind. Eine Überzeugung, die laut wurde. Eine Emotion, die plötzlich kam. Eine Reaktion, die größer wirkte als die Situation. Ein Gedanke, der immer wieder zurückkehrte. Ein Körpergefühl, das etwas Tieferes zu tragen schien.',
        'Mit der Zeit können diese kleinen geschriebenen Momente zu einem stillen Spiegel werden.',
        'Nicht zu einem Spiegel, der urteilt.',
        'Nicht zu einem Spiegel, der sagt: „Das bist du."',
        'Sondern zu einem Spiegel, der hilft zu bemerken, was sich wiederholt hat.',
      ],
    },
    separation: {
      paragraphs: [
        'Die App kann helfen, den Moment von der Geschichte darum zu trennen, die Emotion von der Überzeugung, die Körperreaktion von der Identität, die darum aufgebaut wurde, und das Unbekannte von den Schlussfolgerungen, die zu schnell kamen.',
        'Das ist das Herz von Miravelys.',
        'Es sagt dem Nutzer nicht, was die Wahrheit ist.',
        'Es diagnostiziert nicht.',
        'Es ersetzt keine Therapie.',
        'Es entscheidet nicht, wer jemand ist.',
        'Stattdessen hilft es dem Nutzer, sanfter hinzusehen.',
      ],
    },
    humility: {
      paragraphs: ['Miravelys wurde für diese kleinen Momente ehrlichen Sehens geschaffen.'],
      insights: [
        'Zu sehen: Das war ein Gefühl, keine Tatsache.',
        'Das war eine Angst, nicht meine ganze Identität.',
        'Diese Überzeugung hat mich vielleicht einmal geschützt, aber vielleicht muss ich nicht für immer aus ihr heraus leben.',
        'Diese Geschichte erschien schnell, aber vielleicht liegt darunter etwas Leiseres.',
      ],
    },
    grounding: {
      paragraphs: [
        'Aber die App handelt nicht nur vom Schreiben und Reflektieren.',
        'Denn manchmal, wenn der Körper überfordert ist, kann der Verstand nicht klar sehen. Manchmal ist der erste Schritt nicht Analyse. Der erste Schritt ist zu atmen, den Körper zu spüren, langsamer zu werden und in die Gegenwart zurückzukehren.',
        'Darum enthält Miravelys auch Erdungserfahrungen: Atmung, Wahrnehmung von Gefühlen, Meditation, Schlafunterstützung und beruhigende Klangreisen.',
      ],
    },
    sounds: {
      paragraphs: [
        'Die Klänge in Miravelys wurden speziell für diese Welt geschaffen.',
        'Sie sind nicht einfach Hintergrundmusik. Sie sind so gestaltet, dass sie sich wie weiche Orte zum Ankommen anfühlen — sanfte Atmosphären, die dem Körper helfen, ruhiger zu werden, dem Atem, langsamer zu werden, und dem Moment, sich etwas sicherer anzufühlen.',
        'Diese einzigartigen Erdungsklänge sind Teil der emotionalen Sprache von Miravelys. Sie helfen der App, sich weniger wie ein Werkzeug anzufühlen und mehr wie ein privater Ort, zu dem der Nutzer zurückkehren kann.',
      ],
      types: [
        'Manche Klänge sind fürs Atmen gemacht.',
        'Manche für Meditation.',
        'Manche für den Schlaf.',
        'Manche für die Momente, in denen der Nutzer keine weiteren Worte braucht, sondern einen weicheren Raum um den Körper.',
      ],
    },
    places: {
      items: [
        'Ein Ort zum Atmen.',
        'Ein Ort zum Schreiben.',
        'Ein Ort zum Zuhören.',
        'Ein Ort, um zu bemerken, was sich wiederholt hat.',
        'Ein Ort, um den Körper zu beruhigen, bevor der Verstand versucht, alles zu verstehen.',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys entstand aus dem Glauben, dass Menschen nicht immer gedrängt, repariert oder definiert werden müssen.',
        'Manchmal brauchen sie einen stillen Raum, in dem sie sich selbst ehrlich begegnen können.',
        'Einen Raum, in dem ein verstrickter Moment etwas klarer werden kann.',
        'Einen Raum, in dem eine alte Überzeugung endlich gesehen werden kann.',
        'Einen Raum, in dem der Körper weicher werden kann, bevor der Verstand entscheidet.',
        'Einen Raum, in dem der Nutzer die Kontrolle behält.',
        'Einen Raum, in dem Wahrheit sanft berührt wird, nicht erzwungen.',
      ],
      audience: [
        'Für den Menschen, der zu viel fühlt und es sanft verstehen möchte.',
        'Für den Menschen, der dieselbe innere Geschichte immer wieder wiederholt und sehen möchte, wo sie beginnt.',
        'Für den Menschen, der trennen möchte, was passiert ist, von dem, was der Verstand hinzugefügt hat.',
        'Für den Menschen, der Ruhe vor Klarheit braucht.',
        'Für den Menschen, der nicht versucht, jemand anderes zu werden, sondern dem näherkommen möchte, was sich innen ehrlich anfühlt.',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys geht nicht darum, zu reparieren, wer du bist.',
        'Es geht darum, dir zu helfen, zu dir selbst zurückzukehren — langsam, privat und mit mehr Freundlichkeit als zuvor.',
      ],
    },
  },
};

const ja = {
  eyebrow: 'はじまり',
  title: 'Miravelys はどのように生まれたのか',
  cta: '自分自身に戻る',
  blockLabels: {
    search: '探求',
    whatMindAdds: '心が加えるもの',
    writing: '正直に書く',
    questions: '正直な問い',
    mirror: '静かな鏡',
    separation: 'やさしい分離',
    humility: '私たちが主張しないこと',
    grounding: 'まずグラウンディング',
    sounds: '落ち着く音',
    places: '降り立てる場所',
    intention: '誰のためのものか',
    finale: '自分自身に戻る',
  },
  intro: [
    'Miravelys は、ただの新しいアプリのアイデアとして生まれたわけではありません。',
    'それはもっと前から始まっていました。静かな、個人的な探求の中で。',
    'なぜ、ある瞬間は本来よりも深く傷つくのか。なぜ、誰かのたった一言が何時間も心に残るのか。なぜ、小さな出来事が「自分は誰なのか」「自分には何の価値があるのか」「人生とは何なのか」という大きな物語に変わってしまうのか。そんな問いから始まる探求です。',
  ],
  blocks: {
    search: {
      paragraphs: ['最初、私は自分の外側に答えを探していました。'],
      lines: [
        '本の中に。',
        '考えの中に。',
        '沈黙の中に。',
        '問いの中に。',
        'どこかに、心がなぜ小さな瞬間の周りにこれほど多くの痛みを作り出すのかを説明してくれる、明確な答えがあるのではないかと思っていました。',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'けれど少しずつ、大切なことが見えてきました。私たちを傷つけるのは、起きた出来事そのものだけではないことが多いのです。',
        'それは、起きたことに私たちが加えたものです。',
        'そしてそれを何度も繰り返すうちに、かつては自分を守ってくれていたけれど、もう本当には自分のものではない物語の中で生きるようになることがあります。',
      ],
      transforms: [
        'ひとつの視線が拒絶になる。',
        'ひとつの沈黙が証拠になる。',
        'ひとつの間違いが自己像になる。',
        'ひとつの感情が事実になる。',
        'ひとつの恐れが信念になる。',
      ],
    },
    writing: {
      paragraphs: [
        'Miravelys は、その気づきから作られました。',
        '人が一瞬立ち止まり、自分の内側で起きていることを書き留められる、プライベートな場所として作られました。完璧に書くためではありません。美しい日記を書くためでもありません。誰かに見せるためでもありません。ただ、正直に書くためです。',
      ],
    },
    questions: {
      items: [
        '私は何を感じているのか。',
        '今、何を信じているのか。',
        'この状況に、心は何を加えたのか。',
        '身体は何に反応しているのか。',
        'どんな物語が繰り返されているのか。',
        '何が本当のように感じられ、何がただ慣れ親しんだものなのか。',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys は、そうした瞬間が現れたとき、または過ぎ去った後に、それを記録できる空間をユーザーに提供します。強くなった信念。突然やってきた感情。出来事よりも大きく感じられる反応。何度も戻ってくる思考。言葉よりも深い何かを抱えているような身体感覚。',
        '時間が経つにつれて、そうした小さな書かれた瞬間は、静かな鏡のようになっていきます。',
        '裁く鏡ではありません。',
        '「これがあなたです」と決めつける鏡でもありません。',
        '繰り返されてきたものに気づくための鏡です。',
      ],
    },
    separation: {
      paragraphs: [
        'このアプリは、出来事そのものとその周りに生まれた物語、感情と信念、身体の反応とその周りに作られた自己像、そして未知のものと早すぎる結論を、やさしく分けて見る手助けをします。',
        'それが Miravelys の中心です。',
        'Miravelys は、ユーザーに「これが真実です」と告げるものではありません。',
        '診断するものではありません。',
        'セラピーに代わるものではありません。',
        'その人が誰なのかを決めるものでもありません。',
        'その代わりに、もっとやさしく見る手助けをします。',
      ],
    },
    humility: {
      paragraphs: ['Miravelys は、そうした小さな正直な気づきの瞬間のために作られました。'],
      insights: [
        'これは感情であって、事実ではなかった。',
        'これは恐れであって、私のすべてではなかった。',
        'この信念は、かつて私を守ってくれていたのかもしれない。でも、これからもずっとそれに従って生きる必要はないのかもしれない。',
        'この物語はすぐに現れた。でも、その奥にはもっと静かな何かがあるのかもしれない。',
      ],
    },
    grounding: {
      paragraphs: [
        'けれど、このアプリは書くことや振り返ることだけのためにあるのではありません。',
        '身体が圧倒されているとき、心ははっきり見ることができないことがあります。最初の一歩は分析ではないことがあります。最初の一歩は、呼吸すること。身体を感じること。ゆっくりすること。そして今ここに戻ることです。',
        'そのため Miravelys には、グラウンディングの体験も含まれています。呼吸、感覚への気づき、瞑想、睡眠サポート、そして落ち着きをもたらすサウンドジャーニーです。',
      ],
    },
    sounds: {
      paragraphs: [
        'Miravelys のサウンドは、この世界のために特別に作られました。',
        'それらはただの背景音楽ではありません。やわらかく降り立てる場所のように感じられるように作られています。身体が静まり、呼吸がゆっくりになり、その瞬間が少しだけ安全に感じられるような、やさしい空気です。',
        'これらの特別なグラウンディングサウンドは、Miravelys の感情の言語の一部です。アプリをただの道具ではなく、ユーザーが戻ってこられるプライベートな場所のように感じさせます。',
      ],
      types: [
        '呼吸のための音があります。',
        '瞑想のための音があります。',
        '眠りのための音があります。',
        'そして、もう言葉はいらず、ただ身体の周りにやわらかい空間が必要な瞬間のための音もあります。',
      ],
    },
    places: {
      items: [
        '呼吸する場所。',
        '書く場所。',
        '聴く場所。',
        '繰り返されてきたものに気づく場所。',
        '心がすべてを理解しようとする前に、身体を落ち着かせる場所。',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys は、人はいつも押される必要も、直される必要も、誰かに「あなたはこういう人です」と言われる必要もない、という思いから生まれました。',
        '時には、自分自身と正直に出会える静かな場所が必要です。',
        '絡まった瞬間が少しだけ明確になる場所。',
        '古い信念がようやく見える場所。',
        '心が決める前に、身体がやわらぐ場所。',
        'ユーザーが自分の主導権を持ち続けられる場所。',
        '真実に力で迫るのではなく、やさしく近づいていく場所。',
      ],
      audience: [
        'Miravelys は、たくさん感じすぎてしまい、それをやさしく理解したい人のためにあります。',
        '同じ内側の物語を何度も繰り返し、それがどこから始まっているのかを見たい人のためにあります。',
        '起きたことと、心がそこに加えたものを分けたい人のためにあります。',
        '明晰さの前に、まず静けさが必要な人のためにあります。',
        '別の誰かになろうとしているのではなく、内側で正直に感じられるものに近づきたい人のためにあります。',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys は、あなたを直すためのものではありません。',
        'それは、あなたが自分自身に戻る手助けをするためのものです。ゆっくりと、プライベートに、そして以前よりもやさしく。',
      ],
    },
  },
};

const es = {
  eyebrow: 'El comienzo',
  title: 'Cómo nació Miravelys',
  cta: 'Vuelve a ti',
  blockLabels: {
    search: 'La búsqueda',
    whatMindAdds: 'Lo que la mente añade',
    writing: 'Escribir con honestidad',
    questions: 'Preguntas sinceras',
    mirror: 'Un espejo silencioso',
    separation: 'Separación suave',
    humility: 'Lo que no afirmamos',
    grounding: 'Primero el grounding',
    sounds: 'Sonidos calmantes',
    places: 'Lugares donde aterrizar',
    intention: 'Para quién es',
    finale: 'Volver a ti',
  },
  intro: [
    'Miravelys no nació como una idea más para una aplicación.',
    'Empezó mucho antes — en una búsqueda personal y silenciosa.',
    'El tipo de búsqueda que comienza cuando empiezas a preguntarte por qué algunos momentos duelen más de lo que deberían. Por qué una sola frase de otra persona puede quedarse en tu mente durante horas. Por qué una situación pequeña puede convertirse en toda una historia sobre quién eres, qué mereces o qué significa la vida.',
  ],
  blocks: {
    search: {
      paragraphs: ['Al principio, busqué fuera de mí.'],
      lines: [
        'En libros.',
        'En ideas.',
        'En el silencio.',
        'En preguntas.',
        'Con la esperanza de que en algún lugar existiera una respuesta clara capaz de explicar por qué la mente crea tanto dolor alrededor de momentos simples.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'Pero poco a poco empecé a entender algo importante: muchas veces, lo que nos duele no es solo lo que ocurrió.',
        'Es lo que añadimos a lo que ocurrió.',
        'Y después de repetirlo una y otra vez, podemos empezar a vivir dentro de historias que una vez nos protegieron, pero que ya no nos pertenecen de verdad.',
      ],
      transforms: [
        'Una mirada se convierte en rechazo.',
        'Una pausa se convierte en prueba.',
        'Un error se convierte en identidad.',
        'Una sensación se convierte en un hecho.',
        'Un miedo se convierte en una creencia.',
      ],
    },
    writing: {
      paragraphs: [
        'Miravelys fue creado a partir de esa comprensión.',
        'Fue creado como un espacio privado donde una persona puede detenerse por un momento y escribir lo que está ocurriendo dentro — no de forma perfecta, no como una página bonita de diario, no para impresionar a nadie, sino con honestidad.',
      ],
    },
    questions: {
      items: [
        '¿Qué estoy sintiendo?',
        '¿Qué estoy creyendo ahora mismo?',
        '¿Qué añadió mi mente a esta situación?',
        '¿A qué está reaccionando mi cuerpo?',
        '¿Qué historia se repite?',
        '¿Qué se siente verdadero y qué quizá solo se siente familiar?',
      ],
    },
    mirror: {
      paragraphs: [
        'Miravelys le da al usuario un espacio para capturar estos momentos cuando aparecen, o después de que hayan pasado. Una creencia que se volvió fuerte. Una emoción que llegó de repente. Una reacción que se sintió más grande que la situación. Un pensamiento que seguía volviendo. Una sensación corporal que parecía llevar algo más profundo.',
        'Y con el tiempo, esos pequeños momentos escritos pueden empezar a formar un espejo silencioso.',
        'No un espejo que juzga.',
        'No un espejo que dice: "Esto es lo que eres."',
        'Sino un espejo que ayuda al usuario a notar lo que se ha repetido.',
      ],
    },
    separation: {
      paragraphs: [
        'La app puede ayudar a separar el momento de la historia que lo rodea, la emoción de la creencia, la reacción del cuerpo de la identidad construida alrededor de ella, y lo desconocido de las conclusiones que llegaron demasiado rápido.',
        'Este es el corazón de Miravelys.',
        'No le dice al usuario cuál es la verdad.',
        'No diagnostica.',
        'No reemplaza la terapia.',
        'No decide quién es alguien.',
        'En cambio, ayuda al usuario a mirar con más suavidad.',
      ],
    },
    humility: {
      paragraphs: ['Miravelys fue construido para esos pequeños momentos de ver con honestidad.'],
      insights: [
        'A ver: esto fue una sensación, no un hecho.',
        'Esto fue un miedo, no toda mi identidad.',
        'Esta creencia quizá me protegió una vez, pero tal vez no necesito vivir desde ella para siempre.',
        'Esta historia apareció rápido, pero quizá debajo de ella hay algo más tranquilo.',
      ],
    },
    grounding: {
      paragraphs: [
        'Pero la app no trata solo de escribir y reflexionar.',
        'Porque a veces, cuando el cuerpo está sobrepasado, la mente no puede mirar con claridad. A veces el primer paso no es analizar. El primer paso es respirar, sentir el cuerpo, bajar el ritmo y volver al presente.',
        'Por eso Miravelys también incluye experiencias de grounding: respiración, conciencia de las sensaciones, meditación, apoyo para el sueño y viajes sonoros calmantes.',
      ],
    },
    sounds: {
      paragraphs: [
        'Los sonidos dentro de Miravelys fueron creados especialmente para este mundo.',
        'No son solo música de fondo. Están diseñados para sentirse como lugares suaves donde aterrizar — atmósferas delicadas que ayudan al cuerpo a calmarse, a la respiración a volverse más lenta y al momento a sentirse un poco más seguro.',
        'Estos sonidos únicos de grounding forman parte del lenguaje emocional de Miravelys. Ayudan a que la app se sienta menos como una herramienta y más como un lugar privado al que el usuario puede volver.',
      ],
      types: [
        'Algunos sonidos están hechos para respirar.',
        'Algunos están hechos para meditar.',
        'Algunos están hechos para dormir.',
        'Algunos están hechos para esos momentos en los que el usuario no necesita más palabras, sino un espacio más suave alrededor del cuerpo.',
      ],
    },
    places: {
      items: [
        'Un lugar para respirar.',
        'Un lugar para escribir.',
        'Un lugar para escuchar.',
        'Un lugar para notar lo que se ha repetido.',
        'Un lugar para calmar el cuerpo antes de intentar entenderlo todo con la mente.',
      ],
    },
    intention: {
      paragraphs: [
        'Miravelys nació de la creencia de que las personas no siempre necesitan ser empujadas, arregladas o definidas.',
        'A veces necesitan un espacio tranquilo donde puedan encontrarse consigo mismas con honestidad.',
        'Un espacio donde un momento enredado pueda volverse un poco más claro.',
        'Un espacio donde una vieja creencia finalmente pueda verse.',
        'Un espacio donde el cuerpo pueda suavizarse antes de que la mente decida.',
        'Un espacio donde el usuario permanece en control.',
        'Un espacio donde la verdad se acerca con suavidad, no se fuerza.',
      ],
      audience: [
        'Para la persona que siente demasiado y quiere entenderlo con suavidad.',
        'Para la persona que repite la misma historia interior y quiere ver dónde empieza.',
        'Para la persona que quiere separar lo que ocurrió de lo que la mente añadió.',
        'Para la persona que necesita calma antes que claridad.',
        'Para la persona que no intenta convertirse en alguien distinto, sino acercarse a lo que se siente honesto por dentro.',
      ],
    },
    finale: {
      paragraphs: [
        'Miravelys no se trata de arreglar quién eres.',
        'Se trata de ayudarte a volver a ti — despacio, en privado y con más amabilidad que antes.',
      ],
    },
  },
};

const pt = {
  eyebrow: 'O começo',
  title: 'Como o Miravelys nasceu',
  cta: 'Volte para si',
  blockLabels: {
    search: 'A busca',
    whatMindAdds: 'O que a mente acrescenta',
    writing: 'Escrever com honestidade',
    questions: 'Perguntas sinceras',
    mirror: 'Um espelho silencioso',
    separation: 'Separação suave',
    humility: 'O que não afirmamos',
    grounding: 'Primeiro o grounding',
    sounds: 'Sons calmantes',
    places: 'Lugares para pousar',
    intention: 'Para quem é',
    finale: 'Voltar para si',
  },
  intro: [
    'O Miravelys não nasceu como apenas mais uma ideia de aplicativo.',
    'Ele começou muito antes — em uma busca pessoal e silenciosa.',
    'O tipo de busca que começa quando você passa a se perguntar por que alguns momentos doem mais do que deveriam. Por que uma única frase de outra pessoa pode ficar na sua mente por horas. Por que uma pequena situação pode se transformar em uma história inteira sobre quem você é, o que você merece ou o que a vida significa.',
  ],
  blocks: {
    search: {
      paragraphs: ['No começo, eu procurei fora de mim.'],
      lines: [
        'Em livros.',
        'Em ideias.',
        'No silêncio.',
        'Em perguntas.',
        'Na esperança de que em algum lugar existisse uma resposta clara capaz de explicar por que a mente cria tanta dor ao redor de momentos simples.',
      ],
    },
    whatMindAdds: {
      paragraphs: [
        'Mas, aos poucos, comecei a entender algo importante: muitas vezes, o que nos machuca não é apenas o que aconteceu.',
        'É o que acrescentamos ao que aconteceu.',
        'E depois de repetir isso muitas vezes, podemos começar a viver dentro de histórias que um dia nos protegeram, mas que já não pertencem de verdade a nós.',
      ],
      transforms: [
        'Um olhar vira rejeição.',
        'Uma pausa vira prova.',
        'Um erro vira identidade.',
        'Um sentimento vira fato.',
        'Um medo vira crença.',
      ],
    },
    writing: {
      paragraphs: [
        'O Miravelys foi criado a partir dessa percepção.',
        'Ele foi criado como um espaço privado onde uma pessoa pode parar por um momento e escrever o que está acontecendo por dentro — não de uma forma perfeita, não como uma página bonita de diário, não para impressionar ninguém, mas com honestidade.',
      ],
    },
    questions: {
      items: [
        'O que estou sentindo?',
        'No que estou acreditando agora?',
        'O que minha mente acrescentou a esta situação?',
        'A que meu corpo está reagindo?',
        'Que história continua se repetindo?',
        'O que parece verdadeiro, e o que talvez apenas pareça familiar?',
      ],
    },
    mirror: {
      paragraphs: [
        'O Miravelys dá ao usuário um espaço para capturar esses momentos quando eles aparecem, ou depois que passam. Uma crença que ficou forte. Uma emoção que chegou de repente. Uma reação que pareceu maior do que a situação. Um pensamento que continuava voltando. Uma sensação no corpo que parecia carregar algo mais profundo.',
        'E, com o tempo, esses pequenos momentos escritos podem começar a formar um espelho silencioso.',
        'Não um espelho que julga.',
        'Não um espelho que diz: "É isso que você é."',
        'Mas um espelho que ajuda o usuário a perceber o que se repetiu.',
      ],
    },
    separation: {
      paragraphs: [
        'O app pode ajudar a separar o momento da história criada ao redor dele, a emoção da crença, a reação do corpo da identidade construída em torno dela, e o desconhecido das conclusões que chegaram rápido demais.',
        'Esse é o coração do Miravelys.',
        'Ele não diz ao usuário qual é a verdade.',
        'Ele não diagnostica.',
        'Ele não substitui terapia.',
        'Ele não decide quem alguém é.',
        'Em vez disso, ele ajuda o usuário a olhar com mais suavidade.',
      ],
    },
    humility: {
      paragraphs: ['O Miravelys foi criado para esses pequenos momentos de olhar honesto.'],
      insights: [
        'A ver: isso foi um sentimento, não um fato.',
        'Isso foi um medo, não toda a minha identidade.',
        'Essa crença talvez tenha me protegido um dia, mas talvez eu não precise viver a partir dela para sempre.',
        'Essa história apareceu rápido, mas talvez exista algo mais quieto por baixo dela.',
      ],
    },
    grounding: {
      paragraphs: [
        'Mas o app não é apenas sobre escrever e refletir.',
        'Porque às vezes, quando o corpo está sobrecarregado, a mente não consegue olhar com clareza. Às vezes o primeiro passo não é analisar. O primeiro passo é respirar, sentir o corpo, desacelerar e voltar ao presente.',
        'É por isso que o Miravelys também inclui experiências de grounding: respiração, consciência das sensações, meditação, apoio ao sono e jornadas sonoras calmantes.',
      ],
    },
    sounds: {
      paragraphs: [
        'Os sons dentro do Miravelys foram criados especialmente para este mundo.',
        'Eles não são apenas música de fundo. Foram pensados para parecer lugares suaves onde pousar — atmosferas delicadas que ajudam o corpo a ficar mais quieto, a respiração a desacelerar e o momento a parecer um pouco mais seguro.',
        'Esses sons únicos de grounding fazem parte da linguagem emocional do Miravelys. Eles ajudam o app a parecer menos uma ferramenta e mais um lugar privado para onde o usuário pode voltar.',
      ],
      types: [
        'Alguns sons são feitos para respirar.',
        'Alguns são feitos para meditar.',
        'Alguns são feitos para dormir.',
        'Alguns são feitos para aqueles momentos em que o usuário não precisa de mais palavras, mas de um espaço mais suave ao redor do corpo.',
      ],
    },
    places: {
      items: [
        'Um lugar para respirar.',
        'Um lugar para escrever.',
        'Um lugar para escutar.',
        'Um lugar para perceber o que se repetiu.',
        'Um lugar para acalmar o corpo antes de tentar entender tudo com a mente.',
      ],
    },
    intention: {
      paragraphs: [
        'O Miravelys nasceu da crença de que as pessoas nem sempre precisam ser empurradas, consertadas ou definidas.',
        'Às vezes, elas precisam de um espaço silencioso onde possam se encontrar com honestidade.',
        'Um espaço onde um momento confuso pode ficar um pouco mais claro.',
        'Um espaço onde uma crença antiga pode finalmente ser vista.',
        'Um espaço onde o corpo pode suavizar antes que a mente decida.',
        'Um espaço onde o usuário permanece no controle.',
        'Um espaço onde a verdade é aproximada com delicadeza, não forçada.',
      ],
      audience: [
        'Para a pessoa que sente demais e quer entender isso com suavidade.',
        'Para a pessoa que repete a mesma história interna e quer ver onde ela começa.',
        'Para a pessoa que quer separar o que aconteceu do que a mente acrescentou.',
        'Para a pessoa que precisa de calma antes da clareza.',
        'Para a pessoa que não está tentando se tornar outra pessoa, mas se aproximar do que parece honesto por dentro.',
      ],
    },
    finale: {
      paragraphs: [
        'O Miravelys não é sobre consertar quem você é.',
        'É sobre ajudar você a voltar para si — devagar, em privado e com mais gentileza do que antes.',
      ],
    },
  },
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
  return originCopy[lang] || originCopy.en;
}
