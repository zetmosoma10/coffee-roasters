import Logo from "./Logo";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="flex flex-col lg:flex-row lg:justify-between  items-center 
        p-14 lg:py-12 lg:px-0 bg-dark_grey text-light_cream "
    >
      <div className="lg:flex lg:items-center lg:space-x-24">
        <Logo />
        <ul
          className=" text-center text-[12px] tracking-[0.92px] mt-12 lg:mt-0 
            space-y-6 lg:space-y-0 lg:space-x-8 lg:flex lg:items-center
           text-grey uppercase font-bold"
        >
          <li>
            <a className="font-barlow hover:text-light_cream" href="#">
              home
            </a>
          </li>
          <li>
            <a className="font-barlow hover:text-light_cream" href="#">
              about us
            </a>
          </li>
          <li>
            <a className="font-barlow hover:text-light_cream" href="#">
              create your plan
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-12 lg:mt-0">
        <ul className="flex space-x-6">
          <li className="cursor-pointer">
            <img src={facebookIcon} alt="" />
          </li>
          <li className="cursor-pointer">
            <img src={instagramIcon} alt="" />
          </li>
          <li className="cursor-pointer">
            <a href="#">{<BsTwitterX size="24px" />}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
