import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ConfidenceBadge from "../design/ConfidenceBadge";
import SymbolIcon from "@/components/miravelys/SymbolIcon";
import { HarborLinkButton, SectionLabel, BodyCopy } from "../design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

const GUIDANCE_MAP = {
  calm: { icon: "bloom", path: "/calm", color: harbor.seaGlass, label: "Calm Now", description: "Your body may benefit from regulation first" },
  clarity: { icon: "lens", path: "/clarity", color: harbor.sand, label: "Get Clear", description: "Separate what happened from the story about it" },
  sleep: { icon: "moon", path: "/sleep", color: "rgba(220,215,200,0.75)", label: "Sleep Now", description: "Park unresolved thoughts safely for tomorrow" },
};

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h < 12) return "morning";
  if (h < 17) return "afternoon";
  if (h < 21) return "evening";
  return "night";
}

function getGuidance(timeOfDay, hasEntries) {
  if (timeOfDay === "night") return "sleep";
  if (!hasEntries) return "calm";
  return "clarity";
}

export default function DailyGuidanceCard({ entryCount = 0 }) {
  const [timeOfDay] = useState(getTimeOfDay());
  const suggestion = getGuidance(timeOfDay, entryCount > 0);
  const g = GUIDANCE_MAP[suggestion];

  return (
    <div
      className="relative space-y-4 overflow-hidden rounded-[22px] p-6"
      style={{
        background: "linear-gradient(145deg, rgba(12,18,38,0.9) 0%, rgba(16,24,48,0.85) 100%)",
        border: "1px solid rgba(60,185,165,0.16)",
        boxShadow:
          "0 0 0 1px rgba(60,185,165,0.06), 0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(60,185,165,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative flex items-start justify-between">
        <div className="space-y-1.5">
          <SectionLabel style={{ color: `${harbor.seaGlass}bb` }}>Suggested for you</SectionLabel>
          <h3 className="font-serif text-lg font-medium" style={{ color: harbor.bodyMuted }}>
            {g.label}
          </h3>
        </div>
        <SymbolIcon name={g.icon} size={22} style={{ color: g.color }} />
      </div>

      <BodyCopy muted>{g.description}</BodyCopy>

      {entryCount === 0 ? (
        <BodyCopy muted className="text-xs italic">
          This is a general suggestion. As you use the app, guidance will become more personal.
        </BodyCopy>
      ) : (
        <ConfidenceBadge confidence="low" />
      )}

      <HarborLinkButton to={g.path} variant="primary" size="block" className="w-full">
        Begin {g.label}
        <ArrowRight className="h-4 w-4" />
      </HarborLinkButton>
    </div>
  );
}
