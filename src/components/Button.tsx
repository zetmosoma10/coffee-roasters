import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <a
      href="#"
      className={`${className} inline-block bg-dark_cyan font-fraunces bold 
    text-light_cream py-4 px-8 rounded-[6px] hover:bg-[#66d2cf] focus:bg-[#66d2cf]`}
    >
      {children}
    </a>
  );
};

export default Button;
