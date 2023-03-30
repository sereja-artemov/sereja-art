import { projectsData } from '@/data/projectsData';
import { servicesData } from '@/data/servicesData';

export interface projectsProps {
  projects: string;
}

export interface servicesProps {
  data: string;
}

export function getProjects() {
  return projectsData;
}

export function getServices() {
  return servicesData;
}
