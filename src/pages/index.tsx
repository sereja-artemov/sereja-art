import Head from 'next/head'
import Descriptor from '@/components/Descriptor/Descriptor';
import Blob from '@/components/Blob/Blob';
import Skills from '@/components/Skills/Skills';
import ProjectsBlock from "@/components/ProjectsBlock/ProjectsBlock";
import BlogBlock from "@/components/Blog/BlogBlock";
import MDXContent from "@/lib/MDXContent";
import SEO from '@/components/SEO/SEO';
import { getProjects, getServices } from '@/lib/dataFetch';
import ServicesBlock from '@/components/ServicesBlock/ServicesBlock';

export default function Home({ blogs, projects, servicesData }) {

  return (
    <>
      <SEO title='Главная' description='Сайт-портфолио frontend-разработчика Артемова Сергея.' />
      <Descriptor />
      <Skills />
      <ProjectsBlock projects={projects} />
      <BlogBlock blogs={blogs} />
      {/*<ServicesBlock data={servicesData} />*/}
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
