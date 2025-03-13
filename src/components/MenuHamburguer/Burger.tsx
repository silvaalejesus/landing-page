import React from "react";

interface StyledBurgerProps {
  setOpen: (isOpen: boolean) => void;
  isOpen: boolean; // Se necessário, para animações
}
// StyledBurger
const Burger: React.FC<StyledBurgerProps> = ({ setOpen, isOpen }) => {
  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className={`relative top-[5%] right-8 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none`}
    >
      <div
        className={`w-11 h-[0.25rem] bg-gray-200 rounded-lg transition-all duration-300 transform origin-left ${
          isOpen ? "rotate-45 translate-y-[0.625rem]" : ""
        }`}
      />
      <div
        className={`w-11 h-[0.25rem] bg-gray-200 rounded-lg transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`w-11 h-[0.25rem] bg-gray-200 rounded-lg transition-all duration-300 transform origin-left ${
          isOpen ? "-rotate-45 -translate-y-[0.625rem]" : ""
        }`}
      />
    </button>
  );
};

export default Burger;

export const theme = {
  primaryDark: "#0D0C1D",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "576px",
};
