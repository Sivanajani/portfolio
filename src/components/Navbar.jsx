import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();


  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex-col sm:hidden' : 'hidden sm:flex flex-row'} flex gap-4`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-secondary text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{t(link.title)}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-tertiary`}
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
            <p className="text-black-100 text-[16px] sm:text-[20px] font-bold cursor-pointer flex whitespace-nowrap">
              Sivanajani&nbsp;
              <span className="sm:block hidden">Sivakumar</span>
              <span className="inline sm:hidden">S.</span>
            </p>
          </Link>

          <div className="hidden custom:flex items-center gap-4">
            {renderNavLinks(false)}
            <LanguageSwitcher />
          </div>


          <div className="custom:hidden flex flex-1 justify-end items-center">
          <LanguageSwitcher />
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 bg-white-100 shadow-lg absolute top-14 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl ${
    toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;