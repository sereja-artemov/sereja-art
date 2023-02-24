import Head from 'next/head'
import Descriptor from '@/components/Descriptor/Descriptor';
import VideoBanner from '@/components/VideoBanner/VideoBanner';
import Skills from '@/components/Skills/Skills';
import ProjectsBlock from "@/components/ProjectsBlock/ProjectsBlock";
import Blog from "@/components/Blog/Blog";
import MDXContent from "@/lib/MDXContent";

export default function Home({ blogs }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
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
