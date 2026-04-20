import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { SECTION_IDS } from "@/lib/constants";
import { heroContent } from "@/lib/data/hero";

export function HeroSection() {
    return (
        <section id={SECTION_IDS.hero} className={cn("scroll-mt-nav px-6 py-20 md:py-32 text-center")}>
            <hgroup>
                <p className={cn("mb-3 text-xs sm:text-sm font-medium text-accent uppercase tracking-widest")}>
                    {heroContent.eyebrow}
                </p>
                <h1 className={cn("mb-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight")}>
                    {heroContent.headline}
                </h1>
            </hgroup>
            <p className={cn("mb-10 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed")}>
                {heroContent.tagline}
            </p>
            <div className={cn("flex flex-col sm:flex-row justify-center gap-3")}>
                <a href={`#${SECTION_IDS.contact}`} className={cn(buttonVariants({ variant: "default" }))}>
                    {heroContent.primaryCtaLabel}
                </a>
                {/* <a href={`#${SECTION_IDS.projects}`} className={cn(buttonVariants({ variant: "outline" }))}>
                    {heroContent.secondaryCtaLabel}
                </a> */}
            </div>
        </section>
    )
}
