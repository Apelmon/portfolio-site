import { render, screen, fireEvent } from '@testing-library/react'
import { NavBar } from './NavBar'
import { NAV_LINKS, SECTION_IDS } from '@/lib/constants'

// Mock IntersectionObserver — not available in jsdom
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('NavBar', () => {
  it('renders a nav landmark', () => {
    render(<NavBar />)
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
  })

  it('renders all section links from NAV_LINKS', () => {
    render(<NavBar />)
    NAV_LINKS.forEach((key) => {
      const id = SECTION_IDS[key]
      // desktop links are in DOM (hidden md:flex — still in DOM)
      expect(screen.getAllByRole('link', { name: new RegExp(id, 'i') }).length).toBeGreaterThan(0)
    })
  })

  it('each section link has correct href', () => {
    render(<NavBar />)
    NAV_LINKS.forEach((key) => {
      const id = SECTION_IDS[key]
      const links = screen.getAllByRole('link', { name: new RegExp(`^${id}$`, 'i') })
      links.forEach((link) => {
        expect(link).toHaveAttribute('href', `#${id}`)
      })
    })
  })

  it('renders CV download link with download attribute', () => {
    render(<NavBar />)
    const cvLinks = screen.getAllByRole('link', { name: /^cv$|download cv/i })
    expect(cvLinks.length).toBeGreaterThan(0)
    cvLinks.forEach((link) => {
      expect(link).toHaveAttribute('download')
    })
  })

  it('hamburger button opens the mobile drawer', () => {
    render(<NavBar />)
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    expect(hamburger).toBeInTheDocument()
    fireEvent.click(hamburger)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
  })
})
