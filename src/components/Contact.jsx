import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("contact.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("contact.title")}</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.15, 0.8)}
        className="mt-14 max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-900/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <h3 className="relative text-white-100 font-display font-bold text-[26px] sm:text-[30px]">
          {t("contact.directTitle")}
        </h3>
        <p className="relative mt-4 text-muted text-[16px] leading-[28px] max-w-lg mx-auto">
          {t("contact.directText")}
        </p>

        <div className="relative mt-9 flex flex-col xs:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sivanajani-sivakumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient w-full xs:w-auto justify-center text-white font-semibold py-3.5 px-8 rounded-xl inline-flex items-center gap-2.5"
          >
            <FaLinkedin size={18} />
            {t("contact.linkedinBtn")}
          </a>
          <a
            href="https://github.com/Sivanajani"
            target="_blank"
            rel="noopener noreferrer"
            className="glass card-hover w-full xs:w-auto justify-center text-white-100 font-semibold py-3.5 px-8 rounded-xl inline-flex items-center gap-2.5"
          >
            <FaGithub size={18} />
            {t("contact.githubBtn")}
          </a>
        </div>

        <p className="relative mt-8 inline-flex items-center gap-2 text-muted text-[14px]">
          <FaMapMarkerAlt size={13} className="text-secondary" />
          {t("contact.locationValue")}
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
