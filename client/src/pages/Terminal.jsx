import React, { useState, useEffect } from 'react';
import CommandLine from '../components/CommandLine';
import Instructions from '../components/Instructions';
import styles from '../styles/Terminal.module.css';
import { executeCommand } from '../lib/commands';
import useCommandHistory from '../hooks/useCommandHistory';

const Terminal = () => {
  const [output, setOutput] = useState([
    { type: 'system', content: 'Welcome to Terminal Simulator v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  
  const { history, addToHistory, navigateHistory, historyIndex } = useCommandHistory();

  const handleCommand = (command) => {
    if (!command.trim()) return;
    
    // Add command to output
    setOutput(prev => [...prev, { type: 'input', content: command }]);
    
    // Special case for clear command
    if (command.trim().toLowerCase() === 'clear') {
      setOutput([]);
      return;
    }
    
    // Execute command and get result
    const result = executeCommand(command);
    setOutput(prev => [...prev, { type: 'output', content: result }]);
    addToHistory(command);
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
      <div className={styles.terminal}>
        <div className={styles.output}>
          {output.map((line, index) => (
            <div key={index} className={styles[line.type]}>
              {line.type === 'input' && (
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
      <Instructions />
    </div>
  );
};

export default Terminal;
