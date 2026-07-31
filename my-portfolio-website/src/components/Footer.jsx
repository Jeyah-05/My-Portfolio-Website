import { AtSign, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-[#3d4a4b] border-t border-white dark:border-[#2c2b26] px-6 sm:px-10 py-3 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">

                {/* copyright */}
                <div className="italic flex items-center gap-2 text-[#2c2c2c] dark:text-[#d8d8d8]">
                    <AtSign size={16} className="text-[#2c2c2c] dark:text-[#d8d8d8]" />
                    <span>2026 Jhea Jhana. Designed with passion</span>
                </div>

                {/* wordmark */}
                <a
                    className="font-display flex items-center gap-2 text-4xl dark:text-white font-bold"
                >
                    <Heart className="w-7 h-7 fill-[#a99a76] text-[#a99a76]" />
                    <span>Jeyah</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;