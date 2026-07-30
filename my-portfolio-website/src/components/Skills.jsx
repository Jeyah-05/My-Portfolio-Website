import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
    FaPython,
    FaPhp,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaFigma,
    FaWordpress,
    FaWindows,
    FaLinux,
    FaDatabase,
    FaCloud,
} from "react-icons/fa";

import SkillImage1 from "../assets/image1.jpg";

const skillCategories = [
    {
        title: "Frontend Languages",
        color: "pink",
        skills: [
            {
                name: "HTML",
                icon: <FaHtml5 />,
                color: "text-orange-500",
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />,
                color: "text-blue-500",
            },
            {
                name: "JavaScript",
                icon: <FaJs />,
                color: "text-yellow-400",
            },
        ],
    },

    {
        title: "Backend Languages",
        color: "teal",
        skills: [
            {
                name: "Java",
                icon: <FaJava />,
                color: "text-red-500",
            },
            {
                name: "Python",
                icon: <FaPython />,
                color: "text-blue-500",
            },
            {
                name: "PHP",
                icon: <FaPhp />,
                color: "text-indigo-500",
            },
        ],
    },

    {
        title: "Framework & Libraries",
        color: "pink",
        skills: [
            {
                name: "React",
                icon: <FaReact />,
                color: "text-cyan-400",
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />,
                color: "text-green-600",
            },
            {
                name: "Express.js",
                icon: (
                    <span className="font-bold text-2xl">
                        ex
                    </span>
                ),
                color: "text-gray-700 dark:text-gray-200",
            },
            {
                name: "Tailwind CSS",
                icon: (
                    <span className="font-bold text-xl">
                        ≋
                    </span>
                ),
                color: "text-cyan-400",
            },
        ],
    },

    {
        title: "Developer Tools",
        color: "teal",
        skills: [
            {
                name: "GitHub",
                icon: <FaGithub />,
                color: "text-gray-800 dark:text-white",
            },
            {
                name: "Git",
                icon: <FaGitAlt />,
                color: "text-orange-600",
            },
            {
                name: "Figma",
                icon: <FaFigma />,
                color: "text-pink-500",
            },
            {
                name: "WordPress",
                icon: <FaWordpress />,
                color: "text-blue-600",
            },
        ],
    },

    {
        title: "Databases & Cloud",
        color: "pink",
        skills: [
            {
                name: "MySQL",
                icon: <FaDatabase />,
                color: "text-blue-500",
            },
            {
                name: "Google Cloud",
                icon: <FaCloud />,
                color: "text-blue-500",
            },
            {
                name: "AWS",
                icon: (
                    <span className="font-bold text-xl">
                        AWS
                    </span>
                ),
                color: "text-orange-500",
            },
        ],
    },

    {
        title: "Operating Systems",
        color: "teal",
        skills: [
            {
                name: "Windows",
                icon: <FaWindows />,
                color: "text-blue-500",
            },
            {
                name: "Ubuntu",
                icon: <FaLinux />,
                color: "text-orange-500",
            },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="max-w-7xl mx-auto px-6 pb-20 scroll-mt-24"
        >
            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">

                {/* LEFT - SKILLS */}
                <div>
                    {/* Section Title */}
                    <h2 className="font-serif text-6xl font-bold mb-6">
                        <span className="text-teal-700 dark:text-teal-400">
                            Technical
                        </span>{" "}
                        <span className="text-pink-300 dark:text-pink-400">
                            Skills
                        </span>
                    </h2>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`min-h-[120px] p-4 border ${
                                    category.color === "pink"
                                        ? "border-pink-300 dark:border-pink-400"
                                        : "border-teal-600 dark:border-teal-400"
                                } ${
                                    category.color === "pink"
                                        ? "bg-pink-50 dark:bg-pink-950/30"
                                        : "bg-white dark:bg-zinc-900"
                                } transition duration-300 hover:shadow-lg`}
                            >
                                {/* Category Title */}
                                <h3 className="text-lg font-medium text-black dark:text-white mb-5">
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex flex-col items-center gap-2 min-w-[60px]"
                                            >
                                                <div
                                                    className={`text-3xl ${skill.color}`}
                                                >
                                                    {skill.icon}
                                                </div>

                                                <span className="text-sm text-black dark:text-gray-200 text-center">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT - IMAGE COLLAGE */}
                <div className="hidden lg:grid grid-cols-2 gap-2 h-[520px] pt-25">

                    {/* Top Left - Tall */}
                    <div className="row-span-2 overflow-hidden rounded-xl">
                        <img
                            src={SkillImage1}
                            alt="Web development"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Top Right */}
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={SkillImage1}
                            alt="Coding"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Bottom Right */}
                    <div className="row-span-2 overflow-hidden rounded-xl">
                        <img
                            src={SkillImage1}
                            alt="Technology"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Bottom Left */}
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={SkillImage1}
                            alt="Programming"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;