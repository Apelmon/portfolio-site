'use client'

import { Dialog } from "@base-ui/react/dialog"
import { QrCode01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"
import QRCode from "react-qr-code"
import { SITE_URL } from "@/lib/env"

export function QRCodeButton({ className }: { className?: string }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                aria-label="Show QR code"
                className={cn(
                    "inline-flex items-center justify-center rounded text-muted-foreground",
                    "hover:text-foreground transition-colors focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-accent",
                    className
                )}
            >
                <HugeiconsIcon icon={QrCode01Icon} size={18} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Backdrop className={cn("fixed inset-0 z-50 bg-background/60 backdrop-blur-sm")} />
                <Dialog.Popup
                    className={cn("fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
                        "flex flex-col items-center gap-4 rounded-xl",
                        "border border-border bg-background p-6 shadow-lg",
                        "w-[calc(100vw-2rem)] max-w-xs overflow-auto"
                    )}
                >
                    <p className={cn("text-sm font-medium text-foreground")}>Scan to open</p>
                    <QRCode value={SITE_URL} size={230} title="QR code for pavlokhilmon.com"/>
                    <Dialog.Close
                        className={cn("text-xs text-muted-foreground hover:text-foreground",
                            "transition-colors rounded px-4 py-2",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        )}
                    >
                        Close
                    </Dialog.Close>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    )
}