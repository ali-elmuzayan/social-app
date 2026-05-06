import LandingNav from "@/components/landing/LandingNav";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <LandingNav />

      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Social App</p>
    </footer>
  );
};

const FeaturesSection = () => {
  return (
    <section>
      <h2>Features</h2>
      <p></p>
    </section>
  );
};

const HeroSection = () => {
  return <section></section>;
};

export default Landing;
