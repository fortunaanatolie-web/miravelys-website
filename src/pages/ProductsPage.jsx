import { APP_IDENTITY_ASSETS } from '../config/appIdentityAssets';
/**
 * ProductsPage — /products
 * The Miravelys product family directory.
 *
 * Shows only released/real products.
 * Does not pretend products are modules of one app.
 * Does not create hype for unreleased products.
 * Family principle: different tools, one standard of thoughtful software.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraScribeShell from '../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../lib/documentMeta';
import {
  MIRASCRIBE_STORE_TARGET,
  resolveMiraScribeStoreTarget,
  resolveMiraScribeStoreUrl,
} from '../lib/mirascribeStoreTarget';

const PRODUCTS = [
  {
    name: 'Miravelys',
    tagline: 'Reflection · Presence · Clarity',
    body: 'A quiet place to step outside automatic loops, separate facts from the story forming around them, and return to what is actually happening.',
    cta: 'Explore Miravelys',
    href: '/',
    external: false,
  },
  {
    name: 'MiraScribe',
    tagline: 'Transcription · Speech · Mac + iPhone',
    body: 'Turn recordings into clear, structured text — privately on supported Mac and iPhone devices. Core speech transcription runs on your device, not on a remote server.',
    cta: 'Explore MiraScribe',
    href: '/mirascribe',
    external: false,
    appStore: true,
  },
  {
    name: 'MiraVoxis',
    tagline: 'Voice Studio · Performance · Mac',
    body: 'Direct written words into speech with control over performance, pronunciation, narrator identity, and dialogue. After its voice engine is installed, generation runs locally on your Mac.',
    cta: 'Explore MiraVoxis',
    href: '/miravoxis',
    external: false,
  },
];

export default function ProductsPage() {
  const storeTarget = resolveMiraScribeStoreTarget();
  const storeUrl = resolveMiraScribeStoreUrl(storeTarget);

  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.miravelys.faviconIco,
      title: 'Products — Miravelys',
      description: 'Thoughtful software built around attention, clarity, privacy, and human agency. The Miravelys family of products.',
      ogTitle: 'The Miravelys Family',
      ogDescription: 'Thoughtful software built around attention, clarity, privacy, and human agency.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-products-main">
      <main id="ms-products-main" className="ms-page ms-page--wide" aria-label="Miravelys product family">

        {/* ── Header ── */}
        <header style={{ marginBottom: 'clamp(40px, 7vw, 72px)', maxWidth: '56ch' }}>
          <span className="ms-eyebrow">The Miravelys Family</span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--ms-text)',
              lineHeight: 1.1,
              margin: '0 0 16px',
            }}
          >
            Different tools.<br />One standard.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.65,
              color: 'var(--ms-text-secondary)',
              margin: 0,
            }}
          >
            Thoughtful, private, human-centered software. Each product stands on its own.
            They share a commitment to clarity, restraint, and your control over your data.
          </p>
        </header>

        {/* ── Product cards ── */}
        <section aria-labelledby="products-heading">
          <h2 className="sr-only" id="products-heading">Products</h2>

          <div className="ms-products-grid" role="list">
            {PRODUCTS.map(p => (
              <article key={p.name} role="listitem">
                <Link
                  to={p.href}
                  className="ms-product-card"
                  aria-label={`${p.name} — ${p.tagline}`}
                >
                  <p className="ms-product-card__tagline">{p.tagline}</p>
                  <h3 className="ms-product-card__name">{p.name}</h3>
                  <p className="ms-product-card__body">{p.body}</p>
                  <span className="ms-product-card__cta" aria-hidden="true">{p.cta} →</span>
                </Link>
                {p.appStore && (
                  <div style={{ marginTop: '10px' }}>
                    <a
                      href={storeUrl}
                      className="ms-btn ms-btn--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.8125rem', padding: '8px 16px' }}
                    >
                      {storeTarget === MIRASCRIBE_STORE_TARGET.MAC ? 'Mac App Store' : 'App Store for iPhone'}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Family principle ── */}
        <section
          style={{
            marginTop: 'clamp(48px, 8vw, 80px)',
            paddingTop: 'clamp(32px, 5vw, 48px)',
            borderTop: '1px solid var(--ms-border)',
            maxWidth: '60ch',
          }}
          aria-labelledby="principle-heading"
        >
          <h2
            id="principle-heading"
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--ms-text)',
              margin: '0 0 10px',
              letterSpacing: '-0.01em',
            }}
          >
            Family consistency ≠ product sameness
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              color: 'var(--ms-text-secondary)',
              margin: 0,
            }}
          >
            Miravelys is contemplative and cinematic. MiraScribe is precise and Apple-native.
            MiraVoxis is a directed local voice studio. Each product defines its own visual
            language and functional tone. What they share is a commitment to doing the thing
            well, without noise.
          </p>
        </section>

      </main>
    </MiraScribeShell>
  );
}
