import { MapPin } from "lucide-react";

const educationData = [
    {
        year: "2020",
        school: "Dacap Norte National High School",
        level: "Junior High School",
        achievements: [
            { text: "Academic Excellence Award – With Honors", bold: true },
        ],
        date: "July 2020",
    },
    {
        year: "2022",
        school: "University of the Cordilleras",
        level: "Senior High School",
        achievements: [
            { text: "Information Communication Technology – Contact Center Services (ICT - CCS)", bold: false },
            { text: "Academic Excellence Award – With High Honors", bold: true },
        ],
        date: "August 2022",
    },
    {
        year: "2026",
        school: "Saint Louis University",
        level: "College",
        achievements: [
            { text: "Bachelor of Science in Information Technology", bold: false },
            { text: "Magna Cum Laude", bold: true },
        ],
        date: "May 2026",
    },
];

const Education = () => {
    return (
        <section
            id="education"
            className="relative w-full py-16 px-6 sm:px-10 bg-white dark:bg-black transition-colors duration-300 scroll-mt-24"
        >
            <div className="max-w-6xl mx-auto relative">

                {/* card */}
                <div className="relative rounded-[32px] bg-[#dde3e4] dark:bg-[#26302f] shadow-xl dark:shadow-black/40 px-8 sm:px-14 pt-20 pb-14 transition-colors duration-300">

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

                        <div className="bg-[#a99a76] dark:bg-[#5f5642] px-8 py-3 shadow-lg">
                            <h2 className="font-display text-6xl font-bold tracking-wide text-[#2c2c2c] dark:text-[#ece6da]">
                                Education
                            </h2>
                        </div>
                    </div>

                    {/* timeline */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 relative">

                        {/* connecting line (desktop only) */}
                        <div className="hidden sm:block absolute top-[11px] left-[16.6%] right-[16.6%] h-px bg-[#928366]/50 dark:bg-[#a99a76]/40" />

                        {educationData.map((edu) => (
                            <div key={edu.year} className="flex flex-col items-center text-center">

                                <MapPin
                                    size={35}
                                    className="relative z-10 text-[#928366] dark:text-[#c9b98f] fill-[#928366]/20 dark:fill-[#a99a76]/20 bg-[#dde3e4] dark:bg-[#26302f] rounded-full"
                                />

                                <span className="font-display text-4xl mt-2 text-black dark:text-[#ece6da]">
                                    {edu.year}
                                </span>

                                <h3 className="font-bold text-base mt-1 text-black dark:text-white">
                                    {edu.school}
                                </h3>

                                <p className="font-display text-base text-[#5c5c5c] dark:text-[#c8c8c8]">
                                    {edu.level}
                                </p>

                                <div className="mt-4 w-full rounded-xl border border-[#a3b7b8] dark:border-[#5e6f70] bg-white/60 dark:bg-black/20 p-4 text-left min-h-[160px] flex flex-col justify-between">
                                    <div className="space-y-3">
                                        {edu.achievements.map((a, i) => (
                                            <p
                                                key={i}
                                                className={`leading-snug text-black dark:text-[#e5e5e5] ${
                                                    a.bold ? "font-semibold" : ""
                                                }`}
                                            >
                                                {a.text}
                                            </p>
                                        ))}
                                    </div>

                                    <p className="text-[15px] text-[#6b6b6b] dark:text-[#a0a0a0] mt-3">
                                        {edu.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* vertical side tab */}
                <div className="hidden lg:flex absolute top-1/3 -right-3">
                    <div className="w-6 h-28 bg-[#a99a76] dark:bg-[#5f5642] rounded-r-md shadow-md flex items-center justify-center">
                        <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] tracking-[0.2em] text-[#2c2c2c] dark:text-[#ece6da] font-medium">
                            Education
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;