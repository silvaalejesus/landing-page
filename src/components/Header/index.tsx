import { useState } from "react";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import Logo from "../../assets/Logo-white.svg";
import { nav } from "../../mocks/nav";
import Button from "../Button";
import Burger from "../MenuHamburguer/Burger";
import Menu from "../MenuHamburguer/Menu";
import styles from "./style.module.css";

const Header = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <nav className={styles.container_header}>
      <img src={Logo} alt="" className={styles.img} />
      <div className={`${styles.container_buttons}`}>
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
        <div className={`${styles.buttons} hidden md:flex`}>
          <Button className={"text-primary-200 bg-yellow"}>Login</Button>
          <Button className={"text-white bg-light-blue px-6"} icon={ArrowRight}>
            Try Whitepace free
          </Button>
        </div>
      </div>
      {/* mobile */}
      <div className="xl:hidden ">
        <Burger isOpen={open} setOpen={setIsOpen} />
        {open && (
          <Menu isOpen={open}>
            {nav.map((item) => (
              <a key={item.label} href={item.link}>
                {item.label}
              </a>
            ))}
            <div
              className={`${styles.buttons} md:hidden flex-col items-center`}
            >
              <Button className={"text-primary-200 bg-yellow"}>Login</Button>
              <Button
                className={"text-white bg-light-blue px-6"}
                icon={ArrowRight}
              >
                Try Whitepace free
              </Button>
            </div>
          </Menu>
        )}
      </div>
    </nav>
  );
};

export default Header;
