"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Slider } from "@/components/slider/Slider";
import { firstSliderElements } from "@/constants/constants";

export const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section
      className={
        "h-svh min-h-[40rem] flex items-center justify-center relative bg-center bg-cover bg-landing-image"
      }
    >
      <article
        className={`flex items-center justify-center bg-gradient-to-t from-nav-bg-start[.25] to-nav-bg-end[.25] bg-clip-padding backdrop-filter backdrop-blur-md rounded-3xl text-white border border-gray-400 border-opacity-10 shadow-xl ${
          isDesktop ? "h-[30rem] w-[55rem]" : "h-[60%] w-[90%]"
        }`}
      >
        <div
          className={`tracking-widest ${
            isDesktop
              ? "w-[48rem] h-[23rem] bg-cover bg-no-repeat bg-right-bottom bg-landing-card-bg"
              : "px-5 py-10 flex flex-col items-center text-center"
          }`}
        >
          <h1
            className={`font-extrabold ${
              isDesktop ? "w-[30rem] text-3xl" : "text-xl"
            }`}
          >
            AKADEMIA SIATKÓWKI
            <br />
            PŁOMIEŃ MILOWICE
          </h1>
          <p className={`mt-8 ${isDesktop ? "w-[25rem] text-xl" : ""}`}>
            W sercu Milowic, tworzymy
            <br />
            przyszłych mistrzów, ucząc
            <br />
            siatkówki z pasją
            <br />i profesjonalizmem
          </p>
          <div
            className={`p-6 text-center font-bold bg-gradient-to-r from-nav-bg-start to-nav-bg-end rounded-xl shadow-lg ${
              isDesktop ? "w-[20rem] mt-20" : "mt-12"
            }`}
          >
            Rozpalmy razem płomień!
          </div>
        </div>
      </article>
      <Slider elements={firstSliderElements} style="bg-white" />
    </section>
  );
};
