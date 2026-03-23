import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t border-border bg-bg py-10">
            <div className="mx-auto flex max-w-5x1 flex-col items-center gap-4 px-6 text-sm text-text-muted sm:flex-row sm:justify-between">
                <p className="text-gray-500">
                    © {new Date().getFullYear()} — Built with Next.js &amp; Tailwind
                </p>
                <a href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link transition-colors hover:text-accent text-muted-foreground">
                    LinkedIn
                    <span className="ml-2.5 text-accent opacity-80 group-hover/link:opacity-40">↗</span>
                </a>
            </div>
        </footer>
    )
}