import { cn } from "@/lib/utils";
import { harbor, chipTones } from "@/lib/harborTheme";

const CONFIDENCE_CONFIG = {
  very_low: { label: "Very tentative", tone: "neutral" },
  low: { label: "Tentative", tone: "tide" },
  moderate: { label: "Moderate", tone: "seaGlass" },
  high: { label: "Strong", tone: "sand" },
};

export default function ConfidenceBadge({ confidence = "low", className }) {
  const config = CONFIDENCE_CONFIG[confidence] || CONFIDENCE_CONFIG.low;
  const color = chipTones[config.tone] || harbor.dim;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide",
        className
      )}
      style={{ color, borderColor: `${color}33`, background: `${color}12` }}
    >
      <span className="h-1.5 w-1.5 rounded-full opacity-70" style={{ background: color }} />
      {config.label}
    </span>
  );
}
