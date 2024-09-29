import React from "react";
import DownArrow from "../../assets/icons/DownArrow.svg";
// import styles from "./LinkWithIcon.module.css";

interface LinkProps {
  text: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ text, href }) => {
  return (
    <a href={href} className="p2-regular flex gap-2.5 items-center">
      {text}
      <img src={DownArrow} alt="" srcset="" />
    </a>
  );
};

export default Link;
