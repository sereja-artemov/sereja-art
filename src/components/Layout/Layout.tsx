import {ReactNode, useEffect, useState} from 'react';
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
import Footer from '../Footer/Footer';
import ScrollTopButton from "@/components/ScrollTopButton/ScrollTopButton";

const Cursor = dynamic(() => import("../Cursor/Cursor"), {ssr: false});

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
        <div className="top-block-padding"></div>
        {children}
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
