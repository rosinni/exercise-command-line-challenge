import React from 'react';
import styles from '../styles/Terminal.module.css';

const Instructions = () => {
  const commands = [
    { name: 'help', description: 'Show available commands' },
    { name: 'clear', description: 'Clear the terminal screen' },
    { name: 'echo <text>', description: 'Display a line of text' },
    { name: 'date', description: 'Display current date and time' },
    { name: 'whoami', description: 'Display current user' },
    { name: 'ls [path]', description: 'List directory contents' },
    { name: 'cd <path>', description: 'Change directory' },
    { name: 'pwd', description: 'Print working directory' },
    { name: 'mkdir <name>', description: 'Create a new directory' },
    { name: 'touch <name>', description: 'Create a new empty file' },
    { name: 'rm <path>', description: 'Remove a file or directory' },
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
          <li>Tab - Show command suggestions</li>
          <li>↑/↓ - Navigate suggestions/history</li>
          <li>Enter - Execute command</li>
          <li>Ctrl+L or 'clear' - Clear screen</li>
          <li>Esc - Close suggestions</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
