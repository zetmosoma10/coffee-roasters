import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
  type?: string;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  disabled,
  to = "plan",
  type = "link",
}: Props) => {
  if (type === "link")
    return (
      <Link
        to={to}
        className={` inline-block bg-dark_cyan font-fraunces bold 
      text-light_cream py-4 px-8 rounded-[6px] hover:bg-[#66d2cf] focus:bg-[#66d2cf] ${className}`}
      >
        {children}
      </Link>
    );

  if (type === "button")
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${
          disabled && "bg-grey hover:bg-grey cursor-not-allowed"
        } inline-block bg-dark_cyan font-fraunces bold 
      text-light_cream py-4 px-8 rounded-[6px] hover:bg-[#66d2cf] focus:bg-[#66d2cf] ${className}`}
      >
        {children}
      </button>
    );
};

export default Button;
