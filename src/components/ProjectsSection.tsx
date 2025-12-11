import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "GANs for Cell Culture Counting",
    description: "Achieved 92% segmentation accuracy using a Pix2Pix GAN on custom 256×256 microscopy image pairs. Integrated into a real-time automated cancer cell counting pipeline.",
    tech: ["PyTorch", "OpenCV", "Pandas", "ImageJ"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
    github: "https://github.com/Aswin-Kumar-004/Application-of-GANs-to-microscopy-image-for-cell-culture-counting",
    live: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Restaurant Takeaway App",
    description: "Led the design and development of a customer-focused restaurant takeaway web application utilizing MERN, enhancing user engagement and operational efficiency by 40%.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
    github: "#",
    live: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "ML Demo Project",
    description: "Machine learning demonstration project showcasing various ML algorithms and techniques with practical implementations.",
    tech: ["Python", "Scikit-learn", "Jupyter", "Pandas"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    github: "https://github.com/Aswin-Kumar-004/ML_Demo_Project",
    live: "#",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "ArXiv Paper Curator",
    description: "Automated tool for curating and organizing research papers from ArXiv, helping researchers stay updated with the latest publications.",
    tech: ["Python", "API", "Automation", "MIT License"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&auto=format&fit=crop",
    github: "https://github.com/Aswin-Kumar-004/arxiv-paper-curator-2.0",
    live: "#",
    color: "from-orange-500 to-red-500",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
    >
      {/* Background image */}
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-orbitron text-xl md:text-2xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          
          <motion.p
            className="font-rajdhani text-foreground/80 mb-4 line-clamp-2"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-rajdhani bg-primary/20 text-primary rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 glass-card text-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={project.live}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 glass-card text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "inset 0 0 60px hsl(180 100% 50% / 0.2)"
            : "inset 0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-rajdhani text-primary text-lg tracking-widest uppercase mb-4 block">
            My Work
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 font-rajdhani text-lg text-primary hover:text-accent transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
