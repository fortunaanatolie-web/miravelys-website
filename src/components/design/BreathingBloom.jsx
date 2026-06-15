import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RHYTHMS = {
  calm: { inhale: 4, hold: 4, exhale: 6, pause: 2, label: "4-4-6 Calm" },
  balance: { inhale: 4, hold: 7, exhale: 8, pause: 0, label: "4-7-8 Balance" },
  simple: { inhale: 4, hold: 0, exhale: 4, pause: 0, label: "4-4 Simple" },
};

export default function BreathingBloom({ rhythm = "calm", isActive = false, onPhaseChange, size = 200 }) {
  const [phase, setPhase] = useState("ready");
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);
  const r = RHYTHMS[rhythm] || RHYTHMS.calm;

  useEffect(() => {
    if (!isActive) { setPhase("ready"); clearTimeout(timerRef.current); return; }
    const cycle = () => {
      const phases = [];
      phases.push({ name: "inhale", duration: r.inhale });
      if (r.hold > 0) phases.push({ name: "hold", duration: r.hold });
      phases.push({ name: "exhale", duration: r.exhale });
      if (r.pause > 0) phases.push({ name: "pause", duration: r.pause });
      let i = 0;
      const next = () => {
        if (!isActive) return;
        const p = phases[i % phases.length];
        setPhase(p.name); setTimeLeft(p.duration); onPhaseChange?.(p.name);
        let t = p.duration;
        const countdown = setInterval(() => { t -= 1; setTimeLeft(t); if (t <= 0) { clearInterval(countdown); i++; next(); } }, 1000);
        timerRef.current = countdown;
      };
      next();
    };
    cycle();
    return () => clearTimeout(timerRef.current);
  }, [isActive, rhythm]);

  const scaleMap = { ready: 0.5, inhale: 1, hold: 1, exhale: 0.5, pause: 0.5 };
  const phaseLabels = { ready: "Press to begin", inhale: "Breathe in", hold: "Hold", exhale: "Breathe out", pause: "Pause" };
  const durationMap = { inhale: r.inhale, hold: r.hold, exhale: r.exhale, pause: r.pause, ready: 0.5 };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        <motion.div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, hsl(195 50% 30% / 0.15), transparent 70%)" }} animate={{ scale: scaleMap[phase] * 1.3, opacity: isActive ? 0.6 : 0.2 }} transition={{ duration: durationMap[phase], ease: "easeInOut" }} />
        <motion.div className="absolute inset-4 rounded-full border border-primary/30" style={{ background: "radial-gradient(circle, hsl(195 45% 25% / 0.4), hsl(195 40% 15% / 0.2))" }} animate={{ scale: scaleMap[phase], opacity: isActive ? 0.8 : 0.3 }} transition={{ duration: durationMap[phase], ease: "easeInOut" }} />
        <motion.div className="absolute inset-12 rounded-full" style={{ background: "radial-gradient(circle, hsl(195 50% 40% / 0.5), hsl(195 40% 20% / 0.2))" }} animate={{ scale: scaleMap[phase] * 0.9, opacity: isActive ? 1 : 0.4 }} transition={{ duration: durationMap[phase], ease: "easeInOut" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span key={phase} className="text-sm font-body font-light text-foreground/80 tracking-wider" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }}>{phaseLabels[phase]}</motion.span>
          </AnimatePresence>
          {isActive && timeLeft > 0 && <span className="text-2xl font-display font-light text-foreground/60 mt-1">{timeLeft}</span>}
        </div>
      </div>
      <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">{r.label}</span>
    </div>
  );
}
