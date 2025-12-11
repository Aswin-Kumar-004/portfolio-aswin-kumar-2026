import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-rajdhani text-lg md:text-xl text-primary mb-4 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text glow-text">Aswin Kumar Viswanathan</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Data Scientist & ML Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-rajdhani text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            I’m a Data Scientist and ML Engineer who builds AI-powered applications using Python, SQL, ML models, LLMs, and cloud technologies. My work bridges software engineering and machine learning to create scalable, real-world solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(180 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-rajdhani font-semibold text-lg rounded-lg glow-border transition-all duration-300"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Hire Me
            </motion.a>

            <motion.a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground font-rajdhani font-semibold text-lg rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.8 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary"
        >
          <ChevronDown size={40} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
