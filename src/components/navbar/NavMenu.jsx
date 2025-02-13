import React from "react";
import { Link } from "react-router-dom";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/map", label: "Map" },
  { path: "/fullcalendar", label: "Calendar" },
  { path: "/graphics", label: "Graphics" },
];

const NavMenu = ({ isHomePage, isOpen }) => {
  return (
    <div
      className={`md:flex flex-col md:flex-row gap-2 rounded-xl md:gap-16 mt-2 ${
        isOpen ? "flex flex-col text-center" : "hidden"
      }`}
    >
      {navLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`hover:font-semibold mt-2 md:mt-0 ${
            isHomePage ? "text-white" : "text-dark"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
