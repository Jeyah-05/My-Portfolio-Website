import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const skillCategories = [
    {
        title: "Frontend Languages",
        skills: [
            { name: "JavaScript", icon: "javascript/javascript-original" },
            { name: "HTML", icon: "html5/html5-original" },
            { name: "CSS", icon: "css3/css3-original" },
        ],
    },
    {
        title: "Backend Languages",
        skills: [
            { name: "Java", icon: "java/java-original" },
            { name: "Python", icon: "python/python-original" },
            { name: "PHP", icon: "php/php-original" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "React.js", icon: "react/react-original" },
            { name: "Node.js", icon: "nodejs/nodejs-original" },
            { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
            { name: "Express.js", icon: "express/express-original" },
        ],
    },
    {
        title: "Developer Tools",
        skills: [
            { name: "Github", icon: "github/github-original" },
            { name: "Git", icon: "git/git-original" },
            { name: "Figma", icon: "figma/figma-original" },
            { name: "WordPress", icon: "wordpress/wordpress-original" },
        ],
    },
    {
        title: "Databases & Cloud",
        skills: [
            { name: "MySQL", icon: "mysql/mysql-original" },
            { name: "Azure", icon: "azure/azure-original" },
            { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark" },
            { name: "Google Cloud", icon: "googlecloud/googlecloud-original" },
        ],
    },
    {
        title: "Operating Systems",
        skills: [
            { name: "Windows", icon: "windows11/windows11-original" },
            { name: "Ubuntu", icon: "ubuntu/ubuntu-plain" },
        ],
    },
];

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative w-full py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 bg-white dark:bg-black transition-colors duration-300 scroll-mt-24"
        >
            <div className="max-w-6xl mx-auto relative">

                {/* card */}
                <div className="relative rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl bg-[#ece6da] dark:bg-[#2c2b26] shadow-xl dark:shadow-black/40 px-4 sm:px-8 lg:px-14 pt-16 sm:pt-20 pb-8 sm:pb-14 transition-colors duration-300">

                    {/* label tag */}
                    <div
                        className="absolute -top-5 sm:-top-7 left-4 sm:left-10 lg:left-14 z-20"
                        style={{ transform: "rotate(-4deg)" }}
                    >
                        {/* clip */}
                        <svg
                            viewBox="0 0 60 70"
                            className="absolute -top-6 sm:-top-9 left-4 sm:left-8 w-7 sm:w-10 drop-shadow-md"
                            aria-hidden="true"
                        >
                            <ellipse cx="30" cy="14" rx="14" ry="12" fill="none" stroke="#c9c9c9" strokeWidth="4" className="dark:stroke-[#6b6b6b]" />
                            <path
                                d="M12 26 L48 26 L42 58 Q30 66 18 58 Z"
                                fill="#d9dadb"
                                stroke="#b7b8b9"
                                strokeWidth="1.5"
                                className="dark:fill-[#3a3a3a] dark:stroke-[#555]"
                            />
                            <rect x="16" y="26" width="28" height="8" fill="#c3c4c5" className="dark:fill-[#4a4a4a]" />
                        </svg>

                        <div className="bg-[#a3b7b8] dark:bg-[#5f5642] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 shadow-lg">
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold tracking-wide text-[#2c2c2c] dark:text-[#ece6da]">
                                Technical Skills
                            </h2>
                        </div>
                    </div>

                    {/* main content */}
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-10">

                        <div className="hidden lg:flex items-center justify-center h-full">
                            <img
                                src={image1}
                                alt="Code editor screenshot"
                                className="w-full h-full max-h-[470px] min-h-[370px] rounded-xl shadow-lg border-4 border-[#a99a76] dark:border-[#5f5642] object-cover"
                            />
                        </div>

                        {/* right column */}
                        <div className="flex flex-col gap-6 lg:gap-10">

                            {/* top thumbnails row in desktop*/}
                            <div className="hidden lg:flex justify-center gap-8">
                                <img
                                    src={image2}
                                    alt="Skills visual 1"
                                    className="w-40 h-28 object-cover rounded-lg shadow-md border-4 border-[#a3b7b8] dark:border-[#3d4a4b]"
                                    style={{ transform: "rotate(-3deg)" }}
                                />
                                <img
                                    src={image3}
                                    alt="Skills visual 2"
                                    className="w-40 h-28 object-cover rounded-lg shadow-md border-4 border-white dark:border-[#1e1d19]"
                                    style={{ transform: "rotate(2deg)" }}
                                />
                                <img
                                    src={image4}
                                    alt="Skills visual 3"
                                    className="w-40 h-28 object-cover rounded-lg shadow-md border-4 border-[#a99a76] dark:border-[#5f5642]"
                                    style={{ transform: "rotate(-2deg)" }}
                                />
                            </div>

                            {/* categories grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 pl-0 lg:pl-7 gap-x-6 sm:gap-x-10 lg:gap-x-15 gap-y-6 lg:gap-y-8">
                                {skillCategories.map((category) => (
                                    <div key={category.title} className="text-center lg:text-left">
                                        <div className="inline-block bg-[#a3b7b8] dark:bg-[#3d4a4b] px-4 py-1.5 mb-4 rounded-sm shadow-sm">
                                            <h3 className="font-bold text-base text-[#1f2a24] dark:text-[#ece6da]">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-wrap justify-center lg:justify-start">
                                            {category.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="flex flex-col items-center gap-2 w-16"
                                                >
                                                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#1e1d19] shadow-sm flex items-center justify-center p-2">
                                                        <img
                                                            src={`${DEVICON_BASE}/${skill.icon}.svg`}
                                                            alt={skill.name}
                                                            className="w-full h-full object-contain"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <span className="text-[13px] text-center leading-tight text-[#2c2c2c] dark:text-[#e5e5e5]">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* folder side tab */}
                <div className="hidden lg:flex flex-col absolute bottom-0 right-0 translate-x-20/21">
                    <div className="w-6 h-10 bg-[#a99a76] dark:bg-[#5f5642] shadow-r-2xl rounded-tr-2xl" />
                    <div className="w-6 h-10 bg-[#a3b7b8] dark:bg-[#3d4a4b] shadow-r-2xl" />
                    <div className="w-6 h-28 bg-[#ece6da] dark:bg-[#2c2b26] shadow-r-2xl rounded-br-2xl flex items-center justify-center">
                        <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] tracking-[0.2em] text-[#2c2c2c] dark:text-[#ece6da] font-medium">
                            Skills
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;