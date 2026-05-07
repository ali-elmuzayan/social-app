import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const shapes = [
    { size: 300, x: "10%", y: "20%", duration: 20, delay: 0 },
    { size: 200, x: "80%", y: "10%", duration: 25, delay: 2 },
    { size: 150, x: "70%", y: "80%", duration: 18, delay: 1 },
    { size: 250, x: "20%", y: "70%", duration: 22, delay: 3 },
    { size: 180, x: "50%", y: "50%", duration: 24, delay: 0.5 },
    { size: 120, x: "90%", y: "40%", duration: 19, delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />

      {/* Animated shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background:
              index % 2 === 0
                ? "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, hsl(var(--online) / 0.06) 0%, transparent 70%)",
          }}
          initial={{
            scale: 0.8,
            opacity: 0,
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
            x: ["-50%", "-45%", "-55%", "-50%"],
            y: ["-50%", "-55%", "-45%", "-50%"],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
