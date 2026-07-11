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
      intro: "Miravelys (\"we\", \"us\") is committed to protecting your privacy. This policy explains how we collect and use data for our iOS app and website. By using Miravelys, you agree to this policy.",
      sections: [
        {
          title: "1. Data Stored Locally (Not Collected by Us)",
          paragraphs: [
            "Miravelys is built on a \"Privacy First\" philosophy. All journal entries, reflections, and audio processing for breathwork operate strictly on-device or sync via your personal Apple iCloud. We cannot access, read, or monetize this private data."
          ]
        },
        {
          title: "2. Personal Information We Collect",
          paragraphs: [
            "We collect minimal data: Email and Name (for optional accounts), HealthKit data (Mindfulness Minutes, strictly with your permission and never sold to third parties), and anonymous purchase history via RevenueCat and Apple to manage subscriptions."
          ]
        },
        {
          title: "3. Children's Privacy (COPPA & GDPR)",
          paragraphs: [
            "Age Rating: 12+. We do not knowingly collect personal information from children under 13 (USA) or under 16 (EU/UK, unless parental consent is provided) without verified consent. If you believe a child has provided us with data, contact privacy@miravelys.com."
          ]
        },
        {
          title: "4. Your Rights (CCPA, GDPR, Global)",
          paragraphs: [
            "Depending on your region (e.g., California, EU, UK, Canada, Brazil, Japan), you have the right to access, delete, or correct your personal data. You can delete your account directly in the app. For inquiries, email privacy@miravelys.com."
          ]
        }
      ]
    },
    userAgreement: {
      title: "Terms of Use",
      updated: "June 2026",
      intro: "By using Miravelys, you agree to these Terms. If you do not agree, do not use the App.",
      sections: [
        {
          title: "1. Eligibility & Age Requirements",
          paragraphs: [
            "The App is rated 12+. You must be at least 12 years old to use the App. Minors must have a parent or guardian's permission."
          ]
        },
        {
          title: "2. Not Medical Advice",
          paragraphs: [
            "Miravelys is a self-inquiry and mindfulness tool. It is not a substitute for professional mental health treatment, therapy, or medical advice. Contact emergency services if you are in a crisis."
          ]
        },
        {
          title: "3. User Content & Subscriptions",
          paragraphs: [
            "You retain total ownership of your entries. Premium features are offered via auto-renewing subscriptions, managed through your Apple ID settings."
          ]
        },
        {
          title: "4. Disclaimers & Governing Law",
          paragraphs: [
            "The App is provided \"AS IS\". We disclaim liability for indirect damages. These Terms are governed by the laws of our headquarters' jurisdiction, respecting mandatory local consumer protections."
          ]
        }
      ]
    }
  },
  ru: {
    privacyPolicy: {
      title: "Политика конфиденциальности",
      updated: "Июнь 2026",
      intro: "Мы привержены защите вашей приватности. Эта политика объясняет, как мы обрабатываем данные. Используя Miravelys, вы соглашаетесь с этими условиями.",
      sections: [
        {
          title: "1. Данные на вашем устройстве",
          paragraphs: ["Дневники, размышления и обработка звука происходят локально или синхронизируются через ваш личный Apple iCloud. Мы не имеем к ним доступа."]
        },
        {
          title: "2. Собираемая информация",
          paragraphs: ["Мы собираем минимум данных: Email (для аккаунта), данные HealthKit (минуты осознанности, с вашего разрешения, не продаются третьим лицам) и анонимную историю покупок через Apple."]
        },
        {
          title: "3. Детская приватность (COPPA и GDPR)",
          paragraphs: ["Возрастной рейтинг: 12+. Мы не собираем данные детей до 13 лет (США) или 16 лет (ЕС) без согласия родителей. Контакт: privacy@miravelys.com."]
        },
        {
          title: "4. Ваши права (GDPR, CCPA)",
          paragraphs: ["Вы имеете право на доступ, удаление и исправление своих данных. Вы можете удалить аккаунт прямо в приложении."]
        }
      ]
    },
    userAgreement: {
      title: "Пользовательское соглашение",
      updated: "Июнь 2026",
      intro: "Используя Miravelys, вы соглашаетесь с этими Условиями.",
      sections: [
        {
          title: "1. Возрастные ограничения",
          paragraphs: ["Приложение имеет рейтинг 12+. Несовершеннолетние должны иметь разрешение родителей."]
        },
        {
          title: "2. Не является медицинской помощью",
          paragraphs: ["Miravelys — это инструмент для самоисследования, а не замена профессиональной терапии или медицинской помощи."]
        },
        {
          title: "3. Контент и подписки",
          paragraphs: ["Ваши записи принадлежат только вам. Премиум-функции доступны по автовозобновляемой подписке через ваш Apple ID."]
        },
        {
          title: "4. Ограничение ответственности",
          paragraphs: ["Приложение предоставляется «КАК ЕСТЬ». Мы не несем ответственности за косвенные убытки."]
        }
      ]
    }
  },
  ro: {
    privacyPolicy: {
      title: "Politica de Confidențialitate",
      updated: "Iunie 2026",
      intro: "Ne angajăm să vă protejăm confidențialitatea. Această politică explică modul în care colectăm și folosim datele.",
      sections: [
        {
          title: "1. Date stocate local",
          paragraphs: ["Jurnalele, reflecțiile și procesarea audio au loc strict pe dispozitivul dvs. sau se sincronizează prin iCloud-ul personal. Nu avem acces la ele."]
        },
        {
          title: "2. Informații personale colectate",
          paragraphs: ["Colectăm date minime: Email (pentru cont), date HealthKit (minute de mindfulness, doar cu permisiunea dvs.) și istoric de achiziții anonim."]
        },
        {
          title: "3. Confidențialitatea copiilor (COPPA, GDPR)",
          paragraphs: ["Vârsta: 12+. Nu colectăm date de la copii sub 13 (SUA) sau 16 (UE) fără consimțământul părinților. Contact: privacy@miravelys.com."]
        },
        {
          title: "4. Drepturile dvs.",
          paragraphs: ["Aveți dreptul de a accesa, șterge sau corecta datele personale, conform CCPA, GDPR etc. Vă puteți șterge contul din aplicație."]
        }
      ]
    },
    userAgreement: {
      title: "Termeni de Utilizare",
      updated: "Iunie 2026",
      intro: "Prin utilizarea Miravelys, sunteți de acord cu acești Termeni.",
      sections: [
        {
          title: "1. Eligibilitate și Vârstă",
          paragraphs: ["Aplicația este 12+. Minorii trebuie să aibă permisiunea unui părinte sau tutore."]
        },
        {
          title: "2. Fără sfaturi medicale",
          paragraphs: ["Miravelys este un instrument de mindfulness, nu un substitut pentru tratament medical sau terapie."]
        },
        {
          title: "3. Conținut și Abonamente",
          paragraphs: ["Dețineți proprietatea totală asupra însemnărilor dvs. Abonamentele Premium se gestionează prin Apple ID."]
        },
        {
          title: "4. Limitarea Răspunderii",
          paragraphs: ["Aplicația este furnizată „AȘA CUM ESTE”. Nu suntem răspunzători pentru daune indirecte."]
        }
      ]
    }
  },
  fr: {
    privacyPolicy: {
      title: "Politique de Confidentialité",
      updated: "Juin 2026",
      intro: "Nous nous engageons à protéger votre vie privée. Cette politique explique comment nous traitons vos données.",
      sections: [
        {
          title: "1. Données stockées localement",
          paragraphs: ["Vos journaux, réflexions et le traitement audio sont strictement sur votre appareil ou via votre iCloud personnel. Nous n'y avons pas accès."]
        },
        {
          title: "2. Informations personnelles collectées",
          paragraphs: ["Nous collectons : E-mail (pour le compte), données HealthKit (avec votre permission, non vendues) et l'historique d'achats anonyme via Apple."]
        },
        {
          title: "3. Vie privée des enfants",
          paragraphs: ["Âge : 12+. Nous ne collectons pas les données des moins de 13 ans (USA) ou 16 ans (UE) sans consentement parental. Contact : privacy@miravelys.com."]
        },
        {
          title: "4. Vos droits (RGPD, CCPA)",
          paragraphs: ["Vous avez le droit d'accéder, de supprimer ou de corriger vos données personnelles."]
        }
      ]
    },
    userAgreement: {
      title: "Conditions d'Utilisation",
      updated: "Juin 2026",
      intro: "En utilisant Miravelys, vous acceptez ces Conditions.",
      sections: [
        {
          title: "1. Âge requis",
          paragraphs: ["L'application est classée 12+. Les mineurs doivent avoir l'autorisation d'un parent."]
        },
        {
          title: "2. Aucun avis médical",
          paragraphs: ["Miravelys est un outil de pleine conscience, non un substitut à un traitement médical ou thérapeutique."]
        },
        {
          title: "3. Contenu et abonnements",
          paragraphs: ["Vous possédez vos entrées. Les abonnements sont gérés via votre identifiant Apple."]
        },
        {
          title: "4. Limite de responsabilité",
          paragraphs: ["L'application est fournie \"TELLE QUELLE\". Nous déclinons toute responsabilité pour les dommages indirects."]
        }
      ]
    }
  },
  hi: {
    privacyPolicy: {
      title: "गोपनीयता नीति",
      updated: "जून 2026",
      intro: "हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं। यह नीति बताती है कि हम डेटा का उपयोग कैसे करते हैं।",
      sections: [
        {
          title: "1. स्थानीय रूप से संग्रहीत डेटा",
          paragraphs: ["जर्नल, विचार और ऑडियो प्रोसेसिंग आपके डिवाइस पर ही होती है या आपके iCloud के माध्यम से सिंक होती है। हम इसे पढ़ नहीं सकते।"]
        },
        {
          title: "2. व्यक्तिगत जानकारी",
          paragraphs: ["हम केवल ईमेल (अकाउंट के लिए), HealthKit डेटा (आपकी अनुमति से), और एप्पल के माध्यम से अनाम खरीदारी इतिहास एकत्र करते हैं।"]
        },
        {
          title: "3. बच्चों की गोपनीयता",
          paragraphs: ["आयु 12+। हम माता-पिता की सहमति के बिना 13 (USA) या 16 (EU) वर्ष से कम उम्र के बच्चों का डेटा एकत्र नहीं करते हैं।"]
        },
        {
          title: "4. आपके अधिकार",
          paragraphs: ["आपको अपने व्यक्तिगत डेटा तक पहुंचने, हटाने या सुधारने का अधिकार है।"]
        }
      ]
    },
    userAgreement: {
      title: "उपयोग की शर्तें",
      updated: "जून 2026",
      intro: "Miravelys का उपयोग करके, आप इन शर्तों से सहमत हैं।",
      sections: [
        {
          title: "1. आयु की आवश्यकताएं",
          paragraphs: ["ऐप 12+ रेटेड है। नाबालिगों को माता-पिता की अनुमति होनी चाहिए।"]
        },
        {
          title: "2. चिकित्सा सलाह नहीं",
          paragraphs: ["यह ऐप चिकित्सा या थेरेपी का विकल्प नहीं है।"]
        },
        {
          title: "3. उपयोगकर्ता सामग्री और सदस्यता",
          paragraphs: ["आप अपनी प्रविष्टियों के स्वामी हैं। प्रीमियम सदस्यता आपके Apple ID से प्रबंधित होती है।"]
        },
        {
          title: "4. अस्वीकरण",
          paragraphs: ["ऐप \"जैसा है\" प्रदान किया जाता है। हम अप्रत्यक्ष नुकसान के लिए उत्तरदायी नहीं हैं।"]
        }
      ]
    }
  },
  zh: {
    privacyPolicy: {
      title: "隐私政策",
      updated: "2026年6月",
      intro: "我们致力于保护您的隐私。本政策解释了我们如何收集和使用数据。",
      sections: [
        {
          title: "1. 本地存储的数据",
          paragraphs: ["日记、反思和音频处理严格在您的设备上进行或通过您的个人 iCloud 同步。我们无法访问或阅读。"]
        },
        {
          title: "2. 我们收集的个人信息",
          paragraphs: ["我们仅收集最低限度的数据：电子邮件、HealthKit 数据（经您同意）以及匿名的购买记录。"]
        },
        {
          title: "3. 儿童隐私 (COPPA)",
          paragraphs: ["年龄分级：12+。未经父母同意，我们不会收集 13 岁（美国）或 16 岁（欧盟）以下儿童的数据。"]
        },
        {
          title: "4. 您的权利 (CCPA, GDPR, PIPL)",
          paragraphs: ["您有权访问、删除或更正您的个人数据。您可以直接在应用内删除帐户。"]
        }
      ]
    },
    userAgreement: {
      title: "使用条款",
      updated: "2026年6月",
      intro: "使用 Miravelys，即表示您同意这些条款。",
      sections: [
        {
          title: "1. 年龄要求",
          paragraphs: ["本应用的分级为 12+。未成年人必须获得父母的许可。"]
        },
        {
          title: "2. 非医疗建议",
          paragraphs: ["Miravelys 是一个正念工具，不能替代专业的医疗或心理治疗。"]
        },
        {
          title: "3. 用户内容与订阅",
          paragraphs: ["您保留日记的所有权。高级功能订阅通过您的 Apple ID 进行管理。"]
        },
        {
          title: "4. 免责声明",
          paragraphs: ["应用“按原样”提供。我们对间接损失不承担任何责任。"]
        }
      ]
    }
  },
  de: {
    privacyPolicy: {
      title: "Datenschutzerklärung",
      updated: "Juni 2026",
      intro: "Wir verpflichten uns, Ihre Privatsphäre zu schützen. Diese Richtlinie erklärt unsere Datenverarbeitung.",
      sections: [
        {
          title: "1. Lokal gespeicherte Daten",
          paragraphs: ["Ihre Tagebücher und Audio-Verarbeitungen finden strikt auf Ihrem Gerät statt oder werden über iCloud synchronisiert. Wir haben keinen Zugriff darauf."]
        },
        {
          title: "2. Erhobene personenbezogene Daten",
          paragraphs: ["Wir erfassen minimale Daten: E-Mail, HealthKit-Daten (nur mit Ihrer Erlaubnis) und anonyme Kaufhistorie über Apple."]
        },
        {
          title: "3. Privatsphäre von Kindern",
          paragraphs: ["Alter: 12+. Wir sammeln keine Daten von Kindern unter 13 (USA) oder 16 (EU) ohne Zustimmung der Eltern."]
        },
        {
          title: "4. Ihre Rechte (DSGVO)",
          paragraphs: ["Sie haben das Recht auf Auskunft, Löschung und Berichtigung Ihrer Daten."]
        }
      ]
    },
    userAgreement: {
      title: "Nutzungsbedingungen",
      updated: "Juni 2026",
      intro: "Durch die Nutzung von Miravelys stimmen Sie diesen Bedingungen zu.",
      sections: [
        {
          title: "1. Altersanforderungen",
          paragraphs: ["Die App ist ab 12 Jahren freigegeben. Minderjährige benötigen die Erlaubnis eines Elternteils."]
        },
        {
          title: "2. Keine medizinische Beratung",
          paragraphs: ["Miravelys ist kein Ersatz für professionelle medizinische Behandlung oder Therapie."]
        },
        {
          title: "3. Inhalte und Abonnements",
          paragraphs: ["Sie behalten das volle Eigentum an Ihren Einträgen. Abonnements werden über Ihre Apple-ID verwaltet."]
        },
        {
          title: "4. Haftungsbeschränkung",
          paragraphs: ["Die App wird \"WIE BESEHEN\" bereitgestellt. Wir haften nicht für indirekte Schäden."]
        }
      ]
    }
  },
  ja: {
    privacyPolicy: {
      title: "プライバシーポリシー",
      updated: "2026年6月",
      intro: "私たちはあなたのプライバシーを保護することをお約束します。本ポリシーではデータの取り扱いについて説明します。",
      sections: [
        {
          title: "1. ローカルに保存されるデータ",
          paragraphs: ["ジャーナルや音声処理は、お使いのデバイス上で厳密に行われるか、個人の iCloud 経由で同期されます。私たちがアクセスすることはできません。"]
        },
        {
          title: "2. 収集する個人情報",
          paragraphs: ["収集するデータは最小限です: メールアドレス、HealthKit データ (許可がある場合のみ)、Apple 経由の匿名の購入履歴。"]
        },
        {
          title: "3. 子供のプライバシー (COPPA)",
          paragraphs: ["対象年齢: 12歳以上。保護者の同意なしに13歳（米国）または16歳（EU）未満の子供からデータを収集することはありません。"]
        },
        {
          title: "4. あなたの権利 (APPI, CCPA)",
          paragraphs: ["あなたには個人情報のアクセス、削除、訂正の権利があります。アプリ内で直接アカウントを削除できます。"]
        }
      ]
    },
    userAgreement: {
      title: "利用規約",
      updated: "2026年6月",
      intro: "Miravelys を使用することにより、これらの条件に同意したことになります。",
      sections: [
        {
          title: "1. 年齢要件",
          paragraphs: ["アプリは 12 歳以上対象です。未成年者は保護者の許可が必要です。"]
        },
        {
          title: "2. 医学的アドバイスではありません",
          paragraphs: ["Miravelys は医療やセラピーの代わりになるものではありません。"]
        },
        {
          title: "3. ユーザーコンテンツとサブスクリプション",
          paragraphs: ["入力内容の所有権はユーザーに帰属します。プレミアムサブスクリプションは Apple ID を通じて管理されます。"]
        },
        {
          title: "4. 免責事項",
          paragraphs: ["アプリは「現状のまま」提供されます。間接的な損害については責任を負いません。"]
        }
      ]
    }
  },
  es: {
    privacyPolicy: {
      title: "Política de Privacidad",
      updated: "Junio 2026",
      intro: "Nos comprometemos a proteger su privacidad. Esta política explica cómo recopilamos y usamos sus datos.",
      sections: [
        {
          title: "1. Datos almacenados localmente",
          paragraphs: ["Sus diarios, reflexiones y procesamiento de audio operan estrictamente en su dispositivo o se sincronizan a través de su iCloud personal. No tenemos acceso a ellos."]
        },
        {
          title: "2. Información personal recopilada",
          paragraphs: ["Recopilamos datos mínimos: Correo electrónico, datos de HealthKit (solo con su permiso) e historial de compras anónimo a través de Apple."]
        },
        {
          title: "3. Privacidad infantil",
          paragraphs: ["Edad: 12+. No recopilamos datos de menores de 13 (EE.UU.) o 16 (UE) sin consentimiento de los padres. Contacto: privacy@miravelys.com."]
        },
        {
          title: "4. Sus derechos (GDPR, CCPA)",
          paragraphs: ["Tiene derecho a acceder, eliminar o corregir sus datos personales."]
        }
      ]
    },
    userAgreement: {
      title: "Términos de Uso",
      updated: "Junio 2026",
      intro: "Al usar Miravelys, usted acepta estos Términos.",
      sections: [
        {
          title: "1. Requisitos de edad",
          paragraphs: ["La aplicación es para mayores de 12 años. Los menores deben tener el permiso de un padre o tutor."]
        },
        {
          title: "2. No es un consejo médico",
          paragraphs: ["Miravelys es una herramienta de atención plena, no un sustituto de tratamiento médico o terapia."]
        },
        {
          title: "3. Contenido y Suscripciones",
          paragraphs: ["Usted conserva la propiedad total de sus entradas. Las suscripciones se administran a través de su ID de Apple."]
        },
        {
          title: "4. Descargo de responsabilidad",
          paragraphs: ["La aplicación se proporciona \"TAL CUAL\". No nos hacemos responsables de daños indirectos."]
        }
      ]
    }
  },
  pt: {
    privacyPolicy: {
      title: "Política de Privacidade",
      updated: "Junho 2026",
      intro: "Estamos comprometidos em proteger sua privacidade. Esta política explica como coletamos e usamos os dados.",
      sections: [
        {
          title: "1. Dados Armazenados Localmente",
          paragraphs: ["Seus diários e processamento de áudio ocorrem estritamente no seu dispositivo ou via seu iCloud pessoal. Não temos acesso a eles."]
        },
        {
          title: "2. Informações Pessoais Coletadas",
          paragraphs: ["Coletamos dados mínimos: E-mail, dados do HealthKit (apenas com sua permissão) e histórico de compras anônimo via Apple."]
        },
        {
          title: "3. Privacidade Infantil (COPPA, LGPD)",
          paragraphs: ["Idade: 12+. Não coletamos dados de menores de 13 (EUA) ou 16 (UE) sem consentimento dos pais. Contato: privacy@miravelys.com."]
        },
        {
          title: "4. Seus Direitos (LGPD, CCPA, GDPR)",
          paragraphs: ["Você tem o direito de acessar, excluir ou corrigir seus dados pessoais."]
        }
      ]
    },
    userAgreement: {
      title: "Termos de Uso",
      updated: "Junho 2026",
      intro: "Ao usar o Miravelys, você concorda com estes Termos.",
      sections: [
        {
          title: "1. Requisitos de Idade",
          paragraphs: ["O aplicativo é para maiores de 12 anos. Menores devem ter a permissão dos pais."]
        },
        {
          title: "2. Não é Conselho Médico",
          paragraphs: ["O Miravelys não substitui tratamento médico ou terapia."]
        },
        {
          title: "3. Conteúdo e Assinaturas",
          paragraphs: ["Você é o dono de suas entradas. As assinaturas Premium são gerenciadas através do seu ID da Apple."]
        },
        {
          title: "4. Isenção de Responsabilidade",
          paragraphs: ["O aplicativo é fornecido \"COMO ESTÁ\". Não nos responsabilizamos por danos indiretos."]
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
console.log('Successfully updated src/i18n/legalCopy.js');
