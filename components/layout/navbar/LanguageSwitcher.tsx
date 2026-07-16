"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = locale === "fr" ? "en" : "fr";

  const newPath = pathname.replace(
    `/${locale}`,
    `/${switchLocale}`
  );

  return (
    <Link
      href={newPath}
      className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl hover:border-orange-400 transition"
    >
      {locale === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
    </Link>
  );
}