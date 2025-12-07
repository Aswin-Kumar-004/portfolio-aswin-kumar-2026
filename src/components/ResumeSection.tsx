import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-rajdhani text-primary text-lg tracking-widest uppercase mb-4 block">
              My Resume
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Download My <span className="gradient-text">CV</span>
            </h2>
            <p className="font-rajdhani text-lg text-muted-foreground">
              Get a comprehensive overview of my experience, skills, and achievements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-6 glass-card flex items-center justify-center"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <FileText className="w-12 h-12 text-primary" />
            </motion.div>

            <h3 className="font-orbitron text-xl font-bold mb-2 text-foreground">
              Full Resume
            </h3>
            <p className="font-rajdhani text-muted-foreground mb-8">
              PDF format • Updated December 2024
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(180 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-rajdhani font-semibold rounded-lg glow-border transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground font-rajdhani font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                View Online
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
