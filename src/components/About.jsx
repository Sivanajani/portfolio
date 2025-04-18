import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("about.intro")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("about.title")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
      >
        {t("about.text1")}{" "}
        <a
          href="https://www.fhnw.ch/de/studium/lifesciences/bachelor/medizininformatik"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-black transition"
        >
          FHNW
        </a> {" "}
        {t("about.text2")}{" "}
        <a href="#projects" className="font-semibold underline hover:text-black transition" >
          {t("about.projectsLink")}
        </a>
        {" "}{t("about.text3")}
      </motion.p>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;