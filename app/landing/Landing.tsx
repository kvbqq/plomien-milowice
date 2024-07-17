import React from "react";

import { Slider } from "@/components/slider/Slider";

const LandingCard = () => {
  return (
    <article
      className={
        "h-[65%] w-[46rem] bg-nav-bg-start/[.8] backdrop-blur-sm rounded-3xl"
      }
    ></article>
  );
};

export const Landing = () => {
  return (
    <header
      className={
        "h-svh bg-cover flex items-center justify-center relative bg-center bg-landing-image"
      }
    >
      <LandingCard />
      <Slider />
    </header>
  );
};
