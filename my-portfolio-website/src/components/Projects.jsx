import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function circularOffset(index, current, total) {
    let diff = index - current;
    diff = ((diff % total) + total) % total; // normalize to [0, total)
    if (diff > total / 2) diff -= total;
    return diff;
}

// How many cards to keep interactive/visible on either side of the center.
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

    const cardWidth = isMobile ? 300 : 460;
    const spacing = isMobile ? cardWidth * 0.55 : cardWidth * 0.72;
    const stageHeight = isMobile ? 380 : 460;

    return (
        <section
            id="projects"
            className="max-w-8xl mx-auto py-25 px-6 dark:bg-black overflow-hidden"
        >
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-pink-300 dark:text-pink-400 ml-6 sm:ml-28">
                Projects
            </h2>

            <div
                className="relative flex justify-center items-center select-none"
                style={{ height: stageHeight }}
            >
                {/* LEFT ARROW — z-40 so it always sits above every card,
                    including the one nearest the edge. */}
                <button
                    onClick={goPrev}
                    aria-label="Previous project"
                    className="absolute left-0 sm:left-4 z-40 p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur hover:scale-110 transition"
                >
                    <ChevronLeft
                        className="text-teal-600 hover:text-pink-400 transition"
                        size={36}
                    />
                </button>

                {/* RIGHT ARROW — same z-40 fix. */}
                <button
                    onClick={goNext}
                    aria-label="Next project"
                    className="absolute right-0 sm:right-4 z-40 p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur hover:scale-110 transition"
                >
                    <ChevronRight
                        className="text-teal-600 hover:text-pink-400 transition"
                        size={36}
                    />
                </button>

                {/* Wraps the whole track  */}
                <motion.div
                    ref={dragTrackRef}
                    className="relative w-full h-full flex justify-center items-center cursor-grab active:cursor-grabbing"
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

                        // With an even project count, one offset (exactly
                        // total/2) has no true "opposite" partner — the math
                        // always resolves it to the right side, which is
                        // what caused the lopsided stack. Hiding that single
                        // ambiguous card keeps the layout symmetric no
                        // matter how many projects you add.
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
                                    // Capped well below the arrow buttons'
                                    // z-40 so cards can never cover them.
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
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2">
                {projects.map((project, index) => (
                    <button
                        key={project.title}
                        onClick={() => goTo(index)}
                        aria-label={`Go to ${project.title}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === current
                                ? "w-6 bg-teal-600 dark:bg-teal-400"
                                : "w-2 bg-pink-200 dark:bg-zinc-700 hover:bg-pink-300"
                        }`}
                    />
                ))}
            </div>

            <p className="text-center italic mt-10 font-serif text-xl sm:text-2xl dark:text-white">
                <span className="text-pink-300">“Art</span> fuels my
                imagination;{" "}
                <span className="text-teal-600">Code</span> brings it to
                life”
            </p>
        </section>
    );
};

function ProjectCard({ project, cardWidth, interactive }) {
    return (
        <div
            className="group relative overflow-hidden rounded-3xl
            border-2 border-pink-300 dark:border-teal-500
            bg-white dark:bg-zinc-900
            shadow-2xl transition-shadow duration-500 hover:shadow-pink-300/30"
            style={{ width: cardWidth }}
        >
            <h2 className="text-center py-5 font-serif text-3xl sm:text-5xl font-bold text-teal-700 dark:text-teal-400 px-4 truncate">
                {project.title}
            </h2>

            <div className="px-6 pb-6">
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg border border-teal-600 w-full aspect-video object-cover"
                    draggable={false}
                />

                <p className="font-semibold text-center mt-4 text-base sm:text-lg dark:text-white line-clamp-2">
                    {project.description}
                </p>
            </div>

            {/* Hover / focus overlay — only meaningfully interactive on the
                centered card; side cards still show it faintly on hover but
                clicks are routed to `goTo` by the parent instead. */}
            <div
                className={`absolute inset-0 bg-black/80
                opacity-0 transition duration-300
                flex flex-col justify-center items-center
                p-8 ${interactive ? "group-hover:opacity-100" : ""}`}
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                    {project.title}
                </h3>

                <p className="text-gray-300 text-center mb-5">
                    {project.summary}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.tech?.map((tech) => (
                        <span
                            key={tech}
                            className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm"
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
                            bg-teal-600 hover:bg-teal-700
                            text-white
                            px-5 py-2 rounded-full transition"
                        >
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
        </div>
    );
}

export default Projects;