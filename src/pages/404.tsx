import React from "react";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <section className={`container`}>
        <h1 className="">
          А тут ничего нет.
        </h1>
        <p className="">
          Нет, вы не сломали интернет, просто здесь что-то было (но это не точно), а теперь его нет.
        </p>

        <Link href="/">
            На главную
        </Link>
      </section>
    </>
  );
}
