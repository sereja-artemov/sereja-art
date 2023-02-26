import {projectsData} from "@/data/projectsData";

export interface projectsProps {
  projects: string,
}

export function getProjects() {
  return projectsData;
}
