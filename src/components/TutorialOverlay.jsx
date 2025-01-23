import React from "react";
import styles from "../styles/TutorialOverlay.module.css";

const TutorialOverlay = ({
  currentTutorial,
  currentStep,
  onSkip,
  onContinue,
  currentLanguage,
}) => {
  if (!currentTutorial || !currentStep) return null;

  const introduction = currentStep.introduction ? currentStep.introduction[currentLanguage] : '';
  const instruction = currentStep.instruction ? currentStep.instruction[currentLanguage] : '';


  return (
    <div className={styles.overlay}>
      <div className={styles.tutorialBox}>
        <h3>{currentTutorial.title[currentLanguage]}</h3>
        <p className={styles.instruction}>{instruction}</p>
        <p>{introduction}</p>
        <div className={styles.controls}>
          {!currentStep.expectedCommand && (
            <button onClick={onContinue} className={styles.skipButton}>
              {/* Next step */}
              {currentLanguage === "en" ? "Next step" : "Siguiente paso"}
            </button>
          )}
          {/* <button onClick={onSkip} className={styles.skipButton}>
            Skip Tutorial
          </button> */}
        </div>
        {currentStep.hint && (
          <div className={styles.hint}>
            <span>💡 {currentLanguage === "en" ? "Hint" : "Pista"}: {currentStep.hint[currentLanguage]}</span>
          </div>
        )}
        {/* {currentStep.hint && (
          <div className={styles.hint}>
            <span>💡 Hint: {currentStep.hint[currentLanguage]}</span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TutorialOverlay;
