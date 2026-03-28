export interface SkillGroup {
  label: string
  skills: string[]
  variant?: 'accent' | 'neutral'
}

export const skillsHeading = "Skills" as const;

export const skills: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    variant: 'accent',
  },
  {
    label: 'Backend & Infrastructure',
    skills: ['Java', 'Quarkus', 'PostgreSQL'],
    variant: 'neutral',
  },
  {
    label: 'Other Technical Background',
    skills: ['Python', 'Unity', 'C++', 'Embedded Systems'],
    variant: 'neutral',
  },
]
