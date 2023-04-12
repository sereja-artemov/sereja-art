import { ReadTimeResults } from "reading-time";
import { Variants } from "framer-motion";
import React from "react";
import CSS from 'csstype';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type FrontMatter = {
  readingTime: ReadTimeResults;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  keywords: string;
  slug: string;
  title: string;
  stringDate: string;
};

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
  style?: CSS.Properties;
};

export type ProjectType = {
  active: boolean;
  cost: number;
  date: string;
  description: string;
  image: string;
  links: {
    [index: string]: string;
  };
  name: string;
  previewImage: string;
  tools: string[];
  year: number;
}

export type ServicesProps = {
  group: string;
  services: [
    {
      [index: string]: string;
    }
  ]
};

export type skillsType = {
  name: string;
  active: boolean;
}

export type PostType = {
  meta: FrontMatter;
  source: MDXRemoteSerializeResult;
  tableOfContents: TableOfContents[];
};

export type TableOfContents = {
  heading: string;
  level: number;
  transliteratedHeading: string;
}
