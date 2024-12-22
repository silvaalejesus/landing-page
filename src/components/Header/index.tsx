import { useState } from "react";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import Logo from "../../assets/Logo-white.svg";
import { nav } from "../../mocks/nav";
import Button from "../Button";
import styles from "./style.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.container_header}>
      <img src={Logo} alt="" className={styles.img} />
      <div className={styles.container_buttons}>
        <div className="hidden xl:flex items-center justify-end md:space-x-8">
          <ul className={styles.nav_links}>
            {nav.map((item) => (
              <li className="hover:text-secondary-300">
                <a href={item.link}>{item.label}</a>
                <img src={item.image} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.buttons}>
          <Button className={"text-primary-200 bg-yellow"}>Login</Button>
          <Button className={"text-white bg-light-blue px-6"} icon={ArrowRight}>
            Try Whitepace free
          </Button>
        </div>
        {/* mobile */}
        <div className="-mr-2 flex xl:hidden">
          <button
            onClick={toggle}
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/200/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* fim mobile */}
        {/* mobile */}
        <div className={`menu ${isOpen ? "block" : "hidden"}`}>
          <ul className="nav_links">
            <li>Teste 1</li>
            <li>Teste 2</li>
            <li>Teste 3</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
