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
  "ru": {
    "eyebrow": "История основателя",
    "title": "Как всё начиналось",
    "intro": "С самого появления нейросетей я был заворожён тем, как они работают. Я мог проводить с ними часы каждый день, проверяя самые разные идеи, задавая вопросы, споря с ответами и наблюдая, как из чего-то совсем сырого и едва уловимого постепенно рождается ясная мысль.",
    "quote": "«Между тем, что произошло, и тем, что мы об этом думаем, почти всегда возникает целая история. Иногда настолько убедительная, что мы перестаём замечать: это уже не сама реальность, а наше объяснение реальности.»",
    "screenCaption": "Продукт начинается с одного точного вопроса, а не с вердикта.",
    "chapters": [
      {
        "label": "01 — Защита и нейросети",
        "title": "Мы защищаем не только свои идеи, но и самих себя.",
        "paragraphs": [
          "Но больше всего меня поражали даже не возможности самих нейросетей. Меня поражало то, насколько отчётливо рядом с ними становились видны особенности человеческого мышления.",
          "Примерно в это же время, случайно или нет, мне в руки попала книга по философии. В ней описывался механизм, позволяющий отделить то, что мы действительно знаем, от того, во что мы просто верим.",
          "На первый взгляд всё было довольно просто: нужно было выписывать на бумагу одну мысль за другой, одно предположение за другим. Не пытаться поскорее найти удобный ответ. Не доказывать самому себе, что ты прав. Не заменять неприятную мысль более приятной. А просто смотреть глубже.",
          "Именно тогда я осознал нечто важное о человеческом разуме. Мы защищаем не только свои идеи. Вместе с ними мы защищаем своё прошлое, свои решения, свои страхи, надежды и представление о том, кто мы есть. У нейросети нет такой необходимости: когда появляются другие данные, она может изменить ответ.",
          "Человеку намного сложнее. Не потому, что с нами что-то не так — наш разум просто пытается защитить нас. Но иногда тот же самый механизм начинает работать против нас, заставляя годами ходить по одному и тому же кругу."
        ]
      },
      {
        "label": "02 — От сложности к бережности",
        "title": "В момент тревоги человеку нужен не алгоритм, а бережная остановка.",
        "paragraphs": [
          "Тогда меня озарило: механизм из книги можно развить. Его можно сделать доступным каждому человеку, который устал снова и снова оказываться в одних и тех же болезненных ситуациях.",
          "Первые месяцы я был практически одержим архитектурой системы. Я хотел построить систему, которая поймёт всё. Но чем глубже я погружался в работу, тем очевиднее становилось обратное.",
          "В момент, когда человека захлёстывает тревога, ему редко нужен ещё один дашборд. Ему не нужен холодный алгоритм, который разложит его состояние на части и объяснит, что с ним не так. В такие моменты мы и без того перегружены.",
          "Иногда человеку нужно совсем немного: просто остановиться, назвать своими именами то, что только что произошло, и задать себе один-единственный, но действительно точный вопрос.",
          "Оригинальный подход из книги был довольно жёстким, почти клиническим. Я наотрез отказался переносить эту холодность в Miravelys. Мне было важно сохранить ясность, но убрать жестокость: не бороться с человеком, не стыдить его и не обесценивать его переживания."
        ]
      },
      {
        "label": "03 — Пространство выбора",
        "title": "Разделяя факт и предположение, вы возвращаете себе выбор.",
        "paragraphs": [
          "Так постепенно сформировался Miravelys — не ИИ-психолог и не обычный дневник настроения, а глубоко личное пространство, куда можно уйти, когда внутри становится слишком шумно.",
          "Представьте, что вы отправили близкому человеку сообщение. Прошёл день, ответа нет. Сам по себе этот факт почти не содержит информации, но разум начинает заполнять пустоту историями: «Я не нужен», «Меня игнорируют», «Всё закончилось».",
          "Miravelys задаёт вопросы, помогающие пробиться сквозь шум и увидеть факт: «Я отправил сообщение. Я ещё не получил ответа.» Вот и всё.",
          "Между фактом и предположением существует пространство. И именно в нём появляется выбор — не отправлять десять сообщений подряд, не разрушать отношения раньше времени, не принимать решений из страха.",
          "Моей целью было создать безопасное и тихое пространство. Потому что настоящее изменение начинается в тот короткий момент, когда история, которую вы повторяли себе сотни раз, внезапно перестаёт выглядеть единственно возможной. Именно ради этого пространства появился Miravelys."
        ]
      }
    ],
    "cta": "Ранний доступ"
  },
  "en": {
    "eyebrow": "Founder's Story",
    "title": "How it all began",
    "intro": "Ever since neural networks emerged, I’ve been fascinated by how they work. I could spend hours with them every single day, testing a wide range of ideas, asking questions, arguing with their answers, and watching how a clear thought gradually takes shape out of something incredibly raw and elusive.",
    "quote": "“Between what actually happened and what we think about it, there almost always emerges a whole story. Sometimes it’s so convincing that we stop noticing: this is no longer reality itself, but our explanation of reality.”",
    "screenCaption": "The product begins with one precise question, not a verdict.",
    "chapters": [
      {
        "label": "01 — Defense and Neural Networks",
        "title": "We don't just defend our ideas; we defend our very selves.",
        "paragraphs": [
          "But what amazed me most wasn't even the capabilities of neural networks themselves. What amazed me was how clearly the distinct quirks of human thinking stood out in comparison to them.",
          "Around this time, by chance or not, I came across a philosophy book. It described a mechanism that allows us to separate what we truly know from what we merely believe.",
          "At first glance, it was quite simple: write down one thought after another on paper, one assumption after another. Not trying to quickly find a comfortable answer. Not trying to prove to yourself that you are right. Not replacing an unpleasant thought with a more pleasant one. But simply looking deeper.",
          "That is when I realized something incredibly important about the human mind. We don't just defend our ideas. Along with them, we defend our past, our decisions, our fears, our hopes, and our entire sense of who we are. A neural network has no such need: when new data arrives, it can simply change its answer.",
          "For humans, it is much harder. Not because there is something wrong with us—our mind is just trying to protect us. But sometimes, this exact same mechanism starts working against us, trapping us in the same circles for years."
        ]
      },
      {
        "label": "02 — From Complexity to Gentleness",
        "title": "In a moment of anxiety, a person doesn't need an algorithm, but a gentle pause.",
        "paragraphs": [
          "Then it hit me: the mechanism from the book could be evolved. It could be made accessible to anyone who is tired of finding themselves in the same painful situations again and again.",
          "For the first few months, I was practically obsessed with its architecture. I wanted to build a system that would understand everything. But the deeper I immersed myself in the work, the more obvious the exact opposite became.",
          "In a moment when a person is overwhelmed by anxiety, they rarely need another dashboard. They don't need a cold algorithm to dissect their state of mind and explain what is wrong with them. In moments like that, we are already overloaded enough.",
          "Sometimes, a person needs very little: just to stop, to call what just happened by its real name, and to ask themselves a single, but truly precise question.",
          "The original approach from the book was quite harsh, almost clinical. I flatly refused to bring that coldness into Miravelys. It was vital to me to preserve the clarity, but remove the cruelty: not to fight the person, not to shame them, and not to invalidate their feelings."
        ]
      },
      {
        "label": "03 — The Space of Choice",
        "title": "By separating fact from assumption, you reclaim your choice.",
        "paragraphs": [
          "That is how Miravelys slowly took shape—not an AI psychologist or a typical mood journal, but a profoundly private space where you can retreat when things get too loud inside.",
          "Imagine you sent a message to someone close to you. A day passes, still no reply. This fact alone contains almost no information, but the mind begins filling the void with stories: 'They don't need me', 'I am being ignored', 'It's over'.",
          "Miravelys asks questions that help you push through the noise and see the fact: 'I sent a message. I haven't received a reply yet.' That's it.",
          "Between a fact and an assumption, there is a space. And it is precisely in this space that a choice appears—not to send ten messages in a row, not to destroy a relationship prematurely, not to make decisions out of fear.",
          "My goal was to create a safe and quiet space. Because real change begins in that brief moment when the story you’ve repeated to yourself a hundred times suddenly stops looking like the only possible reality. It is precisely for the sake of this space that Miravelys came to be."
        ]
      }
    ],
    "cta": "Join early access"
  },
  "ro": {
    "eyebrow": "Povestea fondatorului",
    "title": "Cum a început totul",
    "intro": "Încă de la apariția rețelelor neuronale, am fost fascinat de modul în care funcționează. Puteam petrece ore în șir cu ele în fiecare zi, testând tot felul de idei, punând întrebări, contrazicând răspunsurile și observând cum, dintr-o formă crudă și greu de prins, se naște treptat o gândire clară.",
    "quote": "„Între ceea ce s-a întâmplat de fapt și ceea ce credem noi despre acel lucru, se naște aproape întotdeauna o întreagă poveste. Uneori este atât de convingătoare, încât încetăm să mai observăm: aceea nu mai este realitatea, ci propria noastră explicație a realității.”",
    "screenCaption": "Produsul începe cu o singură întrebare precisă, nu cu un verdict.",
    "chapters": [
      {
        "label": "01 — Apărarea și rețelele neuronale",
        "title": "Nu ne apărăm doar ideile; ne apărăm pe noi înșine.",
        "paragraphs": [
          "Dar cel mai mult m-au uimit nu posibilitățile rețelelor neuronale în sine. M-a uimit cât de evident au scos la lumină particularitățile gândirii noastre umane.",
          "Cam în aceeași perioadă, întâmplător sau nu, mi-a căzut în mână o carte de filosofie. În ea era descris un mecanism care ne permitea să separăm ceea ce știm cu adevărat de ceea ce doar credem că știm.",
          "La prima vedere, totul era destul de simplu: trebuia să scrii pe hârtie un gând după altul, o presupunere după alta. Să nu încerci să găsești repede un răspuns comod. Să nu încerci să-ți demonstrezi ție însuți că ai dreptate. Ci pur și simplu să privești mai adânc.",
          "Acela a fost momentul în care am realizat ceva vital despre mintea umană. Noi nu ne apărăm doar ideile. Odată cu ele, ne apărăm trecutul, deciziile, fricile, speranțele și însăși imaginea pe care o avem despre cine suntem. O rețea neuronală nu are o asemenea nevoie: când primește date noi, își poate schimba pur și simplu răspunsul.",
          "Pentru om, este mult mai greu. Nu pentru că ar fi ceva în neregulă cu noi — mintea noastră încearcă doar să ne protejeze. Dar uneori, exact acest mecanism începe să lucreze împotriva noastră."
        ]
      },
      {
        "label": "02 — De la complexitate la blândețe",
        "title": "În clipa de anxietate, omul nu are nevoie de un algoritm, ci de o oprire blândă.",
        "paragraphs": [
          "Atunci mi-a venit revelația: mecanismul din acea carte putea fi dezvoltat. Putea deveni accesibil fiecărui om obosit să se regăsească iar și iar în aceleași situații dureroase.",
          "În primele luni, am fost practic obsedat de arhitectura sistemului. Îmi doream să construiesc un sistem care să înțeleagă totul. Dar cu cât mă scufundam mai adânc în muncă, cu atât mai evident devenea exact opusul.",
          "În clipa în care un om este copleșit de anxietate, rareori are nevoie de încă un panou de control. Nu are nevoie de un algoritm rece care să-i disece starea. În astfel de momente, suntem oricum suficient de supraîncărcați.",
          "Uneori, un om are nevoie de foarte puțin: doar să se oprească, să numească ceea ce tocmai s-a întâmplat pe numele său real, și să-și pună o singură întrebare, dar una cu adevărat precisă.",
          "Abordarea originală din carte era destul de dură, aproape clinică. Am refuzat categoric să aduc acea răceală în Miravelys. A fost vital pentru mine să păstrez claritatea, dar să elimin cruzimea: să nu mă lupt cu omul, să nu-l fac să-i fie rușine și să nu-i devalorizez suferința."
        ]
      },
      {
        "label": "03 — Spațiul alegerii",
        "title": "Separând faptul de presupunere, îți recapeți libertatea de a alege.",
        "paragraphs": [
          "Așa a prins contur Miravelys — nu un psiholog IA și nici un jurnal obișnuit, ci un spațiu profund intim unde te poți retrage când înăuntru devine prea zgomotos.",
          "Imaginează-ți că ai trimis un mesaj cuiva drag. Trece o zi, niciun răspuns. Acest fapt în sine nu conține informație, dar mintea umple golul cu scenarii: «Nu mai are nevoie de mine», «Mă ignoră», «S-a terminat».",
          "Miravelys îți pune întrebări care te ajută să vezi faptul: «Am trimis un mesaj. Nu am primit încă răspuns.» Atât.",
          "Între un fapt și o presupunere există un spațiu. Știi că tocmai în acel spațiu apare alegerea — de a nu trimite zece mesaje la rând, de a nu distruge o relație înainte de vreme, de a nu lua decizii din frică.",
          "Am vrut să creez un spațiu sigur și liniștit. Pentru că adevărata schimbare începe în acel scurt moment în care povestea pe care ți-ai repetat-o de sute de ori încetează să mai pară singura realitate posibila."
        ]
      }
    ],
    "cta": "Acces timpuriu"
  },
  "fr": {
    "eyebrow": "L’histoire du fondateur",
    "title": "Comment tout a commencé",
    "intro": "Depuis l'apparition des réseaux de neurones, j'ai été fasciné par leur fonctionnement. Je pouvais passer des heures chaque jour avec eux, testant les idées les plus diverses, posant des questions et regardant une pensée claire prendre forme.",
    "quote": "« Entre ce qui s'est réellement passé et ce que nous en pensons, il s'intercale presque toujours toute une histoire. Parfois si convaincante que nous ne réalisons plus : ce n'est plus la réalité, mais notre explication de la réalité. »",
    "screenCaption": "Le produit commence par une question précise, pas par un verdict.",
    "chapters": [
      {
        "label": "01 — Défense et réseaux de neurones",
        "title": "Nous ne défendons pas seulement nos idées, mais notre être tout entier.",
        "paragraphs": [
          "Mais ce qui me frappait le plus, c'était la clarté avec laquelle les particularités de la pensée humaine ressortaient en comparaison des réseaux de neurones.",
          "À cette époque, je suis tombé sur un livre de philosophie décrivant un mécanisme pour séparer ce que nous savons vraiment de ce que nous croyons simplement.",
          "À première vue, c'était simple : écrire sur papier une pensée après l'autre, sans chercher de réponse confortable ni prouver qu'on a raison, mais en regardant plus profondément.",
          "C'est là que j'ai compris une chose essentielle : nous défendons aussi notre passé, nos peur et notre identité. Une IA n'a pas ce besoin : face à de nouvelles données, elle change sa réponse.",
          "Pour l'être humain, c'est plus difficile. Notre esprit cherche à nous protéger, mais parfois ce mécanisme se retourne contre nous."
        ]
      },
      {
        "label": "02 — De la complexité à la douceur",
        "title": "Dans l'anxiété, on n'a pas besoin d'un algorithme, mais d'une pause bienveillante.",
        "paragraphs": [
          "J'ai compris que ce mécanisme pouvait être développé pour toute personne fatiguée de retomber dans les mêmes situations douloureuses.",
          "Au début, j'étais obsédé par la complexité de l'architecture. Mais plus j'avançais, plus l'inverse devenait évident : dans l'anxiété, on n'a pas besoin d'un énième tableau de bord ou d'un algorithme froid.",
          "Parfois, on a juste besoin de s'arrêter, de nommer ce qui vient de se passer et de se poser une question vraiment précise.",
          "J'ai refusé la froideur clinique de la méthode originale : il fallait préserver la clarté tout en enlevant la cruauté et la honte."
        ]
      },
      {
        "label": "03 — L'espace du choix",
        "title": "En séparant les faits des suppositions, vous retrouvez le choix.",
        "paragraphs": [
          "C'est ainsi qu me est né Miravelys : un espace intime où se retirer quand tout devient trop bruyant à l'intérieur.",
          "Si un message reste sans réponse, l'esprit invente une histoire (« il s'en fiche », « c'est fini »). Miravelys vous aide à revenir au fait brut : « J'ai envoyé un message. Je n'ai pas encore eu de réponse. »",
          "Entre le fait et la supposition existe un espace. C'est dans cet espace que naît le choix de ne pas agir sous le coup de la peur.",
          "Miravelys existe pour créer cet espace de liberté et de clarté."
        ]
      }
    ],
    "cta": "Accès anticipé"
  },
  "es": {
    "eyebrow": "La historia del fundador",
    "title": "Cómo empezó todo",
    "intro": "Desde la aparición de las redes neuronales, me ha fascinado cómo funcionan. Podía pasar horas con ellas todos los días, probando las más diversas ideas y observando cómo nacía poco a poco un pensamiento claro.",
    "quote": "«Entre lo que realmente ocurrió y lo que pensamos al respecto, casi siempre surge toda una historia. A veces tan convincente que dejamos de darnos cuenta: ya no es la realidad, sino nuestra explicación de ella.»",
    "screenCaption": "El producto empieza con una pregunta precisa, no con un veredicto.",
    "chapters": [
      {
        "label": "01 — Defensa y redes neuronales",
        "title": "No solo defendemos nuestras ideas, sino a nosotros mismos.",
        "paragraphs": [
          "Lo que más me asombraba era la claridad con la que resaltaban las peculiaridades del pensamiento humano frente a las redes neuronales.",
          "Un libro de filosofía me enseñó un mecanismo para separar lo que realmente sabemos de lo que solo creemos.",
          "Escribir pensamiento tras pensamiento, sin buscar respuestas cómodas ni intentar tener razón, sino simplemente mirando más a fondo.",
          "Ahí entendí que defendemos nuestro pasado, nuestros miedos y nuestra identidad. Una IA no tiene esa necesidad; ante nuevos datos, simplemente cambia su respuesta.",
          "Para el ser humano es más difícil porque nuestra mente intenta protegernos, pero a veces ese mecanismo trabaja en nuestra contra."
        ]
      },
      {
        "label": "02 — De la complejidad a la amabilidad",
        "title": "En el momento de ansiedad, no necesitas un algoritmo, sino una pausa amable.",
        "paragraphs": [
          "Decidí desarrollar ese mecanismo para cualquier persona cansada de repetir las mismas situaciones dolorosas.",
          "Al principio me obsesioné con crear una arquitectura compleja. Pero entendí que en momentos de ansiedad no necesitamos dashboards ni algoritmos fríos.",
          "A veces solo necesitamos detenernos, llamar a las cosas por su nombre y hacernos una pregunta precisa.",
          "Eliminé la frialdad clínica del método original para mantener la claridad sin crueldad ni juicios."
        ]
      },
      {
        "label": "03 — El espacio de la elección",
        "title": "Al separar el hecho de la suposición, recuperas tu elección.",
        "paragraphs": [
          "Así nació Miravelys: un espacio íntimo al que acudir cuando todo se vuelve demasiado ruidoso dentro.",
          "Si un mensaje no tiene respuesta, la mente crea historias catastróficas. Miravelys te ayuda a ver el hecho: «Envié un mensaje. Aún no hay respuesta.»",
          "Entre el hecho y la suposición hay un espacio. Es ahí donde nace la elección consciente.",
          "Miravelys existe para proteger ese espacio de claridad y libertad."
        ]
      }
    ],
    "cta": "Acceso anticipado"
  },
  "de": {
    "eyebrow": "Die Geschichte des Gründers",
    "title": "Wie alles begann",
    "intro": "Seit dem Aufkommen neuronaler Netze war ich davon fasziniert, wie sie funktionieren. Ich konnte jeden Tag Stunden mit ihnen verbringen und beobachten, wie aus etwas Rohem ein klarer Gedanke entstand.",
    "quote": "„Zwischen dem, was tatsächlich passiert ist, und dem, was wir darüber denken, entsteht fast immer eine ganze Geschichte. Manchmal so überzeugend, dass wir nicht mehr bemerken: Das ist nicht die Realität, sondern unsere Erklärung der Realität.“",
    "screenCaption": "Das Produkt beginnt mit einer präzisen Frage, nicht mit einem Urteil.",
    "chapters": [
      {
        "label": "01 — Selbstschutz und KI",
        "title": "Wir verteidigen nicht nur Ideen, sondern unser gesamtes Selbst.",
        "paragraphs": [
          "Mich faszinierte, wie deutlich die Eigenarten des menschlichen Denkens im Vergleich zu KI hervortraten.",
          "Ein Philosophiebuch zeigte mir einen Mechanismus, um Wissen von bloßem Glauben zu trennen.",
          "Gedanke für Gedanke aufschreiben, ohne schnell bequeme Antworten zu suchen oder recht haben zu wollen.",
          "Wir verteidigen unsere Vergangenheit, Ängste und Identität. Eine KI muss kein Gesicht wahren; bei neuen Daten ändert sie einfach die Antwort.",
          "Für Menschen ist das schwerer, weil unser Verstand uns schützen will – doch manchmal arbeitet dieser Schutz gegen uns."
        ]
      },
      {
        "label": "02 — Von Komplexität zu Behutsamkeit",
        "title": "In Momenten der Angst braucht man keinen Algorithmus, sondern ein behutsames Innehalten.",
        "paragraphs": [
          "Ich wollte diesen Mechanismus für jeden zugänglich machen, der in schmerzhaften Mustern feststeckt.",
          "Zuerst war ich von komplexer Architektur besessen. Doch bei Angst hilft kein kaltes Dashboard.",
          "Manchmal braucht man nur Innehalten, Benennen des Erlebten und eine präzise Frage.",
          "Ich habe die klinische Härte der ursprünglichen Methode entfernt: Klarheit ohne Grausamkeit."
        ]
      },
      {
        "label": "03 — Der Raum der Entscheidung",
        "title": "Wer Tatsachen von Annahmen trennt, gewinnt seine Wahlfreiheit zurück.",
        "paragraphs": [
          "So entstand Miravelys: Ein privater Rückzugsort, wenn es innerlich zu laut wird.",
          "Bei einer unbeantworteten Nachricht baut der Kopf Katastrophengeschichten. Miravelys führt zurück zur Tatsache: „Ich habe eine Nachricht geschickt. Ich habe noch keine Antwort.“",
          "Zwischen Tatsache und Annahme liegt ein Raum. Genau dort entsteht die bewusste Entscheidung.",
          "Für genau diesen Raum der Klarheit existiert Miravelys."
        ]
      }
    ],
    "cta": "Früher Zugang"
  },
  "pt": {
    "eyebrow": "A história do fundador",
    "title": "Como tudo começou",
    "intro": "Desde o surgimento das redes neurais, fiquei fascinado pela forma como funcionam. Podia passar horas a testar ideias e a ver um pensamento claro nascer de algo bruto.",
    "quote": "«Entre o que aconteceu de facto e o que pensamos sobre isso, surge quase sempre toda uma história. Por vezes tão convincente que deixamos de reparar: já não é a realidade, mas a nossa explicação dela.»",
    "screenCaption": "O produto começa com uma pergunta precisa, não com um veredito.",
    "chapters": [
      {
        "label": "01 — Defesa e redes neurais",
        "title": "Não defendemos apenas ideias; defendemos quem somos.",
        "paragraphs": [
          "Impressionava-me como as peculiaridades do pensamento humano se tornavam evidentes ao lado da IA.",
          "Um livro de filosofia revelou um mecanismo para separar o que realmente sabemos do que apenas julgamos saber.",
          "Escrever pensamento após pensamento, sem procurar respostas confortáveis nem tentar ter razão.",
          "Defendemos o nosso passado, medos e identidade. Uma IA não tem essa necessidade; com novos dados, muda a resposta.",
          "Para o ser humano é mais difícil porque a mente tenta proteger-nos, mas por vezes esse mecanismo trabalha contra nós."
        ]
      },
      {
        "label": "02 — Da complexidade à delicadeza",
        "title": "Na ansiedade, não precisamos de um algoritmo, mas de uma pausa delicada.",
        "paragraphs": [
          "Quis tornar esse mecanismo acessível a quem está cansado de repetir as mesmas dores.",
          "No início fiquei obcecado com sistemas complexos. Mas na ansiedade ninguém precisa de dashboards frios.",
          "Por vezes basta parar, dar o nome verdadeiro ao que aconteceu e fazer uma pergunta precisa.",
          "Eliminei a frieza clínica do método original para manter a clareza sem crueldade."
        ]
      },
      {
        "label": "03 — O espaço da escolha",
        "title": "Ao separar o facto da suposição, recupera a sua capacidade de escolha.",
        "paragraphs": [
          "Assim nasceu o Miravelys: um espaço íntimo para quando tudo fica demasiado barulhento por dentro.",
          "Perante o silêncio de uma mensagem, a mente cria histórias. O Miravelys ajuda a ver o facto: «Enviei uma mensagem. Ainda não obtive resposta.»",
          "Entre o facto e a suposição existe um espaço. É aí que surge a escolha consciente.",
          "O Miravelys existe para proteger esse espaço de liberdade."
        ]
      }
    ],
    "cta": "Acesso antecipado"
  },
  "hi": {
    "eyebrow": "संस्थापक की कहानी",
    "title": "शुरुआत कैसे हुई",
    "intro": "जब से न्यूरल नेटवर्क सामने आए हैं, मैं उनके काम करने के तरीके से रोमांचित रहा हूँ। मैं हर दिन घंटों उनके साथ बिताकर विचारों को स्पष्ट सोच में बदलते देख सकता था।",
    "quote": "“घटना और हमारी सोच के बीच लगभग हमेशा एक पूरी कहानी बन जाती है। कभी-कभी यह इतनी पक्की लगती है कि हम भूल जाते हैं: यह असलियत नहीं, हमारी व्याख्या है。”",
    "screenCaption": "उत्पाद एक सटीक सवाल से शुरू होता है, किसी फैसले से नहीं।",
    "chapters": [
      {
        "label": "01 — सुरक्षा और न्यूरल नेटवर्क",
        "title": "हम सिर्फ विचारों का नहीं, अपनी पहचान का बचाव करते हैं।",
        "paragraphs": [
          "मुझे सबसे ज्यादा हैरानी इंसानी सोच की खासियतों को AI के सामने साफ देखने पर हुई।",
          "दर्शनशास्त्र की एक किताब ने मुझे सच और केवल मान्यताओं को अलग करने का तरीका दिखाया।",
          "कागज़ पर विचार लिखना, जल्दी में आरामदायक जवाब न खोजना और खुद को सही साबित न करना।",
          "हम अपने अतीत, डर और पहचान की रक्षा करते हैं। AI को मान-सम्मान नहीं बचाना पड़ता; नया डेटा आते ही वह जवाब बदल लेता है।",
          "इंसान के लिए यह कठिन है क्योंकि हमारा दिमाग हमारी रक्षा की कोशिश करता है, लेकिन कभी-कभी यही हमारे खिलाफ काम करने लगता है।"
        ]
      },
      {
        "label": "02 — जटिलता से संवेदनशीलता तक",
        "title": "घबराहट के पल में एल्गोरिदम नहीं, एक संवेदनशील ठहराव चाहिए।",
        "paragraphs": [
          "मैंने इस तरीके को हर उस व्यक्ति के लिए सुलभ बनाने का फैसला किया जो एक ही दर्दनाक चक्र से थक चुका है।",
          "शुरुआत में मैं जटिल आर्किटेक्चर के पीछे पड़ा था। लेकिन चिंता के पलों में ठंडे डैशबोर्ड काम नहीं आते।",
          "कभी-कभी बस रुकने, घटना को उसका सही नाम देने और एक सटीक सवाल पूछने की ज़रूरत होती है।",
          "मैंने मूल तरीके के रूखेपन को हटा दिया ताकि बिना कठोरता के स्पष्टता बनी रहे।"
        ]
      },
      {
        "label": "03 — चुनाव का स्थान",
        "title": "तथ्य और अनुमान को अलग करके आप अपना चुनाव वापस पाते हैं।",
        "paragraphs": [
          "ऐसे Miravelys का जन्म हुआ: एक निजी स्थान जहाँ अंदर शोर होने पर आप पनाह ले सकते हैं।",
          "मैसेज का जवाब न आने पर दिमाग कहानियाँ गढ़ता है। Miravelys आपको तथ्य दिखाता है: 'मैंने मैसेज भेजा। जवाब अभी नहीं आया।'",
          "तथ्य और अनुमान के बीच एक जगह होती है। वहीं से समझदारी भरा फैसला जन्म लेता है।",
          "Miravelys इसी स्पष्टता और स्वतंत्रता की जगह को बचाने के लिए बना है।"
        ]
      }
    ],
    "cta": "शुरुआती पहुँच"
  },
  "zh": {
    "eyebrow": "创始人的故事",
    "title": "一切是如何开始的",
    "intro": "自从神经网络出现以来，我就对其运作方式深深着迷。我每天可以花上几个小时与它们对话，看着模糊的想法逐渐孕育出清晰的思考。",
    "quote": "“在实际发生的事与我们的看法之间，几乎总是会衍生出一整套故事。有时这故事如此逼真，以至于我们不再察觉：那已不是现实，而是我们的解释。”",
    "screenCaption": "产品始于一个精准的提问，而非冷酷的判定。",
    "chapters": [
      {
        "label": "01 — 防御与神经网络",
        "title": "我们不仅在捍卫想法，更是在捍卫自我。",
        "paragraphs": [
          "神经网络让我看清了人类思维的独特性：我们总在试图证明自己是对的。",
          "一本哲学书启发了我：将事实与我们盲目相信的假设分离开来。",
          "在纸上逐条写下想法，不急于寻找舒服的答案，也不去强行辩解，只是看得更深。",
          "人类习惯捍卫过去、恐惧和自我认知；而 AI 没有这种包袱，遇到新数据就能直接修正答案。",
          "这并非我们有缺陷，大脑只是想保护我们，但有时这种保护机制反而将我们困在死循环中。"
        ]
      },
      {
        "label": "02 — 从复杂走向温和",
        "title": "在焦虑时刻，人需要的不是算法，而是一次温和的暂停。",
        "paragraphs": [
          "我决定开发这个系统，帮助每一个厌倦了重复痛苦境遇的人。",
          "起初我执着于构建复杂的系统架构，但后来意识到：被焦虑淹没时，没人需要冷冰冰的数据图表。",
          "有时人需要的极少：停下来，给刚刚发生的事叫出真正的名字，并问自己一个精准的问题。",
          "我剔除了原始哲学方法中的冷酷与严苛，保留清晰，注入温和与尊重。"
        ]
      },
      {
        "label": "03 — 选择的空间",
        "title": "区分事实与假设，你就能重获选择权。",
        "paragraphs": [
          "Miravelys 应运而生：当内心过于喧嚣时，这里是一个可以退避的极私密空间。",
          "面对没有回复的消息，大脑会编造悲观故事。Miravelys 帮你回归事实：“我发了消息，目前尚未收到回复。”",
          "在事实与假设之间存在一个空间，清醒的选择正是由此诞生。",
          "Miravelys 的存在，正是为了守护这片通往自由与清醒的空间。"
        ]
      }
    ],
    "cta": "早期体验"
  },
  "ja": {
    "eyebrow": "創業者ストーリー",
    "title": "すべての始まり",
    "intro": "ニューラルネットワークが登場して以来、私はその仕組みに魅了されてきました。毎日何時間もアイデアを試し、明確な思考が形作られていく過程を観察していました。",
    "quote": "「実際に起きたことと、それに対する自分の考えの間には、ほぼ常に『物語』が生まれます。時にはそれが現実そのものではなく、単なる解釈であることに気づけなくなるほどです。」",
    "screenCaption": "プロダクトは判定ではなく、ひとつの確かな質問から始まります。",
    "chapters": [
      {
        "label": "01 — 自我防衛とAI",
        "title": "私たちは考えだけでなく、自分自身を守ろうとしています。",
        "paragraphs": [
          "AIと対比することで、人間の思考の癖がいかに鮮明に浮かび上がるかに驚かされました。",
          "ある哲学書で、事実と単なる思い込みを分離するメカニズムに出会いました。",
          "思考を紙に書き出し、安易な答えに逃げず、自分が正しいと証明しようとせず、ただ深く見つめること。",
          "私たちは過去や恐れ、アイデンティティを守ろうとします。AIにはその必要がなく、新しいデータがあれば答えを変えられます。",
          "人間にとってそれが難しいのは心が自分を守ろうとしているからですが、時にその仕組みが自分を追い詰めます。"
        ]
      },
      {
        "label": "02 — 複雑さから優しさへ",
        "title": "不安な瞬間に必要なのはアルゴリズムではなく、優しい立ち止まりです。",
        "paragraphs": [
          "同じ苦しいパターンを繰り返す全ての人に、この手法を届けたいと考えました。",
          "最初は複雑なシステム設計に執着しましたが、不安な時に冷たいダッシュボードは役に立ちません。",
          "必要なのは、立ち止まり、起きたことに本当の名前をつけ、的確な問いをひとつ自分に投げかけることです。",
          "元の手法の冷酷さを取り除き、厳しさではなく優しさと明確さを大切にしました。"
        ]
      },
      {
        "label": "03 — 選択の空間",
        "title": "事実と思い込みを分けることで、選択肢を取り戻せます。",
        "paragraphs": [
          "こうしてMiravelysが誕生しました。心の中が騒がしい時に静かに逃げ込めるプライベートな空間です。",
          "返信がない時、心は悲観的な物語を紡ぎます。Miravelysは『メッセージを送った。まだ返信はない。』という事実へ連れ戻します。",
          "事実と思い込みの間には空間があり、そこにこそ意識的な選択が生まれます。",
          "Miravelysは、その自由な選択の空間を守るために存在しています。"
        ]
      }
    ],
    "cta": "早期アクセス"
  }
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
