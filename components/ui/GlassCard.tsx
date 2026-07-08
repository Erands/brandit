import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl",
        "shadow-[0_10px_40px_rgba(0,0,0,.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}