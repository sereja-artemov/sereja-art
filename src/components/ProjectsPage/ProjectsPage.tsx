import s from './ProjectsPage.module.scss';
import {project} from "@/data/projectsData";
import {projectsProps} from "@/pages/projects";
import ProjectCardItem from "@/components/ProjectCardItem/ProjectCardItem";

const ProjectsPage = ({projects}:projectsProps) => {
  const projectsArr: project[] = JSON.parse(projects);

  return (
    <section className={`container-fluid`}>
      <h1 className='page-title'>Проекты</h1>
      <div className={s.projectItems}>
        {projectsArr.map((project, index) => {
          return <ProjectCardItem key={index} data={project}/>
        })
        }
      </div>
    </section>
  );
};

export default ProjectsPage;
