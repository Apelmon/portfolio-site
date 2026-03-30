import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants";
import { projectsHeading, projects, ProjectItem } from "@/lib/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { ProjectCardImage } from "./ProjectCardImage";

function ProjectCard({ project }: { project: ProjectItem }) {
    return (
        <Card className={cn("hover:ring-2 hover:ring-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200")}>
            <ProjectCardImage src={project.imageSrc} alt={project.imageAlt} />
            <CardHeader>
                <h3 className={cn("text-xl font-semibold")}>{project.title}</h3>
            </CardHeader>
            <CardContent className={cn("flex flex-col gap-3")}>
                <p className={cn("text-sm text-muted-foreground")}>{project.description}</p>
                <ul className={cn("flex flex-wrap gap-2")}>
                    {project.stack.map(tech => (
                        <li key={tech}>
                            <Badge variant="secondary">{tech}</Badge>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className={cn("flex gap-4")}>
                {project.liveUrl && 
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("text-sm font-medium hover:text-primary")}
                        aria-label={`Live demo of ${project.title}`}
                    >
                        Live demo <span aria-hidden="true">↗</span>
                    </a>
                }
                {project.repoUrl &&
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("text-sm font-medium hover:text-primary")}
                        aria-label={`GitHub repository for ${project.title}`}
                    >
                        GitHub <span aria-hidden="true">↗</span>
                    </a>
                }
            </CardFooter>
        </Card>
    )
}

export function ProjectsSection() {
    return (
        <section id={SECTION_IDS.projects} className={cn("scroll-mt-nav py-12 md:py-20 px-6")}>
            <h2 className={cn("mb-6 text-3xl font-semibold")}>
                {projectsHeading}
            </h2>
            <div className={cn("grid md:grid-cols-2 gap-6")}>
                {projects.length > 0
                    ? projects.map(project => <ProjectCard key={project.id} project={project} />)
                    : <p className={cn("text-sm text-muted-foreground")}>No project yet.</p>
                }
            </div>
        </section>
    )
}
