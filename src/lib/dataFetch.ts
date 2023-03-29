import { projectsData } from '@/data/projectsData';
import { servicesData } from '@/data/servicesData';

export interface projectsProps {
  projects: string;
}

export function getProjects() {
  return projectsData;
}

export function getServices() {
  return servicesData;
}
