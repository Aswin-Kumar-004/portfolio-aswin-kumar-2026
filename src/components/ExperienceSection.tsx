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
        role: "Data Scientist ",
        company: "Rubixe AI Solutions",
        period: "02/2024 - 09/2024",
        description:
            "Collected and cleaned large-scale customer and transaction datasets from SQL Server and flat files. Applied clustering techniques such as K-Means and DBSCAN for customer segmentation, delivering actionable insights that improved campaign effectiveness by 15%. Built interactive Power BI dashboards to visualize sales trends, segmentation outcomes, and customer engagement metrics.",
    },
    {
        type: "work",
        role: "Computer Vision Engineer",
        company: "e-con Systems",
        period: "01/2023 - 08/2023",
        description:
            "Analyzed device log data using Python and Excel, reducing issue resolution time by 40%. Designed and deployed Power BI dashboards to support R&D and leadership KPIs. Automated image-processing workflows using Python and OpenCV, improving operational efficiency by 45%. Worked with 3D cameras, performing calibration, validation, and troubleshooting to ensure product quality and meet customer requirements.",
    },

];

const education: EducationExperience[] = [
    {
        type: "education",
        degree: "MSc in Data Science & Analytics",
        institution: "Maynooth University",
        period: "09/2024 - 09/2025",
        description:
            "Graduated with 1.1 Honours. Completed advanced modules in Machine Learning & Neural Networks, Bayesian Analysis, Big Data Analytics (Azure), Spatial Databases, R Programming, and System Development & Project Management. Developed strong expertise in ML, deep learning, AI, LLM workflows, data engineering, and analytical modeling.",
    },

    {
        type: "education",
        degree: "B.E in Electronics and Communication Engineering",
        institution: "R.M.K. Engineering College, Anna University",
        period: "07/2019 - 06/2023",
        description:
            "Graduated with 8.98 CGPA (First Class with Distinction). Completed core modules in Data Structures in C, Python Programming, Networking, and Design & Analysis of Algorithms. Developed a strong foundation in programming, system design, and analytical problem-solving that supports my current work in machine learning, AI, and data science.",
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
                <div className={`md:w-[45%] mb-8 md:mb-0 text-left`}>
                    <div className="glass-card p-6 relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
                        <div className={`absolute top-0 w-1 h-full bg-primary left-0 opacity-50`} />

                        <div className={`flex items-center gap-2 mb-2 text-primary justify-start`}>
                            <Icon size={18} />
                            <span className="font-rajdhani text-sm tracking-wider uppercase">{item.type}</span>
                        </div>

                        <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">
                            {item.type === "work" ? item.role : item.degree}
                        </h3>

                        <h4 className="font-rajdhani text-lg text-primary/80 mb-2">
                            {item.type === "work" ? item.company : item.institution}
                        </h4>

                        <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 justify-start`}>
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

    const parseDate = (dateStr: string) => {
        if (dateStr.toLowerCase() === "present") return new Date();
        const [month, year] = dateStr.split("/");
        return new Date(parseInt(year), parseInt(month) - 1);
    };

    const allItems = [...education, ...experiences].sort((a, b) => {
        const getEndDate = (period: string) => {
            const parts = period.split(" - ");
            return parts.length > 1 ? parts[1].trim() : parts[0].trim();
        };

        const dateA = parseDate(getEndDate(a.period));
        const dateB = parseDate(getEndDate(b.period));

        return dateB.getTime() - dateA.getTime();
    });

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
