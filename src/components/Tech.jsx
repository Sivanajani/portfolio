import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 6;

const Tech = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const totalPages = Math.ceil(technologies.length / ITEMS_PER_PAGE);

  const paginatedTechnologies = isMobile
    ? technologies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : technologies;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        {t("tech.subtitle")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        {t("tech.title")}
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-row flex-wrap justify-center gap-10">
        {paginatedTechnologies.map(({ name, icon }) => (
          <div className="relative w-28 h-28 group" key={name}>
            <BallCanvas icon={icon} />
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-[#2a2a2a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
              {name}
            </div>
          </div>
        ))}
      </div>

      {isMobile && totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="min-w-[48px] min-h-[48px] px-4 py-2 bg-tertiary text-white rounded-md text-lg hover:bg-secondary transition active:scale-95 disabled:opacity-50"
          >
            {t("tech.prev")}
          </button>
          
          <span className="text-black text-sm mt-1">
          {t("tech.page", { current: currentPage, total: totalPages })}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="min-w-[48px] min-h-[48px] px-4 py-2 bg-tertiary text-white rounded-md text-lg hover:bg-secondary transition active:scale-95 disabled:opacity-50"
          >
            {t("tech.next")}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "tech");