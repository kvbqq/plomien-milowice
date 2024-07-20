"use client";

import React, { useState } from "react";

import { firstSliderElements } from "@/constants/constants";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Slider = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [slide, setSlide] = useState(1);

  const previousSlide = () => {
    if (slide - 1 < 1) {
      setSlide(firstSliderElements.length);
    } else {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide + 1 > firstSliderElements.length) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  const timer = setTimeout(() => {
    nextSlide();
  }, 5000);

  return (
    <div
      className={
        "h-24 w-full absolute bottom-0 flex items-center justify-center bg-white shadow-lg"
      }
    >
      {isDesktop ? (
        <ul className={"w-[70rem] flex items-center justify-evenly"}>
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
            className={"w-80 flex justify-center"}
          >
            <HiOutlineChevronLeft size={32} color="#C69A0D" />
          </button>
          <ul className={"w-[70rem] flex items-center justify-evenly"}>
            {firstSliderElements.slice(slide - 1, slide).map((item, i) => (
              <li key={"slider-1-" + i} className={"flex items-center"}>
                {item.icon}
                <p className={"w-28 pl-4 text-xs font-medium"}>{item.text}</p>
              </li>
            ))}
          </ul>
          <button onClick={nextSlide} className={"w-80 flex justify-center"}>
            <HiOutlineChevronRight size={32} color="#C69A0D" />
          </button>
        </React.Fragment>
      )}
    </div>
  );
};
