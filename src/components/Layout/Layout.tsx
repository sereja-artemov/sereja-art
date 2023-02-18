import {ReactNode, useEffect, useState} from 'react';
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
import Footer from '../Footer/Footer';

const Cursor = dynamic(() => import("../Cursor/Cursor"), {ssr: false});
const ScrollTopButton = dynamic(() => import("../../components/ScrollTopButton/ScrollTopButton"), {ssr: false});

type LayoutProps = {
  children?: ReactNode
}

export default function Layout({children}: LayoutProps) {
  // const [isOverlay, setIsOverlay] = useState(false);
  //
  // useEffect(() => {
  //   isOverlay ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll";
  // }, [isOverlay])

  return (
    <>
      <div className="bg"></div>
      {/*{isOverlay && <div className="overlay"></div>}*/}
      <Cursor/>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
