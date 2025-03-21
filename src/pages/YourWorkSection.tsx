import Container from "../components/Container";

const YourWorkSection = () => {
  return (
    <section className="bg-dark-blue text-white">
      <Container
        title="Your work, everywhere you are"
        description=" Access your notes from your computer, phone or tablet by
        synchronising with various services, including whitepace, Dropbox
        and OneDrive. The app is available on Windows, macOS, Linux,
        Android and iOS. A terminal app is also available!"
        buttonText="Try Taskey"
        stylesContent="text-start items-start lg:text-center lg:flex lg:items-center"
        stylesButton="mb-0"
      />
    </section>
  );
};

export default YourWorkSection;
