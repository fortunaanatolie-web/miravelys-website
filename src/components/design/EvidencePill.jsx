import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import { harbor } from "@/lib/harborTheme";

export default function EvidencePill({ count, className }) {
  if (!count || count === 0) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        className
      )}
      style={{
        color: harbor.dim,
        borderColor: "rgba(100,140,200,0.14)",
        background: "rgba(8,12,26,0.45)",
      }}
    >
      <FileText className="h-3 w-3 opacity-70" />
      {count} {count === 1 ? "entry" : "entries"}
    </span>
  );
}
