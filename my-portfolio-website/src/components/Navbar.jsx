import { useEffect, useState } from "react";
import { Heart, Moon, Sun, ExternalLink } from "lucide-react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    { /* Highlight based on scroll */}
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    

    const [active, setActive] = useState("hero");

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "education", label: "Education" },
        { id: "projects", label: "My Projects" },
        { id: "skills", label: "My Technical Skills" },
        { id: "contact", label: "Let's Connect!" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-black backdrop-blur-md border-b border-gray-100">
            <nav className="max-w-8xl mx-auto flex items-center justify-between px-15 py-5">
                { /* logo */}
                <a
                    href="#hero"
                    className="font-display flex items-center gap-2 text-4xl dark:text-white font-bold"
                >
                    <Heart className="w-7 h-7 fill-[#a99a76] text-[#a99a76]" />
                    <span>Jeyah</span>
                </a>

                { /* Navigation */}
                <ul className="hidden md:flex items-center gap-10 ml-75">
                    {navItems.map((item) => (
                        <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={() => setActive(item.id)}
                            className={`font-semibold transition-all duration-200 pb-1 border-b-2 ${
                            active === item.id
                                ? "text-[#a99a76] border-[#a99a76]"
                                : "text-black border-transparent dark:text-white hover:text-[#504735]"
                            }`}
                        >
                            {item.label}
                        </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-10">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {darkMode ? (
                            <Sun className="w-6 h-6 text-white" />
                        ) : (
                            <Moon className="w-6 h-6 text-black dark:text-white" />
                        )}
                    </button>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="bg-[#a3b7b8] hover:bg-[#71979d] text-black px-5 py-2 rounded-full flex items-center gap-2 font-semibold dark:bg-[#3d4a4b] dark:text-white transition"
                    >
                        Resume
                        <ExternalLink size={16} />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;