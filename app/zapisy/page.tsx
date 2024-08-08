"use client";

import Image from "next/image";

import { Button } from "@/components/button/Button";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function PatronClub() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main>
      <section
        className={"pt-44 pb-28 flex flex-col items-center gap-8 bg-white"}
      >
        <Image
          src={"https://plomienmilowice.pl/plomien-milowice-logo.webp"}
          alt="logo"
          width={200}
          height={200}
        />
        <article
          className={`${
            isDesktop
              ? "w-[42rem] bg-no-repeat bg-right-bottom bg-about-card-image"
              : "max-w-[42rem] w-[90%] "
          } py-16 flex flex-col items-center gap-4 rounded-2xl border border-gray-100 shadow-lg`}
        >
          <h1 className={"font-semibold text-lg"}>Dołącz do akademii</h1>
          <Button
            text="Zarejestruj nowego zawodnika"
            href="https://plomienmilowice.sportsmanago.pl/rekrutacja"
            style="text-sm"
          />
          <br />
          <h1 className={"font-semibold text-lg"}>Posiadasz juz konto?</h1>
          <Button
            text="Zaloguj się do Panelu Rodzica"
            href="https://plomienmilowice.sportsmanago.pl/login"
            style="text-sm"
          />
        </article>
      </section>
    </main>
  );
}
