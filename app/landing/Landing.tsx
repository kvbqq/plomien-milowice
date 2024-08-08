"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Slider } from "@/components/slider/Slider";
import { firstSliderElements } from "@/constants/constants";
import { Button } from "@/components/button/Button";

import MobileLanding from "@/public/mobile-landing.png";

export const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section
      className={`h-svh min-h-[40rem] flex items-center justify-center relative bg-center bg-cover bg-landing-image ${
        isDesktop ? "" : ""
      }`}
    >
      <article
        className={`flex items-center justify-center text-white ${
          isDesktop
            ? "h-[30rem] w-[55rem] bg-gradient-to-t from-nav-bg-start/[.25] to-nav-bg-end/[.25] backdrop-blur-md rounded-3xl border  border-gray-400 border-opacity-10 shadow-xl"
            : "h-full w-full backdrop-blur-md"
        }`}
      >
        <div
          className={`tracking-widest ${
            isDesktop
              ? "w-[48rem] h-[23rem] bg-cover bg-no-repeat bg-right-bottom bg-landing-card-bg"
              : "max-w-[48rem] px-5 py-10 flex flex-col"
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
          <p
            className={`${isDesktop ? "w-[25rem] mt-8 mb-24 text-xl" : "mt-3"}`}
          >
            W sercu Milowic, tworzymy
            <br />
            przyszłych mistrzów, ucząc
            <br />
            siatkówki z pasją
            <br />i profesjonalizmem
          </p>
          <div
            className={`${
              isDesktop ? "" : "w-full flex flex-col items-center"
            }`}
          >
            {isDesktop ? null : (
              <Image src={MobileLanding} alt="landing" className="my-5" />
            )}
            <Button
              text="Dołącz do akademii"
              href="zapisy"
              style={`${isDesktop ? "py-4 font-semibold" : ""}`}
            />
          </div>
        </div>
      </article>
      <Slider elements={firstSliderElements} style="bg-white" />
    </section>
  );
};
