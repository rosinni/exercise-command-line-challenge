import React from "react";
import { useLocation } from "wouter";
import styles from "../styles/TutorialOverlay.module.css";
import { tutorials } from "../lib/tutorials";

const ChooseTutorial = ({ onChoose, currentLanguage }) => {

  const [, setLocation] = useLocation();

  const handleChooseTutorial = (index) => {
    onChoose(index);
    const selectedTutorial = tutorials[index].id;
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('tutorial', selectedTutorial);
    setLocation(`?${queryParams.toString()}`);
  };


  return (
    <div className={styles.overlay}>
      <div className={styles.tutorialBox}>
        <h3>Choose a tutorial:</h3>
        {tutorials.map((tutorial, index) => (
          <div key={index} className={styles.controls}>
            <button
              onClick={() => handleChooseTutorial(index)}
              className={styles.skipButton}
            >
              {tutorial.title[currentLanguage]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTutorial;
