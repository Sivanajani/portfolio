import { FaHandsHelping, FaRibbon, FaUserGraduate, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";
import { engagements } from "../constants";
import { SectionWrapper } from "../hoc";

const iconMap = {
  FaHandsHelping: <FaHandsHelping size={22} />,
  FaRibbon: <FaRibbon size={22} />,
  FaUserGraduate: <FaUserGraduate size={22} />,
};

const Engagement = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("sections.engagement.sub")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("sections.engagement.title")}</h2>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {engagements.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.15, 0.7)}
            onClick={() => {
              if (item.link) {
                window.open(item.link, "_blank");
              } else if (item.download) {
                const a = document.createElement("a");
                a.href = item.download;
                a.download = "";
                a.click();
              }
            }}
            className="cursor-pointer glass card-hover rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-900/40 to-amber-500/25 border border-white/10 flex items-center justify-center text-secondary">
                {iconMap[item.icon]}
              </div>
              <span className="text-muted/70">
                {item.link ? <FaExternalLinkAlt size={13} /> : <FaDownload size={13} />}
              </span>
            </div>

            <h3 className="mt-4 text-[18px] font-display font-semibold text-white-100">
              {t(item.title)}
            </h3>
            <p className="mt-1 text-[13px] text-muted">{t(item.date)}</p>

            <ul className="mt-4 space-y-2">
              {item.description.map((point, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-[22px] text-white-100/80">
                  <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-accent shrink-0" />
                  {t(point)}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Engagement, "engagement");
