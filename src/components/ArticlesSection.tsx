import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Building Immersive 3D Experiences with Three.js and React",
    excerpt: "Learn how to create stunning 3D graphics in your React applications using Three.js and React Three Fiber.",
    date: "Dec 2024",
    readTime: "8 min read",
    category: "3D Graphics",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
  },
  {
    title: "The Future of Web Animation: Framer Motion Deep Dive",
    excerpt: "Explore advanced animation techniques with Framer Motion to create fluid, production-ready animations.",
    date: "Nov 2024",
    readTime: "6 min read",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
  },
  {
    title: "Optimizing React Performance for Large-Scale Applications",
    excerpt: "Best practices and techniques for building blazing-fast React applications that scale.",
    date: "Oct 2024",
    readTime: "10 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
  },
];

const ArticleCard = ({ article, index }: { article: typeof articles[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group glass-card overflow-hidden cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-rajdhani bg-primary/90 text-primary-foreground rounded-full">
          {article.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>

        <h3 className="font-orbitron text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="font-rajdhani text-muted-foreground mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <motion.span
          className="inline-flex items-center gap-1 text-primary font-rajdhani font-medium"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
        </motion.span>
      </div>
    </motion.article>
  );
};

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="articles"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-rajdhani text-primary text-lg tracking-widest uppercase mb-4 block">
            Latest Insights
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Articles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
