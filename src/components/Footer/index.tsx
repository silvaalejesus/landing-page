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
      <div className="w-full container">
        <nav className="pb-[100px]">
          <div className=" flex flex-col lg:flex-row gap-20 sm:gap-[100px] text-center sm:text-left">
            <div className="lg:max-w-[240px] flex flex-col items-center sm:items-justify sm:items-start">
              <img src={Logo} alt="Logo" width={144} className="pb-[15px]" />
              <p>
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            {menuItems.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
            <div className="w-full flex items-center flex-col sm:items-start sm:w-1/3 call-to-action sm:gap-6 lg:max-w-[260px]">
              <h5 className="text-center font-bold text-h5 lg:text-left">
                Try It Today
              </h5>
              <p className="py-6 w-[90%] lg:w-full">
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
        <div className="hidden lg:block pb-8 border-t-2 border-[#2E4E73]"></div>
        <div className="copyright pb-8 flex justify-between flex-wrap flex-col md:flex-row">
          <div className="pb-10 flex justify-between lg:pb-0 flex-col sm:flex-row">
            <LanguageSelector />
            <div className="flex lg:ml-[3.75rem] gap-5 sm:gap-[3.75rem] flex-col sm:flex-row">
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
