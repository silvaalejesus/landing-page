import sla from "../assets/Work Together Image.svg";
import Container from "../components/Container";

const WorkTogetherSection = () => {
  return (
    <section>
      <Container
        isReverse
        textColor="black"
        title="Work together"
        description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        buttonText="Try it now"
        imageSrc={sla}
        stylesImage={`object-fill lg:mr-24 lg:w-full `}
      />
    </section>
  );
};

export default WorkTogetherSection;
