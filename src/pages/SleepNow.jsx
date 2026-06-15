import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, CloudMoon, Save, Sunrise } from "lucide-react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import GlassPanel from "../components/design/GlassPanel";
import {
  PageShell,
  PageHeader,
  BodyCopy,
  HarborButton,
  HarborTextarea,
  DisplayQuote,
  SectionLabel,
  ButtonRow,
} from "../components/design/HarborPrimitives";

export default function SleepNow() {
  const [step, setStep] = useState("park");
  const [parkedThought, setParkedThought] = useState("");

  const handleParkThought = async () => {
    await base44.entities.SleepEntry.create({ parked_thought: parkedThought || null, wind_down_used: false });
    setStep("saved");
  };

  const handleWindDown = async () => {
    await base44.entities.SleepEntry.create({ parked_thought: parkedThought || null, wind_down_used: true });
    setStep("saved");
  };

  return (
    <PageShell>
      <PageHeader title="Sleep Now" subtitle="Rest without rumination" />

      <AnimatePresence mode="wait">
        {step === "park" && (
          <motion.div
            key="park"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <GlassPanel variant="subtle" className="space-y-4 py-8 text-center">
              <Moon className="mx-auto h-9 w-9" style={{ color: "hsl(160 40% 52% / 0.65)" }} />
              <DisplayQuote className="text-base">You do not need to solve this tonight.</DisplayQuote>
              <BodyCopy muted className="mx-auto max-w-xs">
                If something is unresolved, park it here. It will wait for morning.
              </BodyCopy>
            </GlassPanel>

            <GlassPanel className="space-y-5">
              <BodyCopy muted>
                Is there something on your mind? Write it down so you can let it go for now.
              </BodyCopy>
              <HarborTextarea
                value={parkedThought}
                onChange={(e) => setParkedThought(e.target.value)}
                placeholder="What's still circling..."
                className="min-h-[100px]"
              />
              <ButtonRow>
                <HarborButton variant="sage" size="block" className="flex-1" onClick={handleParkThought}>
                  <CloudMoon className="h-4 w-4" />
                  Park for morning
                </HarborButton>
                <HarborButton variant="ghost" size="block" className="flex-1" onClick={() => setStep("winddown")}>
                  Wind down first
                </HarborButton>
              </ButtonRow>
            </GlassPanel>

            <HarborButton variant="link" size="md" className="mx-auto block w-full text-center" onClick={handleParkThought}>
              Nothing on my mind — just sleep
            </HarborButton>
          </motion.div>
        )}

        {step === "winddown" && (
          <motion.div
            key="winddown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <GlassPanel variant="glow" className="space-y-6 py-8 text-center">
              <SectionLabel>Wind down</SectionLabel>
              <div className="space-y-4">
                <p className="font-serif text-sm font-light leading-relaxed" style={{ color: "rgba(210,220,235,0.85)" }}>
                  Notice three things you can see.
                </p>
                <p className="font-serif text-sm font-light leading-relaxed" style={{ color: "rgba(180,200,230,0.65)" }}>
                  Notice two things you can hear.
                </p>
                <p className="font-serif text-sm font-light leading-relaxed" style={{ color: "rgba(150,175,215,0.45)" }}>
                  Notice one thing you can feel.
                </p>
              </div>
              <motion.div
                className="mx-auto h-16 w-16 rounded-full border border-[rgba(60,185,165,0.2)]"
                style={{ background: "radial-gradient(circle, hsl(195 40% 25% / 0.3), transparent)" }}
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <BodyCopy muted className="italic">Take as long as you need.</BodyCopy>
            </GlassPanel>
            <HarborButton variant="sage" size="block" onClick={handleWindDown}>
              <Save className="h-4 w-4" />
              Done — save and rest
            </HarborButton>
          </motion.div>
        )}

        {step === "saved" && (
          <motion.div
            key="saved"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <GlassPanel variant="glow" className="space-y-4 py-10 text-center">
              <Sunrise className="mx-auto h-10 w-10" style={{ color: "hsl(35 70% 58% / 0.55)" }} />
              <DisplayQuote className="text-xl not-italic">Goodnight.</DisplayQuote>
              <BodyCopy muted>
                {parkedThought
                  ? "Your thought is parked safely. It will be here in the morning."
                  : "Rest well. The app will be here when you return."}
              </BodyCopy>
            </GlassPanel>
            <Link to="/">
              <HarborButton variant="ghost" size="block">
                Return home
              </HarborButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
