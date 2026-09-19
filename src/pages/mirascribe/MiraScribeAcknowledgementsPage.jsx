import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const ACKNOWLEDGEMENTS = [
  {
    name: 'Local transcription framework',
    author: 'Argmax, Inc.',
    license: 'MIT',
    notice: `Copyright © 2024 Argmax, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`,
  },
  {
    name: 'Speech recognition model components',
    author: 'OpenAI',
    license: 'MIT',
    notice: `Copyright © 2022 OpenAI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`,
  },
  {
    name: 'swift-argument-parser',
    author: 'Apple Inc. and the Swift project authors',
    license: 'Apache License 2.0',
    notice: `Copyright © 2020 Apple Inc. and the Swift project authors.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.`,
  },
];

export default function MiraScribeAcknowledgementsPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.mirascribe.faviconIco,
      title: 'Acknowledgements — MiraScribe',
      description: 'Third-party open-source license notices for MiraScribe.',
      ogTitle: 'MiraScribe — Acknowledgements',
      ogDescription: 'Third-party open-source license notices used by MiraScribe.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-ack-main">
      <main id="ms-ack-main" className="ms-page ms-page--narrow" aria-label="MiraScribe acknowledgements">
        <article>
          <header style={{ marginBottom: '40px' }}>
            <span className="ms-eyebrow">Acknowledgements</span>
            <h1 className="ms-legal" style={{ fontWeight: 700, margin: '0 0 12px' }}>
              Third-Party Software Notices
            </h1>
            <p className="ms-legal" style={{ margin: 0 }}>
              MiraScribe incorporates third-party open-source software and locally bundled components.
              Required license notices are reproduced below without exposing internal implementation configuration.
            </p>
          </header>

          <section aria-labelledby="verified-heading">
            <h2 className="ms-section-title" id="verified-heading">Open-source notices</h2>
            {ACKNOWLEDGEMENTS.map(ack => (
              <div key={ack.name} className="ms-ack-entry">
                <p className="ms-ack-entry__name">{ack.name}</p>
                <p className="ms-ack-entry__meta">{ack.author}</p>
                <span className="ms-ack-entry__license">{ack.license}</span>
                <details style={{ marginTop: '12px' }}>
                  <summary style={{ fontSize: '0.8125rem', color: 'var(--ms-text-muted)', cursor: 'pointer', userSelect: 'none' }}>
                    License text
                  </summary>
                  <pre className="ms-ack-entry__notice" style={{
                    marginTop: '10px',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontSize: '0.8125rem',
                    lineHeight: 1.6,
                    background: 'var(--ms-surface-raised)',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--ms-border)',
                  }}>
                    {ack.notice}
                  </pre>
                </details>
              </div>
            ))}
          </section>

          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--ms-border)' }}>
            <p className="ms-legal" style={{ fontSize: '0.875rem', color: 'var(--ms-text-muted)', margin: 0 }}>
              <Link to="/mirascribe/privacy">Privacy Policy</Link>
              {' · '}
              <Link to="/mirascribe/legal">Legal</Link>
              {' · '}
              <Link to="/mirascribe/support">Support</Link>
            </p>
          </div>
        </article>
      </main>
    </MiraScribeShell>
  );
}
