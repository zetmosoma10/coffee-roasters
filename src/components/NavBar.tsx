import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggle = () => {
    setToggleNav(!toggleNav);
  };

  const removeMobileNav = () => {
    setToggleNav(false);
  };

  useEffect(() => {
    if (toggleNav) document.body.classList.add("disable-scroll");
    if (!toggleNav) document.body.classList.remove("disable-scroll");
  }, [toggleNav]);

  const activeLink: React.CSSProperties = {
    color: "#333D4B",
  };

  return (
    <header>
      <nav className="flex justify-between py-10">
        <Link to="/">
          <Logo color="#333D4B" />
        </Link>
        <div>
          {toggleNav ? (
            <img
              onClick={toggle}
              src={closeIcon}
              className="md:hidden w-[24px] cursor-pointer"
            />
          ) : (
            <img
              onClick={toggle}
              src={hamburgerIcon}
              className="md:hidden w-[24px] cursor-pointer"
            />
          )}
        </div>
        <ul
          className="hidden md:flex md:items-center md:space-x-6 text-center text-[12px] tracking-[0.92px] 
             lg:space-x-8 text-grey uppercase font-bold"
        >
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeLink : undefined)}
              to="/"
              className="font-barlow hover:text-dark_grey"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeLink : undefined)}
              to="about"
              className="font-barlow hover:text-dark_grey"
            >
              about us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeLink : undefined)}
              to="plan"
              className="font-barlow hover:text-dark_grey"
            >
              create your plan
            </NavLink>
          </li>
        </ul>
      </nav>
      {toggleNav && <MobileNavBar removeMobileNav={removeMobileNav} />}
    </header>
  );
};

export default NavBar;
