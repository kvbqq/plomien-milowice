// ICONS
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdMood } from "react-icons/md";
// import { FaMedal } from "react-icons/fa";
import { LiaMedalSolid } from "react-icons/lia";
import { GrTrophy } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

// TYPES
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
    id: 1,
    icon: <MdOutlineGroups size={42} color="#C69A0D" />,
    text: "Doświadczona kadra trenerska",
  },
  {
    id: 2,
    icon: <MdOutlineSportsVolleyball size={42} color="#C69A0D" />,
    text: "Rozwój umiejętności siatkarskich",
  },
  {
    id: 3,
    icon: <TbHeartPlus size={42} color="#C69A0D" />,
    text: "Promowanie zdrowego trybu życia",
  },
  {
    id: 4,
    icon: <MdOutlineTrendingUp size={42} color="#C69A0D" />,
    text: "Indywidualne podejście do zawodnika",
  },
  {
    id: 5,
    icon: <MdMood size={42} color="#C69A0D" />,
    text: "Dla dzieci i młodzieży w wieku 6-17 lat",
  },
];

export const secondSliderElements: SliderElement[] = [
  {
    id: 6,
    icon: <LiaMedalSolid size={42} color="#C69A0D" />,
    text: "10+ medali młodzieżowych Mistrzostw Polski",
  },
  {
    id: 7,
    icon: <GrTrophy size={34} color="#C69A0D" />,
    text: "Wielokrotna mistrzyni Polski",
  },
  {
    id: 8,
    icon: <MdMoreTime size={42} color="#C69A0D" />,
    text: "20 lat doświadczenia w trenowaniu młodzieży",
  },
  {
    id: 9,
    icon: <PiPlant size={42} color="#C69A0D" />,
    text: "Gwarantowany rozwój umiejętności i charakteru",
  },
];
