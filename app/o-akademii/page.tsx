"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function About() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main className="overflow-hidden">
      <section className={"pb-28 flex flex-col items-center bg-white"}>
        <article className={`pt-40 ${isDesktop ? "w-[55rem]" : ""}`}>
          <h1 className={"py-10 text-2xl font-semibold"}>O akademii</h1>
          <div className={`w-full flex items-end ${isDesktop ? "" : ""}`}>
            <p className={`${isDesktop ? "pr-24" : ""}`}>
              <span className="text-custom-gold">Płomień Milowice</span> to
              akademia, w której każdy zawodnik znajdzie wsparcie i inspirację
              do rozwijania swoich pasji i umiejętności. Nasza Akademia ma być
              miejscem, gdzie lokalny talent jest doceniany i rozwijany, a
              uczestnicy mają możliwość nie tylko doskonalenia swoich
              umiejętności sportowych, ale także budowania pozytywnych relacji,
              zdobywania wartościowych doświadczeń oraz rozwijania się jako
              osoby. Naszym priorytetem jest budowanie silnej społeczności
              opartej na współpracy, szacunku oraz wspieranie rozwoju osobistego
              każdego uczestnika, niezależnie od poziomu zaawansowania
              sportowego.
            </p>

            <Image
              src={"https://plomienmilowice.pl/plomien-milowice-logo.png"}
              alt={"Płomień Milowice Logo"}
              width={213}
              height={213}
            />
          </div>
        </article>
        <article className={`pt-24 ${isDesktop ? "w-[55rem]" : ""}`}>
          <div className={"flex flex-col items-center space-y-5"}>
            <h1 className={"text-2xl font-semibold text-custom-gold"}>
              Filary treningu w akademii
            </h1>
            <p className={"w-[40rem] text-center"}>
              Zróżnicowany rozwój młodzieży na każdej płaszczyźnie jest dla nas
              niezwykle <br /> ważny, dlatego dbamy o wszechstronne
              kształtowanie umiejętności <br /> i charakteru naszych zawodników.
            </p>
          </div>
        </article>
        <article></article>
        <article></article>
      </section>
    </main>
  );
}
