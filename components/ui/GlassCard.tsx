interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-[32px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      ${className}`}
    >
      {children}
    </div>
  );
}