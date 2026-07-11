import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.resolve(__dirname, '../src/i18n/legalCopy.js');

import { legalCopy } from '../src/i18n/legalCopy.js';

const translations = {
  en: {
    privacyPolicy: {
      title: "Privacy Policy",
      updated: "June 2026",
      intro: "Welcome to Miravelys. We are committed to protecting your privacy and ensuring your personal reflections remain strictly confidential.",
      sections: [
        {
          title: "1. Data We Do NOT Collect (Local & Private Data)",
          paragraphs: [
            "Miravelys is built with a \"Privacy-First\" architecture. All journal entries and reflections are stored strictly locally on your device and synced securely via your Apple iCloud. We do not host this data on our servers, and we have no access to read or analyze it.",
            "Audio for breathing exercises is processed locally in real-time. It is never recorded, saved, transmitted, or shared."
          ]
        },
        {
          title: "2. Information We Do Collect & How It Is Used",
          paragraphs: [
            "If you create an account, we collect your email solely for account recovery. We use RevenueCat for anonymous subscription management. With your explicit permission, we may log \"Mindfulness Minutes\" to Apple HealthKit (this data is never sold). We also collect anonymized crash reports to improve the app."
          ]
        },
        {
          title: "3. Children's Privacy (COPPA & GDPR)",
          paragraphs: [
            "The app is rated 12+. We do not knowingly collect personal information from children under 13 (USA) or 16 (EU) without verifiable parental consent. Contact support@miravelys.com if you believe a minor has provided data."
          ]
        },
        {
          title: "4. Third-Party Services & Your Rights",
          paragraphs: [
            "We share minimal data with trusted services (Apple and RevenueCat) strictly to operate the app. Depending on your jurisdiction (e.g., GDPR, CCPA), you have the right to access, rectify, or erase your data. You can delete your account directly in the app or by emailing us."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Terms of Service (EULA)",
      updated: "June 2026",
      intro: "By downloading or using Miravelys, you agree to these Terms. If you do not agree, please do not use the App.",
      sections: [
        {
          title: "1. Medical & Psychological Disclaimer (CRITICAL)",
          paragraphs: [
            "Miravelys is not a medical device or a substitute for professional psychological, psychiatric, or medical advice. The tools are for self-help and mindfulness only. You assume all risks associated with your well-being. In a crisis, contact emergency services immediately."
          ]
        },
        {
          title: "2. Subscription Terms",
          paragraphs: [
            "We offer auto-renewing subscriptions and a Lifetime option. Subscriptions automatically renew unless canceled 24 hours before the end of the period. Manage cancellations through your App Store settings. Refunds are handled exclusively by Apple."
          ]
        },
        {
          title: "3. User Conduct & Intellectual Property",
          paragraphs: [
            "You may not reverse engineer the App or use it illegally. All audio, methodologies, and design are the intellectual property of Miravelys. You retain full ownership of your journal entries."
          ]
        },
        {
          title: "4. Limitation of Liability",
          paragraphs: [
            "The App is provided \"AS IS\". To the maximum extent permitted by law, Miravelys is not liable for indirect or incidental damages arising from your use of the App."
          ]
        }
      ]
    }
  },
  ru: {
    privacyPolicy: {
      title: "Политика конфиденциальности",
      updated: "Июнь 2026",
      intro: "Добро пожаловать в Miravelys. Мы стремимся защищать вашу конфиденциальность и гарантируем тайну ваших записей.",
      sections: [
        {
          title: "1. Данные, которые мы НЕ собираем",
          paragraphs: [
            "Все дневники хранятся только локально на вашем устройстве и синхронизируются через ваш iCloud. Мы не имеем к ним доступа.",
            "Звук для дыхательных практик обрабатывается локально и никогда не записывается и не передается."
          ]
        },
        {
          title: "2. Собираемая информация",
          paragraphs: [
            "Email используется только для восстановления аккаунта. Подписки управляются анонимно через RevenueCat. Данные HealthKit используются только с вашего разрешения и не продаются. Мы также собираем анонимные отчеты об ошибках."
          ]
        },
        {
          title: "3. Детская приватность (COPPA и GDPR)",
          paragraphs: [
            "Возрастной рейтинг: 12+. Мы не собираем данные детей до 13 лет (США) или 16 лет (ЕС) без согласия родителей. Контакт: support@miravelys.com."
          ]
        },
        {
          title: "4. Ваши права и третьи лица",
          paragraphs: [
            "Мы делимся минимумом данных с Apple и RevenueCat. Вы имеете право на доступ, изменение и удаление своих данных в соответствии с GDPR и CCPA. Вы можете удалить аккаунт в приложении."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Условия использования (EULA)",
      updated: "Июнь 2026",
      intro: "Используя Miravelys, вы соглашаетесь с этими Условиями.",
      sections: [
        {
          title: "1. Медицинский отказ от ответственности",
          paragraphs: [
            "Miravelys не является медицинской заменой профессиональной психотерапии. Приложение предназначено только для самопомощи. При кризисе немедленно обращайтесь в службы спасения."
          ]
        },
        {
          title: "2. Условия подписки",
          paragraphs: [
            "Подписки автовозобновляются, если не отменены за 24 часа до конца периода. Управление и отмена происходят через настройки App Store. Возвраты обрабатываются только Apple."
          ]
        },
        {
          title: "3. Интеллектуальная собственность",
          paragraphs: [
            "Запрещается взламывать приложение. Все методики и аудио принадлежат Miravelys. Ваши записи принадлежат только вам."
          ]
        },
        {
          title: "4. Ограничение ответственности",
          paragraphs: [
            "Приложение предоставляется «КАК ЕСТЬ». Мы не несем ответственности за косвенные убытки, связанные с его использованием."
          ]
        }
      ]
    }
  },
  ro: {
    privacyPolicy: {
      title: "Politica de Confidențialitate",
      updated: "Iunie 2026",
      intro: "Bun venit la Miravelys. Ne angajăm să vă protejăm confidențialitatea și să ne asigurăm că reflecțiile dvs. rămân strict confidențiale.",
      sections: [
        {
          title: "1. Date pe care NU le colectăm",
          paragraphs: [
            "Toate jurnalele sunt stocate strict local pe dispozitiv și sincronizate prin iCloud. Nu avem acces să le citim sau să le analizăm.",
            "Audio-ul pentru exercițiile de respirație este procesat local în timp real. Nu este niciodată înregistrat, salvat sau transmis."
          ]
        },
        {
          title: "2. Informații pe care le colectăm",
          paragraphs: [
            "Dacă creați un cont, colectăm email-ul doar pentru recuperare. Folosim RevenueCat pentru gestionarea anonimă a abonamentelor. Cu permisiunea dvs., putem adăuga minute în Apple HealthKit (datele nu sunt vândute). Colectăm și rapoarte de erori anonime."
          ]
        },
        {
          title: "3. Confidențialitatea copiilor (COPPA, GDPR)",
          paragraphs: [
            "Aplicația este 12+. Nu colectăm date de la copii sub 13 ani (SUA) sau 16 ani (UE) fără consimțământ parental verificabil. Contact: support@miravelys.com."
          ]
        },
        {
          title: "4. Terțe părți și drepturile dvs.",
          paragraphs: [
            "Partajăm date minime cu Apple și RevenueCat strict pentru funcționare. Aveți dreptul (GDPR, CCPA) să vă accesați, rectificați sau ștergeți datele. Puteți șterge contul direct din aplicație."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Termeni de Utilizare (EULA)",
      updated: "Iunie 2026",
      intro: "Prin descărcarea și utilizarea Miravelys, acceptați acești Termeni.",
      sections: [
        {
          title: "1. Declinarea responsabilității medicale",
          paragraphs: [
            "Miravelys nu înlocuiește sfatul psihologic sau medical profesionist. Instrumentele sunt doar pentru auto-ajutor. Vă asumați toate riscurile. În caz de criză, contactați imediat serviciile de urgență."
          ]
        },
        {
          title: "2. Termenii Abonamentului",
          paragraphs: [
            "Abonamentele se reînnoiesc automat, cu excepția cazului în care sunt anulate cu 24 de ore înainte. Gestionați anulările prin App Store. Rambursările sunt procesate exclusiv de Apple."
          ]
        },
        {
          title: "3. Proprietate Intelectuală",
          paragraphs: [
            "Este interzisă ingineria inversă. Sunetele și metodologiile aparțin Miravelys. Dvs. dețineți drepturile depline asupra notițelor din jurnal."
          ]
        },
        {
          title: "4. Limitarea Răspunderii",
          paragraphs: [
            "Aplicația este furnizată „AȘA CUM ESTE”. În limita maximă permisă de lege, Miravelys nu este responsabilă pentru daune indirecte."
          ]
        }
      ]
    }
  },
  fr: {
    privacyPolicy: {
      title: "Politique de Confidentialité",
      updated: "Juin 2026",
      intro: "Bienvenue sur Miravelys. Nous nous engageons à protéger votre vie privée et à garantir que vos réflexions restent confidentielles.",
      sections: [
        {
          title: "1. Données que nous NE collectons PAS",
          paragraphs: [
            "Vos journaux sont stockés localement sur votre appareil et synchronisés via votre iCloud. Nous n'y avons aucun accès.",
            "L'audio pour les exercices respiratoires est traité localement. Il n'est jamais enregistré, sauvegardé ou transmis."
          ]
        },
        {
          title: "2. Informations que nous collectons",
          paragraphs: [
            "L'email (si compte créé) sert uniquement à la récupération. Les abonnements sont gérés via RevenueCat de manière anonyme. Avec votre accord, nous utilisons Apple HealthKit. Nous collectons aussi des rapports de bugs anonymisés."
          ]
        },
        {
          title: "3. Vie privée des enfants",
          paragraphs: [
            "Classification 12+. Nous ne collectons pas les données des moins de 13 ans (USA) ou 16 ans (UE) sans accord parental. Contact : support@miravelys.com."
          ]
        },
        {
          title: "4. Vos droits (RGPD, CCPA)",
          paragraphs: [
            "Nous partageons un minimum de données avec Apple et RevenueCat. Vous pouvez accéder, modifier ou supprimer vos données et votre compte via l'application."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Conditions de Service (EULA)",
      updated: "Juin 2026",
      intro: "En utilisant Miravelys, vous acceptez ces Conditions.",
      sections: [
        {
          title: "1. Avertissement Médical (CRITIQUE)",
          paragraphs: [
            "Miravelys ne remplace pas un avis médical ou psychologique professionnel. Outils d'auto-assistance uniquement. En cas de crise, contactez les urgences."
          ]
        },
        {
          title: "2. Abonnements",
          paragraphs: [
            "Les abonnements se renouvellent automatiquement sauf annulation 24h avant. Géré via l'App Store. Apple gère les remboursements."
          ]
        },
        {
          title: "3. Propriété Intellectuelle",
          paragraphs: [
            "Ne rétro-concevez pas l'Application. L'audio et les méthodologies appartiennent à Miravelys. Vous possédez vos entrées de journal."
          ]
        },
        {
          title: "4. Limite de Responsabilité",
          paragraphs: [
            "Fourni « TEL QUEL ». Nous déclinons toute responsabilité pour les dommages indirects liés à l'utilisation."
          ]
        }
      ]
    }
  },
  hi: {
    privacyPolicy: {
      title: "गोपनीयता नीति",
      updated: "जून 2026",
      intro: "Miravelys में आपका स्वागत है। हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं।",
      sections: [
        {
          title: "1. डेटा जो हम एकत्र नहीं करते हैं",
          paragraphs: [
            "सभी जर्नल प्रविष्टियां आपके डिवाइस पर स्थानीय रूप से संग्रहीत होती हैं और आपके iCloud के माध्यम से सिंक होती हैं। हम उन्हें पढ़ या एक्सेस नहीं कर सकते।",
            "सांस लेने के व्यायाम के लिए ऑडियो को डिवाइस पर ही प्रोसेस किया जाता है और कभी भी रिकॉर्ड या साझा नहीं किया जाता।"
          ]
        },
        {
          title: "2. हम जो जानकारी एकत्र करते हैं",
          paragraphs: [
            "ईमेल (वैकल्पिक) केवल खाता रिकवरी के लिए उपयोग किया जाता है। RevenueCat सदस्यता प्रबंधन के लिए है। हम आपकी अनुमति से Apple HealthKit का उपयोग कर सकते हैं।"
          ]
        },
        {
          title: "3. बच्चों की गोपनीयता",
          paragraphs: [
            "आयु रेटिंग 12+। हम माता-पिता की सहमति के बिना 13 (USA) या 16 (EU) से कम उम्र के बच्चों का डेटा एकत्र नहीं करते हैं।"
          ]
        },
        {
          title: "4. आपके अधिकार",
          paragraphs: [
            "आप ऐप में अपना डेटा या खाता सीधे एक्सेस और हटा सकते हैं। हम न्यूनतम डेटा Apple और RevenueCat के साथ साझा करते हैं।"
          ]
        }
      ]
    },
    userAgreement: {
      title: "सेवा की शर्तें (EULA)",
      updated: "जून 2026",
      intro: "Miravelys का उपयोग करके, आप इन शर्तों से सहमत हैं।",
      sections: [
        {
          title: "1. चिकित्सा अस्वीकरण (महत्वपूर्ण)",
          paragraphs: [
            "Miravelys पेशेवर मनोवैज्ञानिक या चिकित्सा सलाह का विकल्प नहीं है। यह केवल स्वयं सहायता के लिए है। संकट की स्थिति में, आपातकालीन सेवाओं से संपर्क करें।"
          ]
        },
        {
          title: "2. सदस्यता शर्तें",
          paragraphs: [
            "सदस्यता स्वतः-नवीनीकृत होती है जब तक कि 24 घंटे पहले रद्द न की जाए। ऐप स्टोर सेटिंग्स के माध्यम से रद्द करें। रिफंड Apple द्वारा संभाले जाते हैं।"
          ]
        },
        {
          title: "3. बौद्धिक संपदा",
          paragraphs: [
            "ऑडियो और कार्यप्रणाली Miravelys की संपत्ति हैं। आप अपनी जर्नल प्रविष्टियों के पूर्ण स्वामी हैं।"
          ]
        },
        {
          title: "4. दायित्व की सीमा",
          paragraphs: [
            "ऐप \"जैसा है\" प्रदान किया जाता है। Miravelys अप्रत्यक्ष नुकसान के लिए उत्तरदायी नहीं है।"
          ]
        }
      ]
    }
  },
  zh: {
    privacyPolicy: {
      title: "隐私政策",
      updated: "2026年6月",
      intro: "欢迎来到 Miravelys。我们致力于保护您的隐私并确保您的个人反思绝对保密。",
      sections: [
        {
          title: "1. 我们不收集的数据",
          paragraphs: [
            "所有日记条目都严格存储在您的本地设备上，并通过您的 Apple iCloud 安全同步。我们无法访问或读取它们。",
            "用于呼吸练习的音频在本地实时处理。它绝不会被记录、保存或传输。"
          ]
        },
        {
          title: "2. 我们收集的信息",
          paragraphs: [
            "如果您创建帐户，您的电子邮件仅用于帐户恢复。我们使用 RevenueCat 匿名管理订阅。经您允许，我们会使用 Apple HealthKit，且绝不出售该数据。"
          ]
        },
        {
          title: "3. 儿童隐私 (COPPA & GDPR)",
          paragraphs: [
            "年龄分级：12+。未经父母同意，我们不会收集 13 岁（美国）或 16 岁（欧盟）以下儿童的个人信息。"
          ]
        },
        {
          title: "4. 您的权利",
          paragraphs: [
            "您可以直接在应用程序中访问、修改或删除您的帐户和数据。我们仅为了运营应用程序与 Apple 和 RevenueCat 共享最低限度的数据。"
          ]
        }
      ]
    },
    userAgreement: {
      title: "服务条款 (EULA)",
      updated: "2026年6月",
      intro: "下载或使用 Miravelys，即表示您同意本条款。",
      sections: [
        {
          title: "1. 医疗与心理免责声明 (重要)",
          paragraphs: [
            "Miravelys 不能替代专业的医疗、心理或精神诊断与治疗。仅用于自我帮助和正念。遇到心理危机时，请立即联系紧急服务部门。"
          ]
        },
        {
          title: "2. 订阅条款",
          paragraphs: [
            "订阅将自动续订，除非在期满前 24 小时取消。请通过 App Store 设置管理。退款由 Apple 处理。"
          ]
        },
        {
          title: "3. 知识产权与用户行为",
          paragraphs: [
            "禁止对应用进行逆向工程。应用内的音频、方法和设计属 Miravelys 所有。您保留日记的完整所有权。"
          ]
        },
        {
          title: "4. 责任限制",
          paragraphs: [
            "应用“按原样”提供。Miravelys 对因使用本应用而产生的间接损害不承担任何责任。"
          ]
        }
      ]
    }
  },
  de: {
    privacyPolicy: {
      title: "Datenschutzerklärung",
      updated: "Juni 2026",
      intro: "Willkommen bei Miravelys. Wir verpflichten uns, Ihre Privatsphäre zu schützen und Ihre Daten vertraulich zu behandeln.",
      sections: [
        {
          title: "1. Daten, die wir NICHT erfassen",
          paragraphs: [
            "Alle Tagebucheinträge werden lokal auf Ihrem Gerät gespeichert und über iCloud synchronisiert. Wir haben keinen Zugriff darauf.",
            "Audio für Atemübungen wird lokal in Echtzeit verarbeitet. Es wird niemals aufgezeichnet, gespeichert oder übertragen."
          ]
        },
        {
          title: "2. Informationen, die wir erfassen",
          paragraphs: [
            "E-Mails (optional) dienen nur der Kontowiederherstellung. Abonnements werden anonym über RevenueCat verwaltet. HealthKit-Daten werden nur mit Ihrer Erlaubnis verwendet."
          ]
        },
        {
          title: "3. Privatsphäre von Kindern (DSGVO)",
          paragraphs: [
            "Die App ist ab 12 Jahren freigegeben. Wir erfassen wissentlich keine Daten von Kindern unter 16 Jahren (EU) ohne elterliche Zustimmung. Kontakt: support@miravelys.com."
          ]
        },
        {
          title: "4. Ihre Rechte",
          paragraphs: [
            "Sie haben das Recht auf Auskunft, Löschung und Berichtigung Ihrer Daten. Sie können Ihr Konto direkt in der App löschen."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Nutzungsbedingungen (EULA)",
      updated: "Juni 2026",
      intro: "Durch die Nutzung von Miravelys stimmen Sie diesen Bedingungen zu.",
      sections: [
        {
          title: "1. Medizinischer Haftungsausschluss (WICHTIG)",
          paragraphs: [
            "Miravelys ist kein Ersatz für professionelle medizinische oder psychologische Behandlung. Wenden Sie sich in Krisensituationen an den Notruf."
          ]
        },
        {
          title: "2. Abonnementbedingungen",
          paragraphs: [
            "Abonnements verlängern sich automatisch, wenn sie nicht 24 Stunden vorher gekündigt werden. Rückerstattungen werden ausschließlich von Apple abgewickelt."
          ]
        },
        {
          title: "3. Geistiges Eigentum",
          paragraphs: [
            "Audio und Methodik sind Eigentum von Miravelys. Sie behalten das volle Eigentum an Ihren Tagebucheinträgen."
          ]
        },
        {
          title: "4. Haftungsbeschränkung",
          paragraphs: [
            "Die App wird \"WIE BESEHEN\" bereitgestellt. Wir haften nicht für indirekte Schäden, die aus der Nutzung der App entstehen."
          ]
        }
      ]
    }
  },
  ja: {
    privacyPolicy: {
      title: "プライバシーポリシー",
      updated: "2026年6月",
      intro: "Miravelys へようこそ。私たちはあなたのプライバシーを保護し、個人的な反射を機密に保つことをお約束します。",
      sections: [
        {
          title: "1. 収集しないデータ (ローカルおよびプライベートデータ)",
          paragraphs: [
            "すべてのジャーナルエントリはデバイスのローカルに厳密に保存され、Apple iCloud 経由で安全に同期されます。私たちはこのデータを読み取ったり分析したりすることはありません。",
            "呼吸法のための音声はリアルタイムでローカルに処理されます。記録、保存、送信されることはありません。"
          ]
        },
        {
          title: "2. 収集する情報とその使用方法",
          paragraphs: [
            "アカウントを作成した場合、メールアドレスはアカウント復旧のためのみに使用されます。サブスクリプションは RevenueCat で匿名管理されます。Apple HealthKit データは許可を得てのみ使用されます。"
          ]
        },
        {
          title: "3. 子供のプライバシー",
          paragraphs: [
            "アプリの対象年齢は12歳以上です。保護者の同意なしに13歳または16歳未満の子供から個人情報を意図的に収集することはありません。"
          ]
        },
        {
          title: "4. あなたの権利",
          paragraphs: [
            "アプリ内でアカウントやデータを直接削除できます。私たちはアプリの運営に必要な最小限のデータのみを Apple および RevenueCat と共有します。"
          ]
        }
      ]
    },
    userAgreement: {
      title: "利用規約 (EULA)",
      updated: "2026年6月",
      intro: "Miravelys をダウンロードまたは使用することにより、これらの利用規約に同意したものとみなされます。",
      sections: [
        {
          title: "1. 医療および心理学的な免責事項 (重要)",
          paragraphs: [
            "Miravelys は医療機器ではなく、専門的な心理学的、精神医学的、または医学的なアドバイスの代わりになるものではありません。危機の際は直ちに緊急サービスに連絡してください。"
          ]
        },
        {
          title: "2. サブスクリプション規約",
          paragraphs: [
            "サブスクリプションは、期間終了の24時間前にキャンセルされない限り自動更新されます。App Storeの設定から管理してください。返金は Apple が対応します。"
          ]
        },
        {
          title: "3. ユーザーの行動と知的財産",
          paragraphs: [
            "アプリをリバースエンジニアリングしないでください。音声やデザインは Miravelys の知的財産です。ジャーナルの完全な所有権はあなたにあります。"
          ]
        },
        {
          title: "4. 責任の制限",
          paragraphs: [
            "アプリは「現状有姿」で提供されます。法律で認められる最大限の範囲で、Miravelys は間接的な損害について責任を負いません。"
          ]
        }
      ]
    }
  },
  es: {
    privacyPolicy: {
      title: "Política de Privacidad",
      updated: "Junio 2026",
      intro: "Bienvenido a Miravelys. Nos comprometemos a proteger su privacidad y garantizar que sus reflexiones sigan siendo confidenciales.",
      sections: [
        {
          title: "1. Datos que NO recopilamos",
          paragraphs: [
            "Todos los diarios se almacenan estrictamente localmente en su dispositivo y se sincronizan a través de su iCloud. No tenemos acceso para leerlos ni analizarlos.",
            "El audio para los ejercicios de respiración se procesa localmente en tiempo real. Nunca se graba, guarda ni transmite."
          ]
        },
        {
          title: "2. Información que recopilamos",
          paragraphs: [
            "El correo electrónico (opcional) se usa solo para recuperación de cuenta. Usamos RevenueCat para la gestión anónima de suscripciones. Con su permiso, podemos enviar datos a Apple HealthKit (nunca se venden)."
          ]
        },
        {
          title: "3. Privacidad infantil (COPPA y GDPR)",
          paragraphs: [
            "Clasificación 12+. No recopilamos datos de niños menores de 13 años (EE. UU.) o 16 años (UE) sin consentimiento de los padres. Contacto: support@miravelys.com."
          ]
        },
        {
          title: "4. Sus derechos",
          paragraphs: [
            "Tiene derecho (GDPR, CCPA) a acceder, rectificar o eliminar sus datos. Puede eliminar su cuenta directamente en la aplicación."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Términos de Servicio (EULA)",
      updated: "Junio 2026",
      intro: "Al usar Miravelys, acepta estos Términos.",
      sections: [
        {
          title: "1. Descargo de responsabilidad médica (CRÍTICO)",
          paragraphs: [
            "Miravelys no sustituye el asesoramiento médico o psicológico profesional. Las herramientas son solo para autoayuda. En caso de crisis, comuníquese con los servicios de emergencia de inmediato."
          ]
        },
        {
          title: "2. Términos de suscripción",
          paragraphs: [
            "Las suscripciones se renuevan automáticamente a menos que se cancelen 24 horas antes. Administre esto a través de la App Store. Los reembolsos son manejados por Apple."
          ]
        },
        {
          title: "3. Propiedad intelectual",
          paragraphs: [
            "No puede aplicar ingeniería inversa a la aplicación. El audio y la metodología son propiedad de Miravelys. Usted conserva la propiedad total de sus diarios."
          ]
        },
        {
          title: "4. Limitación de responsabilidad",
          paragraphs: [
            "La aplicación se proporciona \"TAL CUAL\". En la medida máxima permitida por la ley, Miravelys no es responsable por daños indirectos."
          ]
        }
      ]
    }
  },
  pt: {
    privacyPolicy: {
      title: "Política de Privacidade",
      updated: "Junho 2026",
      intro: "Bem-vindo ao Miravelys. Estamos comprometidos em proteger sua privacidade.",
      sections: [
        {
          title: "1. Dados que NÃO coletamos",
          paragraphs: [
            "Todos os diários são armazenados estritamente localmente no seu dispositivo e sincronizados via seu iCloud. Não temos acesso para lê-los ou analisá-los.",
            "O áudio para os exercícios de respiração é processado localmente em tempo real. Nunca é gravado, salvo ou transmitido."
          ]
        },
        {
          title: "2. Informações que coletamos",
          paragraphs: [
            "O e-mail (opcional) é usado apenas para recuperação de conta. Usamos o RevenueCat para gerenciamento anônimo de assinaturas. O Apple HealthKit é usado apenas com permissão."
          ]
        },
        {
          title: "3. Privacidade Infantil (COPPA, LGPD)",
          paragraphs: [
            "Classificação 12+. Não coletamos dados de crianças menores de 13 (EUA) ou 16 (UE) sem consentimento dos pais. Contato: support@miravelys.com."
          ]
        },
        {
          title: "4. Seus Direitos (LGPD, CCPA, GDPR)",
          paragraphs: [
            "Você tem o direito de acessar, retificar ou excluir seus dados. Pode excluir a conta diretamente no aplicativo."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Termos de Serviço (EULA)",
      updated: "Junho 2026",
      intro: "Ao usar o Miravelys, você concorda com estes Termos.",
      sections: [
        {
          title: "1. Isenção de Responsabilidade Médica (CRÍTICO)",
          paragraphs: [
            "O Miravelys não substitui o aconselhamento médico ou psicológico profissional. As ferramentas são apenas para autoajuda. Em caso de crise, contate os serviços de emergência imediatamente."
          ]
        },
        {
          title: "2. Termos de Assinatura",
          paragraphs: [
            "As assinaturas são renovadas automaticamente a menos que sejam canceladas com 24 horas de antecedência. Os reembolsos são tratados exclusivamente pela Apple."
          ]
        },
        {
          title: "3. Propriedade Intelectual",
          paragraphs: [
            "Você não pode fazer engenharia reversa do Aplicativo. O áudio e o design são propriedade intelectual do Miravelys. Você retém a propriedade total de seus diários."
          ]
        },
        {
          title: "4. Limitação de Responsabilidade",
          paragraphs: [
            "O Aplicativo é fornecido \"COMO ESTÁ\". Na extensão máxima permitida por lei, o Miravelys não se responsabiliza por danos indiretos resultantes do seu uso do Aplicativo."
          ]
        }
      ]
    }
  }
};

for (const lang of Object.keys(translations)) {
  if (!legalCopy[lang]) {
    legalCopy[lang] = {};
  }
  legalCopy[lang].privacyPolicy = translations[lang].privacyPolicy;
  legalCopy[lang].userAgreement = translations[lang].userAgreement;
}

const output = `// Legal documents for miravelys.com — product-accurate, localized, and aligned with app trust copy.

export const legalCopy = ${JSON.stringify(legalCopy, null, 2)};

export const legalDocuments = ['privacyPolicy', 'userAgreement', 'legalNotice', 'cookies'];
`;

fs.writeFileSync(targetFile, output, 'utf-8');
console.log('Successfully updated src/i18n/legalCopy.js with V2 Comprehensive Documents');
