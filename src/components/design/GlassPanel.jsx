import { cn } from "@/lib/utils";

export default function GlassPanel({ children, className, variant = "default", ...props }) {
  const variants = {
    default: "glass-panel",
    strong: "glass-panel-strong",
    subtle: "bg-card/30 backdrop-blur-lg border border-border/30 rounded-2xl",
    glow: "glass-panel harbor-glow",
  };
  return (
    <div className={cn(variants[variant], "p-6", className)} {...props}>{children}</div>
  );
}
