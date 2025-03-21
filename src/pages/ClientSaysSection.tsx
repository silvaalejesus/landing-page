import Card from "../components/CardOpinion";
import styles from "./home.module.css";

const ClientSaysSection = () => {
  return (
    <section className="overflow-hidden">
      <div className={`${styles.section} flex-col overflow-hidden`}>
        <h1 className=" text-4xl sm:text-h1 font-bold text-center pb-[60px]">
          What Our Clients Says
        </h1>
        <Card />
      </div>
    </section>
  );
};

export default ClientSaysSection;
