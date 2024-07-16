"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "@/public/Logo.png";

const NavLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt={"Płomień Milowice"} className="w-14" />
    </Link>
  );
};

const NavMenu = () => {
  return (
    <ul className={"w-[46rem] flex items-center justify-evenly"}>
      {navLinks.map((item, i) => (
        <li key={i}>
          <Link href={item.href} className={"hover:text-font-white-hover"}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavButton = () => {
  return (
    <button className={"w-44 py-3 bg-custom-gold rounded-full"}>
      Dołącz do nas
    </button>
  );
};

const NavMobileHamburger = () => {
  return (
    <button>
      <HiOutlineMenu size={45} color="#C69A0D" />
    </button>
  );
};

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <nav
      className={`h-24 w-full px-5 py-3 fixed flex items-center justify-center bg-gradient-to-t from-nav-bg-start to-nav-bg-end text-font-white ${
        isDesktop ? "" : "justify-between"
      }`}
    >
      <NavLogo />
      {isDesktop ? [<NavMenu />, <NavButton />] : <NavMobileHamburger />}
    </nav>
  );
};

export default Nav;
