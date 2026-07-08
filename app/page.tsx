import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />

      <section className="flex h-screen items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          BrandIT Africa
        </h1>
      </section>
    </main>
  );
}