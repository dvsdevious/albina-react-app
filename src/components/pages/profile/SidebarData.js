import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaIcons.FaUserAlt />,
    cName: "side-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <GiIcons.GiCalendar />,
    cName: "side-text",
  },
  {
    title: "Training",
    path: "/training",
    icon: <GiIcons.GiWeightLiftingUp />,
    cName: "side-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <FaIcons.FaCoins />,
    cName: "side-text",
  },
  {
    title: "UserSettings",
    path: "/usersettings",
    icon: <FaIcons.FaUserCog />,
    cName: "side-text",
  },
];
