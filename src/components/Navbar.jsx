import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white-100 text-[16px] sm:text-[19px] font-display font-bold cursor-pointer flex whitespace-nowrap">
            Sivanajani&nbsp;
            <span className="sm:block hidden">Sivakumar</span>
            <span className="inline sm:hidden">S.</span>
          </p>
        </Link>

        {/* desktop */}
        <div className="hidden custom:flex items-center gap-2">
          <ul className="list-none flex flex-row gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                    active === link.id
                      ? 'text-white'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {t(link.title)}
                  {active === link.id && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-secondary to-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* mobile */}
        <div className="custom:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <button
            aria-label="Menu"
            onClick={() => setToggle(!toggle)}
            className="text-white-100 p-2"
          >
            {toggle ? <FaTimes size={24} /> : <FaBars size={22} />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="glass-strong shadow-card absolute top-16 right-4 min-w-[180px] z-10 rounded-2xl p-4"
              >
                <ul className="list-none flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => {
                          setActive(link.id);
                          setToggle(false);
                        }}
                        className={`block px-4 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                          active === link.id
                            ? 'text-white bg-white/10'
                            : 'text-muted hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {t(link.title)}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
