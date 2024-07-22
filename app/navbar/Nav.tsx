"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import Logo from "@/public/logo.webp";
import { Button } from "@/components/button/Button";

const NavLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt={"Płomień Milowice"} className="w-14 min-w-14" />
    </Link>
  );
};

const NavButton = () => {
  return (
    <button className={"w-44 py-3 bg-custom-gold rounded-full"}>
      Dołącz do nas
    </button>
  );
};

const NavMenu = () => {
  return (
    <React.Fragment>
      <ul className={"w-[50rem] flex items-center justify-evenly"}>
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className={"font-medium hover:text-font-white-hover"}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button text="Dołącz do nas" href="" style="min-w-48" />
    </React.Fragment>
  );
};

const NavMenuMobile = () => {
  return (
    <div className={"w-full pb-10 flex-col text-center"}>
      <ul className={"pb-10"}>
        {navLinks.map((item, i) => (
          <li key={i} className={"py-3"}>
            <Link href={item.href} className={"hover:text-font-white-hover"}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <NavButton />
    </div>
  );
};

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [showNav, setNav] = useState(false);

  const toggle = () => {
    setNav(!showNav);
  };

  return (
    <nav
      className={
        "w-full fixed bg-gradient-to-t from-nav-bg-start to-nav-bg-end text-font-white shadow-2xl z-20"
      }
    >
      <div
        className={`h-24 px-5 py-3 flex items-center justify-center ${
          isDesktop ? null : "justify-between"
        }`}
      >
        <NavLogo />
        {isDesktop ? (
          <NavMenu />
        ) : (
          <button onClick={toggle}>
            {showNav ? (
              <HiOutlineX size={45} color="#C69A0D" />
            ) : (
              <HiOutlineMenu size={45} color="#C69A0D" />
            )}
          </button>
        )}
      </div>
      {showNav && !isDesktop ? <NavMenuMobile /> : null}
    </nav>
  );
};
