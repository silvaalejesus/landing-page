import ArrowRight from "../../assets/icons/ArrowRight.svg";
import Logo from "../../assets/Logo-white.svg";
import { nav } from "../../mocks/nav";
import Button from "../Button";
import styles from "./style.module.css";

const Header = () => {
  return (
    <nav className={styles.container_header}>
      <img src={Logo} alt="" className={styles.img} />
      <div className={styles.container_buttons}>
        <ul className={styles.nav_links}>
          {nav.map((item) => (
            <li className="hover:text-secondary-300">
              <a href={item.link}>{item.label}</a>
              <img src={item.image} alt="" />
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <Button className={"text-primary-200 bg-yellow"}>Login</Button>
          <Button className={"text-white bg-light-blue px-6"} icon={ArrowRight}>
            Try Whitepace free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
