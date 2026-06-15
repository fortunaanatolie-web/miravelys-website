export default function ChapterDivider({ label }) {
  return (
    <div className="chapter-divider" aria-hidden="true">
      <span className="chapter-divider__line" />
      {label && <span className="chapter-divider__label">{label}</span>}
      <span className="chapter-divider__line" />
    </div>
  );
}
