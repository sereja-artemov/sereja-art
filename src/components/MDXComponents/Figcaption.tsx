interface figcaptionProps {
  src: string,
  caption?: string,
  alt: string,
}

export default function Figcaption({src, caption, alt}: figcaptionProps) {
  if (caption !== undefined) {
    return (
      <figure>
        <img src={src} alt={alt}/>
        <figcaption>{caption}</figcaption>
      </figure>
    );
  } else {
    return <img src={src} alt={alt} />;
  }
}
