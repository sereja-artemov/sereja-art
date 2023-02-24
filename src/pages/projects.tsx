import ProjectsPage from "@/components/ProjectsPage/ProjectsPage";
import {getProjects} from "@/lib/dataFetch";

export interface projectsProps {
  projects: string,
}

const Projects = ({projects}:projectsProps) => {
  return (
      <ProjectsPage projects={projects} />
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = JSON.stringify(getProjects());
  return {
    props: {
      projects,
    },
  };
}
