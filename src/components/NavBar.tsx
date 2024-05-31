import Logo from "./Logo";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between py-10 max-container">
      <Logo color="#333D4B" />
      <img src={hamburgerIcon} className="md:hidden w-[24px] cursor-pointer" />
      <ul
        className="hidden md:flex md:items-center md:space-x-6 text-center text-[12px] tracking-[0.92px] 
             lg:space-x-8 text-grey uppercase font-bold"
      >
        <li>
          <a className="font-barlow hover:text-dark_grey" href="#">
            home
          </a>
        </li>
        <li>
          <a className="font-barlow hover:text-dark_grey" href="#">
            about us
          </a>
        </li>
        <li>
          <a className="font-barlow hover:text-dark_grey" href="#">
            create your plan
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
