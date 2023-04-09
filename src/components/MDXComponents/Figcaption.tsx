import Image from 'next/image';

interface figcaptionProps {
  src: string,
  caption?: string,
  alt: string,
}

export default function Figcaption({src, caption, alt}: figcaptionProps) {
  if (caption !== undefined) {
    return (
      <figure>
        <Image width={1920} height={1080} src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  } else {
    return <Image width={1920} height={1080} src={src} alt={alt} />;
  }
}
