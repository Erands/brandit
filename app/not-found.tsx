import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#040816] px-6 text-white">

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-9xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-8 text-4xl font-black">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/60">
          The page you're looking for doesn't exist, may have been moved,
          or the link is incorrect.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-5 font-semibold transition hover:scale-105"
          >
            <Home size={20} />
            Back Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-5 font-semibold transition hover:border-orange-500"
          >
            <ArrowLeft size={20} />
            Contact Us
          </Link>

        </div>

      </div>

    </main>
  );
}