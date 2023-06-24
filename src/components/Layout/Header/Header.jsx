import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logo2 from "../../../assets/images/logo2.png";
import NAVMAP from "./data";

const Header = () => {
  // ---CHANGING THE BG-COLOR OF A HEADER ON SCROLL---
  const [shadow, setShadow] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY > 200) {
      setShadow("shadow-2xl");
    } else {
      setShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  // ----CHANGING BG COLOR ON DIFFERENT PAGES----//
  let location = useLocation();
  let currentLocation = location.pathname;
  // ---HANDLING BURGER MENU---
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 bg-yellow rounded-full bg-black transition ease transform duration-300`;
  return (
    <header
      className={`${
        currentLocation === "/about" || "/courses"
          ? "md:bg-blue"
          : "md:bg-white"
      } bg-gray fixed top-0 z-30 w-full ${shadow}`}>
      <nav className="p-5 pt-5 flex justify-between md:justify-around container">
        {/* ---LOGO--- */}
        <div className="">
          <img src={currentLocation === "/about" || "/courses" ? logo2 : logo} alt="logo" />
        </div>
        {/* ---BURGER BUTTON--- */}
        <button
          className="md:hidden flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3 " : ""
            }`}
          />
        </button>
        {/* ---NAVBAR--- */}
        <ul
          className={`hidden md:flex gap-5 font-rubik text-sm font-semibold items-center ${
            currentLocation === "/about" || "/courses" ? "md:text-white" : "md:text-blue"
          }`}>
          {NAVMAP.map(({ text, link, id }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "navActive" : ""} p-3`
                }
                to={link}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* ---BURGER MENU--- */}
      <div className="container">
        {isOpen ? (
          <>
            {NAVMAP.map(({ text, link, id }) => (
              <ul
                key={id}
                className="text-white text-sm pl-2 pb-3 flex flex-col gap-3 font-rubik font-semibold">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "navActive" : ""} p-3`
                    }
                    to={link}>
                    {text}
                  </NavLink>
                  <hr className="bg-gray opacity-20 w-11/12 ml-3" />
                </li>
              </ul>
            ))}
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
