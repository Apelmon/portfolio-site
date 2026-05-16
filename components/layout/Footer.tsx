import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { QRCodeButton } from "../ui/QRCodeButton";

export function Footer() {
    return (
        <footer className="border-t border-border py-10">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-sm sm:flex-row sm:justify-between">
                <p className="text-muted-foreground">
                    © {new Date().getFullYear()} — Built with Next.js &amp; Tailwind
                </p>
                <div className={cn("flex gap-2")}>
                    {SOCIAL_LINKS.map(({ href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className={cn(
                            "inline-flex items-center justify-center rounded-md h-6 gap-1 px-2",
                            "text-xs/relaxed font-medium transition-all outline-none select-none",
                            "hover:bg-accent/10 hover:text-accent",
                            "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                        )}>
                            {label} 
                            <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
                        </a>
                    ))}
                    <QRCodeButton className={cn("inline-flex items-center justify-center rounded-md h-6 px-2",
                        "text-xs font-medium transition-all outline-none select-none hover:bg-accent/10",
                        "hover:text-accent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                    )}/>
                </div>
            </div>
        </footer>
    )
}
