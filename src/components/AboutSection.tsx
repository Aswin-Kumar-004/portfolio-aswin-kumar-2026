import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Award } from "lucide-react";

const stats = [
  { icon: Code, label: "Projects Completed", value: "50+" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Palette, label: "Design Awards", value: "10+" },
  { icon: Rocket, label: "Happy Clients", value: "30+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left content */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block font-rajdhani text-primary text-lg tracking-widest uppercase mb-4"
              variants={itemVariants}
            >
              About Me
            </motion.span>
            
            <motion.h2
              className="font-orbitron text-3xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Passionate{" "}
              <span className="gradient-text">Full-Stack Developer</span>
              <br />
              & Creative Designer
            </motion.h2>

            <motion.p
              className="font-rajdhani text-lg text-muted-foreground mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm a creative developer with a passion for building immersive web experiences. 
              With expertise in React, Three.js, and modern web technologies, I create 
              applications that are not only functional but also visually stunning.
            </motion.p>

            <motion.p
              className="font-rajdhani text-lg text-muted-foreground mb-8 leading-relaxed"
              variants={itemVariants}
            >
              My journey in tech started 5 years ago, and since then I've worked with 
              startups and enterprises alike, delivering solutions that push the boundaries 
              of what's possible on the web.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {["React", "TypeScript", "Three.js", "Node.js", "AWS", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-card text-sm font-rajdhani text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px hsl(180 100% 50% / 0.3)" 
                }}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
                <h3 className="font-orbitron text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </h3>
                <p className="font-rajdhani text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
