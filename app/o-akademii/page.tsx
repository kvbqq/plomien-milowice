"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function About() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main className="overflow-hidden">
      <section>
        <article className={`${isDesktop ? "" : ""}`}>
          <h1></h1>
          <div>
            <p></p>
          </div>
        </article>
        <article></article>
        <article></article>
        <article></article>
      </section>
    </main>
  );
}
