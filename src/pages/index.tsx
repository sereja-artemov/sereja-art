import Descriptor from '@/components/Descriptor/Descriptor';
import Skills from '@/components/Skills/Skills';
import ProjectsBlock from "@/components/ProjectsBlock/ProjectsBlock";
import BlogBlock from "@/components/Blog/BlogBlock";
import MDXContent from "@/lib/MDXContent";
import SEO from '@/components/SEO/SEO';
import { getProjects, getServices } from '@/lib/dataFetch';
import { FrontMatter, ServicesProps } from '@/lib/types';

export interface HomeProps {
  blogs: FrontMatter[];
  projects: string;
  servicesData: ServicesProps;
}

export default function Home({ blogs, projects }: HomeProps) {

  return (
    <>
      <SEO title='Главная' description='Сайт-портфолио frontend-разработчика Артемова Сергея.' />
      <Descriptor />
      <Skills />
      <ProjectsBlock projects={projects} />
      <BlogBlock blogs={blogs} />
      {/*<CursorFollowerBlock />*/}
    </>
  )
}

export async function getStaticProps() {
  /* Получаем только gray matter */
  const blogs = new MDXContent('src/posts').getAllPosts();
  /* Получаем данные проектов */
  const projects = JSON.stringify(getProjects());
  /* Получаем услуги */
  const servicesData = JSON.stringify(getServices());

  return {
    props: { blogs, projects, servicesData },
  }
}
