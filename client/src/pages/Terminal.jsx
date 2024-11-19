import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import CommandLine from "../components/CommandLine";
import Instructions from "../components/Instructions";
import TutorialOverlay from "../components/TutorialOverlay";
import styles from "../styles/Terminal.module.css";
import { executeCommand } from "../lib/commands";
import useCommandHistory from "../hooks/useCommandHistory";
import { tutorials, checkCommand } from "../lib/tutorials";

const Terminal = () => {
  const [output, setOutput] = useState([
    { type: "system", content: "Welcome to Terminal Simulator v1.0.0" },
    { type: "system", content: 'Type "help" to see available commands.' },
    {
      type: "system",
      content: "A tutorial will guide you through the basics.",
    },
  ]);

  const { history, addToHistory, navigateHistory, historyIndex } =
    useCommandHistory();
  const [currentTutorial, setCurrentTutorial] = useState(tutorials[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCommand = (command) => {
    if (!command.trim()) return;

    // Add command to output
    setOutput((prev) => [...prev, { type: "input", content: command }]);

    // Special case for clear command
    if (command.trim().toLowerCase() === "clear") {
      setOutput([]);
      return;
    }

    // Execute command and get result
    const result = executeCommand(command);
    setOutput((prev) => [...prev, { type: "output", content: result }]);
    addToHistory(command);

    // Check if command matches tutorial step
    if (
      currentTutorial &&
      checkCommand(command, currentTutorial.steps[currentStepIndex])
    ) {
      // Show confetti animation
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);

      // Move to next step
      if (currentStepIndex < currentTutorial.steps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        // Tutorial completed
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: "🎉 Congratulations! You've completed the basic tutorial!",
          },
        ]);
        setCurrentTutorial(null);
      }
    }
  };

  const handleSkipTutorial = () => {
    setCurrentTutorial(null);
    setOutput((prev) => [
      ...prev,
      {
        type: "system",
        content: 'Tutorial skipped. Type "help" if you need assistance.',
      },
    ]);
  };

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    const terminal = document.querySelector(`.${styles.output}`);
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [output]);

  return (
    <div className={styles.container}>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      <button
        className={styles.hamburgerButton}
        onClick={() => setShowInstructions((prev) => !prev)}
        aria-label="Toggle instructions"
      >
        ☰
      </button>
      <div
        className={styles.terminal}
        onClick={() => {
          const commandInput = document.querySelector(`.${styles.input}`);
          if (commandInput) {
            commandInput.focus();
          }
        }}
      >
        <div className={styles.output}>
          {output.map((line, index) => (
            <div key={index} className={styles[line.type]}>
              {line.type === "input" && (
                <span className={styles.prompt}>$ </span>
              )}
              {line.content}
            </div>
          ))}
        </div>
        <CommandLine
          onSubmit={handleCommand}
          history={history}
          historyIndex={historyIndex}
          onHistoryNavigate={navigateHistory}
        />
      </div>
      <div
        className={`${styles.instructions} ${showInstructions ? "" : styles.collapsed}`}
      >
        <Instructions />
      </div>
      <TutorialOverlay
        currentTutorial={currentTutorial}
        currentStep={currentTutorial?.steps[currentStepIndex]}
        onSkip={handleSkipTutorial}
      />
    </div>
  );
};

export default Terminal;
