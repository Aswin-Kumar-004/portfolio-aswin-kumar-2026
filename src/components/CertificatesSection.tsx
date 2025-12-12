import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
    {
        title: "Excel: Mother of Business Intelligence",
        issuer: "Codebasics",
        date: "09/2024",
        credential: "Grade: 100%",
        link: "https://codebasics.io/certificate/CB-51-214997",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
        title: "Supervised Machine Learning",
        issuer: "DeepLearning.AI, Stanford University",
        date: "08/2024",
        credential: "Grade: 100%",
        link: "https://www.coursera.org/account/accomplishments/records/VM2NAZBGQ5EJ",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
    },
    {
        title: "Python for Data Science, AI & Dev",
        issuer: "IBM",
        date: "05/2024",
        credential: "Grade: 100%",
        link: "https://www.coursera.org/account/accomplishments/records/UDCK7U8ZH7UZ",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
        title: "Python For Intermediate Learners",
        issuer: "Codebasics",
        date: "04/2024",
        credential: "Grade: 100%",
        link: "https://codebasics.io/certificate/CB-48-214997",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop",
    },
    {
        title: "Python Functions, Files, & Dictionaries",
        issuer: "University of Michigan",
        date: "09/2020",
        credential: "Grade: 100%",
        link: "https://www.coursera.org/account/accomplishments/records/DDVWBDNPZKD2",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
    },
    {
        title: "Python Basics",
        issuer: "University of Michigan",
        date: "08/2020",
        credential: "Grade: 100%",
        link: "https://www.coursera.org/account/accomplishments/records/8A7WWPVZG9VW",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    },
    {
        title: "C: Programming Fundamentals",
        issuer: "University of California, Santa Cruz",
        date: "07/2020",
        credential: "Grade: 97.90%",
        link: "https://www.coursera.org/account/accomplishments/records/L9LJ8EXKVRGP",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    },

];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const CertificatesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="certificates"
            ref={ref}
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border border-primary/30 mb-6"
                    >
                        <Award className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Certificates</span>
                    </h2>
                    <p className="font-rajdhani text-lg text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and achievements that validate my expertise
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            <div className="glass-card rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500">
                                {/* Certificate Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                                    {/* Glow effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-orbitron text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="font-rajdhani text-muted-foreground mb-4">
                                        {cert.issuer}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            <span className="font-rajdhani">{cert.date}</span>
                                        </div>

                                        <motion.a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, rotate: 15 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                    </div>

                                    {/* Credential ID */}
                                    <div className="mt-4 pt-4 border-t border-border/30">
                                        <p className="font-mono text-xs text-muted-foreground">
                                            Credential: {cert.credential}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
                                        backgroundSize: "200% 100%",
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileHover={{
                                        opacity: 0.3,
                                        backgroundPosition: ["0% 0%", "200% 0%"],
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CertificatesSection;
