import s from './ProjectsPage.module.scss';
import {project} from "@/data/projectsData";
import {projectsProps} from "@/pages/projects";
import ProjectCardItem from "@/components/ProjectCardItem/ProjectCardItem";
import PageTopBlock from "@/components/PageTopBlock/PageTopBlock";

const ProjectsPage = ({projects}:projectsProps) => {
  const projectsArr: project[] = JSON.parse(projects);

  return (
    <section className={`container-fluid`}>
      <PageTopBlock pageTitle="Проекты">
        За годы работы я выполнил более 2000 задач, вот некоторые из них.
      </PageTopBlock>
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
