import React from 'react';
import s from './Blob.module.scss';
import Image from "next/image";
import blobFirstImage from "@/images/projects/prommatic.webp";

export default function Blob({children}) {
  return (
    <div className={`${s.blob} ${s.blobFirst}`}>
      {children}
    </div>
  );
}
