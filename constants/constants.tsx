import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdMood } from "react-icons/md";

import { GrTrophy } from "react-icons/gr";

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

export const firstSliderElements = [
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

export const secondSliderElements = [
  {
    icon: <GrTrophy size={52} color="#C69A0D" />,
    text: "Wielokrotna mistrzyni Polski",
  },
];
