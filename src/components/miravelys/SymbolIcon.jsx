import React from 'react';

const defaultColor = 'rgba(140,165,200,0.75)';

const icons = {
  bloom: (
    <>
      <circle cx="12" cy="12" r="3.5" fill="currentColor" opacity="0.85" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="5.5"
          rx="1.8"
          ry="4.2"
          fill="currentColor"
          opacity="0.55"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </>
  ),
  lens: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 15l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10.5" cy="10.5" r="2" fill="currentColor" opacity="0.35" />
    </>
  ),
  moon: (
    <>
      <path
        d="M14.5 4.5a7 7 0 1 0 0 15 6.5 6.5 0 1 1 0-15z"
        fill="currentColor"
        opacity="0.85"
      />
    </>
  ),
  mirror: (
    <>
      <ellipse cx="12" cy="12" rx="7" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 8.5c1.5 2 4 3 7 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M9 14.5c2 1.5 4.5 2 6.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </>
  ),
  shield: (
    <path
      d="M12 3.5l6.5 2.8v5.2c0 4.2-2.8 7.8-6.5 9-3.7-1.2-6.5-4.8-6.5-9V6.3L12 3.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  pause: (
    <>
      <rect x="8" y="7" width="2.5" height="10" rx="1" fill="currentColor" />
      <rect x="13.5" y="7" width="2.5" height="10" rx="1" fill="currentColor" />
    </>
  ),
  truthline: (
    <>
      <path d="M12 20V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="6" r="1.8" fill="currentColor" />
      <path d="M12 14l-2.5 3h5L12 14z" fill="currentColor" opacity="0.45" />
    </>
  ),
  wave: (
    <path
      d="M4 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  dot: (
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  ),
  thread: (
    <path
      d="M6 8c2 0 3 1.5 3 3.5S8 15 6 15s-3-1.5-3-3.5S4 8 6 8zm12 0c2 0 3 1.5 3 3.5S20 15 18 15s-3-1.5-3-3.5S16 8 18 8zM9 11.5h6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  ring: (
    <>
      <circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.75" />
    </>
  ),
  knot: (
    <path
      d="M8.5 9.5c0-2 1.8-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.8 3.5-3.5 3.5c-1.2 0-2.2.8-2.2 2v1.5M12 6V4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  shore: (
    <>
      <path d="M4 16c3-2 6-2 8 0s5 2 8 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 19h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </>
  ),
  breath: (
    <>
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
    </>
  ),
  archive: (
    <>
      <rect x="5" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 6V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 11h7M8.5 14h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.5 9.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1 2.5 2.2c0 1.5-2.5 1.8-2.5 3.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.2" r="0.9" fill="currentColor" />
    </>
  ),
};

export default function SymbolIcon({ name, size = 20, className = '', style = {} }) {
  const glyph = icons[name];
  if (!glyph) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ color: defaultColor, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
