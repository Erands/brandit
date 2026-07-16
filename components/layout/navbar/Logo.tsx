"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo/brandit-logo.png"
        alt="BrandIT"
        width={52}
        height={52}
        priority
      />

      <div>
        <h2 className="font-bold text-2xl">
          Brand<span className="gradient-text">IT</span>
        </h2>

        <p className="text-xs text-white/60">
          Style & Sell Smart
        </p>
      </div>
    </Link>
  );
}