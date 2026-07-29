import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import {SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiGit,SiFigma} from "react-icons/si"
import heroBg from "../assets/heroBg.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="scroll-mt-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col lg:flex-row items-center justify-between">

                {/* LEFT */}
                <div className="max-w-xl">
                    <p className="text-lg mb-4">
                        Hi there! 👋
                    </p>

                    <p className="mt-5 text-xl">
                        I'm
                    </p>

                    <h2 className="mt-2 text-5xl font-serif font-bold text-teal-700 dark:text-teal-400">
                        Jhea Jhana Prudencio
                    </h2>

                    <div className="w-10 h-[2px] bg-pink-300 mt-6" />

                    <h1 className="font-serif font-bold leading-tight text-5xl mt-4">
                        Frontend Developer
                        <br />
                        <span className="text-pink-400">
                            & UI/UX Designer
                        </span>
                    </h1>

                    <div className="mt-8 pl-5 border-l-4 border-pink-300">
                        <p className="text-lg leading-8 dark:text-white">
                            I enjoy building intuitive, accessible,
                            and visually appealing digital experiences
                            through thoughtful design and clean code.
                        </p>
                    </div>

                    <div className="flex gap-5 mt-10">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-pink-400 hover:bg-pink-500 text-white font-semibold shadow-lg transition"
                        >
                            Explore My Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-4 rounded-xl border-2 border-teal-700 text-teal-700 dark:text-teal-400 dark:border-teal-400 hover:bg-teal-700 hover:text-white font-semibold transition"
                        >
                            View Resume
                        </a>

                    </div>

                    {/* SOCIALS */}

                    <div className="flex gap-5 mt-6 mb-4">
                        <a
                            href="https://github.com/Jeyah-05"
                            target="_blank"
                            className="w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                        >
                            <FaGithub size={26} />
                        </a>

                        <a
                            href="https://www.facebook.com/jheajhana.prudencio"
                            target="_blank"
                            className="w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                        >
                            <FaFacebook size={26} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jhea-jhana-prudencio-a6a5a1371/"
                            target="_blank"
                            className="w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                        >
                            <FaLinkedin size={26} />
                        </a>

                        <a
                            href="https://www.instagram.com/jeyahprudy/"
                            target="_blank"
                            className="w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                        >
                            <FaInstagram size={26} />
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative mt-16 lg:mt-0">
                    <img
                        src={heroBg}
                        alt="Jhea Prudencio"
                        className="w-[700px] relative z-10"
                    />
                </div>
            </div>

            {/* MARQUEE */}
            <div className="overflow-hidden bg-teal-700 py-1">
                <div className="marquee flex whitespace-nowrap text-white text-sm">
                    <span>
                        GITHUB • FIGMA • FRONTEND • UI/UX DESIGN • BACKEND • JAVA • JAVASCRIPT • UBUNTU • MICROSOFT AZURE • GITLAB • 
                        HTML • CSS • REACT • TAILWIND CSS • NODE.JS • EXPRESS.JS • MYSQL • GIT • PYTHON • GOOGLE CLOUD • PROTOTYPE • 
                    </span>

                    <span aria-hidden="true">
                        GITHUB • FIGMA • FRONTEND • UI/UX DESIGN • BACKEND • JAVA • JAVASCRIPT • UBUNTU • MICROSOFT AZURE • GITLAB •
                        HTML • CSS • REACT • TAILWIND CSS • NODE.JS • EXPRESS.JS • MYSQL • GIT • PYTHON • GOOGLE CLOUD • PROTOTYPE • 
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;