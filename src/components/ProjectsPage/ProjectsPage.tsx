import s from './ProjectsPage.module.scss';
import {project} from "@/data/projectsData";
import {projectsProps} from "@/pages/projects";
import ProjectCardItem from "@/components/ProjectCardItem/ProjectCardItem";

const ProjectsPage = ({projects}:projectsProps) => {
  const projectsArr: project[] = JSON.parse(projects);

  return (
    <section className={`${s.projects} container-fluid`}>
      {projectsArr.map((project, index) => {
        return <ProjectCardItem key={index} data={project}/>
      })
      }
    </section>
  );
};

export default ProjectsPage;
