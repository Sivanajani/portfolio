import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const floatingChips = [
  { label: "React", className: "top-[6%] -left-2 sm:-left-6 animate-float" },
  { label: "FastAPI", className: "top-[28%] -right-4 sm:-right-10 animate-float-delayed" },
  { label: "AI / RAG", className: "bottom-[18%] -left-4 sm:-left-10 animate-float-slow" },
  { label: "Docker", className: "bottom-[2%] right-0 sm:-right-2 animate-float-delayed" },
];

const Hero = () => {
  const { t } = useTranslation();

  // parallax on scroll
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 700], [0, 120]);
  const avatarY = useTransform(scrollY, [0, 700], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 550], [1, 0]);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden flex items-center">
      {/* background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-rose-900/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-3xl animate-blob-delayed" />
      <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] bg-red-900/20 rounded-full blur-3xl animate-blob" />

      <div
        className={`relative z-10 max-w-7xl mx-auto w-full ${styles.paddingX} pt-28 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center`}
      >
        {/* left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ y: textY, opacity: heroOpacity }}
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-[13px] sm:text-sm text-white-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            {t("hero.badge")}
          </span>

          <h1 className={`${styles.heroHeadText} mt-6`}>
            {t("hero.greeting")}{" "}
            <span className="text-gradient">Sivanajani.</span>
          </h1>

          <div className={`${styles.heroSubText} mt-4 flex flex-wrap items-baseline gap-x-2`}>
            <span>{t("hero.subline")}</span>
            <span className="text-white-100 font-semibold">
              <Typewriter
                options={{
                  strings: [
                    t("hero.stack.1"),
                    t("hero.stack.2"),
                    t("hero.stack.3"),
                    t("hero.stack.4"),
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: "natural",
                  pauseFor: 1200,
                }}
              />
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-gradient text-white font-semibold py-3.5 px-8 rounded-xl text-[15px]"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="#contact"
              className="glass card-hover text-white-100 font-semibold py-3.5 px-8 rounded-xl text-[15px]"
            >
              {t("hero.cta2")}
            </a>
            <div className="flex items-center gap-3 sm:ml-2">
              <a
                href="https://github.com/Sivanajani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass w-11 h-11 rounded-full flex items-center justify-center text-white-100 hover:text-secondary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sivanajani-sivakumar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass w-11 h-11 rounded-full flex items-center justify-center text-white-100 hover:text-secondary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* right: animated avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: avatarY, opacity: heroOpacity }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative animate-float" style={{ animationDuration: "8s" }}>
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-900/50 to-amber-500/35 blur-2xl scale-110" />

            {/* rotating gradient ring + avatar */}
            <div className="relative w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px]">
              <div className="avatar-ring" />
              <div className="avatar-ring-mask" />
              <img
                src="/me.svg"
                alt="Illustrated avatar of Sivanajani"
                className="relative w-full h-full rounded-full object-cover select-none"
                draggable="false"
              />
            </div>

            {/* floating tech chips */}
            {floatingChips.map((chip) => (
              <span
                key={chip.label}
                className={`absolute ${chip.className} glass-strong rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-white-100 shadow-card whitespace-nowrap`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 w-full hidden sm:flex justify-center items-center z-10">
        <a href="#about" aria-label={t("hero.scroll")}>
          <div className="w-[32px] h-[58px] rounded-3xl border-2 border-white/25 flex justify-center items-start p-2 hover:border-secondary transition-colors">
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
