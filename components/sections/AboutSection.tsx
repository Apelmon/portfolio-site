import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants"

export function AboutSection() {
    return (
        <section id={SECTION_IDS.about} className={cn("scroll-mt-nav py-20 px-6 md:py-16")}>
            <h2 className={cn("mb-3 text-4xl font-bold")}>
                <span className={cn("capitalize mr-1 text-accent text-6xl")}>{SECTION_IDS.about.slice(0, 1)}</span>{SECTION_IDS.about.slice(1, SECTION_IDS.about.length)}
            </h2>
            <p className={cn("font-normal text-base leading-relaxed")}>
                Pavlo's background (game dev, Java, embedded, Python), the deliberate pivot to frontend/full-stack web, and the explicit framing of breadth as depth — not defensiveness
            </p>
        </section>
    )
}