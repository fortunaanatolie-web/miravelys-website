/**
 * Development placeholder when a Miravelys screenshot file is missing.
 * Preserves phone viewport aspect ratio so layout does not jump.
 */
export default function ScreenshotPlaceholder({ missing, className = '' }) {
  if (!missing) return null;

  return (
    <div
      className={`screenshot-placeholder ${className}`.trim()}
      role="img"
      aria-label={`Missing screenshot ${missing.group} ${missing.code}`}
    >
      <div className="screenshot-placeholder__label">Missing screenshot</div>
      <dl className="screenshot-placeholder__meta">
        <div>
          <dt>group</dt>
          <dd>{missing.group}</dd>
        </div>
        <div>
          <dt>locale</dt>
          <dd>{missing.locale}</dd>
        </div>
        <div>
          <dt>code</dt>
          <dd>{missing.code}</dd>
        </div>
        <div>
          <dt>expected</dt>
          <dd>{missing.expected}</dd>
        </div>
      </dl>
    </div>
  );
}
