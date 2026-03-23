"use client"

import { SECTION_IDS } from "@/lib/constants"

export function NavBar() {
    return (
        <div>
            <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
                <nav
                    className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
                    aria-label="Primary navigation"
                >
                    <a href="/" className="text-sm font-semibold tracking-tight text-text-primary text-gray-500">
                        Pavlo Khilmon<span className="text-accent">.</span>
                    </a>
                    <ul className="flex items-center gap-6 text-sm text-text-muted">
                        {Object.entries(SECTION_IDS).map(([key, id]) => (
                            <li key={key}>
                                <a href={`#${id}`} className="capitalize transition-colors text-gray-700 hover:text-text-primary">
                                    {id}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    )
}