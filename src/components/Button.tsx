import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  type = "link",
}: Props) => {
  if (type === "link")
    return (
      <Link
        to="plan"
        className={`${className} inline-block bg-dark_cyan font-fraunces bold 
      text-light_cream py-4 px-8 rounded-[6px] hover:bg-[#66d2cf] focus:bg-[#66d2cf]`}
      >
        {children}
      </Link>
    );

  if (type === "button")
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={` inline-block bg-dark_cyan font-fraunces bold 
      text-light_cream py-4 px-8 rounded-[6px] hover:bg-[#66d2cf] focus:bg-[#66d2cf] ${className}`}
      >
        {children}
      </button>
    );
};

export default Button;
