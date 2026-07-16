interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden py-40 ${className}`}
    >
      {children}
    </section>
  );
}