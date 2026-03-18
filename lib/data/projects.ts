import {Skill} from "@/lib/data/skills";

export interface Project {
    title: string;
    description: string;
    startYear: number;
    endYear: number | string;
    tags?: string;
    skills?: Skill[];
}

export const projects: Project[] = [
    {
        title: "ivv",
        description: "as Java Software developer",
        startYear: 2022,
        endYear: 2024,
    }
];