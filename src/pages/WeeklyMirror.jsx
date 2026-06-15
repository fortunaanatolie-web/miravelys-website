import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { BookOpen, Repeat, Lightbulb, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import GlassPanel from "../components/design/GlassPanel";
import ConfidenceBadge from "../components/design/ConfidenceBadge";
import EvidencePill from "../components/design/EvidencePill";
import {
  PageShell,
  PageHeader,
  BodyCopy,
  DisplayQuote,
  SectionLabel,
  HarborButton,
} from "../components/design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

function SectionHeader({ icon: Icon, label, iconColor }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="h-4 w-4 shrink-0" style={{ color: iconColor }} />
      <SectionLabel>{label}</SectionLabel>
    </div>
  );
}

export default function WeeklyMirror() {
  const { data: entries = [] } = useQuery({
    queryKey: ["truth-entries-week"],
    queryFn: () => base44.entities.TruthEntry.list("-created_date", 50),
    initialData: [],
  });
  const { data: patterns = [] } = useQuery({
    queryKey: ["patterns-all"],
    queryFn: () => base44.entities.Pattern.list("-recurrence_count", 20),
    initialData: [],
  });
  const { data: calmSessions = [] } = useQuery({
    queryKey: ["calm-sessions-week"],
    queryFn: () => base44.entities.CalmSession.list("-created_date", 20),
    initialData: [],
  });

  const isSufficient = entries.length >= 3;
  const repeatedPatterns = patterns.filter((p) => p.recurrence_count >= 2 && p.user_status !== "rejected");
  const helpfulPractices = calmSessions.filter(
    (s) => s.helpfulness === "very_helpful" || s.helpfulness === "somewhat_helpful"
  );

  return (
    <PageShell>
      <PageHeader title="Weekly Mirror" subtitle="A private letter from your week" />

      {!isSufficient ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <GlassPanel variant="subtle" className="space-y-5 py-10 text-center">
            <BookOpen className="mx-auto h-10 w-10" style={{ color: harbor.dimmer }} />
            <DisplayQuote className="text-lg not-italic">Not enough evidence yet</DisplayQuote>
            <BodyCopy muted className="mx-auto max-w-xs">
              The Weekly Mirror needs at least 3 entries to show honest patterns. You have {entries.length} so far.
            </BodyCopy>
            <Link to="/clarity">
              <HarborButton variant="primary" size="md" className="mt-2">
                Add an entry
              </HarborButton>
            </Link>
          </GlassPanel>
        </motion.div>
      ) : (
        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <GlassPanel variant="glow" className="space-y-4">
              <SectionLabel>This week</SectionLabel>
              <BodyCopy>
                You wrote {entries.length} entries and spent time with {calmSessions.length} calming sessions.
                Here is what the app noticed — gently and tentatively.
              </BodyCopy>
              <EvidencePill count={entries.length} />
            </GlassPanel>
          </motion.div>

          {repeatedPatterns.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <GlassPanel className="space-y-4">
                <SectionHeader icon={Repeat} label="What may be repeating" iconColor="hsl(35 70% 58% / 0.75)" />
                <div className="space-y-4">
                  {repeatedPatterns.map((pattern) => (
                    <div key={pattern.id} className="space-y-2 border-t border-[rgba(100,140,200,0.08)] pt-4 first:border-0 first:pt-0">
                      <p className="text-sm font-light leading-relaxed" style={{ color: harbor.body }}>
                        "{pattern.edited_text || pattern.display_text}"
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <ConfidenceBadge confidence={pattern.confidence} />
                        <EvidencePill count={pattern.recurrence_count} />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          )}

          {helpfulPractices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassPanel className="space-y-3">
                <SectionHeader icon={Lightbulb} label="What seemed to help" iconColor="hsl(160 40% 52% / 0.75)" />
                <BodyCopy>
                  You used breathing exercises {helpfulPractices.length} times and found them helpful.
                </BodyCopy>
              </GlassPanel>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassPanel variant="subtle" className="space-y-3">
              <SectionHeader icon={FlaskConical} label="One small experiment" iconColor="hsl(175 50% 55% / 0.75)" />
              <BodyCopy className="italic">
                This week, when a familiar story appears, try noticing your body before engaging with the thought.
                Just one time.
              </BodyCopy>
            </GlassPanel>
          </motion.div>

          <p className="px-4 text-center text-[10px] font-light leading-relaxed" style={{ color: harbor.dimmer }}>
            This mirror is based on what you wrote and may be incomplete or wrong. Miravelys does not diagnose or treat.
          </p>
        </div>
      )}
    </PageShell>
  );
}
