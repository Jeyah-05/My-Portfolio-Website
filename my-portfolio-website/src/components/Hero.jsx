import React from "react";
import { MousePointer2 } from "lucide-react";
import hereBG from "../assets/gradpic.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-84px)] overflow-hidden bg-white dark:bg-black scroll-mt-20 transition-colors duration-300"
    >
      {/* Background animation (desktop/tablet circles) */}
      <style>{`
        @keyframes drift-1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(60px,40px); } }
        @keyframes drift-2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-50px,55px); } }
        @keyframes drift-3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(45px,-45px); } }
        @keyframes drift-4 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-40px,-35px); } }
        @keyframes drift-5 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(35px,50px); } }
        @keyframes drift-6 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-55px,-25px); } }
        @keyframes drift-7 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(50px,-30px); } }
        @keyframes drift-8 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-45px,40px); } }
        @keyframes drift-9 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,45px); } }
        @keyframes drift-10 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-35px,-50px); } }
        @keyframes drift-11 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(55px,20px); } }
        @keyframes drift-12 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-25px,35px); } }
        .bg-circle-1 { animation: drift-1 11s ease-in-out infinite; }
        .bg-circle-2 { animation: drift-2 13s ease-in-out infinite; }
        .bg-circle-3 { animation: drift-3 9s ease-in-out infinite; }
        .bg-circle-4 { animation: drift-4 15s ease-in-out infinite; }
        .bg-circle-5 { animation: drift-5 12s ease-in-out infinite; }
        .bg-circle-6 { animation: drift-6 8s ease-in-out infinite; }
        .bg-circle-7 { animation: drift-7 10s ease-in-out infinite; }
        .bg-circle-8 { animation: drift-8 14s ease-in-out infinite; }
        .bg-circle-9 { animation: drift-9 9.5s ease-in-out infinite; }
        .bg-circle-10 { animation: drift-10 12.5s ease-in-out infinite; }
        .bg-circle-11 { animation: drift-11 11.5s ease-in-out infinite; }
        .bg-circle-12 { animation: drift-12 13.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bg-circle-1, .bg-circle-2, .bg-circle-3, .bg-circle-4,
          .bg-circle-5, .bg-circle-6, .bg-circle-7, .bg-circle-8,
          .bg-circle-9, .bg-circle-10, .bg-circle-11, .bg-circle-12 { animation: none; }
        }
      `}</style>

      {/* ================================================================
          MOBILE LAYOUT — stacked: PORTFOLIO heading, simplified folder +
          photo with binder clip, name, job titles. Hidden at sm and up.
      ================================================================= */}
      <div className="sm:hidden relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-10 text-center overflow-hidden">

        {/* decorative background blobs */}
        <div
          className="absolute -top-10 -right-16 w-56 h-56 bg-[#a99a76]/60 dark:bg-[#5f5642]/50"
          style={{ borderRadius: "62% 38% 44% 56% / 55% 40% 60% 45%" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 -left-20 w-48 h-48 bg-[#a3b7b8]/40 dark:bg-[#3d4a4b]/40"
          style={{ borderRadius: "50% 50% 60% 40% / 40% 60% 40% 60%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#ece6da] dark:bg-[#2c2b26]"
          style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
          aria-hidden="true"
        />

        {/* PORTFOLIO */}
        <h1
          className="relative z-10 font-display font-normal text-[#1a1a1a] dark:text-[#f2ede1] uppercase tracking-[0.18em]"
          style={{ fontSize: "clamp(26px, 8vw, 40px)" }}
        >
          Portfolio
        </h1>

        {/* folder + photo */}
        <div className="relative z-10 w-[220px] max-w-[74vw] mt-10 mb-10">
          {/* folder tab */}
          <div
            className="absolute top-2 left-[14%] w-[60%] h-9 bg-[#9db1b2] dark:bg-[#5e6f70]"
            style={{
              clipPath: "polygon(0% 100%, 14% 0%, 100% 0%, 86% 100%)",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          {/* folder body */}
          <div className="absolute top-8 inset-x-0 bottom-0 rounded-2xl bg-[#a3b7b8] dark:bg-[#3d4a4b] shadow-xl dark:shadow-black/40" />

          {/* binder clip */}
          <svg
            viewBox="0 0 60 70"
            className="relative z-20 mx-auto -mb-3 w-11 drop-shadow-md"
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

          {/* photo */}
          <div className="relative z-10 mx-auto w-[78%] aspect-[4/5] rounded-xl overflow-hidden border-4 border-white dark:border-[#1e1d19] shadow-2xl">
            <img
              src={hereBG}
              alt="Jhea Jhana Prudencio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* name */}
        <h2 className="relative z-10 font-display font-bold text-[#1a1a1a] dark:text-[#f2ede1] uppercase tracking-[0.12em] text-xl">
          Jhea Jhana Prudencio
        </h2>

        {/* job titles */}
        <p className="relative z-10 font-display text-[#1f2a24] dark:text-[#d8dedd] mt-3 text-sm leading-relaxed">
          Web Developer&nbsp;|&nbsp;Frontend Developer&nbsp;|
          <br />
          UI/UX Designer
        </p>
      </div>

      {/* ================================================================
          TABLET / DESKTOP LAYOUT — original folder-card design, unchanged.
      ================================================================= */}
      <div className="hidden sm:flex items-center justify-center w-full min-h-[calc(100vh-84px)] py-4">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="bg-circle-1 absolute top-[8%] left-[6%] w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#a3b7b8]/30 dark:bg-[#a3b7b8]/15" />
          <div className="bg-circle-2 absolute top-[18%] right-[10%] w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#a99a76]/25 dark:bg-[#a99a76]/15" />
          <div className="bg-circle-3 absolute top-[65%] left-[12%] w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-[#a99a76]/40 dark:border-[#a99a76]/25" />
          <div className="bg-circle-4 absolute bottom-[12%] right-[14%] w-9 h-9 sm:w-14 sm:h-14 rounded-full border-2 border-[#a3b7b8]/40 dark:border-[#a3b7b8]/25" />
          <div className="bg-circle-5 absolute top-[42%] right-[22%] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#928366]/35 dark:bg-[#928366]/20" />
          <div className="bg-circle-6 absolute bottom-[28%] left-[24%] w-5 h-5 sm:w-8 sm:h-8 rounded-full border-2 border-[#928366]/40 dark:border-[#928366]/25" />
          <div className="bg-circle-7 absolute top-[30%] left-[18%] w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#a3b7b8]/35 dark:border-[#a3b7b8]/20" />
          <div className="bg-circle-8 absolute bottom-[42%] left-[7%] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#a99a76]/35 dark:bg-[#a99a76]/20" />
          <div className="bg-circle-9 absolute top-[78%] left-[20%] w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 border-[#928366]/35 dark:border-[#928366]/20" />
          <div className="bg-circle-10 absolute top-[10%] right-[28%] w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#a3b7b8]/25 dark:bg-[#a3b7b8]/15" />
          <div className="bg-circle-11 absolute top-[58%] right-[6%] w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#928366]/20 dark:bg-[#928366]/10" />
          <div className="bg-circle-12 absolute bottom-[8%] right-[32%] w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 border-[#a99a76]/35 dark:border-[#a99a76]/20" />
        </div>

        {/* Folder */}
        <div className="relative z-10 w-[820px] max-w-[92vw] sm:max-w-[90vw] aspect-[820/540]">
          {/* tan folder */}
          <div
            className="absolute top-[4%] right-0 w-[72%] h-[86%] rounded-2xl sm:rounded-[26px] bg-[#a99a76] dark:bg-[#5f5642] shadow-xl dark:shadow-black/40"
            style={{ transform: "rotate(6deg)" }}
          />

          {/* cream folder */}
          <div
            className="absolute top-[1%] left-[2%] w-[74%] h-[88%] rounded-2xl sm:rounded-[26px] bg-[#ece6da] dark:bg-[#2c2b26] shadow-xl dark:shadow-black/40"
            style={{ transform: "rotate(-4deg)" }}
          />

          {/* folder tab */}
          <div
            className="absolute top-[2%] left-[8%] w-[42%] h-[16%] bg-[#9db1b2] dark:bg-[#5e6f70] z-10"
            style={{
              clipPath: "polygon(0% 100%, 12% 0%, 100% 0%, 88% 100%)",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />

          {/* blue-grey folder */}
          <div className="absolute inset-x-0 top-[10%] bottom-0 rounded-2xl sm:rounded-[30px] bg-[#a3b7b8] dark:bg-[#3d4a4b] shadow-2xl dark:shadow-black/50 z-20 px-5 sm:px-10 md:px-14 py-6 sm:py-10 flex flex-col justify-center">
            {/* nametag */}
            <div className="relative inline-flex w-fit items-center bg-[#f2ede1] dark:bg-[#1e1d19] border border-[#d9d0bb] dark:border-[#4a4740] px-3 py-1.5 sm:px-5 sm:py-2 mb-5 sm:mb-10 shadow-sm dark:shadow-black/30">
              <span className="font-display text-[10px] sm:text-[14px] md:text-[18px] tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em] text-[#2c2c2c] dark:text-[#ece6da] uppercase whitespace-nowrap">
                Jhea Jhana Prudencio
              </span>
              {/* cursor */}
              <MousePointer2
                className="absolute -right-2 -bottom-2 sm:-right-3 sm:-bottom-3 w-4 h-4 sm:w-6 sm:h-6 text-white dark:text-[#151614] drop-shadow-md fill-white dark:fill-[#151614]"
                strokeWidth={1.5}
              />
            </div>

            {/* portfolio */}
            <div className="flex items-end justify-center select-none leading-none mb-3 sm:mb-6 w-full pl-4 sm:pl-12 md:pl-24">
              <h1
                className="font-display font-light text-[#232323] dark:text-[#f2ede1]"
                style={{ fontSize: "clamp(32px, 8vw, 125px)", letterSpacing: "0.01em" }}
              >
                PORTFOLIO
              </h1>
            </div>

            {/* job titles */}
            <p
              className="font-display text-[#1f2a24] dark:text-[#d8dedd] text-center w-full pl-4 sm:pl-12 md:pl-23"
              style={{ fontSize: "clamp(13px, 4vw, 33px)", lineHeight: 1.35 }}
            >
              Web Developer&nbsp;|&nbsp;Frontend Developer&nbsp;|&nbsp;
              <br className="hidden sm:block" />
              UI/UX Designer
            </p>
          </div>

          {/* Polaroid */}
          <div
            className="absolute z-30 -left-4 sm:-left-14 md:-left-20 lg:-left-28 top-[38%] w-[24%] sm:w-[26%] md:w-[27%] max-w-[110px] sm:max-w-[170px] md:max-w-[230px]"
            style={{ transform: "rotate(2deg)" }}
          >
            {/* clip */}
            <svg
              viewBox="0 0 60 70"
              className="absolute -top-4 sm:-top-6 md:-top-8 left-1/2 -translate-x-1/2 w-6 sm:w-9 md:w-12 drop-shadow-md"
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

            {/* photo card */}
            <div className="bg-white dark:bg-[#1e1d19] p-1 pb-2 sm:p-2 sm:pb-4 shadow-2xl dark:shadow-black/50">
              <img
                src={hereBG}
                alt="Jhea Jhana Prudencio"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;