import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SECTION_IDS } from "@/lib/constants";

export default function Home() {

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      {Object.entries(SECTION_IDS).filter(([key, id]) => key !== SECTION_IDS.hero && key !== SECTION_IDS.about)
      .map(([key, id]) => (
        <div key={key} className={cn("")}>
          <Separator className="my-4" />
          <section id={`${id}`} className={cn("capitalize min-h-screen scroll-mt-nav")}>
            {id}
          </section>
        </div>
      ))}
    </main>
  );
}
