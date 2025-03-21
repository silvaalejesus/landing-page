import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ChoosePlanSection from "./ChoosePlanSection";
import ClientSaysSection from "./ClientSaysSection";
import HeroSection from "./HeroSection";
import ProjectManagementSection from "./ProjectManagementSection";
import TryWhitespaceSection from "./TryWhitespaceSection";
import UseExtensionSection from "./UseExtensionSection";
import WorkTogetherSection from "./WorkTogetherSection";
import YourWorkSection from "./YourWorkSection";

const Home = () => {
  return (
    <>
      <header className="bg-dark-blue">
        <Header />
      </header>
      <main>
        <HeroSection />
        <ProjectManagementSection />
        <WorkTogetherSection />
        <UseExtensionSection />
        <ChoosePlanSection />
        <YourWorkSection />
        <ClientSaysSection />
        <TryWhitespaceSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
