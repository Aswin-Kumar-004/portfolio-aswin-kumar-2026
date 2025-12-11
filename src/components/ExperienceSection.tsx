import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";


interface BaseExperience {
    type: string;
    period: string;
    description: string;
}

interface WorkExperience extends BaseExperience {
    type: "work";
    role: string;
    company: string;
}

interface EducationExperience extends BaseExperience {
    type: "education";
    degree: string;
    institution: string;
}

type ExperienceItem = WorkExperience | EducationExperience;

const experiences: WorkExperience[] = [
    {
        type: "work",
        role: "Data Scientist",
        company: "e-con Systems",
        period: "2021 - 2023",
        description: "Worked on computer vision projects and delivered measurable business impact.",
    },
    {
        type: "work",
        role: "Machine Learning Intern",
        company: "Rubixe AI Solutions",
        period: "2020 - 2021",
        description: "Hands-on experience with customer segmentation and Power BI dashboards.",
    },
];

const education: EducationExperience[] = [
    {
        type: "education",
        degree: "MSc in Data Science & Analytics",
        institution: "Maynooth University",
        period: "2023 - Present",
        description: "Achieved 1.1 Honours. Specializing in machine learning, deep learning, and computer vision.",
    },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
    const isWork = item.type === "work";
    const Icon = isWork ? Briefcase : GraduationCap;

    return (
        <motion.div
            initial={{ opacity: 0, x: isWork ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
        >
            <div className={`md:flex items-center justify-between group ${isWork ? "flex-row-reverse" : ""}`}>
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10 box-content border-4 border-background group-hover:scale-125 transition-transform duration-300" />

                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full z-10 box-content border-4 border-background md:hidden" />

                {/* Content Card */}
                <div className={`md:w-[45%] mb-8 md:mb-0 ${isWork ? "text-right" : "text-left"}`}>
                    <div className="glass-card p-6 relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
                        <div className={`absolute top-0 w-1 h-full bg-primary ${isWork ? "right-0" : "left-0"} opacity-50`} />

                        <div className={`flex items-center gap-2 mb-2 text-primary ${isWork ? "justify-end" : "justify-start"}`}>
                            <Icon size={18} />
                            <span className="font-rajdhani text-sm tracking-wider uppercase">{item.type}</span>
                        </div>

                        <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">
                            {item.type === "work" ? item.role : item.degree}
                        </h3>

                        <h4 className="font-rajdhani text-lg text-primary/80 mb-2">
                            {item.type === "work" ? item.company : item.institution}
                        </h4>

                        <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${isWork ? "justify-end" : "justify-start"}`}>
                            <Calendar size={14} />
                            <span>{item.period}</span>
                        </div>

                        <p className="font-rajdhani text-muted-foreground">
                            {item.description}
                        </p>
                    </div>
                </div>

                {/* Spacer for alignment */}
                <div className="md:w-[45%]" />
            </div>
        </motion.div>
    );
};

const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const allItems = [...education, ...experiences];

    return (
        <section
            id="experience"
            ref={ref}
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-rajdhani text-primary text-lg tracking-widest uppercase mb-4 block">
                        My Journey
                    </span>
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold">
                        Education & <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

                    <div className="space-y-12">
                        {allItems.map((item, index) => (
                            <ExperienceCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
