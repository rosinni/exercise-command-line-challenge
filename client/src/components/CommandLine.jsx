import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Terminal.module.css';
import { getSuggestions } from '../lib/commands';

const CommandLine = ({ 
  onSubmit, 
  onClear, 
  history, 
  historyIndex, 
  onHistoryNavigate 
}) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (historyIndex !== -1) {
      setInput(history[historyIndex]);
      setSuggestions([]);
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
    setSuggestions([]);
    setSelectedSuggestion(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      
      if (suggestions.length > 0) {
        // Navigate through suggestions
        if (e.key === 'ArrowUp') {
          setSelectedSuggestion(prev => 
            prev > 0 ? prev - 1 : suggestions.length - 1
          );
        } else {
          setSelectedSuggestion(prev => 
            prev < suggestions.length - 1 ? prev + 1 : 0
          );
        }
      } else {
        // Navigate through history
        onHistoryNavigate(e.key === 'ArrowUp' ? 'up' : 'down');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      
      if (suggestions.length === 0) {
        // Get new suggestions
        const newSuggestions = getSuggestions(input);
        setSuggestions(newSuggestions);
        setSelectedSuggestion(newSuggestions.length > 0 ? 0 : -1);
      } else if (selectedSuggestion !== -1) {
        // Apply selected suggestion
        const parts = input.split(' ');
        if (parts.length <= 1) {
          setInput(suggestions[selectedSuggestion]);
        } else {
          parts[parts.length - 1] = suggestions[selectedSuggestion];
          setInput(parts.join(' '));
        }
        setSuggestions([]);
        setSelectedSuggestion(-1);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setSelectedSuggestion(-1);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setSuggestions([]);
    setSelectedSuggestion(-1);
  };

  return (
    <div className={styles.commandLineContainer}>
      <form onSubmit={handleSubmit} className={styles.commandLine}>
        <span className={styles.prompt}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          autoFocus
          spellCheck="false"
        />
      </form>
      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`${styles.suggestion} ${
                index === selectedSuggestion ? styles.selected : ''
              }`}
              onClick={() => {
                const parts = input.split(' ');
                if (parts.length <= 1) {
                  setInput(suggestion);
                } else {
                  parts[parts.length - 1] = suggestion;
                  setInput(parts.join(' '));
                }
                setSuggestions([]);
                setSelectedSuggestion(-1);
                inputRef.current?.focus();
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommandLine;
