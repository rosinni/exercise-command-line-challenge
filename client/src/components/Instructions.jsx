import React from 'react';
import styles from '../styles/Terminal.module.css';

const Instructions = () => {
  const commands = [
    { name: 'help', description: 'Show available commands' },
    { name: 'clear', description: 'Clear the terminal screen' },
    { name: 'echo <text>', description: 'Display a line of text' },
    { name: 'date', description: 'Display current date and time' },
    { name: 'whoami', description: 'Display current user' },
  ];

  return (
    <div className={styles.instructions}>
      <h2>Terminal Instructions</h2>
      <div className={styles.commandList}>
        <h3>Available Commands:</h3>
        <div>
          {commands.map((cmd) => (
            <div key={cmd.name} className={styles.command}>
              <code>{cmd.name}</code>
              <span>{cmd.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.shortcuts}>
        <h3>Keyboard Shortcuts:</h3>
        <ul>
          <li>↑/↓ - Navigate command history</li>
          <li>Enter - Execute command</li>
          <li>Ctrl+L or 'clear' - Clear screen</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
