import {ReactNode, useState} from 'react';
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";

const Cursor = dynamic(() => import("../Cursor/Cursor"), {ssr: false});

type LayoutProps = {
    children?: ReactNode
}

export default function Layout({children}: LayoutProps) {
    const [isOverlay, setIsOverlay] = useState(false);

    return (
        <>
            <div className="bg"></div>
            { isOverlay && <div className="overlay"></div> }
            <Cursor/>
            <Header setIsOverlay={setIsOverlay} />
            <main>
                <div className="top-block-padding"></div>
                {children}
            </main>
        </>
    )
}
