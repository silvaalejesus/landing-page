import Container from "../components/Container";

const HeroSection = () => {
  return (
    <section className={` py-0 lg:py-[92px] bg-dark-blue`}>
      <Container
        title="Get More Done with whitepace"
        description="Project management software that enables your teams to
          collaborate, plan, analyze and manage everyday tasks"
        buttonText="Try TasKey Free"
        imageSrc={
          "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </section>
  );
};

export default HeroSection;
