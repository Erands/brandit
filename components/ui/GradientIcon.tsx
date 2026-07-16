import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

export default function GradientIcon({
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-3xl
      bg-gradient-to-br
      from-orange-500
      via-pink-500
      to-blue-600
      shadow-xl"
    >
      <Icon
        size={34}
        className="text-white"
      />
    </div>
  );
}