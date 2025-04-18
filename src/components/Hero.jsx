import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[60vh] sm:h-screen mx-auto">
      <div className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#e8dcd5]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.greeting")} <span className="text-secondary">Sivanajani,</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.subline")}
            <Typewriter
              options={{
                strings: [
                  t("hero.stack.1"),
                  t("hero.stack.2"),
                  t("hero.stack.3"),
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full justify-center items-center hidden sm:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-tertiary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};


export default Hero;
