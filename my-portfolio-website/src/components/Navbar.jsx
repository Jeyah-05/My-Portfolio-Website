import { useEffect, useState } from "react";
import { Heart, Moon, Sun, ExternalLink, Menu, X } from "lucide-react";

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
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "education", label: "Education" },
        { id: "projects", label: "My Projects" },
        { id: "skills", label: "My Technical Skills" },
        { id: "contact", label: "Let's Connect!" },
    ];

    // Close the mobile menu whenever a nav link is tapped.
    const handleNavClick = (id) => {
        setActive(id);
        setMobileOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-black backdrop-blur-md border-b border-gray-100">
            <nav className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-15 py-4 sm:py-5">
                { /* logo */}
                <a
                    href="#hero"
                    className="font-display flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl dark:text-white font-bold"
                >
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-[#a99a76] text-[#a99a76]" />
                    <span>Jeyah</span>
                </a>

                { /* Desktop navigation */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-10 md:ml-8 lg:ml-75">
                    {navItems.map((item) => (
                        <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={() => handleNavClick(item.id)}
                            className={`font-semibold text-sm lg:text-base whitespace-nowrap transition-all duration-200 pb-1 border-b-2 ${
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

                <div className="flex items-center gap-3 sm:gap-5 lg:gap-10">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        ) : (
                            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
                        )}
                    </button>

                    {/* Resume — label stays visible at every breakpoint */}
                    <a
                        href="https://drive.google.com/file/d/1VKgcdqFhRWjZ2lct9-Lb5BGamYRaYvbA/view?usp=sharing"
                        target="_blank"
                        className="bg-[#a3b7b8] hover:bg-[#71979d] text-black px-3 py-2 sm:px-5 sm:py-2 rounded-full flex items-center gap-2 font-semibold text-sm sm:text-base dark:bg-[#3d4a4b] dark:text-white transition"
                    >
                        <span>Resume</span>
                        <ExternalLink size={16} />
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6 text-black dark:text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-black dark:text-white" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-100 dark:border-white/10 ${
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col px-4 py-4 gap-1">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => handleNavClick(item.id)}
                                className={`block py-3 px-3 rounded-lg font-semibold text-base transition-colors duration-200 ${
                                    active === item.id
                                        ? "text-[#a99a76] bg-[#a99a76]/10"
                                        : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;