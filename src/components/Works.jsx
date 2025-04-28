import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

const ProjectCardContent = ({ name, description, tags, image, source_code_link, glowColor }) => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[540px] flex flex-col transition-all duration-300 hover:scale-105"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 12px ${glowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0px transparent";
        }}
    >

      <div className="overflow-hidden rounded-2xl w-full h-[230px] cursor-pointer">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        />
        <div className="absolute inset-0 flex justify-end m-3 pointer-events-none">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex-1 flex flex-col">
        <h3 className="text-white font-bold text-[24px]">{t(name)}</h3>
        <p className="mt-2 text-secondary text-[14px] flex-1">{t(description)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
            key={tag.name}
            className={`text-[12px] ${tag.color} bg-white-100 px-2 py-1 rounded-full shadow-sm`}
          >
            #{tag.name}
          </span>
          
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <ProjectCardContent {...props} />
    </motion.div>
  );
  
};

const Works = () => {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const uniqueTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags.map((tag) => tag.name))),
  ];

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => tag.name === activeTag)
        );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("projects.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("projects.title")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          {t("projects.intro")}
        </motion.p>
      </div>

      {isMobile ? (
        <>
          <div className="relative w-full flex justify-center mt-3">
            <div className="absolute top-0 animate-bounce-x text-secondary text-sm bg-white rounded-full px-4 py-1 shadow-md">
              <span className="text-sm">← Swipe →</span>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="mt-10 max-w-xs mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={`project-${index}`}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {filteredProjects.map((project, index) => (
            <div className="flex flex-col h-full" key={`project-${index}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Sivanajani"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-secondary to-[#ff8b80] py-3 px-8 rounded-xl text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {t("projects.button")}
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
