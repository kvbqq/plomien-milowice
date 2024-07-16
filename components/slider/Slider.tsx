import { firstSliderElements } from "@/constants/constants";

export const Slider = () => {
  return (
    <section
      className={
        "h-24 w-full absolute bottom-0 flex items-center justify-center bg-white"
      }
    >
      <ul className={"w-[68rem] flex items-center justify-evenly"}>
        {firstSliderElements.map((item, i) => (
          <li key={i} className={"flex items-center"}>
            {item.icon}
            <p className={"w-28 pl-4 text-xs font-medium"}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
