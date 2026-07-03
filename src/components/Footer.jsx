import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);
  const { t } = useTranslation();

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="text-white-100 font-display font-semibold">
              Sivanajani Sivakumar
            </p>
            <p className="text-muted text-sm mt-1">{t("footer.tagline")}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sivanajani-sivakumar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass w-10 h-10 rounded-xl flex items-center justify-center text-white-100 hover:text-secondary transition-colors"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="https://github.com/Sivanajani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass w-10 h-10 rounded-xl flex items-center justify-center text-white-100 hover:text-secondary transition-colors"
            >
              <FaGithub size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} Sivanajani Sivakumar. {t("footer.rights")}
          </p>
          <button
            className="underline underline-offset-4 hover:text-secondary transition-colors"
            onClick={() => setShowCredits(!showCredits)}
          >
            {t("footer.credits")}
          </button>
        </div>

        {showCredits && (
          <div className="mt-5 text-left text-muted text-sm space-y-2 glass rounded-2xl p-5">
            <p>
              {t("footer.model1")}{" "}
              <a
                href="https://sketchfab.com/cmzw"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                cmzw
              </a>{" "}
              (
              <a
                href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                model
              </a>
              ), {t("footer.license")}{" "}
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                CC-BY-4.0
              </a>
              .
            </p>
            <p>
              {t("footer.model2")}{" "}
              <a
                href="https://sketchfab.com/assetfactory"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                assetfactory
              </a>{" "}
              (
              <a
                href="https://sketchfab.com/3d-models/sci-fi-computer-game-ready-53e7eeb0f69540d2892ad6aa5f47bd39"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                model
              </a>
              ),{" "}
              <a
                href="https://sketchfab.com/licenses"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.sketchfab")}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
