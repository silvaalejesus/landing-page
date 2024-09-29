import ArrowRight from "../../assets/icons/ArrowRight.svg";
import Logo from "../../assets/Logo-white.svg";
import Button from "../Button";
import LanguageSelector from "./LanguageSelector";
import MenuItem from "./MenuItem";
import SocialLinks from "./SocialLinks";
import styles from "./style.module.css";

export const Footer = () => {
  const menuItems = [
    { label: "Product", links: ["Overview", "Pricing", "Customer stories"] },
    {
      label: "Resources",
      links: ["Blog", "Guides & tutorials", "Help center"],
    },
    { label: "Company", links: ["About us", "Careers", "Media kit"] },
  ];

  return (
    <footer className={`${styles.footer}`}>
      <div className="w-full  container">
        <nav className="pb-[100px]">
          <div className="flex flex-wrap gap-[100px]">
            <div className="flex-1 max-w-[240px]">
              <img src={Logo} alt="Logo" width={144} className="pb-[15px]" />
              <p>
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            {menuItems.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
            <div className="call-to-action gap-6 max-w-[260px]">
              <h5 className="font-bold text-h5">Try It Today</h5>
              <p className="py-6">
                Get started for free. Add your whole team as your needs grow.
              </p>
              <Button
                className="bg-light-blue text-p3-regular"
                icon={ArrowRight}
              >
                Start Today
              </Button>
            </div>
          </div>
        </nav>
        <div className="pb-8 border-t-2 bord er-[#2E4E73]"></div>
        <div className="copyright pb-8 flex justify-between">
          <div className="flex justify-between">
            <LanguageSelector />
            <div className="flex ml-[3.75rem] gap-[3.75rem]">
              <a href="#">Terms & privacy</a>
              <a href="#">Security</a>
              <a href="#">Status</a>
              <p>© 2021 Whitepace LLC.</p>
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
