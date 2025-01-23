import React from "react";
import styles from "../styles/WelcomeModal.module.css";

const WelcomeModal = ({ currentLanguage, onClose }) => {
  const translations = {
    en: {
      welcome: "Welcome to 4Geeks' Terminal Simulator",
      instructions: "Follow the instructions to complete the tutorial.",
      close: "Close",
    },
    es: {
      welcome: "Bienvenido al Simulador de Terminal de 4Geeks",
      instructions: "Sigue las instrucciones para completar el tutorial.",
      close: "Cerrar",
    },
  };

  const t = translations[currentLanguage];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{t.welcome}</h2>
        <p>{t.instructions}</p>
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={onClose} className={styles.closeButton}>{t.close}</button>
      </div>
    </div>
  );
};

export default WelcomeModal;