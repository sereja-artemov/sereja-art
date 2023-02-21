import {getProjects} from "@/lib/dataFetch";
import projects from "@/components/Projects/Projects";

const Projects = ({projects}) => {
  const projectsArr = JSON.parse(projects);

  return (
    <div>

    </div>
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
