import { GraduationCap, Building2, Medal, Trophy, Award } from "lucide-react";
import { FaSchool } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import PMALogo from "../assets/pmalogoicon.png";

const education = [
    {
        school: "Saint Louis University",
        location: "Baguio City",
        degree: "Bachelor of Science in Information Technology",
        year: "May 2026",
        honor: "Magna Cum Laude",
        color: "pink",
        icon: <GraduationCap size={30} />,
    },
    {
        school: "University of the Cordilleras",
        location: "Baguio City",
        degree: "Information and Communication Technology - Contact Center Services",
        year: "August 2022",
        honor: "With High Honors",
        color: "teal",
        icon: <Building2 size={30} />,
    },
];

const awards = [
    {
        icon: <Medal size={30} />,
        title: "Magna Cum Laude",
    },
    {
        icon: <Trophy size={30} />,
        title: "2025 BPI-DOST Innovation Awards Finalist",
    },
    {
        icon: <GiAchievement size={30} />,
        title: "Consistent Dean's Lister (2022-2026)",
    },
    {
        icon: <Award size={30} />,
        title: "Academic Excellence Award - With High Honors (2022)",
    },
];

const Education = () => {
    return (
        <section id="education" className="scroll-mt-24 px-35 max-w-8xl mx-auto bg-white dark:bg-black">
            {/* EDUCATION */}
            <h2 className="font-serif text-6xl font-bold text-pink-300 dark:text-pink-400">
                Education
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mt-2">
                {/* Education Cards */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl border p-8 transition-all duration-300
                            ${
                                item.color === "pink"
                                    ? "border-gray-300 dark:border-gray-300"
                                    : "border-gray-600 dark:border-gray-500"
                            }
                            bg-white dark:bg-zinc-900
                            shadow-lg dark:shadow-none`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white
                                    ${
                                        item.color === "pink"
                                            ? "bg-pink-300 dark:bg-pink-400 text-black"
                                            : "bg-teal-600 dark:bg-teal-500"
                                    }`}
                                >
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-black dark:text-white">
                                        {item.school}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {item.location}
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed mb-8 text-black dark:text-gray-200">
                                {item.degree}
                            </p>

                            <button
                                className={`rounded-full px-6 py-2 font-medium transition-colors
                                ${
                                    item.color === "pink"
                                        ? "bg-pink-50 text-pink-500 border border-pink-300 dark:bg-pink-400 dark:text-black dark:border-pink-400"
                                        : "bg-teal-50 text-teal-700 border border-teal-600 dark:bg-teal-500 dark:text-white dark:border-teal-500"
                                }`}
                            >
                                {item.honor}
                            </button>

                            <p className="text-lg text-black dark:text-gray-200 pt-10">{item.year}</p>
                        </div>
                    ))}
                </div>

                {/* Awards */}
                <div className="rounded-3xl border border-pink-300 dark:border-pink-300
                bg-pink-50 dark:bg-pink-950/30 p-8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-8 text-black dark:text-white">
                        Achievements & Awards
                    </h3>

                    <div className="space-y-4">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4"
                            >
                                <div className="w-8 flex justify-center shrink-0 text-black dark:text-pink-300">
                                    {award.icon}
                                </div>

                                <p className="leading-relaxed text-lg text-black dark:text-gray-200">
                                    {award.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* EXPERIENCE */}
            <section className="mt-15">
                <h2 className="font-serif text-6xl font-bold text-teal-700 dark:text-teal-400 mb-2">
                        Experience
                </h2>

                <div className="flex items-start gap-10">

                    {/* Timeline */}
                    <div className="hidden md:flex items-center gap-10 w-40 shrink-0">
                        <div className="w-[2px] h-85 bg-pink-300 dark:bg-pink-400"></div>

                        <div className="text-right text-xl leading-tight text-black dark:text-gray-200">
                            <p>January 2026</p>
                            <p>to</p>
                            <p>May 2026</p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-3xl border border-gray-300 dark:border-gray-300 bg-white 
                    dark:bg-zinc-900 shadow-lg dark:shadow-none transition-all duration-300 p-8">
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Logo */}
                            <div className="flex justify-center md:items-center">
                                <img
                                    src={PMALogo}
                                    alt="PMA Logo"
                                    className="w-28 h-28 object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-black dark:text-white">
                                    Web Developer Intern
                                </h3>

                                <p className="mt-1 mb-2 text-lg">
                                    <span className="font-medium text-teal-700 dark:text-teal-400">
                                        Philippine Military Academy (PMA)
                                    </span>
                                    <span className="text-black dark:text-gray-300">
                                        {" "}
                                        - Baguio City
                                    </span>
                                </p>

                                <ul className="list-disc pl-5 text-lg leading-relaxed text-black dark:text-gray-200">
                                    <li>
                                        Developed and maintained the PMA Admission System,
                                        enhancing applicant registration and admission
                                        workflows.
                                    </li>

                                    <li>
                                        Improved the PMA Admin Portal, streamlining
                                        applicant management, monitoring, and
                                        administrative operations.
                                    </li>

                                    <li>
                                        Implemented responsive web interfaces and backend
                                        functionalities using React.js, Node.js, and
                                        Tailwind CSS.
                                    </li>

                                    <li>
                                        Configured and deployed the web application to an
                                        Ubuntu-based production server.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Education;