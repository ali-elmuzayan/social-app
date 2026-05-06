import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ThemeToggle from "@/components/ThemeToggle";

const LandingNav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 left-0 right-0 z-50 px-4 py-4 "
    >
      <div className="max-w-6xl mx-auto bg-card/80 backdrop-blur-md border border-border rounded-2xl px-6 py-3 ">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-display font-semibold text-foreground">
            Nexus
          </h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                About
              </a>
              <a
                href="#download"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                Download
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link to="/auth">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground font-medium"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/app">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                >
                  Launch App{" "}
                  <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default LandingNav;
