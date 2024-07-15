import React from "react";

import { Slider } from "@/components/slider/Slider";

const LandingCard = () => {
  return (
    <small
      className={
        "h-[65%] w-[46rem] bg-nav-bg-start/[.8] backdrop-blur-sm rounded-3xl"
      }
    ></small>
  );
};

export const Landing = () => {
  return (
    <header
      className={
        "h-svh bg-cover flex items-center justify-center relative -z-10 bg-center bg-landing-image"
      }
    >
      <LandingCard />
      <Slider />
    </header>
  );
};
