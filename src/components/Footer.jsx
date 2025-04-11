import React, { useState } from "react";

const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="bg-tertiary mt-20 py-6 text-center text-white text-sm">
      <p>
        © 2025 Sivanajani Sivakumar —{" "}
        <button
          className="underline hover:text-secondary transition"
          onClick={() => setShowCredits(!showCredits)}
        >
          Impressum & Credits
        </button>
      </p>

      {showCredits && (
        <div className="mt-4 px-6 max-w-3xl mx-auto text-left text-secondary text-sm space-y-2">
          <p>
            This portfolio was inspired by{" "}
            <a
              href="https://github.com/lohitkolluri"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Lohit Kolluri
            </a>.
          </p>
          <p>
            “3D-Modell Stylized planet” by{" "}
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
            ), licensed under{" "}
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
            “3D-Modell Sci-fi computer game ready” by{" "}
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
            ), licensed under the{" "}
            <a
              href="https://sketchfab.com/licenses"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Sketchfab Standard License
            </a>
            .
          </p>
          <p>
            Background image by{" "}
            <a
              href="https://unsplash.com/de/@pawel_czerwinski"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Pawel Czerwinski
            </a>{" "}
            (
            <a
              href="https://unsplash.com/de/fotos/hintergrundmuster-LGk6T1-rfik?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              image on Unsplash
            </a>
            ).
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
