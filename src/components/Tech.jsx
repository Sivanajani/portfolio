import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

const TechCard = ({ name, icon }) => (
  <div className="glass card-hover rounded-2xl px-6 py-4 flex items-center gap-3 shrink-0">
    <img src={icon} alt={name} className="w-9 h-9 object-contain" />
    <span className="text-white-100 font-medium text-[15px] whitespace-nowrap">{name}</span>
  </div>
);

const MarqueeRow = ({ items, reverse }) => (
  <div className="marquee-mask overflow-hidden marquee-row">
    <div
      className={`flex gap-4 w-max py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {[...items, ...items].map((tech, i) => (
        <TechCard key={`${tech.name}-${i}`} {...tech} />
      ))}
    </div>
  </div>
);

const Tech = () => {
  const { t } = useTranslation();
  const half = Math.ceil(technologies.length / 2);
  const rowA = technologies.slice(0, half);
  const rowB = technologies.slice(half);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("tech.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("tech.title")}</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-4">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
