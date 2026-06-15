import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { format } from "date-fns";
import DailyGuidanceCard from "../components/home/DailyGuidanceCard";
import FourDoorLauncher from "../components/home/FourDoorLauncher";
import WhatChangedCard from "../components/home/WhatChangedCard";
import { PageShell, SectionLabel, BodyCopy } from "../components/design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  if (h < 21) return "Good evening";
  return "Good night";
}

export default function Home() {
  const { data: entries = [] } = useQuery({
    queryKey: ["truth-entries-recent"],
    queryFn: () => base44.entities.TruthEntry.list("-created_date", 5),
    initialData: [],
  });

  const { data: patterns = [] } = useQuery({
    queryKey: ["patterns-recent"],
    queryFn: () => base44.entities.Pattern.list("-last_seen", 5),
    initialData: [],
  });

  return (
    <PageShell>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-1.5"
      >
        <SectionLabel>{format(new Date(), "EEEE, MMMM d")}</SectionLabel>
        <h1 className="font-serif text-3xl font-medium tracking-tight" style={{ color: harbor.moon }}>
          {getGreeting()}.
        </h1>
        <BodyCopy muted>What would actually help you right now?</BodyCopy>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <DailyGuidanceCard entryCount={entries.length} />
      </motion.div>

      <div className="space-y-3">
        <SectionLabel className="px-1">Or choose your door</SectionLabel>
        <FourDoorLauncher />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <WhatChangedCard entries={entries} patterns={patterns} />
      </motion.div>
    </PageShell>
  );
}
