import Head from 'next/head'
import Descriptor from '@/components/Descriptor/Descriptor';
import VideoBanner from '@/components/VideoBanner/VideoBanner';
import Skills from '@/components/Skills/Skills';
import ProjectsBlock from "@/components/ProjectsBlock/ProjectsBlock";
import Blog from "@/components/Blog/Blog";
import MDXContent from "@/lib/MDXContent";
import SEO from '@/components/SEO/SEO';

export default function Home({ blogs }) {

  return (
    <>
      <SEO title='Главная' description='Сайт-портфолио frontend-разработчика Артемова Сергея.' />
      <Descriptor />
      <VideoBanner />
      <Skills />
      <ProjectsBlock />
      <Blog blogs={blogs} />
    </>
  )
}

export async function getStaticProps() {
  /* Получаем только gray matter */
  const blogs = new MDXContent('src/posts').getAllPosts();

  return {
    props: { blogs },
  }
}
