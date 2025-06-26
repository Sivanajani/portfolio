import { FaHandsHelping, FaRibbon, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";
import { engagements } from "../constants";

const iconMap = {
  FaHandsHelping: <FaHandsHelping className="text-3xl text-cyan-500" />,
  FaRibbon: <FaRibbon className="text-3xl text-pink-500" />,
  FaUserGraduate: <FaUserGraduate className="text-3xl text-sky-600" />,
};

const Engagement = () => {
  const { t } = useTranslation();

  return (
    <section id="engagement" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className={`${styles.sectionSubText}`}>{t("sections.engagement.sub")}</p>
          <h2 className={`${styles.sectionHeadText}`}>{t("sections.engagement.title")}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {engagements.map((item, index) => (
            <div
              key={index}
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
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                {iconMap[item.icon]}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {t(item.title)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t(item.date)}</p>
                </div>
              </div>
              <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300">
                {item.description.map((point, i) => (
                  <li key={i}>{t(point)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
