"use client";

import { ReactNode } from "react";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { MdOutlineSportsVolleyball } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { RiPsychotherapyLine } from "react-icons/ri";

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, text }) => {
  return (
    <div className={"px-6 py-8 rounded-2xl border border-gray-100 shadow-lg"}>
      {icon}
      <h1 className={"mt-5 mb-2 font-semibold"}>{title}</h1>
      <p className={"text-sm"}>{text}</p>
    </div>
  );
};

export default function About() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main className="overflow-hidden">
      <section className={"pb-28 flex flex-col gap-24 items-center bg-white"}>
        <article className={`pt-36 ${isDesktop ? "w-[55rem]" : "w-[90%]"}`}>
          <h1
            className={`py-10 text-2xl font-semibold ${
              isDesktop ? "" : "text-center"
            }`}
          >
            O akademii
          </h1>
          <div
            className={`w-full flex items-end ${
              isDesktop ? "" : "flex-col items-center gap-8"
            }`}
          >
            <p className={`${isDesktop ? "pr-24" : "text-center"}`}>
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
        <article className={`${isDesktop ? "w-[55rem]" : "w-[90%]"}`}>
          <div className={"flex flex-col items-center space-y-5"}>
            <h1 className={"text-2xl font-semibold text-custom-gold"}>
              Filary treningu w akademii
            </h1>
            <p className={`text-center ${isDesktop ? "w-[40rem]" : "w-[90%]"}`}>
              Zróżnicowany rozwój młodzieży na każdej płaszczyźnie jest dla nas
              niezwykle <br /> ważny, dlatego dbamy o wszechstronne
              kształtowanie umiejętności <br /> i charakteru naszych zawodników.
            </p>
          </div>
          <div
            className={`mt-8 flex ${
              isDesktop
                ? "justify-between gap-4"
                : "flex-col justify-center items-center gap-8"
            }`}
          >
            <PillarCard
              icon={<MdOutlineSportsVolleyball size={48} color="#C69A0D" />}
              title="Treningi siatkarskie"
              text="Regularne, intensywne zajęcia siatkarskie rozwijające technikę gry, umiejętności zespołowe, kondycję fizyczną i wytrzymałość. Program treningów jest dostosowany do różnych poziomów zaawansowania."
            />
            <PillarCard
              icon={<IoMusicalNotesOutline size={48} color="#C69A0D" />}
              title="Treningi rytmiki i koordynacji"
              text="Zajęcia skoncentrowane na poprawie rytmiki, koordynacji ruchowej oraz zwinności. Treningi wspierają ogólny rozwój fizyczny uczestników, pomagając w lepszym radzeniu sobie z wyzwaniami sportowymi."
            />
            <PillarCard
              icon={<RiPsychotherapyLine size={48} color="#C69A0D" />}
              title="Spotkania z psychologiem sportowym"
              text="Dbamy nie tylko o rozwój sportowy, ale także o zdrowie i bezpieczeństwo naszych podopiecznych, dlatego regularnie organizujemy spotkania z ekspertami psychologii sportu, które są dostępne również dla rodziców."
            />
          </div>
        </article>
        <article
          className={`${isDesktop ? "w-[55rem]" : "w-[90%] text-center"}`}
        >
          <h1 className={"py-10 text-2xl font-semibold"}>
            Profesjonalne obiekty sportowe
          </h1>
          <p className={"mb-5"}>
            Nasze zajęcia odbywają się w nowoczesnych obiektach sportowych,
            które zapewniają komfort i bezpieczeństwo podczas treningów.
            Posiadamy przestronne hale z profesjonalnym wyposażeniem, co pozwala
            na efektywne i przyjemne prowadzenie zajęć sportowych.
          </p>
          <div
            className={`flex ${
              isDesktop ? "justify-between" : "flex-col items-center gap-8"
            }`}
          >
            <Image
              src={"https://plomienmilowice.pl/about-hala-1.webp"}
              alt="hala sportowa"
              width={432}
              height={250}
              className="rounded-2xl"
            />
            <Image
              src={"https://plomienmilowice.pl/about-hala-2.webp"}
              alt="hala sportowa"
              width={432}
              height={250}
              className="rounded-2xl"
            />
          </div>
        </article>
        <article
          className={`${isDesktop ? "w-[55rem]" : "w-[90%] text-center"}`}
        >
          <h1 className={"py-10 text-2xl font-semibold"}>Regionalizm</h1>
          <p className={"mb-5"}>
            Sosnowiec to nie tylko nasza lokalizacja, to serce naszej akademii,
            źródło pasji i duma każdego zawodnika Płomienia Milowice. Miasto
            bogate w historię, tradycję i talent stanowi niezwykłe tło dla
            naszych działań. Jako akademia z głębokimi korzeniami w tej okolicy,
            promujemy jej wartości i wspieramy lokalną społeczność. Sosnowiec to
            nasz dom, gdzie rozwijamy się nie tylko jako zawodnicy, ale także
            jako ludzie.
          </p>
          <Image
            src={"https://plomienmilowice.pl/about-milowice.webp"}
            alt="hala sportowa"
            height={270}
            width={880}
            className="rounded-2xl"
          />
        </article>
      </section>
    </main>
  );
}
