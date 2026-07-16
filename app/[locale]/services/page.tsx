import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";

import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ServicesPage",
  });

  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      {/* Hero */}

      <section className="relative pt-44 pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            {t("badge")}
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black lg:text-7xl">
            {t("title")}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/60">
            {t("description")}
          </p>

        </div>

      </section>

      {/* Services Grid */}

      <section className="pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-orange-500/40
                  hover:bg-white/10
                "
              >

                <div className="inline-flex rounded-2xl bg-orange-500/10 p-4">

                  <Icon
                    size={34}
                    className="text-orange-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold group-hover:text-orange-400 transition">

                  {service.title}

                </h3>

                <p className="mt-4 leading-8 text-white/60">

                  {service.shortDescription}

                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-orange-400">

                  {t("learnMore")}

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </Link>

            );

          })}

        </div>

      </section>

      <CTA />

      <Footer />

    </main>
  );
}