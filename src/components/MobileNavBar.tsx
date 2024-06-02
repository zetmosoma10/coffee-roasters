import { Link } from "react-router-dom";

interface Props {
  removeMobileNav: () => void;
}

const MobileNavBar = ({ removeMobileNav }: Props) => {
  return (
    <div
      className="fixed left-0 right-0 h-full font-bold font-fraunces text-2xl text-dark_grey
     bg-light_cream text-center z-10 "
    >
      <ul className="space-y-8 mt-16">
        <li>
          <Link onClick={removeMobileNav} className="active:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={removeMobileNav}
            className="active:underline"
            to="about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            onClick={removeMobileNav}
            className="active:underline"
            to="plan"
          >
            Create Your Plan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavBar;
