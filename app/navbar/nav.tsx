import React from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
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
    <ul className={"w-[800px] flex items-center justify-evenly"}>
      {navLinks.map((item, i) => (
        <li key={i}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavButton = () => {
  return (
    <button className={"px-6 py-3 bg-custom-gold rounded-full"}>
      Dołącz do nas
    </button>
  );
};

export const Nav = () => {
  return (
    <nav
      className={
        "py-3 flex items-center justify-center bg-gradient-to-t from-nav-bg-start to-nav-bg-end text-font-white"
      }
    >
      <NavLogo />
      <NavMenu />
      <NavButton />
    </nav>
  );
};

export default Nav;
