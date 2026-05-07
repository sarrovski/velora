import { cn } from "@/lib/utils";

export function Card({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn("rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20", className)}>
      {children}
    </div>
  );
}
