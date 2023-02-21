import {projectsData} from "@/data/projectsData";

export function getProjects() {
  return projectsData.reverse();
}
