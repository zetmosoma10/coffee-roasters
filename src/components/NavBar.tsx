import Logo from "./Logo";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between py-10 max-container">
      <Link to="/">
        <Logo color="#333D4B" />
      </Link>
      <img src={hamburgerIcon} className="md:hidden w-[24px] cursor-pointer" />
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
  );
};

export default NavBar;
