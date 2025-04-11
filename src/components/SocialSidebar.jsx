import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-[35%] left-0 z-50 flex flex-col">
      {[
        {
          id: 1,
          icon: <FaLinkedin size={20} />,
          href: "https://www.linkedin.com/in/sivanajani-sivakumar/",
          label: "LinkedIn",
        },
        {
          id: 2,
          icon: <FaGithub size={20} />,
          href: "https://github.com/Sivanajani",
          label: "GitHub",
        },
      ].map(({ id, icon, href, label }) => (
        <a
          key={id}
          href={href}
          className="bg-[#2A2A2A] hover:bg-secondary text-white w-10 h-10 mb-2 flex items-center justify-center rounded-r-md transition duration-300"
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
