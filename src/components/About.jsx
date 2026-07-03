import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaRocket, FaHeartbeat, FaLayerGroup } from 'react-icons/fa';

const facts = [
  { key: 'fact1', icon: <FaGraduationCap size={22} /> },
  { key: 'fact2', icon: <FaRocket size={22} /> },
  { key: 'fact3', icon: <FaHeartbeat size={22} /> },
  { key: 'fact4', icon: <FaLayerGroup size={22} /> },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t('about.intro')}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t('about.title')}</h2>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)}>
          <p className="text-white-100/90 text-[17px] leading-[30px]">{t('about.p1')}</p>
          <p className="mt-5 text-muted text-[17px] leading-[30px]">{t('about.p2')}</p>
        </motion.div>

        <div className="grid xs:grid-cols-2 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.key}
              variants={fadeIn('up', 'spring', 0.15 * i, 0.7)}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-900/40 to-amber-500/25 border border-white/10 flex items-center justify-center text-secondary">
                {fact.icon}
              </div>
              <h3 className="mt-4 text-white-100 font-display font-semibold text-[17px]">
                {t(`about.facts.${fact.key}.title`)}
              </h3>
              <p className="mt-1.5 text-muted text-[14px] leading-[22px]">
                {t(`about.facts.${fact.key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
