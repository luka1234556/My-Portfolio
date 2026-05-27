import { useState } from "react";
import "./section3.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaMobile 
} from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbUxCircle } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
import { IoLanguageSharp } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";

function Section3() {
    const skillCategories = [
        {
        title: "Front-end",
        skills: [
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
        ],
        },

        {
        title: "Back-end",
        skills: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express" },
        ],
        },

        {
        title: "Tools",
        skills: [
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <FaFigma />, name: "Figma" },
            { icon: <VscVscodeInsiders />, name: "VS Code" },
            { icon: <RiVercelLine />, name: "Vercel" },
        ],
        },

        {
        title: "UI & Responsive",
        skills: [
            { icon: <FaMobile  />, name: "Responsive Design" },
            { icon: <TbUxCircle />, name: "Modern UI" },
            { icon: <CgDarkMode />, name: "Dark/Light modes" },
            { icon: <IoLanguageSharp />, name: "language support" },
        ],
        },
    ];

    const [level, setLevel] = useState(0);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section
        id="skills"
        >
            <div className="skills-header">
                <h2>Technologies I Work With</h2>

                <p>
                Tools and technologies I use to build modern web experiences.
                </p>
            </div>

            <motion.div
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            >
                {skillCategories.map((category, index) => (
                <motion.div 
                className="skill-card" 
                key={index} 
                variants={item}>
                    <h3>{category.title}</h3>

                    <div className="skill-icons">
                    {category.skills.map((skill, i) => (
                        <div 
                        className="skill-icon"
                        key={i}>
                            {skill.icon}
                        <span>
                            {skill.name}
                        </span>
                        </div>
                    ))}
                    </div>
            </motion.div>
            ))}
        </motion.div>

        </section>
        
    )   
}

export default Section3;