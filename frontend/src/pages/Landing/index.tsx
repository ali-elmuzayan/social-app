import LandingFooter from "@/components/landing/LandingFooter";
import LandingNav from "@/components/landing/LandingNav";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <LandingNav />

      <LandingFooter />
    </div>
  );
};

export default Landing;
