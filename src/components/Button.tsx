import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <Link
      to="plan"
      className={`${className} inline-block bg-dark_cyan font-fraunces bold 
    text-light_cream py-4 px-8 rounded-[6px] hover:bg-[#66d2cf] focus:bg-[#66d2cf]`}
    >
      {children}
    </Link>
  );
};

export default Button;
