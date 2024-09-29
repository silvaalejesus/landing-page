import sla from "../assets/Work Together Image.svg";
import ArrowRight from "../assets/icons/ArrowRight.svg";
import android from "../assets/logos/android-logo.svg";
import apple from "../assets/logos/apple-logo.svg";
import windows from "../assets/logos/windows-logo.svg";
import Button from "../components/Button";
import CardClient from "../components/CardOpinion";
import PriceBoard from "../components/CardPlan/PriceBoard";
import Container from "../components/Container";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { opinions } from "../mocks/clientOpinion";
import styles from "./home.module.css";

const Home = () => {
  const slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <>
      {/* h-screen */}
      <header className="bg-dark-blue">
        <Header />
      </header>
      <main>
        {/* section hero */}
        <section className={`${styles.hero} bg-dark-blue`}>
          <Container
            title="Get More Done with whitepace"
            description="Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks"
            buttonText="Try Whitepace free"
            imageSrc={
              "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </section>

        {/* section 1 */}
        <section>
          <Container
            textColor="black"
            cardWidth="w-[40%]"
            title="Project Management"
            description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
            buttonText="Get Started"
            // icon={CheckmarkIcon} // Assuming CheckmarkIcon is defined elsewhere
            imageSrc="https://images.unsplash.com/photo-1567422252597-bd99bc6a0c29?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
          />
        </section>

        {/* section 2 */}
        <section>
          <Container
            isReverse
            textColor="black"
            title="Work together"
            description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
            buttonText="Try it now"
            imageSrc={sla}
          />
        </section>

        {/* section 3 */}
        <section className="bg-dark-blue">
          <Container
            title="Use as Ehxtension"
            description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
            buttonText="Let's Go"
            imageSrc="https://images.unsplash.com/photo-1623184158370-e306f4634af7?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </section>

        {/* section 4 - chooge your plan */}
        <section>
          <div className={`${styles.section} flex-col  items-center`}>
            <div className="pb-14 text-center w-[60%]">
              <h1 className="h1-title">Choose Your Plan</h1>
              <p className="text-p2-regular">
                Whether you want to get organized, keep your personal life on
                track, or boost workplace productivity, Evernote has the right
                plan for you.
              </p>
            </div>
            <PriceBoard />
          </div>
        </section>

        {/* section 5*/}
        <section className="bg-dark-blue text-white">
          <div
            className={`${styles.section} h-[575px] text-center flex items-center flex-col`}
          >
            <h1 className="text-h1 font-bold">Your work, everywhere you are</h1>
            <p className="text-p2-regular pt-6 pb-[60px]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>

            <Button className="bg-light-blue text-white" icon={ArrowRight}>
              Try Taskey
            </Button>
          </div>
        </section>

        {/* section 6 - clients says */}
        <section>
          <div className={`${styles.section} flex-col `}>
            <h1 className="text-h1 font-bold text-center pb-[60px]">
              What Our Clients Says
            </h1>
            <div className="flex gap-8">
              {opinions.map((opinion, index) => (
                <CardClient key={index} {...opinion} />
              ))}
            </div>
          </div>
        </section>

        {/* section 7 */}
        <section className="bg-dark-blue text-secondary-100">
          <div className={`${styles.section} flex-col items-center`}>
            <div className="text-center w-1/2">
              <h1 className="h1-title">Try Whitepace today</h1>
              <div className="text-2xl pt-6 pb-10">
                <p>Get started for free.</p>
                <p>Add your whole team as your needs grow.</p>
              </div>
            </div>
            <Button className="bg-light-blue" icon={ArrowRight}>
              Try Taskey free
            </Button>
            <p className="my-10 text-2xl">On a big team? Contact sales</p>
            <div className="flex gap-10">
              <img src={apple} alt="" />
              <img src={windows} alt="" />
              <img src={android} alt="" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
      {/* <Carousel slides={slides} /> */}
    </>
  );
};

export default Home;
