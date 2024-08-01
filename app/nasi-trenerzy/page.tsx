"use client";

import { ReactNode } from "react";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CoachCardProps {
  image: string;
  name: string;
  text: string;
  isEven: boolean;
}

const CoachCard: React.FC<CoachCardProps> = ({ image, name, text, isEven }) => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <article
      className={`flex items-center relative ${isDesktop ? "w-[55rem]" : ""}`}
    >
      <div
        className={`flex ${
          isEven ? "flex-row-reverse pr-8" : "pl-8"
        } jsutify-between py-8 z-10 bg-white bg-opacity-30 backdrop-blur-xl rounded-2xl border border-gray-300 shadow-lg`}
      >
        <h1 className="w-3/5 text-justify">{text}</h1>
        <div className={"w-2/5 flex relative justify-center"}>
          <Image
            src={image}
            alt={name}
            width={3307}
            height={4724}
            style={{ height: "350px", width: "auto" }}
          />
          <h1
            className={
              "absolute bottom-0 bg-nav-bg-start py-4 px-10 text-white font-medium rounded-xl"
            }
          >
            {name}
          </h1>
        </div>
      </div>
      <div
        className={`h-[70%] aspect-square absolute rounded-full bg-custom-gold ${
          isEven ? "-right-[9rem]" : "-left-[9rem]"
        }`}
      ></div>
    </article>
  );
};

export default function CoachesInfo() {
  return (
    <main>
      <section
        className={"pt-44 pb-28 flex flex-col gap-10 items-center bg-white"}
      >
        <CoachCard
          image="https://plomienmilowice.pl/agata-kopczyk.jpg"
          name="Agata Kopczyk"
          text="Założycielka Akademii Siatkówki Płomień Milowice. Jako była siatkarka, wielokrotnie zdobywała Mistrzostwo Polski. Razem z Płomieniem Milowice zdobyła Wicemistrzostwo oraz brązowy medal Mistrzostw Polski. Wielokrotna reprezentantka Polski. Po zakończeniu kariery sportowej poświęciła się trenowaniu młodzieży. Razem ze swoimi drużynami wielokrotnie osiągała liczne sukcesy na wielu turniejach ogólnopolskich, w tym Mistrzostwach Polski. Jej podopieczne regularnie występują w Tauron Lidze i reprezentują kraj na arenie międzynarodowej. Trenerka Agata z pasją i profesjonalizmem rozwija umiejętności sportowe młodzieży, budując ich charakter i promując zasady fair play. Tworzy otwartą, wspierającą atmosferę, stale doskonaląc swoje metody treningowe."
          isEven={false}
        />
        <CoachCard
          image="https://plomienmilowice.pl/agnieszka-legien.jpg"
          name="Agnieszka Legień"
          text="Trenerka Agnieszka Legień ukończyła Akademię Wychowania Fizycznego w Katowicach z przygotowaniem pedagogicznym. Jest wychowanką Płomienia Milowice, gdzie w drużynach młodzieżowych zdobywała medale Mistrzostw Polski. Od lat z pasją szkoli młodzież w mini siatkówce, osiągając liczne sukcesy. Jej podejście do dzieci charakteryzuje się zaangażowaniem i troską, tworząc inspirujące środowisko dla młodych sportowców. Dzięki swojemu poświęceniu i profesjonalizmowi, trenerka Agnieszka skutecznie motywuje młodych zawodników do osiągania pełnego potencjału."
          isEven={true}
        />
        <CoachCard
          image="https://plomienmilowice.pl/paulina-baltrukiewicz.jpg"
          name="Paulina Bałtrukiewicz"
          text="Trenerka Paulina Bałtrukiewicz w naszej akademii specjalizuje się w poprawie koordynacji i motoryki zawodników. Ukończyła Akademię Wychowania Fizycznego w Katowicach, zdobywając specjalizacje z wychowania fizycznego i gimnastyki korekcyjnej. Od wielu lat pracuje jako trenerka przygotowania motorycznego Zdobyła doświadczenie jako II trenerka piłki siatkowej Kadry Śląska Młodziczek rocznika 2009 oraz jako obecna trenerka przygotowania motorycznego Kadry Polski U15 Młodziczek. Jej nowoczesne metody treningowe pomagają zawodnikom poprawić ich koordynację i kondycję. Trenerka Paulina znana jest z indywidualnego podejścia do każdego podopiecznego, co pozwala na dostosowanie treningów do ich potrzeb i możliwości."
          isEven={false}
        />
        <CoachCard
          image="https://plomienmilowice.pl/nadia-peszko.jpg"
          name="Nadia Peszko"
          text="Trenerka Nadia Peszko jest absolwentką psychologii na Uniwersytecie SWPS ze specjalizacją psychologii sportu i aktywności fizycznej oraz studiów podyplomowych z psychologii sportu na Poznańskim AWF. Posiada bogate doświadczenie w pracy indywidualnej, jako członek sztabów szkoleniowych i dydaktyk na uczelniach wyższych. Współpracuje ze sportowcami na różnym etapie kariery i poziomie zaawansowania. W przeszłości była reprezentantką klubów Polskiej Ligi Siatkówki, młodzieżową reprezentantką Polski i medalistką Mistrzostw Polski. W Akademii Siatkówki Płomień Milowice trenerka Nadia pracuje zarówno z zawodnikami, jak i ich rodzicami, wspierając rozwój mentalny młodych sportowców."
          isEven={true}
        />
      </section>
    </main>
  );
}
