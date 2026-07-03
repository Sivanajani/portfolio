import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGlobe, FaCheck } from 'react-icons/fa';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const currentLang = (i18n.resolvedLanguage || 'en').split('-')[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLang = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-white-100 hover:text-secondary transition-colors p-2 rounded-lg"
      >
        <FaGlobe size={17} />
        <span className="text-[13px] font-semibold uppercase">{currentLang}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-2 min-w-[150px] glass-strong shadow-card rounded-xl p-1.5 z-40 list-none"
          >
            {languages.map(({ code, label }) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => selectLang(code)}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg text-[14px] text-left transition-colors ${
                    currentLang === code
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                  {currentLang === code && <FaCheck size={11} className="text-secondary" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
