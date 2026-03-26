import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/lib/constants";

export function HeroSection() {
    return (
      <div className={cn("mx-auto max-w-none px-6 my-6")}>
        <p className={cn("mb-3 text-5xl font-bold")}><span className={cn("underline underline-offset-6 decoration-6 decoration-accent")}>Pavlo</span> <mark className={cn("px-3 pb-0.5 text-white bg-accent rounded-2xl")}>Khilmon</mark></p>
        <p className={cn("text-muted")}>You can do better</p>
        <div className={cn("flex justify-between my-4")}>
            <Button>
                <a href={`#${SECTION_IDS.contact}`} className={cn("capitalize")}>
                    {SECTION_IDS.contact}
                </a>
            </Button>
            <Button className={cn("")}>Download CV</Button>
        </div>
      </div>
    )
}