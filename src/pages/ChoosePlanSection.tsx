import PriceBoard from "../components/CardPlan/PriceBoard";
import styles from "./home.module.css";

const ChoosePlanSection = () => {
  return (
    <section className="overflow-hidden lg:overflow-auto">
      <div className={`${styles.section} flex-col  items-center`}>
        <div className="pb-14 text-center w-[60%]">
          <h1 className="h1-title">Choose Your Plan</h1>
          <p className="text-p2-regular">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>

        <PriceBoard />
      </div>
    </section>
  );
};

export default ChoosePlanSection;
