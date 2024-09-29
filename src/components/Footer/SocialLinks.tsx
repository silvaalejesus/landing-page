import Facebook from "../../assets/logos/Facebook.svg";
import Linkedin from "../../assets/logos/Linkedin.svg";
import Twitter from "../../assets/logos/Twitter.svg";

const SocialLinks = () => {
  return (
    <div className="flex gap-8">
      <img src={Facebook} alt="" />
      <img src={Twitter} alt="" />
      <img src={Linkedin} alt="" />
    </div>
  );
};

export default SocialLinks;
