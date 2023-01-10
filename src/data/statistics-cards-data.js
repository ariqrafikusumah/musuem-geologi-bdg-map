import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "pink",
    icon: ChartBarIcon,
    title: "Batuan",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: ChartBarIcon,
    title: "Fosil",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "blue",
    icon: ChartBarIcon,
    title: "Sumber Daya Geologi",
    value: "23,342",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  // {
  //   color: "orange",
  //   icon: ChartBarIcon,
  //   title: "Fosil",
  //   value: "103,430",
  //   footer: {
  //     color: "text-green-500",
  //     value: "+5%",
  //     label: "than yesterday",
  //   },
  // },
];

export default statisticsCardsData;
