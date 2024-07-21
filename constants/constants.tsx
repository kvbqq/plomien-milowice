import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdMood } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

import { SliderElement } from "@/types/types";

export const navLinks = [
  {
    label: "O akademii",
    href: "/o-akademii",
  },
  {
    label: "Nasi trenerzy",
    href: "/nasi-trenerzy",
  },
  {
    label: "Klub 100 patronów",
    href: "/klub-patronow",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

export const firstSliderElements: SliderElement[] = [
  {
    icon: <MdOutlineGroups size={52} color="#C69A0D" />,
    text: "Doświadczona kadra trenerska",
  },
  {
    icon: <MdOutlineSportsVolleyball size={52} color="#C69A0D" />,
    text: "Rozwój umiejętności siatkarskich",
  },
  {
    icon: <TbHeartPlus size={52} color="#C69A0D" />,
    text: "Promowanie zdrowego trybu życia",
  },
  {
    icon: <MdOutlineTrendingUp size={52} color="#C69A0D" />,
    text: "Indywidualne podejście do zawodnika",
  },
  {
    icon: <MdMood size={52} color="#C69A0D" />,
    text: "Dla dzieci i młodzieży w wieku 6-17 lat",
  },
];

export const secondSliderElements: SliderElement[] = [
  {
    icon: <FaMedal size={44} color="#C69A0D" />,
    text: "10+ medali młodzieżowych Mistrzostw Polski",
  },
  {
    icon: <GrTrophy size={44} color="#C69A0D" />,
    text: "Wielokrotna mistrzyni Polski",
  },
  {
    icon: <MdMoreTime size={52} color="#C69A0D" />,
    text: "20 lat doświadczenia w trenowaniu młodzieży",
  },
  {
    icon: <PiPlant size={52} color="#C69A0D" />,
    text: "Gwarantowany rozwój umiejętności i charakteru",
  },
];
