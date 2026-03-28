import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants"
import { SkillGroup, skills, skillsHeading } from "@/lib/data/skills"
import { Badge } from "../ui/badge"

function SkillsGroup({group} : {group: SkillGroup}) {
    const badgeVariant = group.variant === 'accent' ? 'default' : 'secondary'
    return (
        <div>
            <h3 className={cn("mb-3 text-xl font-semibold")}>
                {group.label}
            </h3>
            <ul className={cn("flex flex-wrap gap-2")}>
                {group.skills.map(skill => (
                    <li key={skill}>
                        <Badge variant={badgeVariant}>
                            {skill}
                        </Badge>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function SkillsSection() {
    return (
        <section id={SECTION_IDS.skills} className={cn("scroll-mt-nav py-12 md:py-20 px-6")}>
            <h2 className={cn("mb-6 text-3xl font-semibold")}>
                {skillsHeading}
            </h2>
            <div className={cn("grid md:grid-cols-2 gap-6")}>
                {skills.map(group => (
                    <SkillsGroup key={group.label} group={group}/>
                ))}
            </div>
        </section>
    )
}
