import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Clock } from "lucide-react";
import { base44 } from "@/api/base44Client";
import GlassPanel from "../components/design/GlassPanel";
import BreathingBloom from "../components/design/BreathingBloom";
import {
  PageShell,
  PageHeader,
  ChipGroup,
  HarborChip,
  HarborButton,
  DisplayQuote,
  SectionLabel,
} from "../components/design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

const RHYTHMS = ["calm", "balance", "simple"];
const DURATIONS = [
  { label: "1 min", seconds: 60 },
  { label: "3 min", seconds: 180 },
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
];
const BODY_STATES = ["calm", "activated", "tense", "tired", "heavy", "neutral"];

export default function CalmNow() {
  const [isActive, setIsActive] = useState(false);
  const [rhythm, setRhythm] = useState("calm");
  const [selectedDuration, setSelectedDuration] = useState(180);
  const [elapsed, setElapsed] = useState(0);
  const [bodyBefore, setBodyBefore] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    if (!bodyBefore) return;
    setIsActive(true);
    setCompleted(false);
    const start = Date.now();
    const interval = setInterval(() => {
      const e = Math.floor((Date.now() - start) / 1000);
      setElapsed(e);
      if (e >= selectedDuration) {
        clearInterval(interval);
        setIsActive(false);
        setCompleted(true);
      }
    }, 1000);
  };

  const handleStop = () => {
    setIsActive(false);
    setCompleted(true);
  };

  const handleSave = async (bodyAfter) => {
    await base44.entities.CalmSession.create({
      mode: "breathing",
      duration_seconds: elapsed,
      body_state_before: bodyBefore,
      body_state_after: bodyAfter,
    });
    setCompleted(false);
    setBodyBefore(null);
    setElapsed(0);
  };

  return (
    <PageShell className="space-y-8">
      <PageHeader title="Calm Now" subtitle="Body regulation first" />

      {!isActive && !completed && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <GlassPanel className="space-y-4">
            <ChipGroup label="How does your body feel right now?">
              {BODY_STATES.map((state) => (
                <HarborChip
                  key={state}
                  selected={bodyBefore === state}
                  tone="sage"
                  onClick={() => setBodyBefore(state)}
                >
                  {state}
                </HarborChip>
              ))}
            </ChipGroup>
          </GlassPanel>
        </motion.div>
      )}

      <motion.div
        className="flex flex-col items-center py-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <BreathingBloom rhythm={rhythm} isActive={isActive} size={220} />
      </motion.div>

      {!completed && (
        <div className="space-y-5">
          <div className="space-y-2">
            <SectionLabel className="text-center">Rhythm</SectionLabel>
            <div className="flex flex-wrap justify-center gap-2">
              {RHYTHMS.map((r) => (
                <HarborChip
                  key={r}
                  selected={rhythm === r}
                  tone="seaGlass"
                  onClick={() => !isActive && setRhythm(r)}
                >
                  {r}
                </HarborChip>
              ))}
            </div>
          </div>

          {!isActive && (
            <div className="space-y-2">
              <SectionLabel className="text-center">Duration</SectionLabel>
              <div className="flex flex-wrap justify-center gap-2">
                {DURATIONS.map((d) => (
                  <HarborChip
                    key={d.seconds}
                    selected={selectedDuration === d.seconds}
                    tone="tide"
                    onClick={() => setSelectedDuration(d.seconds)}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3 opacity-70" />
                      {d.label}
                    </span>
                  </HarborChip>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-3 pt-2">
            {!isActive ? (
              <HarborButton
                variant="primary"
                size="fab"
                onClick={handleStart}
                disabled={!bodyBefore}
                aria-label="Start breathing"
              >
                <Play className="h-6 w-6" />
              </HarborButton>
            ) : (
              <>
                <HarborButton variant="primary" size="fab" onClick={handleStop} aria-label="Pause">
                  <Pause className="h-6 w-6" />
                </HarborButton>
                <span className="text-sm font-light tabular-nums" style={{ color: harbor.dim }}>
                  {Math.floor(elapsed / 60)}:{(elapsed % 60).toString().padStart(2, "0")} /{" "}
                  {Math.floor(selectedDuration / 60)}:
                  {(selectedDuration % 60).toString().padStart(2, "0")}
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {completed && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <GlassPanel variant="glow" className="space-y-5 text-center">
            <DisplayQuote>How does your body feel now?</DisplayQuote>
            <ChipGroup>
              {BODY_STATES.map((state) => (
                <HarborChip key={state} tone="sage" onClick={() => handleSave(state)}>
                  {state}
                </HarborChip>
              ))}
            </ChipGroup>
          </GlassPanel>
        </motion.div>
      )}
    </PageShell>
  );
}
