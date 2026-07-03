import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      variants={fadeIn("up", "spring", Math.min(index * 0.1, 0.5), 0.7)}
      className="glass card-hover rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="relative w-full h-[210px] overflow-hidden">
        <img
          src={image}
          alt={t(name)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent pointer-events-none" />
        <button
          type="button"
          aria-label="Source code on GitHub"
          onClick={() => window.open(source_code_link, "_blank")}
          className="absolute top-3 right-3 glass-strong w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
        >
          <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-white-100 font-display font-bold text-[20px]">{t(name)}</h3>
        <p className="mt-2.5 text-muted text-[14px] leading-[23px] flex-1">{t(description)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[12px] font-medium text-secondary bg-secondary/10 border border-secondary/25 px-2.5 py-1 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("projects.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("projects.title")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-4 text-muted text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          {t("projects.intro")}
        </motion.p>
      </div>

      {/* mobile: swipeable carousel with snap · desktop: grid */}
      <div className="sm:hidden relative w-full flex justify-center mt-8">
        <span className="animate-bounce-x text-muted text-[13px] glass rounded-full px-4 py-1.5">
          ← {t("projects.swipe")} →
        </span>
      </div>
      <div className="mt-5 sm:mt-14 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="min-w-[82%] xs:min-w-[75%] sm:min-w-0 snap-center"
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/Sivanajani"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient py-3.5 px-8 rounded-xl text-white font-semibold"
        >
          {t("projects.button")}
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
