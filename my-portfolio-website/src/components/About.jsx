import {Palette, Gamepad2, BookOpen, Clapperboard, Play, CircleCheck, Heart, AudioLines} from "lucide-react";
import AboutMe from "../assets/AboutMe.png";

const About = () => {
    const hobbies = [
        {
            icon: <Palette size={20} />,
            label: "Arts & Crafts",
        },
        {
            icon: <Gamepad2 size={20} />,
            label: "Gaming",
        },
        {
            icon: <BookOpen size={20} />,
            label: "Reading",
        },
        {
            icon: <Clapperboard size={20} />,
            label: "Watching",
        },
    ];

    const genres = [
        "Country",
        "Pop",
        "R&B and Soul",
        "Hip-hop & Rap",
    ];

    const values = [
        "Creativity",
        "Attention to Detail",
        "Continuous Learning",
        "Adaptability",
    ];

    return (
        <section
            id="about"
            className="bg-white dark:bg-black text-black dark:text-white py-10 pr-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto mt-16 px-6">
                <div className="grid lg:grid-cols-[400px_minmax(500px,600px)_220px] gap-8 items-start justify-center">

                    {/* LEFT IMAGE */}
                    <div className="flex flex-col items-center lg:items-start">

                        {/* Quote */}
                        <div className="ml-2">
                            <h3
                                className="font-display text-4xl leading-tight rotate-[-8deg]"
                            >
                                "An{" "}
                                <span className="text-[#a99a76] font-semibold">
                                    artist
                                </span>{" "}
                                at heart,
                                <br />
                                a{" "}
                                <span className="text-[#a3b7b8] font-semibold">
                                    developer
                                </span>{" "}
                                by craft"
                            </h3>
                                                    </div>

                        {/* Image */}
                        <img
                            src={AboutMe}
                            alt="About Me"
                            className="w-full max-w-[350px] object-contain select-none"
                            draggable="false"
                        />
                    </div>

                    {/* CENTER */}
                    <div className="pr-20">
                        <h2 className="font-display text-6xl font-bold">
                            About{" "}
                            <span className="text-[#a99a76]">
                                Me
                            </span>
                        </h2>

                        <div className="w-18 h-1 bg-[#a99a76] rounded-full mt-5 mb-10" />
                        <div className="space-y-10 text-lg text-justify leading-relaxed dark:text-white">
                            <p>
                                I'm Jhea Jhana Prudencio, a BS Information
                                Technology graduate with experience in web
                                application development. Having worked on both
                                frontend and backend development, I found my
                                passion in crafting intuitive interfaces and
                                meaningful user experiences through frontend
                                development and UI/UX design.
                            </p>

                            <p>
                                I've always been drawn to creativity, whether
                                through art, design, or technology. These
                                creative interests influence the way I approach
                                development and inspire me to build thoughtful,
                                user-friendly digital experiences.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-3">
                            <h3 className="font-display text-4xl text-[#a3b7b8]">
                                Jhea Jhana
                            </h3>

                            <Heart
                                className="fill-[#a99a76] text-[#a99a76]"
                                size={28}
                            />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-[240px] flex flex-col gap-5">

                        {/* Outside Coding */}
                        <div className="rounded-2xl border border-[#a99a76] bg-[#e1ddd3] dark:bg-pink-950/20 p-4 -translate-x-4">
                            <h3 className="font-bold text-base mb-3">
                                Outside Coding
                            </h3>

                            <div className="space-y-2">
                                {hobbies.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-3 text-[15px]"
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Music */}
                        <div className="rounded-2xl border-2 border-[#a3b7b8] p-4 translate-x-6">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-base text-[#a3b7b8] dark:text-[#a3b7b8]">
                                    Always on Shuffle
                                </h3>

                                <AudioLines
                                    size={16}
                                    className="text-[#a3b7b8]"
                                />
                            </div>

                            <div className="space-y-2">
                                {genres.map((genre) => (
                                    <div
                                        key={genre}
                                        className="flex items-center gap-3 text-[15px]"
                                    >
                                        <Play
                                            size={14}
                                            className="fill-[#a3b7b8] text-[#a3b7b8]"
                                        />
                                        <span>{genre}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Values */}
                        <div className="rounded-2xl border border-[#a99a76] bg-[#d8d5ce] dark:bg-pink-950/20 p-4 -translate-x-2">
                            <h3 className="font-bold text-base mb-3">
                                My Values
                            </h3>

                            <div className="space-y-2">
                                {values.map((value) => (
                                    <div
                                        key={value}
                                        className="flex items-center gap-3 text-[15px]"
                                    >
                                        <CircleCheck
                                            size={18}
                                            className="fill-black text-[#d8d5ce] dark:fill-white dark:text-black"
                                        />
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;