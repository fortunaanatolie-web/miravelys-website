import { Sparkles } from "lucide-react";
import GlassPanel from "../design/GlassPanel";
import { SectionLabel, BodyCopy } from "../design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

export default function WhatChangedCard({ entries = [], patterns = [] }) {
  if (entries.length === 0) {
    return (
      <GlassPanel variant="subtle" className="space-y-3">
        <div className="flex items-center gap-2.5">
          <Sparkles className="h-4 w-4" style={{ color: harbor.dimmer }} />
          <SectionLabel>What changed</SectionLabel>
        </div>
        <BodyCopy muted className="italic">
          Start with any door above. After a few entries, this space will show what the app noticed.
        </BodyCopy>
      </GlassPanel>
    );
  }

  const latest = entries[0];
  const recentPattern = patterns.length > 0 ? patterns[0] : null;

  return (
    <GlassPanel variant="subtle" className="space-y-3">
      <div className="flex items-center gap-2.5">
        <Sparkles className="h-4 w-4" style={{ color: `${harbor.sand}bb` }} />
        <SectionLabel>What changed</SectionLabel>
      </div>
      {latest?.smaller_truth && (
        <BodyCopy>
          Your last smaller truth:{" "}
          <span className="italic" style={{ color: harbor.dim }}>
            "{latest.smaller_truth}"
          </span>
        </BodyCopy>
      )}
      {recentPattern && (
        <p className="text-xs font-light leading-relaxed" style={{ color: harbor.dim }}>
          A pattern may be forming: "{recentPattern.display_text}" — seen {recentPattern.recurrence_count} times.
        </p>
      )}
    </GlassPanel>
  );
}
