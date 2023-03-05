import { LinkModel } from "../link/linkModel";

export type ProjectModel = {
    title: string;
    id: number;
    developmentPeriod: string;
    description: string;
    imagePath: string;
    technologies: string[];
    operations: LinkModel[];
    class: string;
}