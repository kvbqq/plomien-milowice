"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function PatronClub() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main>
      <section className={"pt-44 pb-28 flex flex-col items-center bg-white"}>
        <article
          className={`${
            isDesktop ? "w-[55rem]" : "w-[90%]"
          } flex flex-col items-center gap-14`}
        >
          <Image
            src={"https://plomienmilowice.pl/plomien-milowice-logo.webp"}
            alt="logo"
            width={200}
            height={200}
          />
          <h1
            className={`text-3xl font-semibold ${
              isDesktop ? "" : "text-center"
            }`}
          >
            Klub 100 Patronów Akademii
          </h1>
          <p className={"text-center text-lg font-semibold"}>
            Zapraszamy do wsparcia Akademii Siatkówki Płomień Milowice poprzez
            dołączenie do Klubu 100 Patronów Akademii. Chcemy być wiodącą
            siatkarską akademią, w której każdy młody sportowiec znajdzie
            wsparcie i inspirację do rozwijania swoich pasji i umiejętności.
            Twoja dobrowolna comiesięczna wpłata w postaci symbolicznej cegiełki
            na rozwój Akademii pomoże nam w zakupie sprzętu sportowego
            potrzebnego do rozwoju naszych młodych sportowców, a także w
            pokryciu kosztów wyjazdów na mecze i turnieje. <br /> <br />
            Dołączając do Klubu 100 Patronów, stajesz się częścią społeczności,
            która wspiera rozwój młodych talentów i promuje zdrowy styl życia.
            Każda wpłata ma ogromne znaczenie i jest bezpośrednim inwestowaniem
            w przyszłość naszej młodzieży. Państwa wsparcie będzie miało ogromne
            znaczenie i duży wpływ na rozwój Akademii. Będziemy wdzięczni za
            okazaną pomoc i wsparcie naszego nowego projektu. <br /> <br />
            Rozpalmy razem płomień sukcesu! Dziękujemy za Twoje wsparcie.
          </p>
          <p
            className={`px-14 py-6 bg-custom-gold rounded-xl ${
              isDesktop ? "" : "flex flex-col items-center"
            }`}
          >
            Numer konta do wpłat:{" "}
            <span className={"font-semibold"}>
              61 1020 2498 0000 8402 0819 1944
            </span>
          </p>
        </article>
      </section>
    </main>
  );
}
