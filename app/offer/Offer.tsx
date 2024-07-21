import Image from "next/image";

import { Button } from "@/components/button/Button";
import { GoArrowRight } from "react-icons/go";
import Logo from "@/public/offer-logo.png";

const GroupCard = ({
  title,
  yearsList,
}: {
  title: string;
  yearsList?: Array<string>;
}) => {
  return (
    <div
      className={
        "w-[15rem] p-6 text-white bg-gradient-to-t from-nav-bg-start to-nav-bg-end rounded-2xl shadow-2xl z-[1]"
      }
    >
      <h1 className={"mb-7 text-3xl font-medium"}>{title}</h1>
      <p className={"font-medium"}>Roczniki:</p>
      <ul className={"mt-1 flex space-x-1.5"}>
        {yearsList?.map((year, i) => (
          <li
            className={"w-12 text-center text-sm bg-custom-gold rounded-full"}
            key={i}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
};

const GroupLogo = () => {
  return (
    <div className={"w-[15rem] h-[10rem] bg-white"}>
      <Image src={Logo} alt={"Płomień Milowice"} className={"m-auto"} />
    </div>
  );
};

export const Offer = () => {
  return (
    <section
      className={
        "flex justify-center bg-center bg-no-repeat bg-offer-bg bg-white"
      }
    >
      <div className={"w-[55rem] p-12"}>
        <h1 className={"mt-3 mb-11 text-2xl font-medium"}>
          Grupy <span className={"text-custom-gold"}>treningowe</span>
        </h1>
        <div
          className={"grid grid-cols-3 grid-rows-2 gap-6 justify-items-center"}
        >
          <GroupCard title="Skrzat" yearsList={["2016", "2017", "2018"]} />
          <GroupCard title="Kinder" yearsList={["2014", "2015"]} />
          <GroupCard title="Kinder+" yearsList={["2012", "2013"]} />
          <GroupCard title="Młodzik" yearsList={["2010", "2011"]} />
          <GroupLogo />
          <GroupCard title="Talent" yearsList={["2007", "2008", "2009"]} />
        </div>
        <div className={"mt-6 mb-3 flex flex-col items-center space-y-7"}>
          <div
            className={
              "w-[33rem] h-[10rem] flex flex-col items-center justify-center space-y-4 rounded-3xl text-center text-2xl font-medium bg-white shadow-2xl"
            }
          >
            <h1>
              <span className={"text-custom-gold"}>8 treningów</span> w miesiącu
            </h1>
            <p className={"flex items-center space-x-5"}>
              <span className={"line-through"}>240 zł</span> <GoArrowRight />
              <span className={"text-custom-gold"}>160 zł</span>
            </p>
          </div>
          <Button text="Dołącz do akademii" href="" />
        </div>
      </div>
    </section>
  );
};
