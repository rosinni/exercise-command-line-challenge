import React from 'react';
import styles from '../styles/TutorialOverlay.module.css';

const TutorialOverlay = ({ currentTutorial, currentStep, onSkip }) => {
  if (!currentTutorial || !currentStep) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.tutorialBox}>
        <h3>{currentTutorial.title}</h3>
        <p>{currentStep.instruction}</p>
        <div className={styles.controls}>
          <button onClick={onSkip} className={styles.skipButton}>
            Skip Tutorial
          </button>
          {currentStep.hint && (
            <div className={styles.hint}>
              <span>💡 Hint: {currentStep.hint}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;
