import s from './Blob.module.scss';
import React, { ReactNode } from 'react'
import Image from "next/image";
import blobFirstImage from "@/images/projects/prommatic.webp";

type BlobProps = {
  children?: ReactNode
}
export default function Blob({children}:BlobProps) {
  return (
    <div className={`${s.blob} ${s.blobFirst}`}>
      {children}
    </div>
  );
}
