import Head from 'next/head'
import Descriptor from '@/components/Descriptor/Descriptor';
import VideoBanner from '@/components/VideoBanner/VideoBanner';
import Skills from '@/components/Skills/Skills';
import ProjectsBlock from "@/components/ProjectsBlock/ProjectsBlock";
import Blog from "@/components/Blog/Blog";
import MDXContent from "@/lib/MDXContent";
import SEO from '@/components/SEO/SEO';
import {getProjects} from "@/lib/dataFetch";

export default function Home({ blogs, projects }) {

  return (
    <>
      <SEO title='Главная' description='Сайт-портфолио frontend-разработчика Артемова Сергея.' />
      <Descriptor />
      {/*<VideoBanner />*/}
      <Skills />
      <ProjectsBlock projects={projects} />
      <Blog blogs={blogs} />
    </>
  )
}

export async function getStaticProps() {
  /* Получаем только gray matter */
  const blogs = new MDXContent('src/posts').getAllPosts();
  /* Получаем данные проектов */
  const projects = JSON.stringify(getProjects());

  return {
    props: { blogs, projects },
  }
}
