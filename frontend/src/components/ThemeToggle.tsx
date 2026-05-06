import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/provider/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5" strokeWidth={1.5} />
        ) : (
          <Moon className="w-5 h-5" strokeWidth={1.5} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
