import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
};

const ExperienceCard = ({ experience, index, isMobile, open, onToggle }) => {
  const { t } = useTranslation();
  const showPoints = !isMobile || open;

  return (
    <motion.li
      variants={fadeIn("up", "spring", Math.min(index * 0.12, 0.6), 0.7)}
      className="relative pl-16 sm:pl-20 pb-8 sm:pb-12 last:pb-0"
    >
      {/* timeline line */}
      <span className="absolute left-[26px] sm:left-[30px] top-14 bottom-0 w-[2px] bg-gradient-to-b from-secondary/60 via-white/10 to-transparent" />

      {/* node with logo */}
      <span
        className="absolute left-0 top-0 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-white/15 shadow-card flex items-center justify-center overflow-hidden"
        style={{ background: experience.iconBg }}
      >
        {experience.link ? (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={experience.icon}
              alt={t(experience.company_name)}
              className="w-[65%] h-[65%] object-contain"
            />
          </a>
        ) : (
          <img
            src={experience.icon}
            alt={t(experience.company_name)}
            className="w-[65%] h-[65%] object-contain"
          />
        )}
      </span>

      <div
        className={`glass card-hover rounded-2xl p-5 sm:p-7 ${
          isMobile ? "cursor-pointer select-none" : ""
        } ${isMobile && open ? "border-secondary/40" : ""}`}
        onClick={isMobile ? onToggle : undefined}
        role={isMobile ? "button" : undefined}
        aria-expanded={isMobile ? open : undefined}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-white-100 font-display text-[17px] sm:text-[22px] font-bold leading-snug">
              {t(experience.title)}
            </h3>
            {experience.current && (
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-full px-2.5 py-1">
                {t("sections.experience.currentBadge")}
              </span>
            )}
          </div>
          {isMobile && (
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="mt-1 text-secondary shrink-0"
            >
              <FaChevronDown size={14} />
            </motion.span>
          )}
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {experience.link ? (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-secondary font-semibold text-[14px] sm:text-[15px] hover:underline"
            >
              {t(experience.company_name)}
            </a>
          ) : (
            <span className="text-secondary font-semibold text-[14px] sm:text-[15px]">
              {t(experience.company_name)}
            </span>
          )}
          <span className="text-muted text-[12px] sm:text-[13px] glass rounded-full px-3 py-1">
            {t(experience.date)}
          </span>
        </div>

        <AnimatePresence initial={false}>
          {showPoints && (
            <motion.ul
              key="points"
              initial={isMobile ? { height: 0, opacity: 0 } : false}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-2">
                {experience.points.map((point, i) => (
                  <li
                    key={`experience-point-${i}`}
                    className="flex gap-3 text-[14px] sm:text-[14.5px] leading-[23px] sm:leading-[24px] text-white-100/80"
                  >
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-accent shrink-0" />
                    {t(point)}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t("sections.experience.sub")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("sections.experience.title")}
        </h2>
      </motion.div>

      {isMobile && (
        <p className="mt-4 text-center text-muted text-[13px]">
          {t("sections.experience.tapHint")}
        </p>
      )}

      <ol className="mt-10 sm:mt-16 max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
            isMobile={isMobile}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </ol>
    </>
  );
};

export default SectionWrapper(Experience, "work");
