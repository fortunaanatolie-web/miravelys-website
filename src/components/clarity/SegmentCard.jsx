import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MetaPill } from "../design/HarborPrimitives";
import { harbor, chipTones } from "@/lib/harborTheme";

const SEGMENT_TYPES = [
  "fact",
  "feeling",
  "body_sensation",
  "story",
  "belief",
  "identity_claim",
  "borrowed_belief",
  "fear_protective_belief",
  "prediction",
  "need",
  "boundary",
  "uncertainty",
];

const TYPE_TONES = {
  fact: "seaGlass",
  feeling: "sand",
  body_sensation: "sage",
  story: "tide",
  belief: "sand",
  identity_claim: "neutral",
  borrowed_belief: "neutral",
  fear_protective_belief: "sand",
  prediction: "tide",
  need: "sage",
  boundary: "seaGlass",
  uncertainty: "neutral",
};

function formatType(type) {
  return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function SegmentCard({ segment, onTypeChange, onConfirm, onReject }) {
  const [confirmed, setConfirmed] = useState(false);
  const type = segment.userConfirmedType || segment.type;
  const tone = TYPE_TONES[type] || "neutral";
  const color = chipTones[tone] || harbor.dim;

  return (
    <div
      className={cn("space-y-3 rounded-2xl border p-4 transition-all", confirmed && "opacity-60")}
      style={{
        borderColor: `${color}33`,
        background: `${color}08`,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="flex-1 text-sm font-light leading-relaxed" style={{ color: harbor.body }}>
          "{segment.text}"
        </p>
        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={() => {
              setConfirmed(true);
              onConfirm?.(segment);
            }}
            className="rounded-lg p-1.5 transition-colors hover:bg-[rgba(60,185,165,0.12)]"
            style={{ color: harbor.dim }}
            title="This feels right"
          >
            <Check className="h-4 w-4" />
          </button>
          <button
            onClick={() => onReject?.(segment)}
            className="rounded-lg p-1.5 transition-colors hover:bg-[rgba(200,80,80,0.1)]"
            style={{ color: harbor.dim }}
            title="Not me"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className="inline-flex items-center gap-1">
              <MetaPill tone={tone}>
                {formatType(type)}
                <ChevronDown className="h-3 w-3 opacity-70" />
              </MetaPill>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-60 overflow-y-auto border-[rgba(100,140,200,0.14)] bg-[rgba(12,17,36,0.95)]">
            {SEGMENT_TYPES.map((t) => (
              <DropdownMenuItem
                key={t}
                onClick={() => onTypeChange?.(segment, t)}
                className="text-xs font-light"
                style={{ color: harbor.body }}
              >
                {formatType(t)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {segment.confidence !== undefined && (
          <span className="text-[10px] font-light" style={{ color: harbor.dimmer }}>
            {Math.round(segment.confidence * 100)}% confidence
          </span>
        )}
      </div>
    </div>
  );
}
