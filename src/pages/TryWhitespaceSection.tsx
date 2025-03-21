import ArrowRight from "../assets/icons/ArrowRight.svg";
import android from "../assets/logos/android-logo.svg";
import apple from "../assets/logos/apple-logo.svg";
import windows from "../assets/logos/windows-logo.svg";
import Button from "../components/Button";
import styles from "./home.module.css";

const TryWhitespaceSection = () => {
  return (
    <section className="bg-dark-blue text-secondary-100">
      <div
        className={`${styles.section} pt-24 flex-col items-start lg:items-center`}
      >
        <div className="lg:text-center w-1/2">
          <h1 className="h1-title">Try Whitepace today</h1>
          <div className="text-lg sm:text-2xl pt-6 pb-10">
            <p>Get started for free.</p>
            <p>Add your whole team as your needs grow.</p>
          </div>
        </div>
        <Button className="bg-light-blue" icon={ArrowRight}>
          Try Taskey free
        </Button>

        <p className="text-lg my-10 sm:text-2xl">
          On a big team? Contact sales
        </p>
        <div className="flex gap-10">
          <img className="w-9 sm:w-full" src={apple} alt="" />
          <img className="w-9 sm:w-full" src={windows} alt="" />
          <img className="w-9 sm:w-full" src={android} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TryWhitespaceSection;
