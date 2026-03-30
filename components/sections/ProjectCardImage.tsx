'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProjectCardImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Image
            width={600} height={400}
            alt={alt} src={src}
            className={cn("w-full object-cover bg-muted")}
            onError={(e) => { e.currentTarget.src = '/images/placeholder.webp' }}
        />
    )
}