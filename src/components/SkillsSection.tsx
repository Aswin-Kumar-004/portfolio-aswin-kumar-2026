import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "Python (Pandas, NumPy, OpenCV)", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "Machine Learning / Deep Learning", level: 90, color: "from-blue-400 to-indigo-500" },
  { name: "PyTorch / Scikit-learn", level: 88, color: "from-purple-400 to-pink-500" },
  { name: "Power BI / Data Visualization", level: 92, color: "from-green-400 to-teal-500" },
  { name: "SQL (PostgreSQL, MySQL)", level: 88, color: "from-yellow-400 to-orange-500" },
  { name: "Azure (Data Factory, Databricks)", level: 78, color: "from-orange-400 to-red-500" },
  { name: "LLM / RAG Systems", level: 82, color: "from-teal-400 to-cyan-500" },
  { name: "FastAPI / Docker", level: 75, color: "from-pink-400 to-purple-500" },
];

const tools = [
  "VS Code", "Jupyter", "Git", "Docker", "Azure", "MongoDB",
  "Power Query", "Matplotlib", "Seaborn", "XGBoost"
];

const SkillBar = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = skill.level / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= skill.level) {
          setCount(skill.level);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-rajdhani text-lg text-foreground">{skill.name}</span>
        <span className="font-orbitron text-lg font-bold text-primary">{count}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-rajdhani text-primary text-lg tracking-widest uppercase mb-4 block">
            My Expertise
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills bars */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="font-orbitron text-xl font-bold mb-8 text-foreground"
            >
              Proficiency Levels
            </motion.h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Tools grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="font-orbitron text-xl font-bold mb-8 text-foreground"
            >
              Tools & Technologies
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px hsl(180 100% 50% / 0.3)" 
                  }}
                  className="glass-card p-4 text-center cursor-pointer group"
                >
                  <span className="font-rajdhani text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Coding profiles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12"
            >
              <h3 className="font-orbitron text-xl font-bold mb-6 text-foreground">
                Coding Profiles
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "GitHub", url: "https://github.com/Aswin-Kumar-004" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/aswin-kumar-viswanathan/" },
                  { name: "LeetCode", url: "#" },
                  { name: "SkillRack", url: "#" }
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 glass-card border border-primary/30 font-rajdhani text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {platform.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
