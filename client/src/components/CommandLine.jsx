import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Terminal.module.css';

const CommandLine = ({ 
  onSubmit, 
  onClear, 
  history, 
  historyIndex, 
  onHistoryNavigate 
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (historyIndex !== -1) {
      setInput(history[historyIndex]);
    }
  }, [historyIndex, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    
    if (trimmedInput === 'clear') {
      onClear();
    } else if (trimmedInput) {
      onSubmit(trimmedInput);
    }
    
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      onHistoryNavigate(e.key === 'ArrowUp' ? 'up' : 'down');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span className={`${styles.prompt} text-green-500 font-bold`}>$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`${styles.input} flex-1 bg-transparent border-none text-gray-100 font-mono text-base focus:outline-none`}
        autoFocus
        spellCheck="false"
      />
    </form>
  );
};

export default CommandLine;
