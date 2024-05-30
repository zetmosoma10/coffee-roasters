import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <a
      href="#"
      className="bg-dark_cyan font-fraunces bold 
    text-light_cream py-4 px-8 rounded-[6px] m-10 hover:bg-[#66d2cf]"
    >
      {children}
    </a>
  );
};

export default Button;
