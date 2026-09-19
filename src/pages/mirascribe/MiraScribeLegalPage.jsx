import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
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
      favicon: APP_IDENTITY_ASSETS.mirascribe.faviconIco,
      title: 'Legal — MiraScribe',
      description: 'Legal information for MiraScribe on supported Apple platforms: end user license, copyright, trademark, and disclaimer.',
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
            <p className="ms-legal__meta">Updated: 19 September 2026</p>
          </header>

          <h2>End User License Agreement</h2>
          <p>
            MiraScribe is distributed through Apple's App Store on supported Apple platforms.
            By downloading and using MiraScribe, you agree to Apple's{' '}
            <a href={APPLE_EULA_URL} target="_blank" rel="noopener noreferrer">
              Standard Licensed Application End User License Agreement
            </a>.
            That agreement governs your use of the application.
          </p>
          <p>No additional custom EULA terms apply to the current version unless otherwise stated in an updated release.</p>

          <h2>Copyright</h2>
          <p>© 2026 Miravelys. MiraScribe is developed and distributed by Anatolie Furtuna.</p>
          <p>
            Developer: Anatolie Furtuna, sole proprietor.<br />
            Business address: Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.
          </p>

          <h2>Trademark</h2>
          <p>
            "MiraScribe" and "Miravelys" are product names used by their respective developers.
            No use of these names or associated assets is permitted without prior written permission,
            except to truthfully identify the product.
          </p>

          <h2>Disclaimer of Warranty</h2>
          <p>
            MiraScribe is provided "as is" and "as available" without warranty of any kind.
            To the extent permitted by applicable law, the developer disclaims warranties including
            merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            Transcription quality depends on recording clarity, language, and background conditions.
            MiraScribe does not guarantee error-free transcripts. Review important text before relying on it.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, the developer shall not be liable for
            indirect, incidental, special, consequential, or exemplary damages arising from the use of
            or inability to use MiraScribe, including loss of data, revenue, or goodwill.
          </p>

          <h2>Governing Law</h2>
          <p>
            This notice and the use of MiraScribe are governed by the laws of the Republic of Moldova,
            subject to mandatory consumer protections that apply in your place of residence.
          </p>

          <h2>Additional Information</h2>
          <ul>
            <li><Link to="/mirascribe/privacy">MiraScribe Privacy Policy</Link></li>
            <li><Link to="/mirascribe/support">MiraScribe Support</Link></li>
            <li><Link to="/mirascribe/acknowledgements">Third-Party Software Acknowledgements</Link></li>
            <li><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
          </ul>
        </article>
      </main>
    </MiraScribeShell>
  );
}
