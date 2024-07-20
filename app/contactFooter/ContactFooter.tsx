import Link from "next/link";

import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const ContactFooter = () => {
  return (
    <footer
      className={
        "py-20 flex justify-center bg-gradient-to-t from-nav-bg-start to-nav-bg-end"
      }
    >
      <article className={"w-[66rem] px-8 flex justify-between text-white"}>
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
          <p className={"flex items-center font-semibold tracking-wider"}>
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
            <Link href={""}>
              <FaFacebookSquare size={28} color="#C69A0D" />
            </Link>
            <Link href={""}>
              <FaInstagram size={28} color="#C69A0D" />
            </Link>
          </div>
        </div>
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
            <Link href={""}>Regulamin</Link>
            <Link href={""}>Polityka prywatności</Link>
          </div>
        </div>
      </article>
    </footer>
  );
};
