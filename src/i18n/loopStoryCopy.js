const scenarioByLanguage = {
  en: {
    labels: ['What happened', 'What I feel', 'What my mind added', 'What I do not know'],
    values: [
      'I sent a message. There is no reply yet.',
      'I feel anxious and exposed.',
      'They are ignoring me. I said something wrong.',
      'Why they have not replied.',
    ],
  },
  ru: {
    labels: ['Что произошло', 'Что я чувствую', 'Что уже добавил ум', 'Чего я пока не знаю'],
    values: [
      'Я отправил(а) сообщение. Ответа пока нет.',
      'Мне тревожно и уязвимо.',
      'Меня игнорируют. Я сказал(а) что-то не то.',
      'Почему человек пока не ответил.',
    ],
  },
  ro: {
    labels: ['Ce s-a întâmplat', 'Ce simt', 'Ce a adăugat mintea', 'Ce nu știu încă'],
    values: [
      'Am trimis un mesaj. Încă nu am primit răspuns.',
      'Simt anxietate și vulnerabilitate.',
      'Mă ignoră. Am spus ceva greșit.',
      'De ce nu a răspuns încă.',
    ],
  },
  fr: {
    labels: ['Ce qui s’est passé', 'Ce que je ressens', 'Ce que mon esprit a ajouté', 'Ce que je ne sais pas encore'],
    values: [
      'J’ai envoyé un message. Je n’ai pas encore reçu de réponse.',
      'Je ressens de l’anxiété et de la vulnérabilité.',
      'La personne m’ignore. J’ai dit quelque chose de mal.',
      'Pourquoi elle n’a pas encore répondu.',
    ],
  },
  hi: {
    labels: ['क्या हुआ', 'मैं क्या महसूस कर रहा/रही हूँ', 'मन ने क्या जोड़ दिया', 'जो मुझे अभी नहीं पता'],
    values: [
      'मैंने संदेश भेजा है। अभी जवाब नहीं आया है।',
      'बेचैनी और असुरक्षा महसूस हो रही है।',
      'वे मुझे अनदेखा कर रहे हैं। मैंने कुछ गलत कहा।',
      'उन्होंने अभी तक जवाब क्यों नहीं दिया।',
    ],
  },
  zh: {
    labels: ['发生了什么', '我的感受', '大脑添上的故事', '我还不知道的事'],
    values: [
      '我发了一条消息。现在还没有回复。',
      '我感到焦虑和脆弱。',
      '对方在故意忽视我。我一定说错了什么。',
      '对方为什么还没有回复。',
    ],
  },
  de: {
    labels: ['Was passiert ist', 'Was ich fühle', 'Was mein Kopf hinzugefügt hat', 'Was ich noch nicht weiß'],
    values: [
      'Ich habe eine Nachricht geschickt. Bisher kam keine Antwort.',
      'Ich fühle mich ängstlich und verletzlich.',
      'Die Person ignoriert mich. Ich habe etwas Falsches gesagt.',
      'Warum noch keine Antwort kam.',
    ],
  },
  ja: {
    labels: ['起きたこと', '感じていること', '心が付け加えたこと', 'まだわからないこと'],
    values: [
      'メッセージを送った。まだ返信はない。',
      '不安で、傷つきやすく感じる。',
      '無視されている。何か間違ったことを言った。',
      'なぜまだ返信がないのか。',
    ],
  },
  es: {
    labels: ['Lo que pasó', 'Lo que siento', 'Lo que añadió mi mente', 'Lo que aún no sé'],
    values: [
      'Envié un mensaje. Aún no hay respuesta.',
      'Siento ansiedad y vulnerabilidad.',
      'Me está ignorando. Dije algo equivocado.',
      'Por qué aún no ha respondido.',
    ],
  },
  pt: {
    labels: ['O que aconteceu', 'O que sinto', 'O que a mente acrescentou', 'O que ainda não sei'],
    values: [
      'Enviei uma mensagem. Ainda não houve resposta.',
      'Sinto ansiedade e vulnerabilidade.',
      'A pessoa está me ignorando. Eu disse algo errado.',
      'Por que ela ainda não respondeu.',
    ],
  },
};

const authored = {
  en: {
    hero: {
      eyebrow: 'A private place to return to what is true',
      title: 'We all get caught in loops. Miravelys helps you step out of one.',
      body: 'Not to decide what you should feel. To pause, name what is happening, and notice where the facts end and the story your mind has started to build begins.',
      secondary: 'See how it works',
      deviceCaption: 'Begin with the moment that will not leave you alone.',
    },
    scenario: {
      eyebrow: 'A familiar moment',
      title: 'One unanswered message — and the mind has already built a whole story.',
      intro: 'The feeling is real. It is also made of different layers. When they become visible separately, there is room for a choice again.',
      note: 'Miravelys does not argue with a feeling or tell you to “think positive.” It helps you not mistake the first explanation for the only reality.',
      ...scenarioByLanguage.en,
    },
    method: {
      eyebrow: 'How it works',
      title: 'Not a ready-made answer. A way to look more closely.',
      lead: 'Miravelys does not diagnose you or decide who you are. It asks precise questions; what your answers mean is yours to notice.',
      steps: [
        {
          kicker: '01 — Name it',
          title: 'Put the loop into words.',
          body: 'Write the event, the body sensation, the fear, the unfinished thought. You do not have to sound logical to begin.',
          screenCode: 'write',
          mockupId: 'clear',
        },
        {
          kicker: '02 — Separate it',
          title: 'Separate what happened from what you felt, assumed, and still do not know.',
          body: 'Fact, feeling, body, assumption, old belief, unknown. None of them have to be solved at once.',
          screenCode: 'layers',
          mockupId: 'truth',
        },
        {
          kicker: '03 — Notice it',
          title: 'Let a repeated pattern become visible, not a label.',
          body: 'Over time, Miravelys returns you to your own words, so a recurring story can become visible before it starts making choices for you.',
          screenCode: 'patterns',
          mockupId: 'mirror',
        },
      ],
    },
    support: {
      eyebrow: 'When thinking can wait',
      title: 'Sometimes you need to settle before you can make sense of anything.',
      lead: 'Breath, meditation, and sound are for moments when more thinking would only add noise. The questions can wait.',
      cards: [
        {
          label: 'Return to the body',
          title: 'Lower the volume first.',
          body: 'A gentle place to slow down before you ask your mind to do more.',
          screenCode: 'body',
          mockupId: 'calm',
        },
        {
          label: 'Leave some things for tomorrow',
          title: 'Let the night be night.',
          body: 'When sleep is the kindest next step, the problem does not need to be solved before bed.',
          screenCode: 'sounds',
          mockupId: 'rest',
        },
      ],
    },
    trust: {
      eyebrow: 'Your space stays yours',
      title: 'A private reflection is not raw material for someone else’s system.',
      body: 'Your experience stays on your device by default. Optional cloud help is a separate choice you make deliberately. You can correct, hide, and delete what you write.',
      facts: ['Local by default', 'Optional cloud help is opt-in', 'Edit or delete at any time'],
      safety: 'Miravelys supports personal reflection. It does not replace medical care, therapy, or crisis support.',
      link: 'Read the privacy policy',
      deviceLabel: 'Miravelys privacy and data controls',
    },
    teaser: {
      eyebrow: 'Why it exists',
      title: 'I spent a year trying to build a smarter system. In anxiety, one honest question mattered more.',
      body: 'At one point, a single task could involve 57 calls to different neural networks. The product became simpler when I admitted that a person does not need another dashboard in a hard moment.',
      link: 'Read the founder story',
    },
    finale: {
      eyebrow: 'Start with one moment',
      title: 'You do not need to solve your whole life. Name what is happening now.',
      body: 'When the loop returns, there can be somewhere quiet to come back to.',
    },
  },
  ru: {
    hero: {
      eyebrow: 'Личное пространство для честного взгляда',
      title: 'Мы все ходим по кругу. Miravelys — это способ его разорвать.',
      body: 'Не для того, чтобы решить за вас, что вы должны чувствовать. А чтобы остановиться, назвать происходящее и увидеть, где заканчивается факт и начинается история, которую уже успел достроить ум.',
      secondary: 'Посмотреть, как это работает',
      deviceCaption: 'Начните с момента, который сейчас не отпускает.',
    },
    scenario: {
      eyebrow: 'Знакомый момент',
      title: 'Одно молчание — и ум уже построил целую историю.',
      intro: 'Переживание реально. Но оно состоит из нескольких слоёв. Когда они снова видны по отдельности, появляется место для выбора.',
      note: 'Miravelys не спорит с чувствами и не убеждает «думать позитивно». Он помогает не принять первое объяснение за единственную реальность.',
      ...scenarioByLanguage.ru,
    },
    method: {
      eyebrow: 'Как это работает',
      title: 'Не готовый ответ. Способ посмотреть внимательнее.',
      lead: 'Miravelys не ставит диагнозов и не решает, кто вы. Он задаёт точные вопросы, а увидеть, что для вас в них важно, можете только вы.',
      steps: [
        {
          kicker: '01 — Назовите',
          title: 'Сначала выпишите то, что сейчас крутится в голове.',
          body: 'Запишите событие, телесное ощущение, страх, недоговорённость. Не нужно быть логичным, чтобы начать.',
          screenCode: 'write',
          mockupId: 'clear',
        },
        {
          kicker: '02 — Разделите',
          title: 'Отделите событие от того, что вы почувствовали, подумали и пока не знаете.',
          body: 'Факт, чувство, тело, предположение, старое убеждение, неизвестность. Не всё требует ответа прямо сейчас.',
          screenCode: 'layers',
          mockupId: 'truth',
        },
        {
          kicker: '03 — Заметьте',
          title: 'Увидьте повторение, не превращая его в ярлык.',
          body: 'Со временем Miravelys возвращает к вашим же словам, чтобы повторяющаяся история стала заметной, прежде чем снова поведёт вас по привычному кругу.',
          screenCode: 'patterns',
          mockupId: 'mirror',
        },
      ],
    },
    support: {
      eyebrow: 'Когда думать пока рано',
      title: 'Иногда сначала важнее вернуться в тело, чем что-то объяснять себе.',
      lead: 'Дыхание, медитации и звук — для моментов, когда разбор только добавит шума. К вопросам можно вернуться позже.',
      cards: [
        {
          label: 'Вернуться в тело',
          title: 'Сначала снизить громкость.',
          body: 'Бережное место, чтобы замедлиться, прежде чем просить от ума что-то ещё.',
          screenCode: 'body',
          mockupId: 'calm',
        },
        {
          label: 'Оставить часть на завтра',
          title: 'Дать ночи быть ночью.',
          body: 'Когда самый добрый следующий шаг — сон, проблему не нужно решать перед сном.',
          screenCode: 'sounds',
          mockupId: 'rest',
        },
      ],
    },
    trust: {
      eyebrow: 'Ваше пространство остаётся вашим',
      title: 'Личная запись — не сырьё для чужой системы.',
      body: 'По умолчанию ваши записи остаются на устройстве. Если вы решите использовать облачную помощь, это отдельный осознанный выбор. Записи можно исправлять, скрывать и удалять.',
      facts: ['Локально по умолчанию', 'Облачная помощь — только по вашему выбору', 'Исправление и удаление — всегда у вас'],
      safety: 'Miravelys поддерживает личную рефлексию и не заменяет медицинскую, психотерапевтическую или кризисную помощь.',
      link: 'Прочитать политику приватности',
      deviceLabel: 'Настройки приватности и данных Miravelys',
    },
    teaser: {
      eyebrow: 'Почему это появилось',
      title: 'Я потратил год на сложную систему — и понял: в тревоге важнее один честный вопрос.',
      body: 'В какой-то момент на одну задачу уходило до 57 вызовов разных нейросетей. Продукт стал проще, когда я признал: в трудный момент человеку не нужен ещё один дашборд.',
      link: 'Прочитать историю создания',
    },
    finale: {
      eyebrow: 'Начните с одного момента',
      title: 'Не нужно решать всю жизнь. Достаточно назвать то, что происходит сейчас.',
      body: 'Когда петля снова затягивается, вам будет куда вернуться.',
    },
  },
};

// These languages get the same authored story as English and Russian, rather
// than a stitched-together version of older marketing copy. Screen identities
// are applied below so the narrative stays readable here.
const localizedFallbackStories = {
  ro: {
    hero: {
      eyebrow: 'Un loc personal pentru a reveni la ce este adevărat',
      title: 'Cu toții intrăm uneori în cercuri. Miravelys te ajută să ieși dintr-unul.',
      body: 'Nu ca să-ți spună ce ar trebui să simți. Ci ca să te oprești, să numești ce se întâmplă și să vezi unde se termină faptele și unde începe povestea pe care mintea a completat-o deja.',
      secondary: 'Vezi cum funcționează',
      deviceCaption: 'Începe cu momentul care nu-ți dă pace.',
    },
    scenario: {
      eyebrow: 'Un moment cunoscut',
      title: 'Un singur mesaj fără răspuns — și mintea a scris deja toată povestea.',
      intro: 'Sentimentul este real. Dar momentul are mai multe straturi. Când le vezi separat, apare din nou loc pentru alegere.',
      note: 'Miravelys nu se ceartă cu ceea ce simți și nu îți spune să gândești pozitiv. Te ajută să nu iei prima explicație drept singura realitate.',
    },
    method: {
      eyebrow: 'Cum funcționează',
      title: 'Nu un răspuns gata făcut. Un mod de a privi mai atent.',
      lead: 'Aplicația nu te diagnostichează și nu decide cine ești. Pune întrebări precise; felul în care vezi rămâne al tău.',
      steps: [
        { kicker: '01 — Numește', title: 'Pune cercul în cuvinte.', body: 'Scrie evenimentul, senzația din corp, teama, gândul neterminat. Nu trebuie să sune perfect logic ca să începi.' },
        { kicker: '02 — Separă', title: 'Vezi ce s-a întâmplat — și ce s-a așezat peste el.', body: 'Fapt, sentiment, corp, presupunere, veche credință, necunoscut. Nu toate trebuie rezolvate acum.' },
        { kicker: '03 — Observă', title: 'Lasă tiparul să devină vizibil, nu o etichetă.', body: 'În timp, Miravelys te întoarce la propriile cuvinte, ca o poveste veche să poată fi observată în loc să conducă din umbră.' },
      ],
    },
    support: {
      eyebrow: 'Când gândirea poate aștepta',
      title: 'Uneori primul pas nu este un gând. Este corpul.',
      lead: 'Respirația, meditația și sunetul sunt pentru momentele în care analiza ar amplifica doar zgomotul. Întrebările pot aștepta.',
      cards: [
        { label: 'Înapoi în corp', title: 'Coboară întâi volumul.', body: 'Un loc blând în care să încetinești înainte să-i ceri minții să facă mai mult.' },
        { label: 'Lasă ceva pentru mâine', title: 'Lasă noaptea să fie noapte.', body: 'Când somnul este următorul pas mai bun, problema nu trebuie rezolvată înainte de culcare.' },
      ],
    },
    trust: {
      eyebrow: 'Spațiul tău rămâne al tău',
      title: 'O reflecție personală nu este materie primă pentru sistemul altcuiva.',
      body: 'Miravelys păstrează ce scrii pe dispozitivul tău, în mod implicit. Dacă alegi vreodată ajutor în cloud, este o alegere separată și conștientă. Poți corecta, ascunde sau șterge ce scrii.',
      facts: ['Local în mod implicit', 'Ajutorul în cloud este ales explicit', 'Poți edita sau șterge oricând'],
      safety: 'Miravelys sprijină reflecția personală. Nu înlocuiește îngrijirea medicală, terapia sau ajutorul în situații de criză.',
      link: 'Citește politica de confidențialitate',
      deviceLabel: 'Setările de confidențialitate și date Miravelys',
    },
    teaser: {
      eyebrow: 'De ce există',
      title: 'Am petrecut un an construind un sistem mai inteligent. În anxietate, a contat mai mult o întrebare sinceră.',
      body: 'La un moment dat, o singură sarcină putea trece prin 57 de apeluri către rețele neuronale diferite. Produsul a devenit mai simplu când am recunoscut că, într-un moment greu, omul nu are nevoie de încă un dashboard.',
      link: 'Citește povestea fondatorului',
    },
    finale: {
      eyebrow: 'Începe cu un singur moment',
      title: 'Nu trebuie să-ți rezolvi toată viața. Numește doar ce se întâmplă acum.',
      body: 'Când cercul revine, ai unde să te întorci.',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Un espace personnel pour revenir à ce qui est vrai',
      title: 'Nous tournons tous parfois en rond. Miravelys vous aide à en sortir.',
      body: 'Non pour décider à votre place de ce que vous devriez ressentir. Pour vous arrêter, nommer ce qui se passe et voir où les faits s’arrêtent et où commence l’histoire que votre esprit a déjà commencée.',
      secondary: 'Voir comment cela fonctionne',
      deviceCaption: 'Commencez par le moment qui ne vous lâche pas.',
    },
    scenario: {
      eyebrow: 'Un moment familier',
      title: 'Un message sans réponse — et l’esprit a déjà écrit toute une histoire.',
      intro: 'Le ressenti est réel. Mais le moment comporte plusieurs couches. Lorsque vous les voyez séparément, une marge de choix réapparaît.',
      note: 'Miravelys ne contredit pas ce que vous ressentez et ne vous demande pas de penser positivement. Il vous aide à ne pas confondre la première explication avec l’unique réalité.',
    },
    method: {
      eyebrow: 'Comment cela fonctionne',
      title: 'Pas une réponse toute faite. Une façon de regarder de plus près.',
      lead: 'L’application ne vous diagnostique pas et ne décide pas qui vous êtes. Elle pose des questions précises ; ce que vous voyez vous appartient.',
      steps: [
        { kicker: '01 — Nommer', title: 'Mettre la boucle en mots.', body: 'Écrivez l’événement, la sensation dans le corps, la peur, la pensée inachevée. Rien n’a besoin d’être parfaitement logique pour commencer.' },
        { kicker: '02 — Séparer', title: 'Voir ce qui s’est passé — et ce qui s’y est ajouté.', body: 'Fait, ressenti, corps, supposition, ancienne croyance, inconnu. Tout n’a pas besoin d’être résolu maintenant.' },
        { kicker: '03 — Remarquer', title: 'Laisser le schéma devenir visible, pas une étiquette.', body: 'Avec le temps, Miravelys vous ramène à vos propres mots afin qu’une vieille histoire puisse être remarquée au lieu de diriger en silence.' },
      ],
    },
    support: {
      eyebrow: 'Quand réfléchir peut attendre',
      title: 'Parfois, le premier pas n’est pas une pensée. C’est le corps.',
      lead: 'La respiration, la méditation et le son sont là pour les moments où l’analyse ne ferait qu’ajouter du bruit. Les questions peuvent attendre.',
      cards: [
        { label: 'Revenir au corps', title: 'Baisser le volume d’abord.', body: 'Un lieu doux pour ralentir avant de demander davantage à votre esprit.' },
        { label: 'Laisser quelque chose à demain', title: 'Laisser la nuit être la nuit.', body: 'Quand le sommeil est la prochaine étape la plus douce, le problème n’a pas à être résolu avant le coucher.' },
      ],
    },
    trust: {
      eyebrow: 'Votre espace reste le vôtre',
      title: 'Une réflexion personnelle n’est pas la matière première du système de quelqu’un d’autre.',
      body: 'Miravelys conserve ce que vous écrivez sur votre appareil par défaut. Si vous choisissez un jour une aide dans le cloud, ce choix est distinct et explicite. Vous pouvez corriger, masquer ou supprimer ce que vous écrivez.',
      facts: ['Local par défaut', 'Aide cloud uniquement sur choix explicite', 'Modifier ou supprimer à tout moment'],
      safety: 'Miravelys soutient la réflexion personnelle. Il ne remplace pas les soins médicaux, la thérapie ou l’aide en situation de crise.',
      link: 'Lire la politique de confidentialité',
      deviceLabel: 'Réglages de confidentialité et de données Miravelys',
    },
    teaser: {
      eyebrow: 'Pourquoi il existe',
      title: 'J’ai passé un an à construire un système plus intelligent. Dans l’anxiété, une question honnête comptait davantage.',
      body: 'À un moment, une seule tâche pouvait mobiliser 57 appels à différents réseaux neuronaux. Le produit est devenu plus simple lorsque j’ai admis que, dans un moment difficile, on n’a pas besoin d’un tableau de bord de plus.',
      link: 'Lire l’histoire du fondateur',
    },
    finale: {
      eyebrow: 'Commencez par un seul moment',
      title: 'Vous n’avez pas à résoudre toute votre vie. Nommez simplement ce qui se passe maintenant.',
      body: 'Lorsque la boucle revient, il peut y avoir un endroit calme où revenir.',
    },
  },
  hi: {
    hero: {
      eyebrow: 'जो सच है, उसके पास लौटने की निजी जगह',
      title: 'हम सभी कभी न कभी एक ही चक्र में फँस जाते हैं। Miravelys उससे बाहर आने में मदद करता है।',
      body: 'यह आपको यह बताने के लिए नहीं है कि आपको क्या महसूस करना चाहिए। यह रुकने, जो हो रहा है उसे नाम देने, और यह देखने की जगह है कि तथ्य कहाँ खत्म होते हैं और मन की बनाई कहानी कहाँ शुरू होती है।',
      secondary: 'देखें, यह कैसे काम करता है',
      deviceCaption: 'उस पल से शुरू करें जो मन से उतर नहीं रहा।',
    },
    scenario: {
      eyebrow: 'एक जाना-पहचाना पल',
      title: 'एक जवाब न आया संदेश — और मन ने पूरी कहानी बना ली।',
      intro: 'भावना सच है। लेकिन उस पल की कई परतें हैं। उन्हें अलग-अलग देखने पर फिर से चुनाव की जगह बनती है।',
      note: 'Miravelys आपकी भावना से बहस नहीं करता और न ही आपको “सकारात्मक सोचने” को कहता है। यह पहली व्याख्या को अकेली सच्चाई मान लेने से बचने में मदद करता है।',
    },
    method: {
      eyebrow: 'यह कैसे काम करता है',
      title: 'तैयार जवाब नहीं। थोड़ा और ध्यान से देखने का तरीका।',
      lead: 'ऐप आपका निदान नहीं करता और न तय करता है कि आप कौन हैं। यह सटीक प्रश्न देता है; देखना आपका अपना काम रहता है।',
      steps: [
        { kicker: '01 — नाम दें', title: 'इस चक्र को शब्दों में रखें।', body: 'घटना, शरीर की अनुभूति, डर या अधूरा विचार लिखें। शुरू करने के लिए हर बात का तार्किक होना ज़रूरी नहीं।' },
        { kicker: '02 — अलग करें', title: 'जो हुआ, और जो उसके ऊपर चढ़ गया, दोनों को देखें।', body: 'तथ्य, भावना, शरीर, अनुमान, पुराना विश्वास, अज्ञात। हर चीज़ को अभी सुलझाना ज़रूरी नहीं।' },
        { kicker: '03 — पहचानें', title: 'दोहराव को दिखने दें, उसे लेबल न बनाएं।', body: 'समय के साथ Miravelys आपको आपके ही शब्दों तक वापस लाता है, ताकि पुरानी कहानी चुपचाप चलाने के बजाय दिख सके।' },
      ],
    },
    support: {
      eyebrow: 'जब सोचना इंतज़ार कर सकता है',
      title: 'कभी-कभी पहला कदम विचार नहीं, शरीर होता है।',
      lead: 'साँस, ध्यान और ध्वनि उन पलों के लिए हैं जब विश्लेषण सिर्फ़ शोर बढ़ाएगा। सवाल इंतज़ार कर सकते हैं।',
      cards: [
        { label: 'शरीर में लौटें', title: 'पहले आवाज़ धीमी करें।', body: 'मन से और कुछ माँगने से पहले धीमा होने की एक कोमल जगह।' },
        { label: 'कुछ कल के लिए छोड़ दें', title: 'रात को रात रहने दें।', body: 'जब नींद अगला सबसे दयालु कदम हो, तो समस्या को सोने से पहले हल करना ज़रूरी नहीं।' },
      ],
    },
    trust: {
      eyebrow: 'आपकी जगह आपकी ही रहती है',
      title: 'निजी सोच किसी और के सिस्टम का कच्चा माल नहीं है।',
      body: 'Miravelys डिफ़ॉल्ट रूप से आपके लिखे हुए को आपके डिवाइस पर रखता है। अगर आप कभी क्लाउड सहायता चुनते हैं, तो वह अलग और सोच-समझकर किया गया विकल्प होता है। आप जो लिखते हैं उसे संपादित, छिपा या मिटा सकते हैं।',
      facts: ['डिफ़ॉल्ट रूप से डिवाइस पर', 'क्लाउड सहायता केवल आपके चयन पर', 'कभी भी संपादित या मिटाएँ'],
      safety: 'Miravelys निजी आत्मचिंतन का साथ देता है। यह चिकित्सा, थेरेपी या संकट सहायता का विकल्प नहीं है।',
      link: 'गोपनीयता नीति पढ़ें',
      deviceLabel: 'Miravelys गोपनीयता और डेटा नियंत्रण',
    },
    teaser: {
      eyebrow: 'यह क्यों बना',
      title: 'मैंने एक साल एक अधिक बुद्धिमान सिस्टम बनाने में लगाया। चिंता में एक ईमानदार सवाल ज़्यादा काम आया।',
      body: 'एक समय, एक ही काम के लिए अलग-अलग न्यूरल नेटवर्क को 57 कॉल करने पड़ते थे। उत्पाद तब सरल हुआ जब मैंने माना कि मुश्किल पल में किसी को एक और डैशबोर्ड की ज़रूरत नहीं होती।',
      link: 'निर्माता की कहानी पढ़ें',
    },
    finale: {
      eyebrow: 'एक पल से शुरू करें',
      title: 'पूरी ज़िंदगी को अभी सुलझाने की ज़रूरत नहीं। बस नाम दें कि इस समय क्या हो रहा है।',
      body: 'जब चक्र लौटे, तो वापस आने के लिए एक शांत जगह हो सकती है।',
    },
  },
  zh: {
    hero: {
      eyebrow: '一个回到真实的私人空间',
      title: '我们都会陷入循环。Miravelys 帮你从其中走出来。',
      body: '它不会替你决定该感受什么。它让你停下来，命名正在发生的事，并看见事实止于何处、头脑已经补上的故事从何处开始。',
      secondary: '看看它如何运作',
      deviceCaption: '从那个一直萦绕心头的瞬间开始。',
    },
    scenario: {
      eyebrow: '熟悉的一刻',
      title: '一条没有回复的消息——头脑已经写完了整段故事。',
      intro: '感受是真实的。但那个瞬间有不同的层次。把它们分开看，选择的空间又会出现。',
      note: 'Miravelys 不会和感受争辩，也不会叫你“积极一点”。它只是帮助你不把第一个解释当成唯一的现实。',
    },
    method: {
      eyebrow: '它如何运作',
      title: '不是现成答案，而是更仔细看一看的方法。',
      lead: '应用不会诊断你，也不会定义你是谁。它提出准确的问题；看见什么，由你自己完成。',
      steps: [
        { kicker: '01 — 说出来', title: '把循环放进文字里。', body: '写下事件、身体的感觉、恐惧或未说完的念头。开始时，不必让它听起来完全合乎逻辑。' },
        { kicker: '02 — 分开看', title: '看清发生了什么，也看清后来叠加了什么。', body: '事实、感受、身体、假设、旧信念、未知。不是每一项都需要立刻解决。' },
        { kicker: '03 — 留意它', title: '让反复出现的模式变得可见，而不是成为标签。', body: '随着时间推移，Miravelys 会带你回看自己的话，让旧故事被看见，而不是悄悄主导一切。' },
      ],
    },
    support: {
      eyebrow: '当思考可以先等等',
      title: '有时第一步不是一个念头，而是身体。',
      lead: '呼吸、冥想和声音适合那些分析只会放大噪音的时刻。问题可以先等等。',
      cards: [
        { label: '回到身体', title: '先把音量调低。', body: '在要求头脑做更多事之前，给自己一个放慢下来的温和空间。' },
        { label: '把一些事留给明天', title: '让夜晚只是夜晚。', body: '当睡眠是更温柔的下一步，问题不必在睡前解决。' },
      ],
    },
    trust: {
      eyebrow: '你的空间仍属于你',
      title: '个人的反思，不该成为别人系统的原料。',
      body: 'Miravelys 默认把你写下的内容保留在设备上。如果你选择云端协助，那是一个独立、经过思考的选择。你随时可以修改、隐藏或删除所写内容。',
      facts: ['默认保存在设备上', '云端协助由你主动选择', '随时编辑或删除'],
      safety: 'Miravelys 支持个人反思，不替代医疗照护、心理治疗或危机支持。',
      link: '阅读隐私政策',
      deviceLabel: 'Miravelys 隐私与数据控制',
    },
    teaser: {
      eyebrow: '它为何存在',
      title: '我花了一年时间想打造更聪明的系统。焦虑来临时，一句诚实的问题反而更重要。',
      body: '有一段时间，一个任务要经过不同神经网络的 57 次调用。后来我承认：人在艰难时刻不需要另一个仪表盘，产品才变得更简单。',
      link: '阅读创始人的故事',
    },
    finale: {
      eyebrow: '从一个瞬间开始',
      title: '你不必解决整个人生。先说清此刻正在发生什么。',
      body: '当循环再次出现，那里会有一个安静的地方让你回来。',
    },
  },
  de: {
    hero: {
      eyebrow: 'Ein persönlicher Ort, um zu dem zurückzukehren, was wahr ist',
      title: 'Wir geraten alle in Schleifen. Miravelys hilft Ihnen, aus einer herauszutreten.',
      body: 'Nicht, um Ihnen vorzuschreiben, was Sie fühlen sollten. Sondern um innezuhalten, zu benennen, was geschieht, und zu sehen, wo die Fakten enden und die Geschichte beginnt, die Ihr Kopf bereits weitergeschrieben hat.',
      secondary: 'So funktioniert es',
      deviceCaption: 'Beginnen Sie mit dem Moment, der Sie nicht loslässt.',
    },
    scenario: {
      eyebrow: 'Ein vertrauter Moment',
      title: 'Eine unbeantwortete Nachricht — und der Kopf hat schon eine ganze Geschichte geschrieben.',
      intro: 'Das Gefühl ist real. Doch der Moment hat verschiedene Schichten. Wenn sie getrennt sichtbar werden, entsteht wieder Raum für eine Wahl.',
      note: 'Miravelys streitet nicht mit einem Gefühl und fordert Sie nicht auf, positiv zu denken. Es hilft Ihnen, die erste Erklärung nicht mit der einzigen Wirklichkeit zu verwechseln.',
    },
    method: {
      eyebrow: 'So funktioniert es',
      title: 'Keine fertige Antwort. Eine Möglichkeit, genauer hinzusehen.',
      lead: 'Die App diagnostiziert Sie nicht und entscheidet nicht, wer Sie sind. Sie stellt präzise Fragen; was Sie erkennen, bleibt Ihre eigene Entdeckung.',
      steps: [
        { kicker: '01 — Benennen', title: 'Bringen Sie die Schleife in Worte.', body: 'Schreiben Sie das Ereignis, die Körperempfindung, die Angst oder den unfertigen Gedanken auf. Zum Anfangen muss es nicht vollkommen logisch klingen.' },
        { kicker: '02 — Trennen', title: 'Sehen Sie, was passiert ist — und was sich darübergelegt hat.', body: 'Fakt, Gefühl, Körper, Annahme, alte Überzeugung, Unbekanntes. Nicht alles muss jetzt gelöst werden.' },
        { kicker: '03 — Erkennen', title: 'Lassen Sie ein Muster sichtbar werden, nicht zu einem Etikett werden.', body: 'Mit der Zeit führt Miravelys Sie zu Ihren eigenen Worten zurück, damit eine alte Geschichte bemerkt werden kann, statt im Verborgenen Regie zu führen.' },
      ],
    },
    support: {
      eyebrow: 'Wenn Denken warten kann',
      title: 'Manchmal ist der erste Schritt kein Gedanke. Es ist der Körper.',
      lead: 'Atem, Meditation und Klang sind für die Momente da, in denen Analyse den Lärm nur verstärken würde. Die Fragen können warten.',
      cards: [
        { label: 'Zum Körper zurückkehren', title: 'Senken Sie zuerst die Lautstärke.', body: 'Ein sanfter Ort, um langsamer zu werden, bevor Sie Ihrem Kopf mehr abverlangen.' },
        { label: 'Etwas auf morgen verschieben', title: 'Lassen Sie die Nacht Nacht sein.', body: 'Wenn Schlaf der freundlichere nächste Schritt ist, muss das Problem vor dem Zubettgehen nicht gelöst werden.' },
      ],
    },
    trust: {
      eyebrow: 'Ihr Raum bleibt Ihr eigener',
      title: 'Eine persönliche Reflexion ist kein Rohstoff für das System anderer.',
      body: 'Miravelys bewahrt das, was Sie schreiben, standardmäßig auf Ihrem Gerät auf. Wenn Sie sich jemals für Cloud-Unterstützung entscheiden, ist das eine separate, bewusste Entscheidung. Sie können Geschriebenes jederzeit bearbeiten, ausblenden oder löschen.',
      facts: ['Standardmäßig auf dem Gerät', 'Cloud-Unterstützung nur nach bewusster Wahl', 'Jederzeit bearbeiten oder löschen'],
      safety: 'Miravelys unterstützt persönliche Reflexion. Es ersetzt keine medizinische Versorgung, Therapie oder Krisenhilfe.',
      link: 'Datenschutzrichtlinie lesen',
      deviceLabel: 'Miravelys Datenschutz- und Datenkontrollen',
    },
    teaser: {
      eyebrow: 'Warum es das gibt',
      title: 'Ich habe ein Jahr lang versucht, ein klügeres System zu bauen. In der Angst zählte eine ehrliche Frage mehr.',
      body: 'Zeitweise konnte eine einzige Aufgabe 57 Aufrufe an verschiedene neuronale Netze durchlaufen. Das Produkt wurde einfacher, als ich mir eingestand: In einem schweren Moment braucht ein Mensch kein weiteres Dashboard.',
      link: 'Gründungsgeschichte lesen',
    },
    finale: {
      eyebrow: 'Beginnen Sie mit einem Moment',
      title: 'Sie müssen nicht Ihr ganzes Leben lösen. Benennen Sie nur, was gerade geschieht.',
      body: 'Wenn die Schleife zurückkehrt, kann es einen ruhigen Ort geben, zu dem Sie zurückkehren.',
    },
  },
  ja: {
    hero: {
      eyebrow: '本当に起きていることに戻るための、個人的な場所',
      title: '私たちは誰でも、ときどき同じ考えの輪にとらわれます。Miravelys は、そこから一歩抜け出す手助けをします。',
      body: '何を感じるべきかを決めるためではありません。立ち止まり、起きていることに名前をつけ、事実が終わるところと心がすでに作り始めた物語が始まるところを見るためのものです。',
      secondary: '仕組みを見る',
      deviceCaption: '頭から離れない、その瞬間から始めましょう。',
    },
    scenario: {
      eyebrow: 'よくある瞬間',
      title: '返信のないメッセージ一つで、心はもう一つの物語を作り始めている。',
      intro: '感じていることは本物です。でも、その瞬間はいくつもの層からできています。別々に見えると、選べる余地がまた生まれます。',
      note: 'Miravelys は感情を否定したり、「前向きに考えて」と促したりしません。最初に浮かんだ説明を、唯一の現実だと思い込まないための手助けをします。',
    },
    method: {
      eyebrow: '仕組み',
      title: '答えを渡すのではなく、もう少し丁寧に見る方法。',
      lead: 'アプリは診断をしたり、あなたが何者かを決めたりしません。的確な問いを置き、見つけることはあなたに委ねます。',
      steps: [
        { kicker: '01 — 言葉にする', title: 'ループを言葉の中に置く。', body: '出来事、身体の感覚、怖さ、言い切れない思いを書いてください。始めるために、完璧に筋が通っている必要はありません。' },
        { kicker: '02 — 分けて見る', title: '起きたことと、あとから重なったものを見る。', body: '事実、感情、身体、思い込み、古い信念、まだわからないこと。すべてを今すぐ解決する必要はありません。' },
        { kicker: '03 — 気づく', title: '繰り返しを、ラベルではなく見えるものにする。', body: '時間がたつと、Miravelys は自分の言葉へと戻してくれます。古い物語が、気づかないまま支配するのではなく、見えるようになります。' },
      ],
    },
    support: {
      eyebrow: '考えることを待たせてもいいとき',
      title: '最初の一歩が、考えることではなく身体であるときもあります。',
      lead: '分析が雑音を大きくするだけのときのために、呼吸、瞑想、音があります。問いは待たせても大丈夫です。',
      cards: [
        { label: '身体に戻る', title: 'まず、音量を下げる。', body: '心にもっと求める前に、ゆっくりになるためのやさしい場所です。' },
        { label: '明日に残す', title: '夜を、ただ夜のままにする。', body: '眠ることがいちばんやさしい次の一歩なら、寝る前に問題を解く必要はありません。' },
      ],
    },
    trust: {
      eyebrow: 'あなたの場所は、あなたのものです',
      title: '個人的な振り返りは、誰かのシステムのための素材ではありません。',
      body: 'Miravelys は、標準では書いた内容をデバイス上に保存します。クラウドの支援を選ぶ場合も、それは別途、意識して行う選択です。書いた内容はいつでも修正、非表示、削除できます。',
      facts: ['標準では端末内に保存', 'クラウド支援は任意', 'いつでも編集・削除'],
      safety: 'Miravelys は個人的な振り返りを支えます。医療、心理療法、危機支援の代わりにはなりません。',
      link: 'プライバシーポリシーを読む',
      deviceLabel: 'Miravelys のプライバシーとデータ管理',
    },
    teaser: {
      eyebrow: 'なぜ生まれたのか',
      title: 'より賢いシステムを作ろうと一年を費やしました。不安の中では、正直な一つの問いの方が大切でした。',
      body: '一時期は、一つのタスクが異なるニューラルネットワークへの57回の呼び出しを通ることもありました。つらい瞬間に必要なのは、もう一つのダッシュボードではないと認めたとき、プロダクトはよりシンプルになりました。',
      link: '開発の背景を読む',
    },
    finale: {
      eyebrow: '一つの瞬間から始める',
      title: '人生すべてを解決しなくていい。今起きていることに名前をつけるだけでいい。',
      body: 'ループが戻ってきたとき、静かに戻れる場所があります。',
    },
  },
  es: {
    hero: {
      eyebrow: 'Un espacio personal para volver a lo que es cierto',
      title: 'Todos quedamos atrapados en bucles. Miravelys te ayuda a salir de uno.',
      body: 'No para decidir qué deberías sentir. Sino para detenerte, nombrar lo que está pasando y ver dónde terminan los hechos y dónde empieza la historia que tu mente ya ha empezado a construir.',
      secondary: 'Ver cómo funciona',
      deviceCaption: 'Empieza por el momento que no te deja en paz.',
    },
    scenario: {
      eyebrow: 'Un momento conocido',
      title: 'Un mensaje sin respuesta — y la mente ya escribió toda una historia.',
      intro: 'Lo que sientes es real. Pero el momento tiene varias capas. Cuando las ves por separado, vuelve a haber espacio para elegir.',
      note: 'Miravelys no discute con lo que sientes ni te dice que pienses en positivo. Te ayuda a no confundir la primera explicación con la única realidad.',
    },
    method: {
      eyebrow: 'Cómo funciona',
      title: 'No una respuesta preparada. Una forma de mirar con más atención.',
      lead: 'La aplicación no te diagnostica ni decide quién eres. Hace preguntas precisas; lo que ves sigue siendo tuyo.',
      steps: [
        { kicker: '01 — Nómbralo', title: 'Pon el bucle en palabras.', body: 'Escribe el hecho, la sensación corporal, el miedo o el pensamiento inacabado. No hace falta que suene perfectamente lógico para empezar.' },
        { kicker: '02 — Sepáralo', title: 'Mira lo que pasó — y lo que se añadió encima.', body: 'Hecho, emoción, cuerpo, suposición, creencia antigua, incógnita. No todo tiene que resolverse ahora.' },
        { kicker: '03 — Obsérvalo', title: 'Deja que el patrón sea visible, no una etiqueta.', body: 'Con el tiempo, Miravelys te devuelve a tus propias palabras para que una historia antigua pueda verse en lugar de dirigir todo en silencio.' },
      ],
    },
    support: {
      eyebrow: 'Cuando pensar puede esperar',
      title: 'A veces el primer paso no es un pensamiento. Es el cuerpo.',
      lead: 'La respiración, la meditación y el sonido son para esos momentos en que el análisis solo haría más ruido. Las preguntas pueden esperar.',
      cards: [
        { label: 'Volver al cuerpo', title: 'Baja el volumen primero.', body: 'Un lugar amable para bajar el ritmo antes de pedirle más a tu mente.' },
        { label: 'Dejar algo para mañana', title: 'Deja que la noche sea noche.', body: 'Cuando dormir es el siguiente paso más amable, el problema no tiene que resolverse antes de acostarte.' },
      ],
    },
    trust: {
      eyebrow: 'Tu espacio sigue siendo tuyo',
      title: 'Una reflexión personal no es materia prima para el sistema de otra persona.',
      body: 'Miravelys conserva lo que escribes en tu dispositivo de forma predeterminada. Si alguna vez eliges ayuda en la nube, será una decisión aparte y consciente. Puedes editar, ocultar o eliminar lo que escribes.',
      facts: ['Local de forma predeterminada', 'La ayuda en la nube es una elección explícita', 'Edita o elimina cuando quieras'],
      safety: 'Miravelys acompaña la reflexión personal. No sustituye la atención médica, la terapia ni el apoyo en una crisis.',
      link: 'Leer la política de privacidad',
      deviceLabel: 'Controles de privacidad y datos de Miravelys',
    },
    teaser: {
      eyebrow: 'Por qué existe',
      title: 'Pasé un año intentando construir un sistema más inteligente. En la ansiedad, importaba más una pregunta honesta.',
      body: 'En un momento dado, una sola tarea podía pasar por 57 llamadas a distintas redes neuronales. El producto se volvió más simple cuando admití que, en un momento difícil, una persona no necesita otro panel de control.',
      link: 'Leer la historia del fundador',
    },
    finale: {
      eyebrow: 'Empieza con un momento',
      title: 'No tienes que resolver toda tu vida. Solo nombra lo que está pasando ahora.',
      body: 'Cuando el bucle vuelva, puede haber un lugar tranquilo al que regresar.',
    },
  },
  pt: {
    hero: {
      eyebrow: 'Um espaço pessoal para voltar ao que é verdadeiro',
      title: 'Todos nós ficamos presos em ciclos. Miravelys ajuda você a quebrá-los.',
      body: 'Não para decidir o que você deveria sentir. Mas para parar, dar nome ao que está acontecendo e ver onde os fatos terminam e onde começa a história que a sua mente já começou a construir.',
      secondary: 'Veja como funciona',
      deviceCaption: 'Comece pelo momento que não sai da sua cabeça.',
    },
    scenario: {
      eyebrow: 'Um momento familiar',
      title: 'Uma mensagem sem resposta — e a mente já construiu uma história inteira.',
      intro: 'O que você sente é real. Mas esse momento tem várias camadas. Quando elas aparecem separadas, volta a existir espaço para escolher.',
      note: 'Miravelys não discute com o que você sente nem pede que você pense positivo. Ele ajuda você a não confundir a primeira explicação com a única realidade.',
    },
    method: {
      eyebrow: 'Como funciona',
      title: 'Não uma resposta pronta. Uma forma de olhar com mais atenção.',
      lead: 'O aplicativo não faz um diagnóstico nem decide quem você é. Ele propõe perguntas precisas; enxergar continua sendo algo seu.',
      steps: [
        { kicker: '01 — Nomeie', title: 'Coloque o ciclo em palavras.', body: 'Escreva o acontecimento, a sensação no corpo, o medo ou o pensamento inacabado. Nada precisa soar perfeitamente lógico para você começar.' },
        { kicker: '02 — Separe', title: 'Veja o que aconteceu — e o que foi colocado por cima.', body: 'Fato, sentimento, corpo, suposição, crença antiga, desconhecido. Nem tudo precisa ser resolvido agora.' },
        { kicker: '03 — Perceba', title: 'Deixe o padrão ficar visível, não virar um rótulo.', body: 'Com o tempo, Miravelys devolve você às suas próprias palavras para que uma história antiga possa ser vista, em vez de conduzir tudo em silêncio.' },
      ],
    },
    support: {
      eyebrow: 'Quando pensar pode esperar',
      title: 'Às vezes, o primeiro passo não é um pensamento. É o corpo.',
      lead: 'Respiração, meditação e som existem para os momentos em que a análise só aumentaria o ruído. As perguntas podem esperar.',
      cards: [
        { label: 'Volte ao corpo', title: 'Baixe o volume primeiro.', body: 'Um lugar gentil para desacelerar antes de pedir mais à sua mente.' },
        { label: 'Deixe algo para amanhã', title: 'Deixe a noite ser noite.', body: 'Quando dormir é o próximo passo mais gentil, o problema não precisa ser resolvido antes de deitar.' },
      ],
    },
    trust: {
      eyebrow: 'Seu espaço continua sendo seu',
      title: 'Uma reflexão pessoal não é matéria-prima para o sistema de outra pessoa.',
      body: 'Miravelys mantém o que você escreve no seu dispositivo por padrão. Se um dia você optar por ajuda na nuvem, essa será uma escolha separada e consciente. Você pode editar, ocultar ou apagar o que escreve.',
      facts: ['Local por padrão', 'Ajuda na nuvem só com escolha explícita', 'Edite ou apague quando quiser'],
      safety: 'Miravelys apoia a reflexão pessoal. Não substitui cuidados médicos, terapia ou apoio em uma crise.',
      link: 'Leia a política de privacidade',
      deviceLabel: 'Controles de privacidade e dados do Miravelys',
    },
    teaser: {
      eyebrow: 'Por que existe',
      title: 'Passei um ano tentando construir um sistema mais inteligente. Na ansiedade, uma pergunta honesta importou mais.',
      body: 'Em determinado momento, uma única tarefa podia passar por 57 chamadas a diferentes redes neurais. O produto ficou mais simples quando reconheci que, em um momento difícil, uma pessoa não precisa de mais um painel.',
      link: 'Leia a história do fundador',
    },
    finale: {
      eyebrow: 'Comece com um momento',
      title: 'Você não precisa resolver a sua vida inteira. Basta dar nome ao que está acontecendo agora.',
      body: 'Quando o ciclo voltar, pode haver um lugar calmo para onde voltar.',
    },
  },
};

const fallbackMethodMedia = [
  { screenCode: 'write', mockupId: 'clear' },
  { screenCode: 'layers', mockupId: 'truth' },
  { screenCode: 'patterns', mockupId: 'mirror' },
];

const fallbackSupportMedia = [
  { screenCode: 'body', mockupId: 'calm' },
  { screenCode: 'sounds', mockupId: 'rest' },
];

function buildFallbackCopy(lang) {
  const story = localizedFallbackStories[lang] ?? localizedFallbackStories.ro;
  const scenario = scenarioByLanguage[lang] ?? scenarioByLanguage.en;

  return {
    ...story,
    scenario: { ...story.scenario, ...scenario },
    method: {
      ...story.method,
      steps: story.method.steps.map((step, index) => ({ ...step, ...fallbackMethodMedia[index] })),
    },
    support: {
      ...story.support,
      cards: story.support.cards.map((card, index) => ({ ...card, ...fallbackSupportMedia[index] })),
    },
  };
}

export function resolveLoopStoryCopy(lang) {
  return authored[lang] ?? buildFallbackCopy(lang);
}

const founderStories = {
  en: {
    eyebrow: 'How it began',
    title: 'I built a complicated system. The hard moments needed something simpler.',
    intro: 'Miravelys started as a correction to my own instinct to make everything more intelligent, more automated, and more elaborate.',
    quote: '“At one point, a single task could pass through 57 calls to different neural networks.”',
    screenCaption: 'The product begins with one question, not a verdict.',
    chapters: [
      {
        label: '01 — Too much system',
        title: 'I thought technology had to do more.',
        paragraphs: [
          'For years I have built iOS apps. Last year I poured time, money, and months of architecture into a complex system, convinced that more layers would make it more helpful.',
          'But while I was continually refining it, a plain fact became hard to ignore: dashboards, game mechanics, and technical cleverness do not help much when a person is already overwhelmed.',
        ],
      },
      {
        label: '02 — The turn',
        title: 'A philosophical practice gave the product its direction.',
        paragraphs: [
          'In a book I encountered spiritual autolysis: a rigorous practice of questioning assumptions until you can tell what is known, what is felt, and what remains unknown.',
          'I did not want to bring its harshness into an app. I wanted to keep the central move — return to reality — while treating the person doing that work with care.',
        ],
      },
      {
        label: '03 — What remains',
        title: 'The app should not do the seeing for you.',
        paragraphs: [
          'Miravelys does not tell you what your experience means. It makes room to name the event, the feeling, the story, the belief, and what is still unknown.',
          'That distinction does not make fear disappear. It can make the next action less automatic. For me, that small space is where freedom starts.',
        ],
      },
    ],
    cta: 'Join early access',
  },
  ru: {
    eyebrow: 'Как всё начиналось',
    title: 'Я строил сложную систему. А в трудный момент нужен оказался более простой инструмент.',
    intro: 'Miravelys появился как поправка к моей привычке делать всё умнее, автоматизированнее и сложнее.',
    quote: '«В какой-то момент одна задача проходила через 57 вызовов разных нейросетей.»',
    screenCaption: 'Продукт начинается с одного вопроса, а не с вердикта.',
    chapters: [
      {
        label: '01 — Слишком много системы',
        title: 'Я думал, что технологии должны делать больше.',
        paragraphs: [
          'Я давно разрабатываю приложения для iOS. Последний год я вложил силы, средства и месяцы архитектуры в сложную систему — мне казалось, что дополнительные слои сделают её полезнее.',
          'Но, постоянно дорабатывая продукт, я увидел простую вещь: дашборды, игровые механики и техническая сложность почти не помогают, когда человек уже захвачен тревогой.',
        ],
      },
      {
        label: '02 — Поворот',
        title: 'Направление подсказала философская практика.',
        paragraphs: [
          'В одной книге я встретил идею духовного автолизиса: строгой практики, в которой проверяешь одно предположение за другим, пока не остаётся то, что действительно известно, почувствовано или ещё неясно.',
          'Я не хотел переносить эту жесткость в приложение. Мне было важно сохранить главное движение — возвращение к реальности, — но сделать его бережным к человеку, который его проходит.',
        ],
      },
      {
        label: '03 — Что осталось',
        title: 'Приложение не должно делать эту работу вместо вас.',
        paragraphs: [
          'Miravelys не говорит, что значит ваш опыт. Он помогает назвать событие, чувство, историю, убеждение и то, что пока остаётся неизвестным.',
          'Это различие не обязано сразу убрать страх. Но оно может сделать следующий шаг менее автоматическим. Для меня именно в этом небольшом пространстве начинается свобода.',
        ],
      },
    ],
    cta: 'Ранний доступ',
  },
};

function buildFounderFallback() {
  return founderStories.en;
}

const founderFallbackNotices = {
  ro: 'Povestea fondatorului este disponibilă momentan în engleză.',
  fr: 'L’histoire du fondateur est actuellement disponible en anglais.',
  hi: 'संस्थापक की कहानी अभी अंग्रेज़ी में उपलब्ध है।',
  zh: '创始人的故事目前仅提供英文版。',
  de: 'Die Geschichte des Gründers ist derzeit auf Englisch verfügbar.',
  ja: '創業者のストーリーは現在英語でご覧いただけます。',
  es: 'La historia del fundador está disponible actualmente en inglés.',
  pt: 'A história do fundador está disponível atualmente em inglês.',
};

export function resolveFounderStoryCopy(lang) {
  const sourceLanguage = founderStories[lang] ? lang : 'en';
  return {
    ...(founderStories[lang] ?? buildFounderFallback()),
    language: sourceLanguage,
    languageFallback: sourceLanguage === lang
      ? null
      : founderFallbackNotices[lang] ?? 'The founder story is currently available in English.',
  };
}
