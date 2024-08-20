"use client";

import Link from "next/link";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const ContactFooter = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <footer
      id="kontakt"
      className={
        "py-20 flex justify-center bg-gradient-to-t from-nav-bg-start to-nav-bg-end"
      }
    >
      <article
        className={`flex px-8 text-white ${
          isDesktop
            ? "w-[66rem] justify-center space-x-20"
            : "w-full flex-col space-y-10"
        }`}
      >
        <div
          className={`${
            isDesktop
              ? "flex space-x-20"
              : "flex flex-col-reverse space-y-reverse space-y-10"
          }`}
        >
          <div className={"flex flex-col space-y-2"}>
            <h1 className={"mb-3 text-xl font-semibold"}>Kontakt</h1>
            <p className={"flex items-center font-semibold tracking-wider"}>
              <MdOutlinePhone
                size={28}
                color="#C69A0D"
                style={{ marginRight: 10 }}
              />
              505 518 713
            </p>
            <p
              className={`flex items-center font-semibold tracking-wider ${
                isDesktop ? null : ""
              }`}
            >
              <MdOutlineEmail
                size={28}
                color="#C69A0D"
                style={{ marginRight: 10 }}
              />
              akademia@plomienmilowice.pl
            </p>
          </div>
          <div>
            <h1 className={"mb-5 text-xl font-semibold"}>Social Media</h1>
            <div className={"flex items-center space-x-3"}>
              <Link href={"https://www.facebook.com/akademiaplomienmilowice"}>
                <FaFacebookSquare size={28} color="#C69A0D" />
              </Link>
              <Link href={"https://www.instagram.com/plomien.milowice"}>
                <FaInstagram size={28} color="#C69A0D" />
              </Link>
            </div>
          </div>
        </div>
        <div className={`flex  ${isDesktop ? "space-x-20" : "space-x-12"}`}>
          <div>
            <h1 className={"mb-5 text-xl font-semibold"}>Akademia</h1>
            <div className={"flex flex-col space-y-2 font-thin text-sm"}>
              <Link href={"/o-akademii"}>O akademii</Link>
              <Link href={"/nasi-trenerzy"}>Nasi trenerzy</Link>
              <Link href={"/klub-patronow"}>Klub 100 patronów</Link>
            </div>
          </div>
          <div>
            <h1 className={"mb-5 text-xl font-semibold"}>Dokumenty</h1>
            <div className={"flex flex-col space-y-2 font-thin text-sm"}>
              <Link href={"/regulamin"}>Regulamin</Link>
              <Link href={"/polityka-prywatnosci"}>Polityka prywatności</Link>
              <Link
                href={
                  "../Akademia Siatkówki Płomień Milowice - Standardy Ochrony Małoletnich.pdf"
                }
              >
                Standardy Ochrony Małoletnich
              </Link>
            </div>
          </div>
        </div>
      </article>
    </footer>
  );
};
