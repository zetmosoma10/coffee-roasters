import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="font-barlow hover:text-dark_grey">
              home
            </Link>
          </li>
          <li>
            <Link to="about" className="font-barlow hover:text-dark_grey">
              about us
            </Link>
          </li>
          <li>
            <Link to="plan" className="font-barlow hover:text-dark_grey">
              create your plan
            </Link>
          </li>
        </ul>
      </nav>
      {toggleNav && <MobileNavBar removeMobileNav={removeMobileNav} />}
    </header>
  );
};

export default NavBar;
