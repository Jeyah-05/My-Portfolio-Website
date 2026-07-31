import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import connectImg from "../assets/connect.png";

const socialsLeft = [
    {
        icon: <FaGithub size={20} />,
        label: "Github",
        detail: "github.com/Jeyah-05",
    },
    {
        icon: <FaLinkedin size={20} />,
        label: "LinkedIn",
        detail: "linkedin.com/in/jhea-jhana-prudencio-a6a5a1371/",
    },
];

const socialsRight = [
    {
        icon: <FaFacebook size={20} />,
        label: "Facebook",
        detail: "facebook.com/jheajhana.prudencio",
    },
    {
        icon: <FaInstagram size={20} />,
        label: "Instagram",
        detail: "https://www.instagram.com/jeyahprudy/",
    },
];

const SocialCard = ({ icon, label, detail }) => (
    <div className="flex items-center gap-3 rounded-2xl border border-[#a3b7b8] dark:border-[#3d4a4b] bg-white dark:bg-[#151614] px-4 py-3 shadow-sm dark:shadow-black/30 transition-colors duration-300">
        <div className="w-9 h-9 shrink-0 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
            {icon}
        </div>
        <div className="min-w-0">
            <h3 className="font-bold text-[#1f1f1f] dark:text-white">
                {label}
            </h3>
            <p className="text-[13px] text-[#5c5c5c] dark:text-[#a0a0a0] break-words">
                {detail}
            </p>
        </div>
    </div>
);

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 scroll-mt-5"
        >
            {/* TOP */}
            <div className="px-6 pt-16 pb-14">
                <div className="max-w-6xl mx-auto">

                    {/* heading */}
                    <div className="text-center mb-10">
                        <h2 className="font-display text-6xl font-bold">
                            <span className="text-[#a99a76] dark:text-[#c9b98f]">Let's</span>{" "}
                            <span className="text-[#a3b7b8] dark:text-[#8fa8a9]">Connect</span>
                        </h2>
                        <p className="mt-4 text-[#2c2c2c] dark:text-[#d8d8d8]">
                            I'm currently open to new opportunities and collaboration. Let's build something amazing together!
                        </p>
                    </div>

                    {/* socials */}
                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-8 items-center">

                        {/* LEFT socials */}
                        <div className="flex flex-col gap-4">
                            {socialsLeft.map((item) => (
                                <SocialCard key={item.label} {...item} />
                            ))}
                        </div>

                        {/* CENTER */}
                        <div className="flex justify-center">
                            <img
                                src={connectImg}
                                alt="Let's connect illustration"
                                className="w-full max-w-[380px] object-contain select-none"
                                draggable="false"
                            />
                        </div>

                        {/* RIGHT socials */}
                        <div className="flex flex-col gap-4">
                            {socialsRight.map((item) => (
                                <SocialCard key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
<div className="bg-[#a3b7b8] dark:bg-[#3d4a4b] pt-12 pb-12 px-6 transition-colors duration-300">
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">

        {/* Email */}
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 -mt-24 rounded-full bg-[#ece6da] dark:bg-[#2c2b26] flex items-center justify-center mb-5 shadow-md">
                <Mail size={34} className="text-[#928366] dark:text-[#c9b98f]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1f2a24] dark:text-white">
                Email
            </h3>
            <a>
                jhanaprudencio05@gmail.com
            </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 -mt-24 rounded-full bg-[#ece6da] dark:bg-[#2c2b26] flex items-center justify-center mb-5 shadow-md">
                <Phone size={34} className="text-[#928366] dark:text-[#c9b98f]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1f2a24] dark:text-white">
                Phone Number
            </h3>
            <p className="text-[15px] text-[#1f2a24] dark:text-[#e5e5e5]">
                (+63) 910 638 8971
            </p>
            <p className="text-[15px] text-[#1f2a24] dark:text-[#e5e5e5]">
                (+63) 934 533 5974
            </p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 -mt-24 rounded-full bg-[#ece6da] dark:bg-[#2c2b26] flex items-center justify-center mb-5 shadow-md">
                <MapPin size={34} className="text-[#928366] dark:text-[#c9b98f]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1f2a24] dark:text-white">
                Location
            </h3>
            <p className="text-[15px] text-[#1f2a24] dark:text-[#e5e5e5]">
                Bani, Pangasinan
            </p>
            <p className="text-[15px] text-[#1f2a24] dark:text-[#e5e5e5]">
                Philippines
            </p>
        </div>
    </div>
</div>
        </section>
    );
};

export default Contact;