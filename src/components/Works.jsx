import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const ProjectCardContent = ({ name, description, tags, image, source_code_link }) => (
  <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
    <div className="relative w-full h-[230px] cursor-pointer">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full object-cover rounded-2xl"
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
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </div>
);

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
      {isMobile ? (
        <ProjectCardContent {...props} />
      ) : (
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <ProjectCardContent {...props} />
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
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
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          These projects reflect my growth in software development and data-driven thinking.
          Each one was a hands-on opportunity to deepen my skills, explore new technologies, and build practical solutions – from web apps to machine learning workflows.
          You'll find a brief description for every project, along with links to the code repositories.
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
      <ProjectCard key={`project-${index}`} {...project} />
    ))}
  </div>
)}

    </>
  );
};

export default SectionWrapper(Works, "projects");