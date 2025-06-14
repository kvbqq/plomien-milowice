"use client";

import Image from "next/image";
import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Slider } from "@/components/slider/Slider";
import { firstSliderElements } from "@/constants/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/button/Button";

const landingImages = [
  { src: "/1.png", alt: "Slajd 1" },
  { src: "/2.jpg", alt: "Slajd 2" },
  { src: "/3.jpg", alt: "Slajd 3" },
  { src: "/4.jpg", alt: "Slajd 4" },
  { src: "/5.jpg", alt: "Slajd 5" },
];

export const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    renderMode: "precision",
    drag: false,
    defaultAnimation: {
      duration: 2000,
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 8000);
    },
  });

  return (
    <section
      className={`h-[75svh] min-h-[40rem] flex items-center justify-center relative bg-center bg-cover bg-landing-image`}
    >
      <article
        className={`flex text-white tracking-widest ${
          isDesktop
            ? "w-[58rem]"
            : "w-[90%] flex-col items-center justify-center gap-4"
        }`}
      >
        <div
          className={`${
            isDesktop ? "w-1/2" : "h-1/2 max-w-[22rem]"
          } flex flex-col justify-center`}
        >
          <h1
            className={`font-extrabold ${isDesktop ? "text-3xl" : "text-xl"}`}
          >
            AKADEMIA SIATKÓWKI PŁOMIEŃ MILOWICE
          </h1>
          <p
            className={`${
              isDesktop ? "w-[68%] mt-5 mb-10 text-xl" : "mt-1 mb-4 text-base"
            }`}
          >
            Tworzymy przyszłych mistrzów, ucząc siatkówki z pasją i
            profesjonalizmem
          </p>
          <Button
            text="Zapisz się do Akademii"
            href="zapisy"
            style={`${isDesktop ? "w-[80%] py-4 font-semibold" : "text-sm"}`}
          />
        </div>
        <div
          className={`${
            isDesktop ? "w-1/2" : "w-full h-[11rem] relative max-w-[22rem]"
          }`}
        >
          <div
            ref={sliderRef}
            className="keen-slider h-full w-full relative rounded-2xl overflow-hidden"
          >
            {landingImages.map((img, idx) => (
              <div key={idx} className="keen-slider__slide relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={100}
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {landingImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-500 border-2 border-white ${
                    currentSlide === idx ? "bg-white" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div
          className={`${
            isDesktop ? "w-1/2" : "w-full h-[11rem] relative max-w-[22rem]"
          }`}
        >
          {isDesktop ? (
            <Image
              src={LandingImage1}
              alt={"Landing Image"}
              quality={100}
              className={`rounded-2xl`}
            />
          ) : (
            <Image
              src={LandingImage1}
              alt={"Landing Image"}
              fill
              objectFit="cover"
              quality={100}
              className={`rounded-2xl`}
            />
          )}
        </div> */}
      </article>
      <Slider elements={firstSliderElements} style="bg-white" />
    </section>
  );
};

{
  /* <article
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
    <p className={`${isDesktop ? "w-[25rem] mt-8 mb-24 text-xl" : "mt-3"}`}>
      W sercu Milowic, tworzymy
      <br />
      przyszłych mistrzów, ucząc
      <br />
      siatkówki z pasją
      <br />i profesjonalizmem
    </p>
    <div className={`${isDesktop ? "" : "w-full flex flex-col items-center"}`}>
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
</article>; */
}
