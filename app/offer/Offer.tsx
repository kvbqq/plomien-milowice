"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Slider } from "@/components/slider/Slider";
import { secondSliderElements } from "@/constants/constants";

import { Button } from "@/components/button/Button";
import { GoArrowRight } from "react-icons/go";
import Logo from "@/public/plomien-milowice-logo.webp";

const GroupCard = ({
  title,
  yearsList,
}: {
  title: string;
  yearsList?: Array<string>;
}) => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <div
      className={`p-6 text-white bg-gradient-to-t from-nav-bg-start to-nav-bg-end rounded-2xl shadow-2xl z-[1] ${
        isDesktop ? "w-[15rem]" : "w-[90%] max-w-[40rem] flex items-center"
      }`}
    >
      <h1
        className={`flex-1 font-medium ${
          isDesktop ? "mb-7 text-3xl" : "text-2xl"
        }`}
      >
        {title}
      </h1>
      <div className={"flex-1"}>
        <p className={"font-medium"}>Roczniki:</p>
        <ul className={"mt-1 flex space-x-1.5"}>
          {yearsList?.map((year, i) => (
            <li
              className={"w-12 text-center text-sm bg-custom-gold rounded-full"}
              key={i}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const GroupLogo = () => {
  return (
    <div className={"w-[15rem] h-[10rem] flex items-center bg-white"}>
      <Image
        src={Logo}
        alt={"Płomień Milowice"}
        width={110}
        height={110}
        className={"m-auto"}
      />
    </div>
  );
};

export const Offer = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section className={`pb-20 relative`}>
      <article
        className={`flex justify-center bg-white ${
          isDesktop ? "bg-center bg-no-repeat bg-offer-bg" : null
        }`}
      >
        <div className={`${isDesktop ? "w-[55rem] p-12" : "w-full py-12"}`}>
          <h1
            className={`mt-3 mb-11 text-2xl font-semibold ${
              isDesktop ? null : "text-center"
            }`}
          >
            Grupy <span className={"text-custom-gold"}>treningowe</span>
          </h1>
          <div
            className={` ${
              isDesktop
                ? "grid grid-cols-3 grid-rows-2 gap-6 justify-items-center"
                : "flex flex-col items-center space-y-5"
            }`}
          >
            <GroupCard title="Iskry" yearsList={["2017", "2018", "2019"]} />
            <GroupCard title="Płomyki" yearsList={["2015", "2016"]} />
            <GroupCard title="Kinder" yearsList={["2013", "2014"]} />
            <GroupCard title="Młodzik" yearsList={["2011", "2012"]} />
            {isDesktop ? <GroupLogo /> : null}
            <GroupCard title="Talent" yearsList={["2008", "2009", "2010"]} />
          </div>
          <div className={"mt-6 mb-3 flex flex-col items-center space-y-7"}>
            <div
              className={`flex flex-col items-center justify-center space-y-5 rounded-3xl text-center text-2xl font-semibold bg-white border border-gray-100 shadow-lg ${
                isDesktop
                  ? "h-[10rem] w-[33rem]"
                  : "h-[16rem] w-[90%] max-w-[33rem]"
              }`}
            >
              <h1>
                <span className={"text-custom-gold"}>8 treningów</span> w
                miesiącu
              </h1>
              <div
                className={`w-full flex text-xl font-medium ${
                  isDesktop
                    ? "flex-row justify-center gap-16"
                    : "flex-col items-center gap-5"
                }`}
              >
                <div>
                  <h2 className={"mb-1 text-custom-gold"}>Sosnowiec</h2>
                  <p className={"flex items-center space-x-2"}>
                    <span className={"line-through"}>280 zł</span>{" "}
                    <GoArrowRight />
                    <span className={"text-custom-gold"}>200 zł</span>
                  </p>
                </div>
                <div>
                  <h2 className={"mb-1 text-custom-gold"}>Piekary Śląskie</h2>
                  <p className={"flex items-center space-x-2"}>
                    <span className={"line-through"}>240 zł</span>{" "}
                    <GoArrowRight />
                    <span className={"text-custom-gold"}>160 zł</span>
                  </p>
                </div>
              </div>
            </div>
            <Button text="Dołącz do akademii" href="zapisy" />
          </div>
        </div>
      </article>
      <Slider
        elements={secondSliderElements}
        style="bg-nav-bg-start text-white"
      />
    </section>
  );
};
