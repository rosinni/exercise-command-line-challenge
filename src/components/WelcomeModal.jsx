import React from "react";
import styles from "../styles/WelcomeModal.module.css";

const WelcomeModal = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Welcome to the Terminal Simulator</h2>
        <p>This application simulates a terminal environment. Watch the video below to learn how to use it.</p>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={onClose} className={styles.closeButton}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomeModal;