import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { harbor, chipTones } from '@/lib/harborTheme';

export function PageShell({ children, className }) {
  return (
    <div className={cn('max-w-lg mx-auto px-5 pt-14 pb-10 space-y-6', className)}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle, backTo = '/' }) {
  return (
    <div className="flex items-start gap-3">
      <Link
        to={backTo}
        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(100,140,200,0.1)] bg-[rgba(8,12,26,0.45)] text-[rgba(150,175,215,0.65)] transition-all hover:bg-[rgba(255,255,255,0.04)] hover:text-[rgba(210,220,235,0.9)]"
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>
      <div className="min-w-0 pt-0.5">
        <h1 className="font-serif text-[1.65rem] font-medium leading-tight tracking-tight" style={{ color: harbor.moon }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm font-light leading-relaxed" style={{ color: harbor.dim }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export function SectionLabel({ children, className }) {
  return (
    <p
      className={cn('text-[10px] font-semibold uppercase tracking-[0.14em]', className)}
      style={{ color: harbor.dimmer }}
    >
      {children}
    </p>
  );
}

export function BodyCopy({ children, className, muted }) {
  return (
    <p
      className={cn('text-sm font-light leading-relaxed', className)}
      style={{ color: muted ? harbor.dim : harbor.body }}
    >
      {children}
    </p>
  );
}

export function DisplayQuote({ children, className }) {
  return (
    <p
      className={cn('font-serif text-lg font-light italic leading-relaxed truth-glow', className)}
      style={{ color: 'rgba(232,222,200,0.92)' }}
    >
      {children}
    </p>
  );
}

export function ChipGroup({ label, children, className }) {
  return (
    <div className={cn('space-y-3', className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function HarborChip({ selected, tone = 'seaGlass', size = 'md', className, children, ...props }) {
  const color = chipTones[tone] || chipTones.seaGlass;
  const sz = size === 'sm' ? 'px-3 py-1.5 text-[11px]' : 'px-3.5 py-2 text-[12px]';

  return (
    <button
      type="button"
      className={cn(
        'rounded-full font-medium transition-all duration-200 active:scale-95',
        sz,
        selected
          ? 'border shadow-[0_0_16px_rgba(60,185,165,0.08)]'
          : 'border border-transparent bg-[rgba(8,12,26,0.5)] hover:border-[rgba(100,140,200,0.12)]',
        className
      )}
      style={
        selected
          ? { color, borderColor: `${color}55`, background: `${color}16` }
          : { color: harbor.dim }
      }
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = {
  primary: 'sea-glass-gradient text-white border-0 shadow-[0_0_24px_rgba(60,180,160,0.22)]',
  sand: 'sand-gradient text-white border-0 shadow-[0_0_24px_rgba(200,150,80,0.18)]',
  sage: 'text-white border-0 shadow-[0_0_20px_rgba(60,160,120,0.15)]',
  ghost: 'bg-transparent border border-[rgba(100,140,200,0.14)] text-[rgba(150,175,215,0.65)] hover:bg-[rgba(255,255,255,0.03)]',
  glass: 'bg-[rgba(14,20,42,0.72)] border border-[rgba(100,140,200,0.14)] text-[rgba(200,215,235,0.8)]',
  outline: 'bg-transparent border border-[rgba(100,140,200,0.12)] text-[rgba(150,175,215,0.6)] hover:text-[rgba(210,220,235,0.85)]',
  link: 'bg-transparent border-0 text-[rgba(140,165,200,0.55)] hover:text-[rgba(180,200,230,0.85)] h-auto px-0',
};

const buttonSizes = {
  sm: 'h-[40px] rounded-[12px] px-4 text-xs',
  md: 'h-[50px] rounded-[14px] px-5 text-sm',
  lg: 'h-[56px] rounded-[16px] px-6 text-base',
  fab: 'h-16 w-16 rounded-full p-0',
  block: 'h-[52px] w-full rounded-[14px] px-5 text-sm',
};

export function HarborButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  style,
  ...props
}) {
  const sageStyle =
    variant === 'sage'
      ? {
          background: 'linear-gradient(135deg, hsl(160 42% 42%) 0%, hsl(175 45% 48%) 100%)',
        }
      : undefined;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      style={{ ...sageStyle, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

export function HarborLinkButton({ to, variant = 'primary', size = 'block', className, children, ...props }) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.97]',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      style={{ textDecoration: 'none', color: variant === 'ghost' || variant === 'outline' ? undefined : '#fff' }}
      {...props}
    >
      {children}
    </Link>
  );
}

export function HarborTextarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'harbor-field min-h-[120px] w-full resize-none leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

export function HarborInput({ className, ...props }) {
  return <input className={cn('harbor-field h-11 w-full', className)} {...props} />;
}

export function HarborFieldLabel({ children, className }) {
  return (
    <label className={cn('text-xs font-light tracking-wide', className)} style={{ color: harbor.dim }}>
      {children}
    </label>
  );
}

export function ButtonRow({ children, className }) {
  return <div className={cn('flex flex-col gap-2.5 sm:flex-row sm:gap-3', className)}>{children}</div>;
}

export function MetaPill({ children, tone = 'seaGlass', className }) {
  const color = chipTones[tone] || harbor.seaGlass;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium',
        className
      )}
      style={{ color, borderColor: `${color}33`, background: `${color}12` }}
    >
      {children}
    </span>
  );
}

export function DividerOr({ className }) {
  return (
    <div className={cn('relative py-1', className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[rgba(100,140,200,0.12)]" />
      </div>
      <div className="relative flex justify-center">
        <span
          className="px-3 text-[11px] font-light uppercase tracking-wider"
          style={{ color: harbor.dimmer, background: 'rgba(12,17,36,0.85)' }}
        >
          or
        </span>
      </div>
    </div>
  );
}
