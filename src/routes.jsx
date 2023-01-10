import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  PencilIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Batuan, Sumberdayageologi, Fosil } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
// import React from "react-router-dom";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <PencilIcon {...icon} />,
        name: "Batuan",
        path: "/batuan",
        element: <Batuan />,
      },
      {
        icon: <PencilIcon {...icon} />,
        name: "Fosil",
        path: "/fosil",
        element: <Fosil />,
      },
      {
        icon: <PencilIcon {...icon} />,
        name: "Sumber Daya Geologi",
        path: "/sumberdayageologi",
        element: <Sumberdayageologi />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      // {
      //   icon: <UserPlusIcon {...icon} />,
      //   name: "sign up",
      //   path: "/sign-up",
      //   element: <SignUp />,
      // },
    ],
  },
];

export default routes;
