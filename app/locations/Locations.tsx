"use client";

import Image, { StaticImageData } from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import Hala1 from "@/public/about-hala-2.webp";
import Hala2 from "@/public/szkola1.jpg";
import Hala3 from "@/public/szkola2.jpg";
import Hala4 from "@/public/szkola3.jpg";
import Hala5 from "@/public/szkola4.jpg";
import LocationsImage from "@/public/LOKALIZACJE_mapa.svg";
import Link from "next/link";

const LocationCard = ({
  image,
  title,
  address,
  groups,
}: {
  image: StaticImageData;
  title: string;
  address: string;
  groups: Array<string>;
}) => {
  return (
    <Link
      className={`rounded-3xl border border-gray-100 shadow-lg relative`}
      href={"https://plomienmilowice.sportsmanago.pl/rekrutacja"}
      target="_blank"
    >
      <Image
        src={image}
        alt={"hala sportowa"}
        width={432}
        height={250}
        quality={100}
        className={"w-full h-44 rounded-3xl"}
      />
      <div className={`p-3`}>
        <h2 className={`pb-1 text-sm font-semibold`}>{title}</h2>
        <p className={`pb-3 text-xs font-semibold`}>{address}</p>
        <ul className={`flex gap-1`}>
          {groups.map((group, i) => (
            <li
              className={
                "px-2 py-1 text-[0.6rem] text-white text-center bg-custom-gold rounded-full"
              }
              key={i}
            >
              {group}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

const LocationImage = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <article
      className={`flex flex-col gap-14 items-center ${
        isDesktop ? "w-[55rem]" : null
      }`}
    >
      <h1 className={"text-2xl font-semibold"}>
        Nasze <span className={"text-custom-gold"}>lokalizacje</span>
      </h1>
      <Image
        src={LocationsImage}
        alt="lokalizacje"
        width={500}
        height={250}
        className={`${isDesktop ? "w-full" : "hidden"}`}
      />
    </article>
  );
};

const LocationCards = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <article
      className={`flex flex-col gap-14 ${
        isDesktop ? "w-[55rem]" : "items-center"
      }`}
    >
      <div className={`flex flex-col gap-5`}>
        <h1 className={`text-2xl font-semibold`}>Sosnowiec</h1>
        <div
          className={`grid gap-4 ${
            isDesktop ? "w-full grid-cols-3" : "w-[17.75rem] grid-cols-1"
          }`}
        >
          <LocationCard
            image={Hala1}
            title={"Hala sportowa w Milowicach"}
            address={"ul. Baczyńskiego 4"}
            groups={["Iskry", "Płomyki", "Kinder", "Młodzik", "Talent"]}
          />
          <LocationCard
            image={Hala2}
            title={"Technikum nr 6"}
            address={"ul. Legionów 9"}
            groups={["Iskry", "Płomyki", "Kinder", "Młodzik", "Talent"]}
          />
          <LocationCard
            image={Hala3}
            title={"Sportowa Szkoła Podstawowa nr 17"}
            address={"ul. Zamkowa 17"}
            groups={["Iskry", "Płomyki", "Kinder", "Młodzik", "Talent"]}
          />
        </div>
      </div>
      <div className={`flex flex-col gap-5`}>
        <h1 className={`text-2xl font-semibold`}>Piekary Śląskie</h1>
        <div
          className={`grid gap-4 ${
            isDesktop ? "w-full grid-cols-3" : "w-[17.75rem] grid-cols-1"
          }`}
        >
          <LocationCard
            image={Hala4}
            title={"Miejska Szkoła Podstawowa nr 5"}
            address={"ul. Chopina 11"}
            groups={["Iskry", "Płomyki", "Kinder", "Młodzik"]}
          />
          <LocationCard
            image={Hala5}
            title={"Miejska Szkoła Podstawowa nr 12"}
            address={"ul. Związkowa 14"}
            groups={["Płomyki", "Kinder", "Młodzik"]}
          />
        </div>
      </div>
    </article>
  );
};

export const Locations = () => {
  return (
    <section
      className={
        "pt-16 pb-8 flex flex-col relative items-center space-y-20 bg-white"
      }
    >
      <LocationImage />
      <LocationCards />
    </section>
  );
};
