interface Props {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      <span className="gradient-text text-sm font-semibold uppercase tracking-[6px]">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/60">
        {description}
      </p>

    </div>
  );
}