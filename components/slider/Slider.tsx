"use client";

import { firstSliderElements } from "@/constants/constants";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import React, { useState } from "react";

export const Slider = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [slide, setSlide] = useState(1);

  const previousSlide = () => {
    setSlide(slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide + 1);
  };

  return (
    <section
      className={
        "h-24 w-full absolute bottom-0 flex items-center justify-center bg-white shadow-lg"
      }
    >
      {isDesktop ? (
        <ul className={"w-[68rem] flex items-center justify-evenly"}>
          {firstSliderElements.map((item, i) => (
            <li key={"slider-1-" + i} className={"flex items-center"}>
              {item.icon}
              <p className={"w-28 pl-4 text-xs font-medium"}>{item.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <React.Fragment>
          <button
            onClick={previousSlide}
            className={"w-20 flex justify-center"}
          >
            {slide == 1 ? null : (
              <HiOutlineChevronLeft size={32} color="#C69A0D" />
            )}
          </button>
          <ul className={"w-[68rem] flex items-center justify-evenly"}>
            {firstSliderElements.slice(slide - 1, slide).map((item, i) => (
              <li key={"slider-1-" + i} className={"flex items-center"}>
                {item.icon}
                <p className={"w-28 pl-4 text-xs font-medium"}>{item.text}</p>
              </li>
            ))}
          </ul>
          <button onClick={nextSlide} className={"w-20 flex justify-center"}>
            {slide == firstSliderElements.length ? null : (
              <HiOutlineChevronRight size={32} color="#C69A0D" />
            )}
          </button>
        </React.Fragment>
      )}
    </section>
  );
};
