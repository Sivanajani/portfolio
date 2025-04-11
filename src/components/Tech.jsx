import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="relative w-28 h-28 group" key={name}>
      <BallCanvas icon={icon} />
      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-[#2a2a2a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
        {name}
      </div>
    </div>
  ));
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tools I’ve worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-row flex-wrap justify-center gap-10">
        {renderTechnologies()}
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "tech");
