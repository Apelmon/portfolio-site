import { render, screen } from "@testing-library/react"
import { SkillsSection } from "./SkillsSection"
import { skills, skillsHeading } from "@/lib/data/skills"
import { SECTION_IDS } from "@/lib/constants"

describe('SkillsSection', () => {
    it('renders an h2 heading', () => {
        render(<SkillsSection />)
        expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument()
    })

    it('renders the skills heading text', () => {
        render(<SkillsSection />)
        expect(screen.getByRole('heading', { level: 2, name: skillsHeading})).toBeInTheDocument()
    })

    it('renders at h3 for each skill group', () => {
        render(<SkillsSection />)
        const h3s = screen.getAllByRole('heading', { level: 3 })
        expect(h3s.length).toBe(skills.length)
    })

    it('renders the first skill group label', () => {
        render(<SkillsSection />)
        expect(screen.getByRole('heading', { level: 3, name: skills[0].label})).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        const { container } = render(<SkillsSection />)
        const section = container.querySelector('#' + SECTION_IDS.skills)
        expect(section).toBeInTheDocument()
    })
})
