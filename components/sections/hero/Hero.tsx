import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroGlow from "./HeroGlow";
import HeroCenter from "./HeroCenter";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <HeroBackground />
      <HeroGlow />

      <Container>

        <div className="relative z-20 flex min-h-screen flex-col">

          {/* Space for floating navbar */}
          <div className="h-36 lg:h-40" />

          <HeroCenter />

          <div className="mt-20">
            <HeroStats />
          </div>

        </div>

      </Container>

      <ScrollIndicator />

    </section>
  );
}