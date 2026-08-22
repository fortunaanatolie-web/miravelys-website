/**
 * MiraScribeLegalPage — /mirascribe/legal
 * Legal notice, EULA reference, copyright, trademark, disclaimer.
 *
 * MiraScribe is distributed on the Mac App Store and is subject to Apple's
 * Standard Licensed Application End User License Agreement (EULA) unless
 * a custom EULA is later added. This page states that clearly.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const SUPPORT_EMAIL = 'support.mirascribe@miravelys.com';
const APPLE_EULA_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

export default function MiraScribeLegalPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'Legal — MiraScribe',
      description: 'Legal information for MiraScribe: end user license, copyright, trademark, and disclaimer.',
      ogTitle: 'MiraScribe — Legal',
      ogDescription: 'End user license, copyright, and legal information for MiraScribe.',
      alternateLanguages: [],
      noIndex: false,
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-legal-main">
      <main id="ms-legal-main" className="ms-page ms-page--narrow" aria-label="MiraScribe legal information">
        <article className="ms-legal">
          <header style={{ marginBottom: '40px' }}>
            <span className="ms-eyebrow">Legal</span>
            <h1>MiraScribe Legal Information</h1>
            <p className="ms-legal__meta">Updated: 21 August 2026</p>
          </header>

          {/* ── EULA ── */}
          <h2>End User License Agreement</h2>
          <p>
            MiraScribe is distributed on the Apple Mac App Store. By downloading and using
            MiraScribe, you agree to Apple's{' '}
            <a href={APPLE_EULA_URL} target="_blank" rel="noopener noreferrer">
              Standard Licensed Application End User License Agreement
            </a>.
            That agreement governs your use of the application.
          </p>
          <p>
            No additional custom EULA terms apply to the current version unless otherwise stated
            in an updated release.
          </p>

          {/* ── Copyright ── */}
          <h2>Copyright</h2>
          <p>
            © 2026 Miravelys. MiraScribe is developed and distributed by Anatolie Furtuna.
          </p>
          <p>
            Developer: Anatolie Furtuna, sole proprietor.<br />
            Business address: Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.
          </p>

          {/* ── Trademark ── */}
          <h2>Trademark</h2>
          <p>
            "MiraScribe" and "Miravelys" are product names used by their respective developers.
            No use of these names or their associated assets is permitted without prior written
            permission, except to truthfully identify the product.
          </p>

          {/* ── Disclaimer ── */}
          <h2>Disclaimer of Warranty</h2>
          <p>
            MiraScribe is provided "as is" and "as available" without warranty of any kind.
            To the extent permitted by applicable law, the developer disclaims all warranties,
            whether express, implied, statutory, or otherwise, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p>
            Transcription accuracy depends on audio quality, speaking clarity, language, and
            background noise. MiraScribe does not guarantee error-free transcripts. You are
            responsible for reviewing and correcting the output before relying on it.
          </p>

          {/* ── Limitation of liability ── */}
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, the developer shall not be liable
            for any indirect, incidental, special, consequential, or exemplary damages arising
            from your use of or inability to use MiraScribe, including but not limited to loss
            of data, loss of revenue, or loss of goodwill.
          </p>

          {/* ── Governing law ── */}
          <h2>Governing Law</h2>
          <p>
            This notice and the use of MiraScribe are governed by the laws of the Republic of Moldova,
            subject to any mandatory consumer protections that apply in your place of residence.
          </p>

          {/* ── Privacy and support links ── */}
          <h2>Additional Information</h2>
          <ul>
            <li><Link to="/mirascribe/privacy">MiraScribe Privacy Policy</Link></li>
            <li><Link to="/mirascribe/support">MiraScribe Support</Link></li>
            <li><Link to="/mirascribe/acknowledgements">Third-Party Software Acknowledgements</Link></li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </li>
          </ul>
        </article>
      </main>
    </MiraScribeShell>
  );
}
