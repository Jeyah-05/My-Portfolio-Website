import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function circularOffset(index, current, total) {
    let diff = index - current;
    diff = ((diff % total) + total) % total;
    if (diff > total / 2) diff -= total;
    return diff;
}

// How many cards visible on either side of the center.
const MAX_VISIBLE_OFFSET = 2;

const useBreakpoint = () => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 1024 : false
    );

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return isMobile;
};

const Projects = () => {
    const total = projects.length;
    const [current, setCurrent] = useState(0);
    const isMobile = useBreakpoint();
    const dragTrackRef = useRef(null);

    const goTo = useCallback(
        (index) => setCurrent(((index % total) + total) % total),
        [total]
    );
    const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
    const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goPrev, goNext]);

    const [viewportWidth, setViewportWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );
    useEffect(() => {
        const onResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const isNarrowPhone = isMobile && viewportWidth < 380;
    const cardWidth = isMobile ? (isNarrowPhone ? 160 : 204) : 364;
    const spacing = isMobile ? cardWidth * 0.55 : cardWidth * 0.72;
    const stageHeight = isMobile ? (isNarrowPhone ? 380 : 410) : 400;

    return (
        <section
            id="projects"
            className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-10 bg-white dark:bg-black transition-colors duration-300 scroll-mt-20 overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto relative">

                {/* card */}
                <div className="relative rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl bg-[#dde3e4] dark:bg-[#26302f] shadow-xl dark:shadow-black/40 px-4 sm:px-8 lg:px-14 pt-14 sm:pt-10 pb-5 transition-colors duration-300">

                    {/* label tag */}
                    <div
                        className="absolute -top-5 sm:-top-7 left-4 sm:left-10 lg:left-14"
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

                        <div className="bg-[#a99a76] dark:bg-[#5f5642] px-4 sm:px-8 py-2 sm:py-3 shadow-lg">
                            <h2 className="font-display text-3xl sm:text-6xl font-bold tracking-wide text-[#2c2c2c] dark:text-[#ece6da]">
                                Projects
                            </h2>
                        </div>
                    </div>

                    {/* carousel */}
                    <div
                        className="relative flex justify-center items-center select-none"
                        style={{ height: stageHeight }}
                    >
                        {/* LEFT ARROW */}
                        <button
                            onClick={goPrev}
                            aria-label="Previous project"
                            className="absolute left-0 sm:left-4 z-40 p-1.5 sm:p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur hover:scale-110 transition"
                        >
                            <ChevronLeft
                                className="text-[#a3b7b8] hover:text-[#a99a76] transition"
                                size={isMobile ? 28 : 36}
                            />
                        </button>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={goNext}
                            aria-label="Next project"
                            className="absolute right-0 sm:right-4 z-40 p-1.5 sm:p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur hover:scale-110 transition"
                        >
                            <ChevronRight
                                className="text-[#a3b7b8] hover:text-[#a99a76] transition"
                                size={isMobile ? 28 : 36}
                            />
                        </button>

                        {/* Wraps the whole track */}
                        <motion.div
                            ref={dragTrackRef}
                            className="relative w-full h-full flex justify-center items-center cursor-grab active:cursor-grabbing"
                            style={{
                                maskImage:
                                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                                WebkitMaskImage:
                                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                            }}
                            drag="x"
                            dragElastic={0.12}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragSnapToOrigin
                            onDragEnd={(_, info) => {
                                const swipe = info.offset.x;
                                const SWIPE_THRESHOLD = 60;
                                if (swipe < -SWIPE_THRESHOLD) goNext();
                                else if (swipe > SWIPE_THRESHOLD) goPrev();
                            }}
                        >
                            {projects.map((project, index) => {
                                const offset = circularOffset(index, current, total);
                                const absOffset = Math.abs(offset);
                                const isCenter = offset === 0;

                                const isAmbiguousBoundary =
                                    total % 2 === 0 && absOffset === total / 2;
                                const withinWindow =
                                    absOffset <= MAX_VISIBLE_OFFSET && !isAmbiguousBoundary;
                                const hiddenOnMobile = isMobile && !isCenter;

                                const scale = isCenter
                                    ? 1
                                    : Math.max(0.72, 1 - absOffset * 0.14);
                                const opacity = isCenter
                                    ? 1
                                    : hiddenOnMobile
                                    ? 0
                                    : withinWindow
                                    ? Math.max(0.25, 0.65 - (absOffset - 1) * 0.25)
                                    : 0;

                                return (
                                    <motion.div
                                        key={project.title}
                                        className="absolute top-1/2"
                                        style={{
                                            left: "50%",
                                            width: cardWidth,
                                            zIndex: 20 - absOffset,
                                            pointerEvents:
                                                isCenter || (!hiddenOnMobile && withinWindow)
                                                    ? "auto"
                                                    : "none",
                                        }}
                                        animate={{
                                            x: offset * spacing - cardWidth / 2,
                                            y: "-50%",
                                            scale,
                                            opacity,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 30,
                                            mass: 0.8,
                                        }}
                                        onClick={() => {
                                            if (!isCenter) goTo(index);
                                        }}
                                    >
                                        <ProjectCard
                                            project={project}
                                            cardWidth={cardWidth}
                                            interactive={isCenter}
                                            isMobile={isMobile}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* DOTS */}
                    <div className="flex justify-center gap-2 mt-4">
                        {projects.map((project, index) => (
                            <button
                                key={project.title}
                                onClick={() => goTo(index)}
                                aria-label={`Go to ${project.title}`}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === current
                                        ? "w-6 bg-[#a99a76] dark:bg-[#5f5642]"
                                        : "w-2 bg-white dark:bg-[#ece6da] hover:bg-[#ece6da]"
                                }`}
                            />
                        ))}
                    </div>

                    {/* foder side tab */}
                    <div className="hidden lg:flex flex-col absolute bottom-0 right-0 translate-x-20/21">
                        <div className="w-6 h-10 bg-[#a99a76] dark:bg-[#5f5642] shadow-r-2xl rounded-tr-2xl" />
                        <div className="w-6 h-10 bg-[#f2ede1] dark:bg-[#3a3a3a] shadow-r-2xl" />
                        <div className="w-6 h-28 bg-[#dde3e4] dark:bg-[#26302f] shadow-r-2xl rounded-br-2xl flex items-center justify-center">
                            <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] tracking-[0.2em] text-[#2c2c2c] dark:text-[#ece6da] font-medium">
                                Projects
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function ProjectCard({ project, cardWidth, interactive, isMobile }) {
    return (
        <div
            className="group relative overflow-hidden rounded-3xl
            border-2 border-[#a99a76] dark:border-[#5f5642]
            bg-white dark:bg-zinc-900
            shadow-2xl transition-shadow duration-500 hover:shadow-[#a99a76]-300/30"
            style={{ width: cardWidth }}
        >
            <h2 className="text-center py-3 sm:py-5 font-serif text-xl sm:text-2xl lg:text-4xl font-bold text-teal-700 dark:text-teal-400 px-4 truncate">
                {project.title}
            </h2>

            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg border border-teal-600 w-full aspect-video object-cover"
                    draggable={false}
                />

                <p className="font-semibold text-center mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base dark:text-white line-clamp-2">
                    {project.description}
                </p>

                {/* Mobile */}
                {isMobile && (
                    <div className="mt-3 flex flex-col items-center gap-3">
                        <div className="flex flex-wrap justify-center gap-2">
                            {project.tech?.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-[#a99a76] text-white px-2.5 py-1 rounded-full text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-2
                                    bg-[#a3b7b8] hover:bg-[#3d4a4b]
                                    text-white
                                    px-4 py-2 rounded-full text-sm transition"
                                >
                                    <FaGithub size={16} />
                                    View
                                </a>
                            )}

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-2
                                    bg-pink-400 hover:bg-pink-500
                                    text-white
                                    px-4 py-2 rounded-full text-sm transition"
                                >
                                    <ExternalLink size={16} />
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Hover */}
            {!isMobile && (
                <div
                    className={`absolute inset-0 bg-black/80
                    opacity-0 transition duration-300
                    flex flex-col justify-center items-center
                    p-8 ${interactive ? "group-hover:opacity-100" : ""}`}
                >
                    <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 text-center">
                        {project.title}
                    </h3>

                    <p className="text-[14px] text-gray-300 text-center mb-5">
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {project.tech?.map((tech) => (
                            <span
                                key={tech}
                                className="bg-[#a99a76] text-white text-[14px] px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2
                                bg-[#a3b7b8] hover:bg-[#3d4a4b]
                                text-white
                                px-5 py-2 rounded-full transition"
                            >
                                <FaGithub size={18} />
                                View Project
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2
                                bg-pink-400 hover:bg-pink-500
                                text-white
                                px-5 py-3 rounded-full transition"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;