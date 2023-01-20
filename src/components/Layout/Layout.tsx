import {ReactNode} from 'react';
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";

const Cursor = dynamic(() => import("../Cursor/Cursor"), {ssr: false});

type LayoutProps = {
    children?: ReactNode
}

export default function Layout({children}: LayoutProps) {

    return (
        <>
            <div className="bg"></div>
            <Cursor/>
            <Header/>
            <main>{children}</main>
        </>
    )
}
