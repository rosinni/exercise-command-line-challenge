import React, { useState } from 'react';
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
    const newOutput = executeCommand(command);
    setOutput(prev => [...prev, 
      { type: 'input', content: command },
      { type: 'output', content: newOutput }
    ]);
    addToHistory(command);
  };

  const handleClear = () => {
    setOutput([]);
  };

  return (
    <div className={`${styles.container} min-h-screen flex`}>
      <div className={`${styles.terminal} flex-1 p-4 bg-black`}>
        <div className={`${styles.output} flex-1 overflow-y-auto`}>
          {output.map((line, index) => (
            <div key={index} className={styles[line.type]}>
              {line.type === 'input' && <span className={styles.prompt}>$ </span>}
              <span className="whitespace-pre-wrap">{line.content}</span>
            </div>
          ))}
        </div>
        <CommandLine 
          onSubmit={handleCommand}
          onClear={handleClear}
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
