import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Shield, ChevronRight } from "lucide-react";
import HarborBackground from "../components/design/HarborBackground";
import GlassPanel from "../components/design/GlassPanel";
import TruthLine from "@/components/miravelys/TruthLine";
import SymbolIcon from "@/components/miravelys/SymbolIcon";
import {
  HarborButton,
  BodyCopy,
} from "../components/design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

const DOORS = [
  { icon: "bloom", label: "Calm Now", desc: "Settle your nervous system with breathing and grounding", path: "/calm" },
  { icon: "lens", label: "Get Clear", desc: "Separate fact from story and find one smaller truth", path: "/clarity" },
  { icon: "moon", label: "Sleep Now", desc: "Park unresolved thoughts and rest without rumination", path: "/sleep" },
  { icon: "mirror", label: "Weekly Mirror", desc: "See what keeps repeating — with evidence and humility", path: "/mirror" },
];

export default function Welcome() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const handleSkip = () => {
    localStorage.setItem("miravelys_onboarded", "true");
    navigate("/");
  };

  return (
    <HarborBackground showHorizon showMoon>
      <div className="flex min-h-screen flex-col items-center justify-center px-7 pb-14 pt-16">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 text-center"
              >
                <TruthLine size="xl" />
                <div className="space-y-4">
                  <h1 className="font-serif text-[2.75rem] font-medium leading-none tracking-tight" style={{ color: harbor.moonSoft }}>
                    Miravelys
                  </h1>
                  <BodyCopy className="mx-auto max-w-xs text-lg">
                    Calm your body, separate fact from story, and notice what keeps repeating — privately.
                  </BodyCopy>
                </div>
                <HarborButton variant="primary" size="lg" onClick={next} className="px-8">
                  Begin <ChevronRight className="h-4 w-4" />
                </HarborButton>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="doors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2 text-center">
                  <h2 className="font-serif text-2xl font-medium" style={{ color: harbor.moon }}>
                    Four doors
                  </h2>
                  <BodyCopy muted>Each one serves a different need.</BodyCopy>
                </div>
                <div className="space-y-3">
                  {DOORS.map(({ icon, label, desc }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <GlassPanel variant="subtle" className="flex items-start gap-3 p-4">
                        <SymbolIcon name={icon} size={20} style={{ color: harbor.seaGlass, marginTop: 2 }} />
                        <div>
                          <p className="text-sm font-medium" style={{ color: harbor.bodyMuted }}>
                            {label}
                          </p>
                          <p className="mt-0.5 text-xs font-light" style={{ color: harbor.dim }}>
                            {desc}
                          </p>
                        </div>
                      </GlassPanel>
                    </motion.div>
                  ))}
                </div>
                <HarborButton variant="primary" size="block" onClick={next}>
                  Continue <ChevronRight className="h-4 w-4" />
                </HarborButton>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2 text-center">
                  <Shield className="mx-auto h-8 w-8" style={{ color: `${harbor.seaGlass}99` }} />
                  <h2 className="font-serif text-2xl font-medium" style={{ color: harbor.moon }}>
                    Private by design
                  </h2>
                </div>
                <GlassPanel variant="subtle" className="space-y-4">
                  <div className="space-y-3 text-sm font-light leading-relaxed" style={{ color: harbor.dim }}>
                    <p>Your entries stay on this device. The app does not diagnose, treat, or claim to understand your consciousness.</p>
                    <p>Analysis uses AI to help separate layers of experience. It may be wrong — you can always correct, edit, or delete anything.</p>
                    <p>Miravelys is a self-reflection tool, not a therapist.</p>
                  </div>
                </GlassPanel>
                <HarborButton variant="primary" size="block" onClick={next}>
                  I understand — let me begin <ChevronRight className="h-4 w-4" />
                </HarborButton>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="choose"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2 text-center">
                  <h2 className="font-serif text-2xl font-medium" style={{ color: harbor.moon }}>
                    What do you need now?
                  </h2>
                  <BodyCopy muted>Choose your door — no account needed.</BodyCopy>
                </div>
                <div className="space-y-3">
                  {DOORS.map(({ icon, label, path }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={path}
                        className="glass-panel flex w-full items-center gap-3 p-4 text-left transition-all duration-300"
                        style={{ textDecoration: "none" }}
                      >
                        <SymbolIcon name={icon} size={20} style={{ color: harbor.seaGlass }} />
                        <span className="text-sm font-medium" style={{ color: harbor.bodyMuted }}>
                          {label}
                        </span>
                        <ChevronRight className="ml-auto h-4 w-4" style={{ color: harbor.dimmer }} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <HarborButton variant="link" size="md" className="mx-auto block w-full pt-2" onClick={handleSkip}>
                  Skip — go to home
                </HarborButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </HarborBackground>
  );
}
