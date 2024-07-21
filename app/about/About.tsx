"use client";

import Image from "next/image";

import { Button } from "@/components/button/Button";
import { Slider } from "@/components/slider/Slider";
import { secondSliderElements } from "@/constants/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AboutCard = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <article
      className={`h-[24rem] p-14 rounded-3xl shadow-2xl ${
        isDesktop
          ? "w-[55rem] bg-no-repeat bg-cover bg-right-bottom bg-about-card-image"
          : "w-[90%]"
      }`}
    >
      <h1 className={"text-2xl font-medium"}>O akademii</h1>
      <h2 className={"mt-5 mb-2 text-lg font-medium"}>
        Nasza <span className={"text-custom-gold"}>misja</span>
      </h2>
      <p className={"w-[26rem] mb-10"}>
        Kształcimy młodych sportowców, promując zdrowy styl życia i wartości
        społeczne w Milowicach. Tworzymy inspirujące środowisko, gdzie pasja,
        dyscyplina i współpraca prowadzą do sukcesów.
      </p>
      <Button text="Poznaj nas" href="o-akademii" />
    </article>
  );
};

const AboutOwner = () => {
  return (
    <article className={"w-[55rem]"}>
      <h1 className={"pl-12 text-2xl font-medium"}>
        Założycielka <span className={"text-custom-gold"}>akademii</span>
      </h1>
      <div className={"w-full py-8 flex items-center justify-between"}>
        <div className={"flex flex-col items-center justify-center"}>
          <Image
            src={"/about-owner.png"}
            alt="Agata Kopczyk"
            width={1000}
            height={1000}
            style={{ width: "auto", height: "100%" }}
          />
          <div
            className={
              "w-[16rem] p-4 text-center text-white font-semibold tracking-widest bg-nav-bg-start rounded-lg justify-self-center"
            }
          >
            Agata Kopczyk
          </div>
        </div>
        <div className={"flex flex-col space-y-8 items-center justify-center"}>
          <p className={"w-[30rem] p-8 rounded-3xl shadow-2xl"}>
            <span className={"font-semibold"}>Agata Kopczyk</span> to{" "}
            <span className={"text-custom-gold"}>serce i dusza akademii</span>,
            wychowanka Płomienia Milowice, wielokrotna{" "}
            <span className={"text-custom-gold"}>
              reprezentankta Polski i medalistka mistrzostw Polski
            </span>
            . Wielokrotnie doprowadziła drużyny młodzieżowe do{" "}
            <span className={"text-custom-gold"}>
              triumfów na Mistrzostwach Polski
            </span>
            . Jej podejście, oparte na indywidualnym podejściu do zawodnika,
            pozwala zawodnikom osiągać pełny potencjał w sporcie i życiu
            codziennym.
          </p>
          <Button text="Poznaj naszych trenerów" href="nasi-trenerzy" />
        </div>
      </div>
    </article>
  );
};

export const About = () => {
  return (
    <section
      className={
        "pt-16 pb-32 flex flex-col relative items-center space-y-20 bg-white"
      }
    >
      <AboutCard />
      <AboutOwner />
      <Slider
        elements={secondSliderElements}
        style="bg-nav-bg-start text-white"
      />
    </section>
  );
};
