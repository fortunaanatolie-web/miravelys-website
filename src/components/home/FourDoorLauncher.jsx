import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SymbolIcon from "@/components/miravelys/SymbolIcon";
import { harbor } from "@/lib/harborTheme";

const DOORS = [
  { path: "/calm", icon: "bloom", label: "Calm Now", desc: "Body regulation", color: harbor.seaGlass },
  { path: "/clarity", icon: "lens", label: "Get Clear", desc: "Separate truth", color: harbor.sand },
  { path: "/sleep", icon: "moon", label: "Sleep Now", desc: "Rest without rumination", color: "rgba(220,215,200,0.55)" },
  { path: "/mirror", icon: "mirror", label: "Weekly Mirror", desc: "See what repeats", color: harbor.faint },
];

export default function FourDoorLauncher() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {DOORS.map(({ path, icon, label, desc, color }, i) => (
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
        >
          <Link
            to={path}
            className="glass-panel block rounded-[18px] p-5 text-left transition-all active:scale-[0.97] hover:border-[rgba(60,185,165,0.2)]"
            style={{ textDecoration: "none" }}
          >
            <SymbolIcon name={icon} size={26} className="mb-3" style={{ color, opacity: 0.85 }} />
            <p className="text-sm font-medium" style={{ color: harbor.bodyMuted }}>
              {label}
            </p>
            <p className="mt-0.5 text-[12px] font-light" style={{ color: harbor.dimmer }}>
              {desc}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
