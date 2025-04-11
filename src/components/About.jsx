import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
      >
        I'm a Medical Informatics student at{" "}
        <a
          href="https://www.fhnw.ch/de/studium/lifesciences/bachelor/medizininformatik"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-black transition"
        >
          FHNW
        </a> {" "}
        with a passion for fullstack development, infrastructure, and data-driven applications.
        Throughout my studies, I’ve worked on various practical{" "}
        <a
          href="#projects"
          className="font-semibold underline"
        >
          projects
        </a>{" "}
        — both independently and in teams — using technologies like React, Spring Boot, Docker, and PostgreSQL.
        Along the way, I also gained experience in web application development and data science.
        
        These experiences helped me grow not only technically, but also in teamwork, communication, and project management.
        I'm always curious to learn, improve, and build meaningful digital solutions.
      </motion.p>

    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
