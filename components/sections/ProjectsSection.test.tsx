import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectsSection } from './ProjectsSection'
import { projectsHeading, projects } from '@/lib/data/projects'
import { SECTION_IDS } from '@/lib/constants'

describe('ProjectsSection', () => {
    it('renders the h2 heading', () => {
        render(<ProjectsSection />)
        expect(screen.getByRole('heading', { level: 2, name: projectsHeading })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        render(<ProjectsSection />)
        expect(document.getElementById(SECTION_IDS.projects)).toBeInTheDocument()
    })

    it('renders at most 3 project cards by default', () => {
        render(<ProjectsSection />)
        const headings = screen.queryAllByRole('heading', { level: 3 })
        expect(headings.length).toBe(Math.min(3, projects.length))
    })

    it('shows "Show all" button when there are more than 3 projects', () => {
        render(<ProjectsSection />)
        if (projects.length > 3) {
            expect(screen.getByRole('button', { name: /show all projects/i })).toBeInTheDocument()
        }
    })

    it('expands all projects when "Show all" is clicked', async () => {
        if (projects.length <= 3) return
        const user = userEvent.setup()
        render(<ProjectsSection />)
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(projects.length)
    })

    it('collapses back to 3 when "Show less" is clicked', async () => {
        if (projects.length <= 3) return
        const user = userEvent.setup()
        render(<ProjectsSection />)
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        await user.click(screen.getByRole('button', { name: /show less/i }))
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3)
    })

    it('external links have correct security attributes', () => {
        render(<ProjectsSection />)
        const links = screen.queryAllByRole('link')
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank')
            expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })

    it('renders "No projects yet." when array is empty', () => {
        // This test passes while projects[] is empty (during development)
        if (projects.length === 0) {
            render(<ProjectsSection />)
            expect(screen.getByText(/no projects yet/i)).toBeInTheDocument()
        }
    })
})