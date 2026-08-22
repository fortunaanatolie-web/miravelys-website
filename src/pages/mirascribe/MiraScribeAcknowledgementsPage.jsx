/**
 * MiraScribeAcknowledgementsPage — /mirascribe/acknowledgements
 * Third-party software and model license notices.
 *
 * Sources:
 *   - MiraScribe.xcodeproj Package.resolved (SPM)
 *   - PRODUCT_TRUTH_AUDIT.md (models section)
 *   - MIRASCRIBE_TRANSCRIPTION_ENGINE_AUDIT.md (model identity)
 *
 * Model license audit:
 *   - OpenAI Whisper weights: MIT license — verified in audit
 *   - SpeakerKit weights: NOT PRESENT in audited build — unresolved
 *     DO NOT mark this resolved until weights are present and licensed.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const ACKNOWLEDGEMENTS = [
  {
    name: 'WhisperKit',
    package: 'argmax-oss-swift v1.1.0',
    author: 'Argmax, Inc.',
    license: 'MIT',
    url: 'https://github.com/argmaxinc/WhisperKit',
    description:
      'Swift framework for running Whisper models with Core ML on Apple Silicon. ' +
      'Provides the primary transcription pipeline, VAD chunking, language detection, ' +
      'and audio processing used in MiraScribe.',
    notice: `Copyright © 2024 Argmax, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`,
  },
  {
    name: 'OpenAI Whisper — Model weights',
    package: 'large-v3-turbo (Core ML, v20240930)',
    author: 'OpenAI',
    license: 'MIT',
    url: 'https://github.com/openai/whisper',
    description:
      'Speech recognition model weights converted to Core ML format and bundled with MiraScribe ' +
      'for on-device transcription. The bundled model uses a turbo architecture (4 decoder layers) ' +
      'in a folder historically named large-v3. It is not identical to full large-v3.',
    notice: `Copyright © 2022 OpenAI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`,
  },
  {
    name: 'swift-argument-parser',
    package: 'v1.8.2',
    author: 'Apple Inc.',
    license: 'Apache 2.0',
    url: 'https://github.com/apple/swift-argument-parser',
    description:
      'Command-line argument parsing library for Swift, used in tooling and transitive dependencies.',
    notice: `Copyright © 2020 Apple Inc. and the Swift project authors.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.`,
  },
];

const UNRESOLVED = [
  {
    name: 'SpeakerKit',
    package: 'argmax-oss-swift v1.1.0 (speaker diarization component)',
    author: 'Argmax, Inc.',
    description:
      'Speaker diarization component included in the WhisperKit/Argmax Swift package. ' +
      'The required model weights for this component were not present in the audited shipping build. ' +
      'Speaker diarization is disabled by default and requires models that are not bundled with the current release.',
    status: 'MODEL LICENSE UNRESOLVED — weights not present in audited build',
  },
];

export default function MiraScribeAcknowledgementsPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'Acknowledgements — MiraScribe',
      description: 'Third-party software and model license notices for MiraScribe.',
      ogTitle: 'MiraScribe — Acknowledgements',
      ogDescription: 'Third-party software and model licenses used in MiraScribe.',
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
              MiraScribe incorporates third-party open-source software and model weights.
              Their licenses and required notices are reproduced below.
              Audit date: 21 August 2026.
            </p>
          </header>

          {/* ── Verified components ── */}
          <section aria-labelledby="verified-heading">
            <h2 className="ms-section-title" id="verified-heading">Verified components</h2>
            {ACKNOWLEDGEMENTS.map(ack => (
              <div key={ack.name} className="ms-ack-entry">
                <p className="ms-ack-entry__name">
                  <a href={ack.url} target="_blank" rel="noopener noreferrer">{ack.name}</a>
                </p>
                <p className="ms-ack-entry__meta">
                  {ack.package} · {ack.author}
                </p>
                <span className="ms-ack-entry__license">{ack.license}</span>
                <p className="ms-ack-entry__notice">{ack.description}</p>
                <details style={{ marginTop: '12px' }}>
                  <summary style={{
                    fontSize: '0.8125rem',
                    color: 'var(--ms-text-muted)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}>
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

          {/* ── Unresolved ── */}
          <section aria-labelledby="unresolved-heading" style={{ marginTop: '48px' }}>
            <h2 className="ms-section-title" id="unresolved-heading">
              Unresolved — audit action required
            </h2>
            <p className="ms-legal" style={{ margin: '0 0 24px' }}>
              The following components are part of included packages but their model license
              status could not be fully resolved during the initial audit because the required
              assets were not present in the audited build.
            </p>
            {UNRESOLVED.map(item => (
              <div key={item.name} className="ms-ack-entry">
                <p className="ms-ack-entry__name">{item.name}</p>
                <p className="ms-ack-entry__meta">{item.package} · {item.author}</p>
                <span className="ms-ack-entry__license ms-ack-entry__license--warning">
                  <AlertTriangle size={11} aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  {item.status}
                </span>
                <p className="ms-ack-entry__notice" style={{ marginTop: '8px' }}>
                  {item.description}
                </p>
                <p className="ms-ack-entry__notice" style={{ marginTop: '8px', fontStyle: 'italic' }}>
                  Required action: restore production model weights, identify source repository
                  and version, confirm license, verify redistribution rights, and include any
                  required notices before shipping this component.
                </p>
              </div>
            ))}
          </section>

          {/* ── Footer links ── */}
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
