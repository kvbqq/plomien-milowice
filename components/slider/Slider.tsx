"use client";

import React, { useState } from "react";

// ICONS
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// TYPES
import { SliderElement } from "@/types/types";

interface SliderProps {
  elements: SliderElement[];
  style?: string;
}

export const Slider: React.FC<SliderProps> = ({ elements, style }) => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [slide, setSlide] = useState(1);

  const previousSlide = () => {
    if (slide - 1 < 1) {
      setSlide(elements.length);
    } else {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide + 1 > elements.length) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  // const time = setTimeout(() => {
  //   nextSlide();
  // }, 5000);

  return (
    <div
      className={`h-24 w-full absolute bottom-0 flex items-center justify-center shadow-lg z-10 ${style}`}
    >
      {isDesktop ? (
        <ul className={"w-[60rem] flex items-center justify-evenly"}>
          {elements.map((item, i) => (
            <li key={`slider-${item.id}-` + i} className={"flex items-center"}>
              {item.icon}
              <p className={"w-24 pl-2 text-[0.65rem] font-semibold"}>
                {item.text}
              </p>
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
            {elements.slice(slide - 1, slide).map((item, i) => (
              <li
                key={`slider-${item.id}-` + i}
                className={"flex items-center"}
              >
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
