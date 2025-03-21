import React from "react";

interface StyledMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Menu: React.FC<StyledMenuProps> = ({ isOpen, children }) => {
  const menuStyle = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <nav
      className={`bg-red-300 flex flex-col justify-center h-screen text-left p-8 absolute top-0 right-0 transition-transform duration-300 ease-in-out ${menuStyle} w-full md:w-auto`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "a") {
          return React.cloneElement(child, {
            className: `text-2xl uppercase p-8 font-bold tracking-[0.5rem] no-underline transition-colors duration-300 text-center md:text-left text-xl md:text-2xl`,
          });
        }
        return child;
      })}
    </nav>
  );
};

export default Menu;
