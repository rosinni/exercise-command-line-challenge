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
    <div className={`${styles.instructions} w-80 p-4 bg-gray-900 border-l border-gray-700`}>
      <h2 className="text-xl font-bold mb-4 text-green-500">Terminal Instructions</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-green-400">Available Commands:</h3>
        <div className="space-y-2">
          {commands.map((cmd) => (
            <div key={cmd.name} className="flex flex-col gap-1">
              <code className="px-2 py-1 bg-gray-800 rounded text-green-500 font-mono">
                {cmd.name}
              </code>
              <span className="text-gray-300 text-sm">{cmd.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-green-400">Keyboard Shortcuts:</h3>
        <ul className="space-y-2 text-gray-300">
          <li>↑/↓ - Navigate command history</li>
          <li>Enter - Execute command</li>
          <li>Ctrl+L or 'clear' - Clear screen</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
