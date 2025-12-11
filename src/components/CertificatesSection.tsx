import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
    {
        title: "MSc Data Science & Analytics",
        issuer: "Maynooth University",
        date: "2024-2025",
        credential: "1.1 Honours",
        link: "#",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    },
    {
        title: "B.E Electronics & Communication",
        issuer: "R.M.K Engineering College",
        date: "2019-2023",
        credential: "8.98 CGPA",
        link: "#",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    },
    {
        title: "Machine Learning & Neural Networks",
        issuer: "Maynooth University",
        date: "2024",
        credential: "Key Module",
        link: "#",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    },
    {
        title: "Azure Data Science & Big Data",
        issuer: "Maynooth University",
        date: "2024",
        credential: "Key Module",
        link: "#",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    },
    {
        title: "Bayesian Analysis",
        issuer: "Maynooth University",
        date: "2024",
        credential: "Key Module",
        link: "#",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop",
    },
    {
        title: "R Programming",
        issuer: "Maynooth University",
        date: "2024",
        credential: "Key Module",
        link: "#",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
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
