"use client";

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
      className={`flex items-center relative ${
        isDesktop ? "w-[55rem]" : "w-[90%]"
      }`}
    >
      <div
        className={`flex justify-between py-8 z-10 bg-white bg-opacity-30 backdrop-blur-xl rounded-2xl border border-gray-200 border-opacity-40 shadow-lg ${
          isDesktop
            ? [isEven ? "flex-row-reverse pr-8" : "pl-8"]
            : "flex-col-reverse gap-8"
        }`}
      >
        <h1
          className={`${isDesktop ? "w-3/5 text-justify" : "px-8 text-center"}`}
        >
          {text}
        </h1>
        <div
          className={`flex relative justify-center ${isDesktop ? "w-2/5" : ""}`}
        >
          <Image
            src={image}
            alt={name}
            width={3307}
            height={4724}
            style={{ height: "350px", width: "auto" }}
          />
          <h1
            className={
              "w-[75%] text-center absolute bottom-0 bg-nav-bg-start py-4 text-white font-medium rounded-lg"
            }
          >
            {name}
          </h1>
        </div>
      </div>
      {isDesktop ? (
        <div
          className={`h-[70%] aspect-square absolute rounded-full bg-custom-gold ${
            isEven ? "-right-[9rem]" : "-left-[9rem]"
          }`}
        ></div>
      ) : null}
    </article>
  );
};

export default function CoachesInfo() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main>
      <section
        className={"pt-36 pb-28 flex flex-col gap-10 items-center bg-white"}
      >
        <h1
          className={`w-[55rem] pt-10 text-2xl font-semibold ${
            isDesktop ? "" : "text-center"
          }`}
        >
          Nasi trenerzy
        </h1>
        <CoachCard
          image="https://plomienmilowice.pl/agata-kopczyk.jpg"
          name="Agata Kopczyk"
          text="Założycielka Akademii Siatkówki Płomień Milowice. Jako była siatkarka, wielokrotnie zdobywała Mistrzostwo Polski. Razem z Płomieniem Milowice zdobyła Wicemistrzostwo oraz brązowy medal Mistrzostw Polski. Wielokrotna reprezentantka Polski. Po zakończeniu kariery sportowej poświęciła się trenowaniu młodzieży. Razem ze swoimi drużynami wielokrotnie osiągała liczne sukcesy na wielu turniejach ogólnopolskich, w tym Mistrzostwach Polski. Jej podopieczne regularnie występują w Tauron Lidze i reprezentują kraj na arenie międzynarodowej. Trenerka Agata z pasją i profesjonalizmem rozwija umiejętności sportowe młodzieży, budując ich charakter i promując zasady fair play. Tworzy otwartą, wspierającą atmosferę, stale doskonaląc swoje metody treningowe."
          isEven={false}
        />
        <CoachCard
          image="https://plomienmilowice.pl/agnieszka-legien.jpg"
          name="Agnieszka Legień"
          text="Trenerka Agnieszka Legień ukończyła studia na kierunku wychowanie fizyczne na AWK w Katowicach, zdobywając wiedzę teoretyczną, praktyczną i przygotowanie pedagogiczne. Posiada licencjat z piłki siatkowej i dyplom trenera piłki siatkowej kl II. Jest wychowanką Płomienia Milowice, gdzie w drużynach młodzieżowych zdobywała liczne sukcesy. Od lat z pasją szkoli młodzież w mini siatkówce, łącząc naukę i zabawę. Jej podejście do dzieci charakteryzuje się zaangażowaniem i troską, co sprawia, że potrafi tworzyć atmosferę wsparcia i motywacji dla młodych adeptów siatkówki."
          isEven={true}
        />
        <CoachCard
          image="https://plomienmilowice.pl/paulina-baltrukiewicz.png"
          name="Paulina Bałtrukiewicz"
          text="Trenerka Paulina Bałtrukiewicz w naszej akademii specjalizuje się nauką techniki ćwiczeń fizycznych i poprawą zdolności motorycznych zawodników. Ukończyła Akademię Wychowania Fizycznego w Katowicach, na kierunku Wychowanie Fizyczne ze  specjalizacją z gimnastyki korekcyjnej, treningu personalnego i funkcjonalnego. Pracuje jako trenerka przygotowania motorycznego z kadrą Polski U-16 oraz z kadrą województwa śląskiego. Na co dzień jest trenerką piłki siatkowej w Klubie Uczelnianym AZS UE Katowice oraz nauczycielką wychowania fizycznego. Jej nowoczesne metody treningowe pomagają zawodnikom poprawić ich wzorce ruchowe, co wpływa na wzrost zdolności koordynacyjnych i kondycyjnych."
          isEven={false}
        />
        <CoachCard
          image="https://plomienmilowice.pl/nadia-peszko.jpg"
          name="Nadia Peszko"
          text="Trenerka Nadia Peszko jest absolwentką psychologii na Uniwersytecie SWPS ze specjalizacją psychologii sportu i aktywności fizycznej oraz studiów podyplomowych z psychologii sportu na Poznańskim AWF. Posiada bogate doświadczenie w pracy indywidualnej jako członek sztabów szkoleniowych i dydaktyk na uczelniach wyższych. Współpracuje ze sportowcami na różnym etapie kariery i poziomie zaawansowania. W przeszłości była reprezentantką klubów Polskiej Ligi Siatkówki, młodzieżową reprezentantką Polski i medalistką Mistrzostw Polski. W Akademii Siatkówki Płomień Milowice trenerka Nadia pracuje zarówno z zawodnikami, jak i ich rodzicami, wspierając rozwój umiejętności psychologicznych niezbędnych w sporcie."
          isEven={true}
        />
        <CoachCard
          image="https://plomienmilowice.pl/angelika.png"
          name="Angelika Danielik"
          text="Trenerka Angelika Danielik to młoda, ambitna trenerka, która wnosi do Akademii świeżość i nowoczesne podejście. Ukończyła studia I stopnia na AWF w Katowicach na kierunku Sport, specjalizując się w przygotowaniu motorycznym, i kontynuuje naukę na kierunku Wychowanie Fizyczne. Jej wiedza oraz umiejętności, potwierdzone certyfikatem trenera piłki siatkowej PZPS, umożliwiają jej prowadzenie treningów na wysokim poziomie. Jako była zawodniczka MUKS Dargfil Tomaszów Mazowiecki, osiągnęła liczne sukcesy w siatkówce młodzieżowej, w tym Wicemistrzostwo Polski Kadetek. Trenerka Angelika doskonale rozumie potrzeby młodych sportowców, a jej profesjonalne podejście łączy z entuzjazmem, co sprawia, że treningi z nią są nie tylko efektywne, ale także bardzo inspirujące."
          isEven={false}
        />
      </section>
    </main>
  );
}
