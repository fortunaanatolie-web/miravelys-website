function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function sortByField(items, field, limit) {
  const sorted = [...items].sort((a, b) => {
    const av = a[field] ?? a.created_date ?? '';
    const bv = b[field] ?? b.created_date ?? '';
    return String(bv).localeCompare(String(av));
  });
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}

function mockAnalyzeEntry(rawText) {
  const sentences = rawText
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const segments = (sentences.length ? sentences : [rawText.trim()]).map((text, index) => {
    const lower = text.toLowerCase();
    let type = 'story';
    if (/\b(feel|felt|afraid|scared|angry|sad)\b/.test(lower)) type = 'feeling';
    else if (/\b(chest|body|tight|heart|stomach)\b/.test(lower)) type = 'body_sensation';
    else if (/\b(happened|said|did|was|were|not answered|message)\b/.test(lower)) type = 'fact';
    else if (/\b(always|never|if i|they|i am not)\b/.test(lower)) type = 'belief';
    return { text, type, confidence: 0.55 + (index % 3) * 0.1 };
  });

  return {
    segments,
    smaller_truth: 'A smaller truth may be that you feel pressure, and you do not yet know the full story.',
    inquiry_question: 'If this story were not true, what would remain?',
  };
}

function entityApi(storeKey) {
  return {
    async list(sortField, limit) {
      const field = typeof sortField === 'string' ? sortField.replace(/^-/, '') : 'created_date';
      return sortByField(readStore(storeKey), field, limit);
    },
    async create(data) {
      const items = readStore(storeKey);
      const item = {
        id: crypto.randomUUID(),
        created_date: new Date().toISOString(),
        ...data,
      };
      items.unshift(item);
      writeStore(storeKey, items);
      return item;
    },
  };
}

/** Local-first mock client — no sign-in required. */
export const base44 = {
  auth: {
    getToken() {
      return null;
    },
    setToken() {},
    async loginViaEmailPassword() {
      return { access_token: 'local' };
    },
    async register() {},
    async verifyOtp() {
      return { access_token: 'local' };
    },
    async resendOtp() {},
    async resetPasswordRequest() {},
    async resetPassword() {
      return { ok: true };
    },
    loginWithProvider(_provider, redirect) {
      window.location.href = redirect || '/';
    },
    logout() {},
    getCurrentUser() {
      return { id: 'local', email: 'local@device' };
    },
  },
  entities: {
    TruthEntry: entityApi('base44_truth_entries'),
    Pattern: entityApi('base44_patterns'),
    CalmSession: entityApi('base44_calm_sessions'),
    SleepEntry: entityApi('base44_sleep_entries'),
  },
  integrations: {
    Core: {
      async InvokeLLM({ prompt }) {
        const match = prompt.match(/Entry: "(.*)"/s);
        const rawText = match?.[1] || prompt;
        await new Promise((r) => setTimeout(r, 900));
        return mockAnalyzeEntry(rawText);
      },
    },
  },
};
