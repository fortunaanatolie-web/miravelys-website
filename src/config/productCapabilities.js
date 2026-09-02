/**
 * Canonical product capability truth for MiraScribe, MiraVoxis, and the Mira family.
 *
 * Counts and flags are derived from the shipping Mac applications (inspected August 2026).
 * Marketing pages must import this module — do not hardcode language counts in JSX.
 *
 * Sources:
 * - MiraScribe/Mirascribe/TranscriptionLanguage.swift (modelCodes, experimentalCodes)
 * - MiraScribe/AppStoreSubmission/PRODUCT_TRUTH_AUDIT.md (21 Aug 2026)
 * - MiraVoxis/MiraVoxis/TTS/TTSEngineCapabilities.swift (VoxCPM2 productLanguageCodes)
 * - MiraVoxis/MiraVoxis/TranscriptionEngine/LanguageCapability.swift
 * - MiraVoxis/MiraVoxis/MiraProsodyPlanner.swift (semantic analysis is review-only)
 *
 * Marketing rules:
 * - MiraScribe transcription count = non-experimental Whisper languages the app exposes (71), not 100.
 * - MiraVoxis speech generation = VoxCPM2 productLanguageCodes only (English, Russian).
 * - End-to-end = intersection of those two sets (2). Never the larger individual count.
 * - Do not advertise speaker diarization, translation, code-switching, or "fully offline".
 */

export const MIRASCRIBE_APP_STORE_URL = 'https://apps.apple.com/app/id6787681485';

export const MIRASCRIBE_PRODUCTION_LANGUAGES = [
  { code: 'af', name: 'Afrikaans' },
  { code: 'sq', name: 'Albanian' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hy', name: 'Armenian' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'be', name: 'Belarusian' },
  { code: 'bn', name: 'Bengali' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'my', name: 'Burmese' },
  { code: 'yue', name: 'Cantonese' },
  { code: 'ca', name: 'Catalan' },
  { code: 'zh', name: 'Chinese' },
  { code: 'hr', name: 'Croatian' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'en', name: 'English' },
  { code: 'et', name: 'Estonian' },
  { code: 'tl', name: 'Filipino (Tagalog)' },
  { code: 'fi', name: 'Finnish' },
  { code: 'fr', name: 'French' },
  { code: 'gl', name: 'Galician' },
  { code: 'ka', name: 'Georgian' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'he', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'is', name: 'Icelandic' },
  { code: 'id', name: 'Indonesian' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'kn', name: 'Kannada' },
  { code: 'kk', name: 'Kazakh' },
  { code: 'km', name: 'Khmer' },
  { code: 'ko', name: 'Korean' },
  { code: 'lv', name: 'Latvian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lb', name: 'Luxembourgish' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'ms', name: 'Malay' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'mr', name: 'Marathi' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'ne', name: 'Nepali' },
  { code: 'no', name: 'Norwegian' },
  { code: 'fa', name: 'Persian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'so', name: 'Somali' },
  { code: 'es', name: 'Spanish' },
  { code: 'sw', name: 'Swahili' },
  { code: 'sv', name: 'Swedish' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'th', name: 'Thai' },
  { code: 'tr', name: 'Turkish' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'ur', name: 'Urdu' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'vi', name: 'Vietnamese' },
];

export const MIRASCRIBE_EXPERIMENTAL_LANGUAGES = [
  { code: 'am', name: 'Amharic' },
  { code: 'as', name: 'Assamese' },
  { code: 'ba', name: 'Bashkir' },
  { code: 'eu', name: 'Basque' },
  { code: 'br', name: 'Breton' },
  { code: 'fo', name: 'Faroese' },
  { code: 'ha', name: 'Hausa' },
  { code: 'haw', name: 'Hawaiian' },
  { code: 'jw', name: 'Javanese' },
  { code: 'lo', name: 'Lao' },
  { code: 'la', name: 'Latin' },
  { code: 'ln', name: 'Lingala' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'mt', name: 'Maltese' },
  { code: 'mi', name: 'Māori' },
  { code: 'nn', name: 'Norwegian Nynorsk' },
  { code: 'oc', name: 'Occitan' },
  { code: 'ps', name: 'Pashto' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'sn', name: 'Shona' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'su', name: 'Sundanese' },
  { code: 'tg', name: 'Tajik' },
  { code: 'tt', name: 'Tatar' },
  { code: 'bo', name: 'Tibetan' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'cy', name: 'Welsh' },
  { code: 'yi', name: 'Yiddish' },
  { code: 'yo', name: 'Yoruba' },
];

export const MIRAVOXIS_SPEECH_GENERATION_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Russian' },
];

export const MIRAVOXIS_ASR_PRODUCTION_LANGUAGES = [
  { code: 'af', name: 'Afrikaans' },
  { code: 'sq', name: 'Albanian' },
  { code: 'am', name: 'Amharic' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hy', name: 'Armenian' },
  { code: 'as', name: 'Assamese' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'eu', name: 'Basque' },
  { code: 'be', name: 'Belarusian' },
  { code: 'bn', name: 'Bengali' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'br', name: 'Breton' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'my', name: 'Burmese' },
  { code: 'yue', name: 'Cantonese' },
  { code: 'ca', name: 'Catalan' },
  { code: 'zh', name: 'Chinese' },
  { code: 'hr', name: 'Croatian' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'en', name: 'English' },
  { code: 'et', name: 'Estonian' },
  { code: 'fo', name: 'Faroese' },
  { code: 'tl', name: 'Filipino (Tagalog)' },
  { code: 'fi', name: 'Finnish' },
  { code: 'fr', name: 'French' },
  { code: 'gl', name: 'Galician' },
  { code: 'ka', name: 'Georgian' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'he', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'is', name: 'Icelandic' },
  { code: 'id', name: 'Indonesian' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'jw', name: 'Javanese' },
  { code: 'kn', name: 'Kannada' },
  { code: 'kk', name: 'Kazakh' },
  { code: 'km', name: 'Khmer' },
  { code: 'ko', name: 'Korean' },
  { code: 'lo', name: 'Lao' },
  { code: 'la', name: 'Latin' },
  { code: 'lv', name: 'Latvian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lb', name: 'Luxembourgish' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'ms', name: 'Malay' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'mt', name: 'Maltese' },
  { code: 'mr', name: 'Marathi' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'mi', name: 'Māori' },
  { code: 'ne', name: 'Nepali' },
  { code: 'no', name: 'Norwegian' },
  { code: 'nn', name: 'Norwegian Nynorsk' },
  { code: 'oc', name: 'Occitan' },
  { code: 'fa', name: 'Persian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'es', name: 'Spanish' },
  { code: 'su', name: 'Sundanese' },
  { code: 'sw', name: 'Swahili' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tg', name: 'Tajik' },
  { code: 'ta', name: 'Tamil' },
  { code: 'tt', name: 'Tatar' },
  { code: 'te', name: 'Telugu' },
  { code: 'th', name: 'Thai' },
  { code: 'tr', name: 'Turkish' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'ur', name: 'Urdu' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'cy', name: 'Welsh' },
];

export const MIRAVOXIS_ASR_EXPERIMENTAL_LANGUAGES = [
  { code: 'ba', name: 'Bashkir' },
  { code: 'ha', name: 'Hausa' },
  { code: 'haw', name: 'Hawaiian' },
  { code: 'ln', name: 'Lingala' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'ps', name: 'Pashto' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'sn', name: 'Shona' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'so', name: 'Somali' },
  { code: 'bo', name: 'Tibetan' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'yi', name: 'Yiddish' },
  { code: 'yo', name: 'Yoruba' },
];

const scribeCodes = new Set(MIRASCRIBE_PRODUCTION_LANGUAGES.map(language => language.code));
const generationCodes = new Set(MIRAVOXIS_SPEECH_GENERATION_LANGUAGES.map(language => language.code));

export const END_TO_END_LANGUAGES = MIRAVOXIS_SPEECH_GENERATION_LANGUAGES.filter(
  language => scribeCodes.has(language.code) && generationCodes.has(language.code),
);

export const productCapabilities = {
  mirascribe: {
    id: 'mirascribe',
    name: 'MiraScribe',
    role: 'Speech → understanding → structured text',
    transcriptionLanguageCount: MIRASCRIBE_PRODUCTION_LANGUAGES.length,
    transcriptionLanguages: MIRASCRIBE_PRODUCTION_LANGUAGES,
    experimentalLanguageCount: MIRASCRIBE_EXPERIMENTAL_LANGUAGES.length,
    experimentalLanguages: MIRASCRIBE_EXPERIMENTAL_LANGUAGES,
    selectableLanguageCount: MIRASCRIBE_PRODUCTION_LANGUAGES.length + MIRASCRIBE_EXPERIMENTAL_LANGUAGES.length,
    automaticLanguageDetection: true,
    manualSourceLanguage: true,
    multilingualRecordings: false,
    codeSwitching: false,
    translationToEnglish: false,
    speakerDiarization: false,
    timestamps: true,
    wordLevelTimestamps: true,
    speakerLabels: false,
    transcriptSearch: true,
    librarySearch: true,
    fillerCleanupEnglish: true,
    wordLevelAudioEdit: true,
    liveDictation: true,
    localProcessing: true,
    bundledModel: true,
    networkRequiredForInference: false,
    analyticsSdk: false,
    cloudTranscription: false,
    exportFormats: ['txt', 'md', 'srt', 'vtt', 'json'],
    platform: {
      os: 'macOS 14.0 Sonoma or later',
      hardware: 'Apple Silicon',
      modelStorage: 'Bundled speech model, approximately 600 MB',
    },
    appStoreUrl: MIRASCRIBE_APP_STORE_URL,
    downloadAvailable: true,
    engine: {
      family: 'Whisper large-v3 / large-v3-turbo via WhisperKit Core ML',
      status: 'production',
      bundled: true,
    },
  },

  miravoxis: {
    id: 'miravoxis',
    name: 'MiraVoxis',
    role: 'Text → meaning → expressive voice',
    speechGenerationLanguageCount: MIRAVOXIS_SPEECH_GENERATION_LANGUAGES.length,
    speechGenerationLanguages: MIRAVOXIS_SPEECH_GENERATION_LANGUAGES,
    asrLanguageCount: MIRAVOXIS_ASR_PRODUCTION_LANGUAGES.length,
    asrLanguages: MIRAVOXIS_ASR_PRODUCTION_LANGUAGES,
    asrExperimentalLanguageCount: MIRAVOXIS_ASR_EXPERIMENTAL_LANGUAGES.length,
    asrExperimentalLanguages: MIRAVOXIS_ASR_EXPERIMENTAL_LANGUAGES,
    automaticLanguageDetection: true,
    timestamps: true,
    liveDictation: true,
    optionalSpeakerLabels: true,
    speakerIdentity: false,
    voiceCloning: true,
    voiceCloningLocal: true,
    semanticAnalysis: true,
    semanticDrivesHiddenActing: false,
    pronunciationControl: true,
    pronunciationPreflight: true,
    dialogue: true,
    singleNarrator: true,
    selectiveRegeneration: true,
    voiceSamplePreview: true,
    performancePreview: true,
    userExpressionPaceDelivery: true,
    nativeEngineEmotion: false,
    localInferenceAfterInstall: true,
    modelsBundled: false,
    huggingFaceModelDownload: true,
    cloudSpeechApi: false,
    transcriptExportFormats: ['txt', 'md', 'srt', 'vtt', 'json'],
    voiceExportFormats: ['wav', 'aac/m4a', 'srt', 'vtt'],
    qualityTiers: ['Preview', 'Natural', 'Studio'],
    primaryEngine: {
      family: 'VoxCPM2',
      status: 'production',
      productLanguageCodes: ['en', 'ru'],
    },
    experimentalEngine: {
      family: 'Chatterbox',
      status: 'experimental',
      autoSelected: false,
    },
    unavailableEngine: {
      family: 'CosyVoice3',
      status: 'unavailable',
    },
    platform: {
      os: 'macOS 15 Sequoia or later',
      hardware: 'Apple Silicon',
      memoryNote: 'Preview and Natural are recommended on smaller-memory Macs. Studio and Dialogue can require more unified memory.',
    },
    appStoreUrl: null,
    downloadAvailable: false,
  },

  ecosystem: {
    endToEndLanguageCount: END_TO_END_LANGUAGES.length,
    endToEndLanguages: END_TO_END_LANGUAGES,
    loop: 'VOICE → TEXT → UNDERSTANDING → VOICE',
  },
};

const scribeCount = MIRASCRIBE_PRODUCTION_LANGUAGES.length;
const generationNames = MIRAVOXIS_SPEECH_GENERATION_LANGUAGES.map(language => language.name);
const generationPhrase = generationNames.join(' and ');

export const productPageMeta = {
  mirascribe: {
    title: 'MiraScribe — Turn hours of speech into words you can use',
    description: `Private local transcription for Mac. MiraScribe transcribes speech in ${scribeCount} languages with automatic language detection, timestamps, and searchable transcripts. Your audio stays on this Mac.`,
    ogDescription: `Transcribe speech in ${scribeCount} languages, locally on your Mac. Search, edit, and export what was said.`,
  },
  miravoxis: {
    title: 'MiraVoxis — Speech that starts with the sentence',
    description: `Local voice studio for Mac. Generate speech in ${generationPhrase} with pronunciation control, dialogue, and local cloning. After models are installed, inference runs on this Mac.`,
    ogDescription: `Generate speech in ${generationPhrase} on this Mac. Analyze the sentence, set the performance, keep the audio local.`,
  },
};

export function softwareApplicationJsonLd(productId) {
  const product = productCapabilities[productId];
  const meta = productPageMeta[productId];
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: product.platform.os,
    description: meta.description,
    url: `https://miravelys.com/${productId}`,
    creator: {
      '@type': 'Organization',
      name: 'Miravelys',
      url: 'https://miravelys.com',
    },
  };
  if (product.appStoreUrl) {
    data.downloadUrl = product.appStoreUrl;
    data.offers = {
      '@type': 'Offer',
      url: product.appStoreUrl,
      availability: 'https://schema.org/InStock',
    };
  }
  return data;
}

export function assertProductCapabilityInvariants() {
  const scribe = productCapabilities.mirascribe;
  const voxis = productCapabilities.miravoxis;
  const eco = productCapabilities.ecosystem;
  const problems = [];

  if (scribe.transcriptionLanguageCount !== 71) {
    problems.push(`MiraScribe production transcription count is ${scribe.transcriptionLanguageCount}, expected 71`);
  }
  if (scribe.experimentalLanguageCount !== 29) {
    problems.push(`MiraScribe experimental count is ${scribe.experimentalLanguageCount}, expected 29`);
  }
  if (voxis.speechGenerationLanguageCount !== 2) {
    problems.push(`MiraVoxis generation count is ${voxis.speechGenerationLanguageCount}, expected 2`);
  }
  if (eco.endToEndLanguageCount !== 2) {
    problems.push(`End-to-end count is ${eco.endToEndLanguageCount}, expected 2`);
  }

  const scribeSet = new Set(scribe.transcriptionLanguages.map(language => language.code));
  const voxSet = new Set(voxis.speechGenerationLanguages.map(language => language.code));
  for (const language of eco.endToEndLanguages) {
    if (!scribeSet.has(language.code)) problems.push(`End-to-end ${language.code} missing from MiraScribe`);
    if (!voxSet.has(language.code)) problems.push(`End-to-end ${language.code} missing from MiraVoxis generation`);
  }
  if (eco.endToEndLanguageCount > Math.min(scribe.transcriptionLanguageCount, voxis.speechGenerationLanguageCount)) {
    problems.push('End-to-end count cannot exceed the smaller product count');
  }
  if (problems.length) {
    throw new Error(`productCapabilities invariants failed:\n${problems.join('\n')}`);
  }
  return true;
}

assertProductCapabilityInvariants();
