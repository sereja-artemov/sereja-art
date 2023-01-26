import Head from 'next/head'
import Descriptor from '@/components/Descriptor/Descriptor';
import VideoBanner from '@/components/VideoBanner/VideoBanner';
import Skills from '@/components/Skills/Skills';
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
<>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*<Descriptor />*/}
        {/*<VideoBanner />*/}
        {/*<Skills />*/}
        <Projects />
</>
  )
}
