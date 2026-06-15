export default function SectionHeader({ eyebrow, title, icon }) {
  return (
    <div className="section-header">
      <p className="eyebrow">
        {icon}
        {eyebrow}
      </p>
      <h2>{title}</h2>
    </div>
  );
}
