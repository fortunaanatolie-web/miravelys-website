import { languages } from './siteCopy.js';

const screenStoryByLanguage = {
  en: {
    eyebrow: 'Every screen has a purpose',
    title: 'See how each screen helps one tangled moment become clearer.',
    intro:
      'Each Miravelys screen represents a real moment in the user journey: arriving, writing, sorting, calming, resting, reflecting, and staying in control.',
    actionLabel: 'See this moment inside the app',
    items: {
      welcome: {
        title: 'Welcome: begin without pressure',
        body:
          'The first screen introduces Miravelys as a private place to bring one tangled moment, not as a task list or a performance routine.',
        before: 'Before: “I do not know where to start.”',
        after: 'After: “I can begin with one honest line.”',
      },
      today: {
        title: 'Today: choose what actually helps now',
        body:
          'Home brings the main paths together so the user can choose clarity, body calming, sleep support, or a weekly reflection without feeling pushed.',
        before: 'Before: too many feelings at once.',
        after: 'After: one gentle doorway for this moment.',
      },
      clear: {
        title: 'Get Clear: write the messy thought down',
        body:
          'The user can capture an emotion, belief, body signal, or repeated thought before it grows into a whole story.',
        before: 'Before: the thought loops in the head.',
        after: 'After: it is visible enough to sort.',
      },
      truth: {
        title: 'Truth Line: separate the layers',
        body:
          'Miravelys helps distinguish the moment, emotion, body reaction, story, belief candidate, and unknown — gently, never as a verdict.',
        before: 'Before: fact and fear feel identical.',
        after: 'After: the user can correct what does not fit.',
      },
      calm: {
        title: 'Calm Now: support the body first',
        body:
          'When the body is activated, the app does not force analysis. Breathing, grounding, meditation, and calming sounds help the user return to the present.',
        before: 'Before: the body is too loud to think.',
        after: 'After: there is more space to look again.',
      },
      rest: {
        title: 'Sleep With Me: let the night be softer',
        body:
          'Sleep support helps park the loop, choose calming sound, and avoid heavy inner work when the user needs rest instead of more analysis.',
        before: 'Before: night makes the story heavier.',
        after: 'After: tomorrow can hold the next step.',
      },
      mirror: {
        title: 'Weekly Mirror: notice what repeats gently',
        body:
          'Over time, saved reflections may reveal repeated themes. Miravelys shows them humbly, with evidence and correction controls.',
        before: 'Before: “Maybe this is just who I am.”',
        after: 'After: “This may be a pattern, not my identity.”',
      },
    },
  },
  ru: {
    eyebrow: 'У каждого экрана есть смысл',
    title: 'Посмотри, как каждый экран помогает одному спутанному моменту стать яснее.',
    intro:
      'Каждый экран Miravelys показывает реальный момент пути пользователя: войти, записать, разложить, успокоиться, отдохнуть, увидеть повторения и сохранить контроль.',
    actionLabel: 'Увидеть этот момент в приложении',
    items: {
      welcome: {
        title: 'Welcome: начать без давления',
        body:
          'Первый экран показывает Miravelys как личное место для одного спутанного момента, а не как список задач или идеальную привычку.',
        before: 'До: «Я не знаю, с чего начать».',
        after: 'После: «Я могу начать с одной честной строки».',
      },
      today: {
        title: 'Today: выбрать то, что правда поможет сейчас',
        body:
          'Домашний экран собирает основные пути вместе: ясность, успокоение тела, сон или мягкое отражение недели — без давления.',
        before: 'До: слишком много чувств сразу.',
        after: 'После: один мягкий вход для этого момента.',
      },
      clear: {
        title: 'Get Clear: записать спутанную мысль',
        body:
          'Пользователь может записать эмоцию, убеждение, сигнал тела или повторяющуюся мысль, пока она не превратилась в целую историю.',
        before: 'До: мысль крутится в голове.',
        after: 'После: её уже можно увидеть и разложить.',
      },
      truth: {
        title: 'Truth Line: отделить слои',
        body:
          'Miravelys помогает отличать момент, эмоцию, реакцию тела, историю, возможное убеждение и неизвестное — бережно, без приговора.',
        before: 'До: факт и страх ощущаются одинаково.',
        after: 'После: пользователь может исправить то, что не подходит.',
      },
      calm: {
        title: 'Calm Now: сначала поддержать тело',
        body:
          'Когда тело напряжено, приложение не заставляет анализировать. Дыхание, заземление, медитация и мягкие звуки помогают вернуться в настоящее.',
        before: 'До: тело слишком громкое, чтобы ясно думать.',
        after: 'После: появляется пространство посмотреть снова.',
      },
      rest: {
        title: 'Sleep With Me: сделать ночь мягче',
        body:
          'Поддержка сна помогает отложить мыслительный цикл, выбрать успокаивающий звук и не углубляться в тяжёлый разбор перед отдыхом.',
        before: 'До: ночью история становится тяжелее.',
        after: 'После: следующий шаг может подождать до завтра.',
      },
      mirror: {
        title: 'Weekly Mirror: мягко замечать повторения',
        body:
          'Со временем сохранённые размышления могут показать повторяющиеся темы. Miravelys показывает их скромно, с доказательствами и возможностью исправить.',
        before: 'До: «Может, это просто я».',
        after: 'После: «Это может быть паттерн, а не моя личность».',
      },
    },
  },
  ro: {
    eyebrow: 'Fiecare ecran are un rost',
    title: 'Vezi cum fiecare ecran ajută un moment încurcat să devină mai clar.',
    intro:
      'Fiecare ecran Miravelys arată un moment real din parcursul utilizatorului: intrare, scriere, sortare, calmare, odihnă, reflecție și control.',
    actionLabel: 'Vezi acest moment în aplicație',
    items: {
      welcome: {
        title: 'Welcome: începi fără presiune',
        body:
          'Primul ecran prezintă Miravelys ca un spațiu privat pentru un moment încurcat, nu ca o listă de sarcini sau o rutină perfectă.',
        before: 'Înainte: „Nu știu de unde să încep.”',
        after: 'După: „Pot începe cu o propoziție sinceră.”',
      },
      today: {
        title: 'Today: alegi ce ajută cu adevărat acum',
        body:
          'Acasă aduce căile principale împreună: claritate, calmarea corpului, somn sau reflecția săptămânii, fără să împingă utilizatorul.',
        before: 'Înainte: prea multe emoții deodată.',
        after: 'După: o ușă blândă pentru momentul acesta.',
      },
      clear: {
        title: 'Get Clear: scrii gândul încâlcit',
        body:
          'Utilizatorul poate nota o emoție, o convingere, un semnal al corpului sau un gând repetitiv înainte să devină o poveste întreagă.',
        before: 'Înainte: gândul se rotește în minte.',
        after: 'După: devine suficient de vizibil pentru a fi sortat.',
      },
      truth: {
        title: 'Truth Line: separi straturile',
        body:
          'Miravelys ajută la distingerea momentului, emoției, reacției corpului, poveștii, convingerii posibile și necunoscutului — blând, niciodată ca verdict.',
        before: 'Înainte: faptul și frica par același lucru.',
        after: 'După: utilizatorul poate corecta ce nu se potrivește.',
      },
      calm: {
        title: 'Calm Now: susții corpul mai întâi',
        body:
          'Când corpul este activat, aplicația nu forțează analiza. Respirația, ancorarea, meditația și sunetele calme ajută revenirea în prezent.',
        before: 'Înainte: corpul e prea puternic ca să gândești clar.',
        after: 'După: există mai mult spațiu să privești din nou.',
      },
      rest: {
        title: 'Sleep With Me: noaptea devine mai blândă',
        body:
          'Suportul pentru somn ajută la parcarea buclei, alegerea unui sunet calmant și evitarea muncii interioare grele când e nevoie de odihnă.',
        before: 'Înainte: noaptea face povestea mai grea.',
        after: 'După: ziua de mâine poate ține următorul pas.',
      },
      mirror: {
        title: 'Weekly Mirror: observi blând ce se repetă',
        body:
          'În timp, reflecțiile salvate pot arăta teme repetate. Miravelys le arată cu umilință, dovezi și controale de corectare.',
        before: 'Înainte: „Poate așa sunt eu.”',
        after: 'După: „Poate este un tipar, nu identitatea mea.”',
      },
    },
  },
  fr: {
    eyebrow: 'Chaque écran a une raison d’être',
    title: 'Voyez comment chaque écran aide un moment emmêlé à devenir plus clair.',
    intro:
      'Chaque écran Miravelys représente un vrai moment du parcours : arriver, écrire, trier, apaiser le corps, dormir, réfléchir et garder le contrôle.',
    actionLabel: 'Voir ce moment dans l’app',
    items: {
      welcome: {
        title: 'Welcome : commencer sans pression',
        body:
          'Le premier écran présente Miravelys comme un espace privé pour un moment emmêlé, pas comme une liste de tâches ni une routine parfaite.',
        before: 'Avant : « Je ne sais pas par où commencer. »',
        after: 'Après : « Je peux commencer par une phrase honnête. »',
      },
      today: {
        title: 'Today : choisir ce qui aide vraiment maintenant',
        body:
          'L’accueil rassemble les chemins principaux : clarté, apaisement du corps, sommeil ou reflet de la semaine, sans pousser l’utilisateur.',
        before: 'Avant : trop d’émotions à la fois.',
        after: 'Après : une porte douce pour ce moment.',
      },
      clear: {
        title: 'Get Clear : écrire la pensée confuse',
        body:
          'L’utilisateur peut noter une émotion, une croyance, un signal du corps ou une pensée répétée avant qu’elle devienne toute une histoire.',
        before: 'Avant : la pensée tourne dans la tête.',
        after: 'Après : elle devient assez visible pour être triée.',
      },
      truth: {
        title: 'Truth Line : séparer les couches',
        body:
          'Miravelys aide à distinguer le moment, l’émotion, la réaction du corps, l’histoire, la croyance possible et l’inconnu — doucement, jamais comme un verdict.',
        before: 'Avant : le fait et la peur semblent identiques.',
        after: 'Après : l’utilisateur peut corriger ce qui ne convient pas.',
      },
      calm: {
        title: 'Calm Now : soutenir le corps d’abord',
        body:
          'Quand le corps est activé, l’app ne force pas l’analyse. Respiration, ancrage, méditation et sons calmes aident à revenir au présent.',
        before: 'Avant : le corps est trop bruyant pour penser.',
        after: 'Après : il y a plus d’espace pour regarder à nouveau.',
      },
      rest: {
        title: 'Sleep With Me : rendre la nuit plus douce',
        body:
          'Le soutien au sommeil aide à poser la boucle mentale, choisir un son apaisant et éviter le travail intérieur lourd quand le repos est nécessaire.',
        before: 'Avant : la nuit rend l’histoire plus lourde.',
        after: 'Après : demain peut porter la prochaine étape.',
      },
      mirror: {
        title: 'Weekly Mirror : remarquer doucement ce qui revient',
        body:
          'Avec le temps, les réflexions enregistrées peuvent montrer des thèmes répétés. Miravelys les présente humblement, avec preuves et corrections.',
        before: 'Avant : « Peut-être que je suis juste comme ça. »',
        after: 'Après : « C’est peut-être un schéma, pas mon identité. »',
      },
    },
  },
  hi: {
    eyebrow: 'हर स्क्रीन का उद्देश्य है',
    title: 'देखें कि हर स्क्रीन एक उलझे पल को कैसे थोड़ा स्पष्ट बनाती है।',
    intro:
      'Miravelys की हर स्क्रीन उपयोगकर्ता की यात्रा का एक वास्तविक पल दिखाती है: आना, लिखना, अलग करना, शांत होना, आराम करना, देखना और नियंत्रण रखना।',
    actionLabel: 'इस पल को ऐप में देखें',
    items: {
      welcome: {
        title: 'Welcome: बिना दबाव शुरुआत',
        body:
          'पहली स्क्रीन Miravelys को एक निजी जगह की तरह पेश करती है जहाँ एक उलझा पल रखा जा सकता है, कोई परफेक्ट रूटीन नहीं।',
        before: 'पहले: “मुझे नहीं पता कहाँ से शुरू करूँ।”',
        after: 'बाद में: “मैं एक ईमानदार पंक्ति से शुरू कर सकता/सकती हूँ।”',
      },
      today: {
        title: 'Today: अभी जो सच में मदद करे उसे चुनना',
        body:
          'होम स्क्रीन स्पष्टता, शरीर को शांत करना, नींद का सहारा और साप्ताहिक प्रतिबिंब को साथ लाती है, बिना दबाव डाले।',
        before: 'पहले: बहुत सारी भावनाएँ एक साथ।',
        after: 'बाद में: इस पल के लिए एक कोमल द्वार।',
      },
      clear: {
        title: 'Get Clear: उलझे विचार को लिखना',
        body:
          'उपयोगकर्ता भावना, विश्वास, शरीर संकेत या दोहराते विचार को लिख सकता है, इससे पहले कि वह पूरी कहानी बन जाए।',
        before: 'पहले: विचार सिर में घूमता रहता है।',
        after: 'बाद में: वह इतना दिखता है कि अलग किया जा सके।',
      },
      truth: {
        title: 'Truth Line: परतें अलग करना',
        body:
          'Miravelys पल, भावना, शरीर की प्रतिक्रिया, कहानी, संभावित विश्वास और अज्ञात को अलग करने में मदद करता है — कोमलता से, कभी अंतिम फैसला नहीं।',
        before: 'पहले: तथ्य और डर एक जैसे लगते हैं।',
        after: 'बाद में: जो फिट न हो उसे उपयोगकर्ता सुधार सकता है।',
      },
      calm: {
        title: 'Calm Now: पहले शरीर को सहारा',
        body:
          'जब शरीर सक्रिय हो, ऐप विश्लेषण नहीं थोपता। सांस, ग्राउंडिंग, ध्यान और शांत ध्वनियाँ वर्तमान में लौटने में मदद करती हैं।',
        before: 'पहले: शरीर इतना तेज़ है कि सोचना कठिन है।',
        after: 'बाद में: फिर से देखने की जगह बनती है।',
      },
      rest: {
        title: 'Sleep With Me: रात को नरम बनाना',
        body:
          'नींद का सहारा सोच की लूप को पार्क करने, शांत ध्वनि चुनने और आराम के समय भारी अंदरूनी काम से बचने में मदद करता है।',
        before: 'पहले: रात कहानी को भारी बना देती है।',
        after: 'बाद में: अगला कदम कल तक रह सकता है।',
      },
      mirror: {
        title: 'Weekly Mirror: दोहराव को कोमलता से देखना',
        body:
          'समय के साथ सेव की गई reflections दोहराते विषय दिखा सकती हैं। Miravelys उन्हें विनम्रता, प्रमाण और सुधार नियंत्रणों के साथ दिखाता है।',
        before: 'पहले: “शायद मैं बस ऐसा/ऐसी ही हूँ।”',
        after: 'बाद में: “यह पैटर्न हो सकता है, मेरी पहचान नहीं।”',
      },
    },
  },
  zh: {
    eyebrow: '每个界面都有目的',
    title: '看看每个界面如何帮助一个纠结的时刻变得更清楚。',
    intro:
      'Miravelys 的每个界面都对应用户旅程中的真实时刻：进入、书写、分类、安抚身体、休息、回顾，并保持掌控。',
    actionLabel: '在应用中看见这个时刻',
    items: {
      welcome: {
        title: 'Welcome：没有压力地开始',
        body:
          '第一个界面把 Miravelys 介绍为一个私密空间，用来放下一个纠结的时刻，而不是任务清单或完美习惯。',
        before: '之前：“我不知道从哪里开始。”',
        after: '之后：“我可以先写下一句诚实的话。”',
      },
      today: {
        title: 'Today：选择此刻真正有帮助的事',
        body:
          '首页把清晰、身体安抚、睡眠支持和每周回顾放在一起，让用户不用被推动也能选择。',
        before: '之前：太多感受同时出现。',
        after: '之后：这个时刻有一扇温和的门。',
      },
      clear: {
        title: 'Get Clear：写下混乱的想法',
        body:
          '用户可以记录情绪、信念、身体信号或反复出现的想法，在它变成一整套故事之前先看见它。',
        before: '之前：想法一直在脑中循环。',
        after: '之后：它足够清楚，可以被分类。',
      },
      truth: {
        title: 'Truth Line：分开不同层次',
        body:
          'Miravelys 帮助区分时刻、情绪、身体反应、故事、信念候选和未知——温和地整理，而不是下结论。',
        before: '之前：事实和恐惧感觉像同一件事。',
        after: '之后：用户可以修正不符合的部分。',
      },
      calm: {
        title: 'Calm Now：先支持身体',
        body:
          '当身体被激活时，应用不会强迫分析。呼吸、落地练习、冥想和安静声音帮助用户回到当下。',
        before: '之前：身体太吵，难以清楚思考。',
        after: '之后：有更多空间再次看见。',
      },
      rest: {
        title: 'Sleep With Me：让夜晚更柔和',
        body:
          '睡眠支持帮助放下思维循环、选择舒缓声音，并在需要休息时避免沉重的内在分析。',
        before: '之前：夜晚让故事变得更重。',
        after: '之后：下一步可以交给明天。',
      },
      mirror: {
        title: 'Weekly Mirror：温和看见重复的东西',
        body:
          '随着时间推移，保存的反思可能显示重复主题。Miravelys 会谦逊地呈现它们，带有证据和修正控制。',
        before: '之前：“也许我就是这样的人。”',
        after: '之后：“这可能是模式，不是我的身份。”',
      },
    },
  },
  de: {
    eyebrow: 'Jeder Screen hat eine Aufgabe',
    title: 'Sieh, wie jeder Screen einen verworrenen Moment klarer werden lässt.',
    intro:
      'Jeder Miravelys-Screen steht für einen echten Moment der Reise: ankommen, schreiben, sortieren, den Körper beruhigen, ruhen, reflektieren und Kontrolle behalten.',
    actionLabel: 'Diesen Moment in der App sehen',
    items: {
      welcome: {
        title: 'Welcome: ohne Druck beginnen',
        body:
          'Der erste Screen zeigt Miravelys als privaten Ort für einen verworrenen Moment, nicht als Aufgabenliste oder perfekte Routine.',
        before: 'Vorher: „Ich weiß nicht, wo ich anfangen soll.“',
        after: 'Nachher: „Ich kann mit einer ehrlichen Zeile beginnen.“',
      },
      today: {
        title: 'Today: wählen, was jetzt wirklich hilft',
        body:
          'Home bringt die Hauptwege zusammen: Klarheit, Körperberuhigung, Schlafunterstützung oder Wochenreflexion — ohne Druck.',
        before: 'Vorher: zu viele Gefühle auf einmal.',
        after: 'Nachher: eine sanfte Tür für diesen Moment.',
      },
      clear: {
        title: 'Get Clear: den wirren Gedanken aufschreiben',
        body:
          'Der Nutzer kann eine Emotion, einen Glaubenssatz, ein Körpersignal oder einen wiederkehrenden Gedanken festhalten, bevor daraus eine ganze Geschichte wird.',
        before: 'Vorher: der Gedanke kreist im Kopf.',
        after: 'Nachher: er ist sichtbar genug, um sortiert zu werden.',
      },
      truth: {
        title: 'Truth Line: die Schichten trennen',
        body:
          'Miravelys hilft, Moment, Emotion, Körperreaktion, Geschichte, möglichen Glaubenssatz und Unbekanntes zu unterscheiden — sanft, nie als Urteil.',
        before: 'Vorher: Fakt und Angst fühlen sich gleich an.',
        after: 'Nachher: der Nutzer kann korrigieren, was nicht passt.',
      },
      calm: {
        title: 'Calm Now: zuerst den Körper unterstützen',
        body:
          'Wenn der Körper aktiviert ist, erzwingt die App keine Analyse. Atmung, Erdung, Meditation und beruhigende Klänge helfen zurück in die Gegenwart.',
        before: 'Vorher: der Körper ist zu laut zum klaren Denken.',
        after: 'Nachher: mehr Raum, um erneut hinzusehen.',
      },
      rest: {
        title: 'Sleep With Me: die Nacht weicher machen',
        body:
          'Schlafunterstützung hilft, die Gedankenschleife zu parken, beruhigende Klänge zu wählen und schwere innere Arbeit zu vermeiden, wenn Ruhe nötig ist.',
        before: 'Vorher: die Nacht macht die Geschichte schwerer.',
        after: 'Nachher: der nächste Schritt kann bis morgen warten.',
      },
      mirror: {
        title: 'Weekly Mirror: Wiederholungen sanft bemerken',
        body:
          'Mit der Zeit können gespeicherte Reflexionen wiederkehrende Themen zeigen. Miravelys zeigt sie demütig, mit Belegen und Korrekturmöglichkeiten.',
        before: 'Vorher: „Vielleicht bin ich einfach so.“',
        after: 'Nachher: „Das könnte ein Muster sein, nicht meine Identität.“',
      },
    },
  },
  ja: {
    eyebrow: 'すべての画面に役割があります',
    title: 'それぞれの画面が、絡まった一つの瞬間を少し明確にします。',
    intro:
      'Miravelys の各画面は、ユーザーの実際の流れを表します。入る、書く、分ける、身体を落ち着ける、休む、振り返る、そして自分で選ぶことです。',
    actionLabel: 'この瞬間をアプリで見る',
    items: {
      welcome: {
        title: 'Welcome：プレッシャーなく始める',
        body:
          '最初の画面は、Miravelys を完璧な習慣やタスク一覧ではなく、絡まった一つの瞬間を置ける私的な場所として伝えます。',
        before: '前：「どこから始めればいいかわからない。」',
        after: '後：「正直な一文から始められる。」',
      },
      today: {
        title: 'Today：今ほんとうに助けになるものを選ぶ',
        body:
          'ホームは、明晰さ、身体の落ち着き、睡眠サポート、週間の振り返りを一つにし、押しつけずに選べるようにします。',
        before: '前：感情が一度に多すぎる。',
        after: '後：今のためのやさしい入口が一つある。',
      },
      clear: {
        title: 'Get Clear：混乱した思考を書き出す',
        body:
          'ユーザーは、感情、信念、身体の反応、繰り返す思考を、それが大きな物語になる前に記録できます。',
        before: '前：考えが頭の中で回り続ける。',
        after: '後：分けられるほど見えるようになる。',
      },
      truth: {
        title: 'Truth Line：層を分ける',
        body:
          'Miravelys は、出来事、感情、身体反応、物語、信念候補、未知をやさしく区別します。決めつけではありません。',
        before: '前：事実と不安が同じに感じる。',
        after: '後：合わない部分は自分で直せる。',
      },
      calm: {
        title: 'Calm Now：まず身体を支える',
        body:
          '身体が高ぶっているとき、アプリは分析を押しつけません。呼吸、グラウンディング、瞑想、落ち着く音で今に戻ります。',
        before: '前：身体が大きすぎて考えられない。',
        after: '後：もう一度見る余白が生まれる。',
      },
      rest: {
        title: 'Sleep With Me：夜をやわらかくする',
        body:
          '睡眠サポートは思考のループを置き、落ち着く音を選び、休みが必要な夜に重い内省へ入りすぎないよう助けます。',
        before: '前：夜になると物語が重くなる。',
        after: '後：次の一歩は明日に置ける。',
      },
      mirror: {
        title: 'Weekly Mirror：繰り返しをやさしく見る',
        body:
          '時間が経つと、保存された振り返りから繰り返すテーマが見えることがあります。Miravelys は証拠と修正の余地を添えて控えめに示します。',
        before: '前：「私はこういう人なのかもしれない。」',
        after: '後：「これは自分の正体ではなく、パターンかもしれない。」',
      },
    },
  },
  es: {
    eyebrow: 'Cada pantalla tiene un propósito',
    title: 'Mira cómo cada pantalla ayuda a aclarar un momento enredado.',
    intro:
      'Cada pantalla de Miravelys representa un momento real del recorrido: llegar, escribir, ordenar, calmar el cuerpo, descansar, reflexionar y mantener el control.',
    actionLabel: 'Ver este momento en la app',
    items: {
      welcome: {
        title: 'Welcome: empezar sin presión',
        body:
          'La primera pantalla presenta Miravelys como un espacio privado para un momento enredado, no como una lista de tareas ni una rutina perfecta.',
        before: 'Antes: “No sé por dónde empezar.”',
        after: 'Después: “Puedo empezar con una frase honesta.”',
      },
      today: {
        title: 'Today: elegir lo que ayuda ahora',
        body:
          'Inicio reúne los caminos principales para elegir claridad, calma corporal, apoyo para dormir o reflexión semanal sin sentirse empujado.',
        before: 'Antes: demasiadas emociones a la vez.',
        after: 'Después: una puerta amable para este momento.',
      },
      clear: {
        title: 'Get Clear: escribir el pensamiento confuso',
        body:
          'El usuario puede capturar una emoción, creencia, señal corporal o pensamiento repetido antes de que crezca hasta convertirse en una historia completa.',
        before: 'Antes: el pensamiento da vueltas en la mente.',
        after: 'Después: se vuelve visible para poder ordenarlo.',
      },
      truth: {
        title: 'Truth Line: separar las capas',
        body:
          'Miravelys ayuda a distinguir el momento, la emoción, la reacción corporal, la historia, la creencia posible y lo desconocido — con suavidad, nunca como sentencia.',
        before: 'Antes: hecho y miedo se sienten iguales.',
        after: 'Después: el usuario puede corregir lo que no encaja.',
      },
      calm: {
        title: 'Calm Now: apoyar primero al cuerpo',
        body:
          'Cuando el cuerpo está activado, la app no fuerza el análisis. Respiración, anclaje, meditación y sonidos calmos ayudan a volver al presente.',
        before: 'Antes: el cuerpo está demasiado fuerte para pensar.',
        after: 'Después: hay más espacio para mirar otra vez.',
      },
      rest: {
        title: 'Sleep With Me: hacer la noche más suave',
        body:
          'El apoyo para dormir ayuda a aparcar el bucle, elegir un sonido calmante y evitar trabajo interior pesado cuando se necesita descanso.',
        before: 'Antes: la noche vuelve más pesada la historia.',
        after: 'Después: mañana puede sostener el próximo paso.',
      },
      mirror: {
        title: 'Weekly Mirror: notar suavemente lo que se repite',
        body:
          'Con el tiempo, las reflexiones guardadas pueden mostrar temas repetidos. Miravelys los presenta con humildad, evidencia y controles de corrección.',
        before: 'Antes: “Tal vez soy así.”',
        after: 'Después: “Puede ser un patrón, no mi identidad.”',
      },
    },
  },
  pt: {
    eyebrow: 'Cada tela tem um propósito',
    title: 'Veja como cada tela ajuda um momento confuso a ficar mais claro.',
    intro:
      'Cada tela do Miravelys representa um momento real da jornada: chegar, escrever, separar, acalmar o corpo, descansar, refletir e manter o controle.',
    actionLabel: 'Ver este momento na app',
    items: {
      welcome: {
        title: 'Welcome: começar sem pressão',
        body:
          'A primeira tela apresenta o Miravelys como um espaço privado para um momento confuso, não como uma lista de tarefas ou uma rotina perfeita.',
        before: 'Antes: “Não sei por onde começar.”',
        after: 'Depois: “Posso começar com uma frase honesta.”',
      },
      today: {
        title: 'Today: escolher o que ajuda agora',
        body:
          'Início reúne os caminhos principais para escolher clareza, acalmar o corpo, apoio ao sono ou reflexão semanal sem pressão.',
        before: 'Antes: emoções demais ao mesmo tempo.',
        after: 'Depois: uma porta gentil para este momento.',
      },
      clear: {
        title: 'Get Clear: escrever o pensamento confuso',
        body:
          'O usuário pode registrar uma emoção, crença, sinal do corpo ou pensamento repetido antes que vire uma história inteira.',
        before: 'Antes: o pensamento fica girando na mente.',
        after: 'Depois: ele fica visível o suficiente para ser separado.',
      },
      truth: {
        title: 'Truth Line: separar as camadas',
        body:
          'Miravelys ajuda a distinguir o momento, a emoção, a reação do corpo, a história, a possível crença e o desconhecido — com gentileza, nunca como sentença.',
        before: 'Antes: fato e medo parecem a mesma coisa.',
        after: 'Depois: o usuário pode corrigir o que não se encaixa.',
      },
      calm: {
        title: 'Calm Now: apoiar primeiro o corpo',
        body:
          'Quando o corpo está ativado, a app não força análise. Respiração, aterramento, meditação e sons calmos ajudam a voltar ao presente.',
        before: 'Antes: o corpo está alto demais para pensar.',
        after: 'Depois: há mais espaço para olhar de novo.',
      },
      rest: {
        title: 'Sleep With Me: deixar a noite mais suave',
        body:
          'O apoio ao sono ajuda a estacionar o ciclo de pensamentos, escolher som calmante e evitar trabalho interno pesado quando o descanso é necessário.',
        before: 'Antes: a noite torna a história mais pesada.',
        after: 'Depois: amanhã pode guardar o próximo passo.',
      },
      mirror: {
        title: 'Weekly Mirror: notar suavemente o que se repete',
        body:
          'Com o tempo, reflexões salvas podem revelar temas repetidos. Miravelys mostra isso com humildade, evidências e controles de correção.',
        before: 'Antes: “Talvez eu seja assim mesmo.”',
        after: 'Depois: “Pode ser um padrão, não minha identidade.”',
      },
    },
  },
};

export function resolveScreenStoryCopy(lang) {
  return screenStoryByLanguage[lang] || screenStoryByLanguage.en;
}

export const screenStoryCopy = Object.fromEntries(
  languages.map(language => [language.code, resolveScreenStoryCopy(language.code)]),
);
