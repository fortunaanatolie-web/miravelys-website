
import fs from 'node:fs/promises';
import { languages as previousLanguages, siteCopy as previousSiteCopy } from '../src/i18n/siteCopy.js';
import { mockupCopy as previousMockupCopy } from '../src/i18n/mockupCopy.js';

const languages = previousLanguages;
const navItems = [
  { id: 'what', key: 'what' },
  { id: 'works', key: 'works' },
  { id: 'depths', key: 'depths' },
  { id: 'mockups', key: 'mockups' },
  { id: 'moments', key: 'moments' },
  { id: 'privacy', key: 'privacy' },
  { id: 'faq', key: 'faq' },
  { id: 'download', key: 'download' },
  { id: 'languages', key: 'languages' },
];

const labels = {
  en: {
    nav: { what: 'What it is', works: 'How it works', depths: 'Depths', moments: 'Clarity', faq: 'FAQ', download: 'Get started' },
    howEyebrow: 'How Miravelys works',
    howTitle: 'One honest line becomes a calmer next step.',
    howIntro: 'The experience is deliberately simple. You write what feels true, the app separates the pieces, and then it helps you choose whether you need calm, clarity, sleep, or a direct question.',
    whatCallout: 'Miravelys is not trying to win an argument with your mind. It helps you slow the argument down until you can see which part is real, which part is protection, and which part simply needs rest.',
    momentsEyebrow: 'Moments of clarity',
    momentsTitle: 'The small shifts that make a day feel different.',
    momentBodies: [
      'One line stops being a storm and becomes something you can look at.',
      'The body gets a few quiet minutes before the mind tries to solve everything.',
      'A thought that felt certain becomes a little more editable.',
      'A night thought is parked gently instead of being wrestled until morning.',
      'A repeated pattern is shown with evidence, not drama.',
      'A correction teaches the system what actually fits you.',
    ],
    privacyEyebrow: 'Privacy & control',
    privacyTitle: 'Your inner life should not become someone else’s product.',
    privacyBody: 'Miravelys is built local-first because the raw material is personal: fears, thoughts, sleep, corrections, and the quiet sentences people rarely say out loud. The app treats that material with restraint. You can pause, soften, edit, hide, or delete. Corrections are not treated as preferences around the edges — they are the highest-priority learning signal.',
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Honest answers, without pretending the app is magic.',
      items: [
        ['Is Miravelys therapy?', 'No. Miravelys is for reflection, grounding, journaling, and self-inquiry. It is not medical care, therapy, crisis support, or diagnosis.'],
        ['What happens in the stronger inquiry mode?', 'It can ask more direct questions and challenge exaggerations or certainty, but only when you choose it. Safety gates, stop controls, and correction controls remain active.'],
        ['Can I correct the app?', 'Yes. You can say something is not you, too strong, too intense, too soft, or simply wrong. Those corrections shape future suggestions across the system.'],
        ['Does everything go to the cloud?', 'No. The core experience is local-first. Optional cloud assistance must be enabled intentionally and is protected by redaction and safety rules.'],
        ['Can I delete things?', 'Yes. You should be able to pause, hide, edit, or delete reflections and inferred beliefs. The app is designed around ownership, not extraction.'],
      ],
    },
    download: {
      eyebrow: 'Get started',
      title: 'Open one honest line. Leave with a little more room inside.',
      body: 'Miravelys is designed for iPhone and Apple Watch, with a calm web presence that explains the experience before the app asks for anything from you.',
      ios: 'Download for iPhone',
      watch: 'Apple Watch support',
      soon: 'App Store link ready when the public listing is live',
      note: 'Replace the placeholder links with the final App Store and watchOS URLs before launch.',
    },
  },
  ru: {
    nav: { what: 'Что это', works: 'Как работает', depths: 'Глубина', moments: 'Ясность', faq: 'Вопросы', download: 'Начать' },
    howEyebrow: 'Как работает Miravelys',
    howTitle: 'Одна честная строка становится более спокойным следующим шагом.',
    howIntro: 'Опыт намеренно простой. Ты пишешь то, что сейчас кажется правдой, приложение разделяет части момента, а затем помогает понять: нужно ли телу успокоение, ясность, сон или более прямой вопрос.',
    whatCallout: 'Miravelys не пытается победить твой ум в споре. Оно помогает замедлить этот спор, чтобы стало видно, где реальность, где защита, а где просто нужна пауза.',
    momentsEyebrow: 'Моменты ясности',
    momentsTitle: 'Маленькие сдвиги, после которых день ощущается иначе.',
    momentBodies: [
      'Одна строка перестаёт быть бурей и становится тем, на что можно посмотреть.',
      'Тело получает несколько тихих минут до того, как ум снова всё решает.',
      'Мысль, казавшаяся железной, становится чуть более редактируемой.',
      'Ночная мысль мягко откладывается, а не борется с тобой до утра.',
      'Повторяющийся паттерн показывается с доказательствами, а не с драмой.',
      'Исправление учит систему тому, что действительно тебе подходит.',
    ],
    privacyEyebrow: 'Приватность и контроль',
    privacyTitle: 'Внутренняя жизнь не должна становиться чужим продуктом.',
    privacyBody: 'Miravelys построен по принципу local-first, потому что материал очень личный: страхи, мысли, сон, исправления и тихие фразы, которые редко произносят вслух. Приложение относится к этому сдержанно. Можно остановить, смягчить, исправить, скрыть или удалить. Исправления — главный сигнал обучения, а не мелкая настройка.',
    faq: {
      eyebrow: 'Частые вопросы',
      title: 'Честные ответы без попытки выглядеть магией.',
      items: [
        ['Miravelys — это терапия?', 'Нет. Miravelys создан для рефлексии, заземления, дневника и самоисследования. Это не медицинская помощь, не терапия, не кризисная поддержка и не диагноз.'],
        ['Что происходит в более жёстком режиме?', 'Он может задавать более прямые вопросы и проверять преувеличения или уверенность, но только по твоему выбору. Контроль остановки, безопасность и исправления остаются активными.'],
        ['Можно исправлять приложение?', 'Да. Можно сказать: это не про меня, слишком сильно, слишком интенсивно, слишком мягко или просто неверно. Эти исправления влияют на будущие подсказки.'],
        ['Всё отправляется в облако?', 'Нет. Основной опыт local-first. Облачная помощь необязательна и включается только намеренно, с редактированием данных и правилами безопасности.'],
        ['Можно удалить данные?', 'Да. Можно поставить на паузу, скрыть, отредактировать или удалить записи и предполагаемые убеждения. Приложение строится вокруг владения, а не извлечения данных.'],
      ],
    },
    download: {
      eyebrow: 'Начать',
      title: 'Открой одну честную строку. Выйди с чуть большим пространством внутри.',
      body: 'Miravelys создаётся для iPhone и Apple Watch, а сайт спокойно объясняет опыт до того, как приложение попросит что-либо у пользователя.',
      ios: 'Скачать для iPhone',
      watch: 'Поддержка Apple Watch',
      soon: 'Ссылка App Store будет готова после публичного запуска',
      note: 'Перед запуском замените временные ссылки на финальные URL App Store и watchOS.',
    },
  },
  ro: {
    nav: { what: 'Ce este', works: 'Cum lucrează', depths: 'Profunzimi', moments: 'Claritate', faq: 'Întrebări', download: 'Începe' },
    howEyebrow: 'Cum funcționează Miravelys',
    howTitle: 'O propoziție sinceră devine un pas următor mai calm.',
    howIntro: 'Experiența rămâne intenționat simplă. Scrii ce pare adevărat acum, aplicația separă părțile momentului, apoi te ajută să alegi: ai nevoie de calm, claritate, somn sau o întrebare mai directă.',
    whatCallout: 'Miravelys nu încearcă să câștige o ceartă cu mintea ta. Ajută cearta să încetinească până poți vedea ce este real, ce este protecție și ce are nevoie doar de odihnă.',
    momentsEyebrow: 'Momente de claritate',
    momentsTitle: 'Micile schimbări care fac ziua să se simtă altfel.',
    momentBodies: [
      'O propoziție nu mai pare o furtună, ci ceva la care poți privi.',
      'Corpul primește câteva minute liniștite înainte ca mintea să rezolve totul.',
      'Un gând care părea sigur devine puțin mai editabil.',
      'Un gând de noapte este parcat blând, nu luptat până dimineața.',
      'Un tipar repetat apare cu dovezi, nu cu dramă.',
      'O corectare învață sistemul ce ți se potrivește cu adevărat.',
    ],
    privacyEyebrow: 'Confidențialitate și control',
    privacyTitle: 'Viața ta interioară nu trebuie să devină produsul altcuiva.',
    privacyBody: 'Miravelys este local-first deoarece materialul este personal: frici, gânduri, somn, corectări și propoziții liniștite pe care oamenii rar le spun cu voce tare. Aplicația tratează totul cu reținere. Poți opri, îmblânzi, edita, ascunde sau șterge. Corectările sunt cel mai important semnal de învățare.',
    faq: {
      eyebrow: 'Întrebări frecvente',
      title: 'Răspunsuri oneste, fără să pretindem că aplicația este magie.',
      items: [
        ['Miravelys este terapie?', 'Nu. Miravelys este pentru reflecție, ancorare, jurnal și auto-investigare. Nu este îngrijire medicală, terapie, sprijin de criză sau diagnostic.'],
        ['Ce se întâmplă în modul mai direct?', 'Poate pune întrebări mai clare și poate verifica exagerările sau certitudinea, dar numai dacă îl alegi. Siguranța și controlul rămân active.'],
        ['Pot corecta aplicația?', 'Da. Poți spune că ceva nu ți se potrivește, e prea puternic, prea intens, prea blând sau greșit. Corectările schimbă sugestiile viitoare.'],
        ['Totul merge în cloud?', 'Nu. Experiența de bază este local-first. Ajutorul cloud este opțional și este protejat prin redactare și reguli de siguranță.'],
        ['Pot șterge lucruri?', 'Da. Poți pune pe pauză, ascunde, edita sau șterge reflecții și convingeri presupuse. Aplicația este despre control, nu extragere.'],
      ],
    },
    download: {
      eyebrow: 'Începe',
      title: 'Deschide o propoziție sinceră. Pleacă cu mai mult spațiu în interior.',
      body: 'Miravelys este gândit pentru iPhone și Apple Watch, cu un site calm care explică experiența înainte să ceară ceva de la tine.',
      ios: 'Descarcă pentru iPhone',
      watch: 'Suport Apple Watch',
      soon: 'Linkul App Store va fi gata când pagina publică este activă',
      note: 'Înlocuiește linkurile temporare cu URL-urile finale App Store și watchOS înainte de lansare.',
    },
  },
  fr: {
    nav: { what: 'Ce que c’est', works: 'Comment ça marche', depths: 'Profondeur', moments: 'Clarté', faq: 'FAQ', download: 'Commencer' },
    howEyebrow: 'Comment fonctionne Miravelys',
    howTitle: 'Une ligne honnête devient une prochaine étape plus calme.',
    howIntro: 'L’expérience reste volontairement simple. Vous écrivez ce qui semble vrai maintenant, l’app sépare les morceaux du moment, puis vous aide à choisir entre apaisement, clarté, sommeil ou question plus directe.',
    whatCallout: 'Miravelys ne cherche pas à gagner un débat contre votre esprit. L’app ralentit le débat jusqu’à ce que vous distinguiez ce qui est réel, ce qui protège, et ce qui a simplement besoin de repos.',
    momentsEyebrow: 'Moments de clarté',
    momentsTitle: 'De petits déplacements qui changent la texture d’une journée.',
    momentBodies: [
      'Une phrase cesse d’être une tempête et devient quelque chose que l’on peut regarder.',
      'Le corps reçoit quelques minutes calmes avant que l’esprit ne tente tout résoudre.',
      'Une pensée qui semblait certaine devient un peu plus modifiable.',
      'Une pensée nocturne est déposée doucement au lieu d’être combattue jusqu’au matin.',
      'Un schéma revient avec des preuves, pas avec du drame.',
      'Une correction apprend au système ce qui vous correspond réellement.',
    ],
    privacyEyebrow: 'Confidentialité et contrôle',
    privacyTitle: 'Votre vie intérieure ne devrait pas devenir le produit de quelqu’un d’autre.',
    privacyBody: 'Miravelys est conçu local-first parce que la matière est intime : peurs, pensées, sommeil, corrections et phrases silencieuses que l’on dit rarement à voix haute. L’app traite tout cela avec retenue. Vous pouvez mettre en pause, adoucir, modifier, masquer ou supprimer. Les corrections sont le signal d’apprentissage prioritaire.',
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Des réponses honnêtes, sans prétendre que l’app est magique.',
      items: [
        ['Miravelys est-elle une thérapie ?', 'Non. Miravelys sert à la réflexion, à l’ancrage, au journal et à l’auto-questionnement. Ce n’est pas un soin médical, une thérapie, un soutien de crise ou un diagnostic.'],
        ['Que se passe-t-il dans le mode plus exigeant ?', 'Il peut poser des questions plus directes et remettre en question l’exagération ou la certitude, mais seulement si vous le choisissez. Les garde-fous restent actifs.'],
        ['Puis-je corriger l’app ?', 'Oui. Vous pouvez dire que ce n’est pas vous, trop fort, trop intense, trop doux ou simplement faux. Ces corrections guident les futures suggestions.'],
        ['Tout part-il dans le cloud ?', 'Non. L’expérience centrale est local-first. L’aide cloud est optionnelle et protégée par la réduction des données et des règles de sécurité.'],
        ['Puis-je supprimer des choses ?', 'Oui. Vous pouvez mettre en pause, masquer, modifier ou supprimer des réflexions et croyances inférées. L’app est pensée pour l’appropriation, pas l’extraction.'],
      ],
    },
    download: {
      eyebrow: 'Commencer',
      title: 'Ouvrez une ligne honnête. Repartez avec un peu plus d’espace intérieur.',
      body: 'Miravelys est pensé pour iPhone et Apple Watch, avec un site calme qui explique l’expérience avant que l’app ne demande quoi que ce soit.',
      ios: 'Télécharger pour iPhone',
      watch: 'Prise en charge Apple Watch',
      soon: 'Lien App Store prêt lorsque la page publique sera en ligne',
      note: 'Remplacez les liens temporaires par les URL finales App Store et watchOS avant le lancement.',
    },
  }
};

const generic = {
  hi: {
    nav: { what: 'यह क्या है', works: 'कैसे काम करता है', depths: 'गहराई', moments: 'स्पष्टता', faq: 'सवाल', download: 'शुरू करें' },
    howEyebrow: 'Miravelys कैसे काम करता है', howTitle: 'एक ईमानदार पंक्ति शांत अगला कदम बन जाती है।',
    howIntro: 'आप लिखते हैं कि अभी क्या सच लगता है, ऐप उस पल को हिस्सों में अलग करता है, फिर बताता है कि आपको शांति, स्पष्टता, नींद या सीधा सवाल चाहिए।',
    whatCallout: 'Miravelys आपके मन से बहस जीतने की कोशिश नहीं करता। यह बहस को धीमा करता है ताकि आप देख सकें कि क्या वास्तविक है, क्या सुरक्षा है, और किसे सिर्फ आराम चाहिए।',
    momentsEyebrow: 'स्पष्टता के पल', momentsTitle: 'छोटे बदलाव जो पूरे दिन को अलग महसूस करा सकते हैं।',
    momentBodies: ['एक पंक्ति तूफ़ान नहीं रहती, वह देखने लायक चीज़ बन जाती है।','मन सब हल करने से पहले शरीर को कुछ शांत मिनट मिलते हैं।','जो विचार पक्का लगता था, वह थोड़ा बदलने योग्य हो जाता है।','रात का भारी विचार धीरे से रख दिया जाता है।','दोहराता पैटर्न सबूत के साथ दिखता है।','एक सुधार सिस्टम को सिखाता है कि क्या आपके लिए सही है।'],
    privacyEyebrow: 'गोपनीयता और नियंत्रण', privacyTitle: 'आपकी अंदरूनी दुनिया किसी और का उत्पाद नहीं बननी चाहिए।',
    privacyBody: 'Miravelys local-first है क्योंकि सामग्री निजी है: डर, विचार, नींद, सुधार और वे शांत वाक्य जो लोग ज़ोर से कम कहते हैं। आप रोक सकते हैं, नरम कर सकते हैं, संपादित, छिपा या हटा सकते हैं।',
    faq: { eyebrow:'अक्सर पूछे जाने वाले सवाल', title:'ईमानदार जवाब, बिना जादू दिखाए।', items:[['क्या Miravelys थेरेपी है?','नहीं। यह चिंतन, grounding, journal और self-inquiry के लिए है।'],['मज़बूत mode में क्या होता है?','यह सीधे सवाल पूछ सकता है, लेकिन केवल आपके चुनाव पर।'],['क्या मैं सुधार कर सकता/सकती हूँ?','हाँ। सुधार भविष्य की सलाह बदलते हैं।'],['क्या सब cloud में जाता है?','नहीं। मुख्य अनुभव local-first है।'],['क्या मैं delete कर सकता/सकती हूँ?','हाँ। आप pause, hide, edit या delete कर सकते हैं।']]},
    download:{eyebrow:'शुरू करें', title:'एक ईमानदार पंक्ति खोलें। अंदर थोड़ी जगह लेकर जाएँ।', body:'Miravelys iPhone और Apple Watch के लिए बनाया गया है।', ios:'iPhone के लिए डाउनलोड करें', watch:'Apple Watch समर्थन', soon:'Public listing live होने पर App Store link तैयार होगा', note:'Launch से पहले placeholder links बदलें।'}
  },
  zh: {
    nav: { what:'它是什么', works:'如何运作', depths:'深度', moments:'清晰时刻', faq:'问答', download:'开始' },
    howEyebrow:'Miravelys 如何运作', howTitle:'一句诚实的话，变成更平静的下一步。',
    howIntro:'你写下此刻感觉真实的内容，应用把事实、感受、故事和身体信号分开，然后帮助你选择：平静、看清、睡下，还是问一个更直接的问题。',
    whatCallout:'Miravelys 不是要和你的大脑争输赢。它帮你把争论慢下来，直到你能看见哪一部分是真实，哪一部分是在保护你，哪一部分只是需要休息。',
    momentsEyebrow:'清晰的瞬间', momentsTitle:'让一天感觉不同的小变化。',
    momentBodies:['一句话不再像风暴，而变成可以看一看的东西。','身体先得到几分钟安静。','一个看似确定的念头，变得稍微可以编辑。','夜里的重念头被轻轻放下。','重复模式以证据出现。','一次纠正会教会系统什么真的适合你。'],
    privacyEyebrow:'隐私与控制', privacyTitle:'你的内心生活不应该成为别人的产品。',
    privacyBody:'Miravelys 采用 local-first 设计，因为内容很私人。你可以暂停、柔化、编辑、隐藏或删除。纠正是最高优先级的学习信号。',
    faq:{eyebrow:'常见问题',title:'诚实回答，不假装应用有魔法。',items:[['Miravelys 是心理治疗吗？','不是。它用于反思、安定、写作和自我探索。'],['更强的模式会怎样？','它会更直接，但只在你选择时发生。'],['我可以纠正应用吗？','可以。纠正会影响之后的建议。'],['所有内容都会上传云端吗？','不会。核心体验是 local-first。'],['我可以删除内容吗？','可以。你可以暂停、隐藏、编辑或删除。']]},
    download:{eyebrow:'开始',title:'打开一句诚实的话。离开时心里多一点空间。',body:'Miravelys 为 iPhone 和 Apple Watch 设计。',ios:'下载 iPhone 版',watch:'支持 Apple Watch',soon:'公开上架后会添加 App Store 链接',note:'发布前请替换占位链接。'}
  },
  de: {
    nav: { what:'Was es ist', works:'So funktioniert es', depths:'Tiefe', moments:'Klarheit', faq:'FAQ', download:'Loslegen' },
    howEyebrow:'So funktioniert Miravelys', howTitle:'Eine ehrliche Zeile wird zu einem ruhigeren nächsten Schritt.',
    howIntro:'Du schreibst, was sich gerade wahr anfühlt, die App trennt die Teile des Moments und hilft dir zu wählen: Ruhe, Klarheit, Schlaf oder eine direktere Frage.',
    whatCallout:'Miravelys versucht nicht, einen Streit mit deinem Kopf zu gewinnen. Es verlangsamt ihn, bis sichtbar wird, was real ist, was schützt und was Ruhe braucht.',
    momentsEyebrow:'Momente der Klarheit', momentsTitle:'Kleine Verschiebungen, die einen Tag anders fühlen lassen.',
    momentBodies:['Eine Zeile ist nicht mehr ein Sturm, sondern etwas, das du ansehen kannst.','Der Körper bekommt ein paar ruhige Minuten.','Ein Gedanke wird ein wenig bearbeitbarer.','Ein Nachtgedanke wird sanft geparkt.','Ein Muster erscheint mit Belegen.','Eine Korrektur lehrt das System, was passt.'],
    privacyEyebrow:'Privatsphäre & Kontrolle', privacyTitle:'Dein Innenleben sollte nicht zum Produkt anderer werden.',
    privacyBody:'Miravelys ist local-first, weil das Material persönlich ist. Du kannst pausieren, abschwächen, bearbeiten, verbergen oder löschen. Korrekturen sind das wichtigste Lernsignal.',
    faq:{eyebrow:'Häufige Fragen',title:'Ehrliche Antworten, ohne Magie zu behaupten.',items:[['Ist Miravelys Therapie?','Nein. Es ist für Reflexion, Erdung, Journaling und Selbstbefragung.'],['Was passiert im stärkeren Modus?','Er fragt direkter, aber nur wenn du ihn wählst.'],['Kann ich korrigieren?','Ja. Korrekturen prägen zukünftige Vorschläge.'],['Geht alles in die Cloud?','Nein. Die Kernerfahrung ist local-first.'],['Kann ich Dinge löschen?','Ja. Du kannst pausieren, verbergen, bearbeiten oder löschen.']]},
    download:{eyebrow:'Loslegen',title:'Öffne eine ehrliche Zeile. Geh mit etwas mehr Raum nach innen.',body:'Miravelys ist für iPhone und Apple Watch gedacht.',ios:'Für iPhone laden',watch:'Apple Watch Unterstützung',soon:'App-Store-Link folgt beim öffentlichen Eintrag',note:'Ersetze Platzhalterlinks vor dem Launch.'}
  },
  ja: {
    nav: { what:'Miravelysとは', works:'仕組み', depths:'深さ', moments:'明晰さ', faq:'FAQ', download:'はじめる' },
    howEyebrow:'Miravelys の仕組み', howTitle:'正直な一行が、少し落ち着いた次の一歩になる。',
    howIntro:'今ほんとうに感じていることを書き、アプリが事実・感情・物語・身体の反応を分け、そのあと必要な方向を一緒に選びます。',
    whatCallout:'Miravelys は、あなたの心との議論に勝とうとしません。その議論をゆっくりにして、現実、保護、休息の必要を見えるようにします。',
    momentsEyebrow:'明晰さの瞬間', momentsTitle:'一日を少し違って感じさせる小さな変化。',
    momentBodies:['一行が嵐ではなく、眺められるものになる。','身体に静かな数分が生まれる。','考えが少し編集できるものになる。','夜の考えをそっと置ける。','パターンが根拠とともに現れる。','修正が本当に合うものを教える。'],
    privacyEyebrow:'プライバシーとコントロール', privacyTitle:'あなたの内面は、誰かの製品になるべきではありません。',
    privacyBody:'Miravelys は local-first です。扱うものが個人的だからです。停止、やわらげる、編集、非表示、削除ができます。修正は最優先の学習シグナルです。',
    faq:{eyebrow:'よくある質問',title:'魔法のように見せない正直な答え。',items:[['Miravelys はセラピーですか？','いいえ。振り返り、グラウンディング、ジャーナリング、自己探究のためのものです。'],['強いモードでは何が起きますか？','より直接的に問い直しますが、選んだ場合だけです。'],['修正できますか？','はい。修正は今後の提案に反映されます。'],['すべてクラウドですか？','いいえ。中心体験は local-first です。'],['削除できますか？','はい。非表示、編集、削除できます。']]},
    download:{eyebrow:'はじめる',title:'正直な一行を開く。内側に少し余白を持つ。',body:'Miravelys は iPhone と Apple Watch 向けです。',ios:'iPhone版をダウンロード',watch:'Apple Watch対応',soon:'公開後に App Store リンクを追加',note:'公開前にプレースホルダーを置き換えてください。'}
  },
  es: {
    nav: { what:'Qué es', works:'Cómo funciona', depths:'Profundidad', moments:'Claridad', faq:'FAQ', download:'Empezar' },
    howEyebrow:'Cómo funciona Miravelys', howTitle:'Una línea honesta se convierte en un siguiente paso más tranquilo.',
    howIntro:'Escribes lo que ahora se siente verdadero, la app separa las piezas del momento y te ayuda a elegir calma, claridad, sueño o una pregunta más directa.',
    whatCallout:'Miravelys no intenta ganar una discusión con tu mente. La ralentiza hasta que puedes ver qué es real, qué protege y qué necesita descanso.',
    momentsEyebrow:'Momentos de claridad', momentsTitle:'Pequeños cambios que hacen que el día se sienta distinto.',
    momentBodies:['Una línea deja de ser tormenta y se vuelve algo que puedes mirar.','El cuerpo recibe unos minutos tranquilos.','Un pensamiento se vuelve más editable.','Un pensamiento nocturno se aparca con suavidad.','Un patrón aparece con evidencia.','Una corrección enseña lo que encaja contigo.'],
    privacyEyebrow:'Privacidad y control', privacyTitle:'Tu vida interior no debería convertirse en el producto de otra persona.',
    privacyBody:'Miravelys es local-first porque el material es personal. Puedes pausar, suavizar, editar, ocultar o borrar. Las correcciones son la señal de aprendizaje más importante.',
    faq:{eyebrow:'Preguntas frecuentes',title:'Respuestas honestas, sin fingir magia.',items:[['¿Miravelys es terapia?','No. Es para reflexión, grounding, diario y autoindagación.'],['¿Qué ocurre en el modo fuerte?','Pregunta más directo, solo si lo eliges.'],['¿Puedo corregir la app?','Sí. Las correcciones cambian futuras sugerencias.'],['¿Todo va a la nube?','No. La experiencia central es local-first.'],['¿Puedo borrar cosas?','Sí. Puedes pausar, ocultar, editar o borrar.']]},
    download:{eyebrow:'Empezar',title:'Abre una línea honesta. Sal con un poco más de espacio interior.',body:'Miravelys está pensado para iPhone y Apple Watch.',ios:'Descargar para iPhone',watch:'Soporte para Apple Watch',soon:'Enlace de App Store cuando la ficha esté activa',note:'Sustituye los enlaces temporales antes del lanzamiento.'}
  },
  pt: {
    nav: { what:'O que é', works:'Como funciona', depths:'Profundidade', moments:'Clareza', faq:'FAQ', download:'Começar' },
    howEyebrow:'Como o Miravelys funciona', howTitle:'Uma linha honesta vira um próximo passo mais calmo.',
    howIntro:'Você escreve o que parece verdadeiro agora, o app separa as partes do momento e ajuda a escolher calma, clareza, sono ou uma pergunta mais direta.',
    whatCallout:'Miravelys não tenta vencer uma discussão com a sua mente. Ele desacelera a discussão até você ver o que é real, o que protege e o que precisa descansar.',
    momentsEyebrow:'Momentos de clareza', momentsTitle:'Pequenas mudanças que fazem o dia parecer diferente.',
    momentBodies:['Uma linha deixa de ser tempestade e vira algo que você pode observar.','O corpo recebe alguns minutos de silêncio.','Um pensamento fica mais editável.','Um pensamento noturno é guardado com gentileza.','Um padrão aparece com evidências.','Uma correção ensina o que combina com você.'],
    privacyEyebrow:'Privacidade e controle', privacyTitle:'Sua vida interior não deveria virar produto de outra pessoa.',
    privacyBody:'Miravelys é local-first porque o material é pessoal. Você pode pausar, suavizar, editar, ocultar ou apagar. Correções são o sinal de aprendizado mais importante.',
    faq:{eyebrow:'Perguntas frequentes',title:'Respostas honestas, sem fingir magia.',items:[['Miravelys é terapia?','Não. É para reflexão, grounding, diário e autoquestionamento.'],['O que acontece no modo forte?','Ele pergunta de forma mais direta, apenas se você escolher.'],['Posso corrigir o app?','Sim. Correções moldam sugestões futuras.'],['Tudo vai para a nuvem?','Não. A experiência central é local-first.'],['Posso apagar coisas?','Sim. Você pode pausar, ocultar, editar ou apagar.']]},
    download:{eyebrow:'Começar',title:'Abra uma linha honesta. Saia com mais espaço por dentro.',body:'Miravelys foi pensado para iPhone e Apple Watch.',ios:'Baixar para iPhone',watch:'Suporte para Apple Watch',soon:'Link da App Store quando a página estiver ativa',note:'Troque os links temporários antes do lançamento.'}
  }
};
Object.assign(labels, generic);

const mockAdditions = {
  en: { home: { state: 'State-aware: tired, activated, looping, ready', modes: ['Calm Mirror', 'Direct Inquiry', 'Aggressive clarity'] }, clear: { correction: 'Correction controls: not me · too strong · edit · delete' }, calm: { note: 'No analysis while the body is too loud.' }, sleep: { note: 'Park the thought. Keep tomorrow gentle.' }, mirror: { note: 'Patterns appear only with enough evidence.', bars: ['Facts', 'Stories', 'Supports'] } },
  ru: { home: { state: 'Учитывает состояние: усталость, напряжение, петля, готовность', modes: ['Спокойное зеркало', 'Прямой вопрос', 'Жёсткая ясность'] }, clear: { correction: 'Исправления: не про меня · слишком сильно · редактировать · удалить' }, calm: { note: 'Никакого анализа, пока тело слишком громкое.' }, sleep: { note: 'Отложи мысль. Пусть завтра будет мягче.' }, mirror: { note: 'Паттерны появляются только с достаточными доказательствами.', bars: ['Факты', 'Истории', 'Опоры'] } },
  ro: { home: { state: 'Ține cont de stare: obosit, activat, în buclă, pregătit', modes: ['Oglindă calmă', 'Întrebare directă', 'Claritate puternică'] }, clear: { correction: 'Corectări: nu sunt eu · prea puternic · editează · șterge' }, calm: { note: 'Fără analiză când corpul e prea zgomotos.' }, sleep: { note: 'Parchează gândul. Păstrează mâinele blând.' }, mirror: { note: 'Tiparele apar doar cu destule dovezi.', bars: ['Fapte', 'Povești', 'Sprijin'] } },
  fr: { home: { state: 'Tient compte de l’état : fatigué, activé, en boucle, prêt', modes: ['Miroir calme', 'Question directe', 'Clarté exigeante'] }, clear: { correction: 'Corrections : pas moi · trop fort · modifier · supprimer' }, calm: { note: 'Pas d’analyse quand le corps parle trop fort.' }, sleep: { note: 'Déposez la pensée. Gardez demain plus doux.' }, mirror: { note: 'Les schémas n’apparaissent qu’avec assez de preuves.', bars: ['Faits', 'Histoires', 'Soutiens'] } },
  hi: { home: { state: 'State-aware: थकान, सक्रियता, loop, तैयारी', modes: ['शांत दर्पण', 'सीधी inquiry', 'तेज़ स्पष्टता'] }, clear: { correction: 'सुधार: मेरे बारे में नहीं · बहुत तेज़ · edit · delete' }, calm: { note: 'जब शरीर बहुत loud हो, analysis नहीं।' }, sleep: { note: 'विचार को रख दें। कल को नरम रखें।' }, mirror: { note: 'Patterns केवल पर्याप्त evidence पर दिखते हैं।', bars: ['Facts', 'Stories', 'Supports'] } },
  zh: { home: { state: '感知状态：疲惫、被激活、循环、准备好', modes: ['平静镜像', '直接探索', '强力清晰'] }, clear: { correction: '纠正：不适合我 · 太强 · 编辑 · 删除' }, calm: { note: '身体太响时，不做深度分析。' }, sleep: { note: '先放下这个念头。让明天温柔一点。' }, mirror: { note: '只有证据足够时才显示模式。', bars: ['事实', '故事', '支持'] } },
  de: { home: { state: 'Zustandsbewusst: müde, aktiviert, in Schleife, bereit', modes: ['Ruhiger Spiegel', 'Direkte Befragung', 'Starke Klarheit'] }, clear: { correction: 'Korrekturen: passt nicht · zu stark · bearbeiten · löschen' }, calm: { note: 'Keine Analyse, wenn der Körper zu laut ist.' }, sleep: { note: 'Gedanken parken. Morgen weich halten.' }, mirror: { note: 'Muster erscheinen nur mit genug Belegen.', bars: ['Fakten', 'Geschichten', 'Stützen'] } },
  ja: { home: { state: '状態を考慮：疲れ、活性化、ループ、準備完了', modes: ['静かな鏡', '直接探究', '強い明晰さ'] }, clear: { correction: '修正：自分ではない · 強すぎる · 編集 · 削除' }, calm: { note: '身体が大きく反応している間は分析しません。' }, sleep: { note: '考えを置く。明日をやさしく保つ。' }, mirror: { note: '十分な根拠がある時だけパターンを表示。', bars: ['事実', '物語', '支え'] } },
  es: { home: { state: 'Reconoce el estado: cansancio, activación, bucle, preparación', modes: ['Espejo calmado', 'Indagación directa', 'Claridad fuerte'] }, clear: { correction: 'Correcciones: no soy yo · demasiado fuerte · editar · borrar' }, calm: { note: 'Sin análisis cuando el cuerpo habla demasiado alto.' }, sleep: { note: 'Aparca el pensamiento. Haz amable el mañana.' }, mirror: { note: 'Los patrones aparecen solo con suficiente evidencia.', bars: ['Hechos', 'Historias', 'Apoyos'] } },
  pt: { home: { state: 'Reconhece o estado: cansaço, ativação, looping, pronto', modes: ['Espelho calmo', 'Investigação direta', 'Clareza forte'] }, clear: { correction: 'Correções: não sou eu · forte demais · editar · apagar' }, calm: { note: 'Sem análise quando o corpo está alto demais.' }, sleep: { note: 'Guarde o pensamento. Deixe amanhã mais leve.' }, mirror: { note: 'Padrões aparecem só com evidência suficiente.', bars: ['Fatos', 'Histórias', 'Apoios'] } },
};

const siteCopy = {};
for (const language of languages) {
  const code = language.code;
  const old = structuredClone(previousSiteCopy[code]);
  const add = labels[code] ?? labels.en;
  old.nav = { ...old.nav, ...add.nav };
  old.what = { eyebrow: old.story?.eyebrow ?? add.nav.what, title: old.story?.title ?? add.howTitle, paragraphs: old.story?.paragraphs ?? [], callout: add.whatCallout };
  old.works = { eyebrow: add.howEyebrow, title: add.howTitle, intro: add.howIntro, steps: (old.signature?.cards ?? []).slice(0, 6).map((card) => ({ title: card.title, body: card.body })) };
  old.depths = old.modes;
  old.moments = { eyebrow: add.momentsEyebrow, title: add.momentsTitle, items: (old.outcomes?.items ?? []).slice(0, 6).map((title, index) => ({ title, body: add.momentBodies[index] ?? add.momentBodies[0] })) };
  old.privacy = { eyebrow: add.privacyEyebrow, title: add.privacyTitle, body: add.privacyBody, bullets: old.trust?.bullets ?? [] };
  old.faq = add.faq;
  old.download = add.download;
  siteCopy[code] = old;
}

const mockupCopy = {};
for (const language of languages) {
  const code = language.code;
  const old = structuredClone(previousMockupCopy[code]);
  const add = mockAdditions[code] ?? mockAdditions.en;
  mockupCopy[code] = { ...old, home: { ...old.home, ...add.home }, clear: { ...old.clear, ...add.clear }, calm: { ...old.calm, ...add.calm }, sleep: { ...old.sleep, ...add.sleep }, mirror: { ...old.mirror, ...add.mirror } };
}

const banner = '// Generated by Miravelys mandatory one-pass website implementation.\n\n';
await fs.writeFile(new URL('../src/i18n/siteCopy.js', import.meta.url), `${banner}export const languages = ${JSON.stringify(languages, null, 2)};\n\nexport const navItems = ${JSON.stringify(navItems, null, 2)};\n\nexport const siteCopy = ${JSON.stringify(siteCopy, null, 2)};\n`, 'utf8');
await fs.writeFile(new URL('../src/i18n/mockupCopy.js', import.meta.url), `${banner}export const mockupCopy = ${JSON.stringify(mockupCopy, null, 2)};\n`, 'utf8');
console.log('Augmented Miravelys site and mockup copy in', languages.length, 'languages.');
