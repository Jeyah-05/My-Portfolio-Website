import { MousePointer2 } from "lucide-react";
import pma from "../assets/pma.png";
import pma2 from "../assets/pma2.png";

const experienceData = [
    {
        year: "2026",
        role: "Web Developer Intern",
        org: "at Philippine Military Academy",
        bullets: [
            "Designed, developed, and maintained the PMA Admission System, enhancing applicant registration and admission workflows",
            "Improved the PMA Admin Portal, streamlining applicant management, monitoring, and administrative operations.",
            "Implemented responsive web interfaces and backend functionalities using React.js, Node.js, and Tailwind CSS.",
            "Configured and deployed the web application to an Ubuntu-based office server",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative w-full py-16 px-6 sm:px-10 bg-white dark:bg-black transition-colors duration-300 scroll-mt-24"
        >
            <div className="max-w-6xl mx-auto relative">

                {/* card */}
                <div className="relative rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl bg-[#f3ece4] dark:bg-[#2c2b26] shadow-xl dark:shadow-black/40 px-8 sm:px-14 pt-5 pb-14 transition-colors duration-300">

                    {/* label tag */}
                    <div
                        className="absolute -top-7 left-10 sm:left-14"
                        style={{ transform: "rotate(-4deg)" }}
                    >
                        {/* clip */}
                        <svg
                            viewBox="0 0 60 70"
                            className="absolute -top-9 left-8 w-10 drop-shadow-md"
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

                        <div className="bg-[#a9bcbc]/70 dark:bg-[#3d4a4b] backdrop-blur-sm px-8 py-3 shadow-lg">
                            <h2 className="font-display text-6xl font-bold tracking-wide text-[#1f2a2a] dark:text-[#ece6da]">
                                Experience
                            </h2>
                        </div>
                    </div>

                    {/* content */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start">

                        {/* left side*/}
                        {experienceData.map((exp, idx) => (
                            <div key={idx} className="flex gap-4 mt-15">
                                <span className="font-display italic font-bold text-2xl pr-3 text-black dark:text-[#ece6da] shrink-0">
                                    {exp.year}
                                </span>

                                <div className="pt-1">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#928366] dark:bg-[#c9b98f] -ml-4 mr-2 align-middle" />
                                    <h3 className="inline text-base font-extrabold uppercase tracking-wide text-black dark:text-white">
                                        {exp.role}
                                        <br />
                                        {exp.org}
                                    </h3>

                                    <ul className="mt-4 space-y-3">
                                        {exp.bullets.map((b, i) => (
                                            <li key={i} className="flex gap-3 text-black dark:text-[#e5e5e5] leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#928366] dark:bg-[#c9b98f] shrink-0" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* Project Images*/}
                        <div>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10">
                                <img src={pma} alt="PMA Admission System — login screen" className="w-full h-auto block" />
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 mt-4">
                                <img src={pma2} alt="PMA Admin Portal — login screen" className="w-full h-auto block" />
                            </div>

                            <div className="mt-4 flex items-center justify-center gap-2">
                                <a
                                    href="https://www.figma.com/design/OOwXTYefeqLcHe5BiZkGyb/PMA-Admission?node-id=639-660&t=CxSYorcSrZUc2Mzz-1"
                                    className="font-semibold text-[#2f5fd6] dark:text-[#8fb4ff] underline underline-offset-4"
                                >
                                    PMA Admission Design
                                </a>
                                <MousePointer2 className="w-6 h-6 text-black fill-black dark:text-[white]" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* folder side tab */}
                    <div className="hidden lg:flex flex-col absolute bottom-0 right-0 translate-x-20/21">
                        <div className="w-6 h-10 bg-[#a99a76] dark:bg-[#5f5642] shadow-r-2xl rounded-tr-2xl" />
                        <div className="w-6 h-10 bg-[#a3b7b8] dark:bg-[#3d4a4b] shadow-r-2xl" />
                        <div className="w-6 h-28 bg-[#f3ece4] dark:bg-[#2c2b26] shadow-r-2xl rounded-br-2xl flex items-center justify-center">
                            <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] tracking-[0.2em] text-[#2c2c2c] dark:text-[#ece6da] font-medium">
                                Experience
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;