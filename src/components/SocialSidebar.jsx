import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-[35%] left-0 z-50 hidden sm:flex flex-col">
      {[
        {
          id: 1,
          icon: <FaLinkedin size={18} />,
          href: "https://www.linkedin.com/in/sivanajani-sivakumar/",
          label: "LinkedIn",
        },
        {
          id: 2,
          icon: <FaGithub size={18} />,
          href: "https://github.com/Sivanajani",
          label: "GitHub",
        },
      ].map(({ id, icon, href, label }) => (
        <a
          key={id}
          href={href}
          className="glass-strong text-white-100 hover:text-secondary hover:translate-x-1 w-11 h-11 mb-2 flex items-center justify-center rounded-r-xl transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
