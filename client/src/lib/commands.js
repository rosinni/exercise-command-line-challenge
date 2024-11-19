export const executeCommand = (command) => {
  const [cmd, ...args] = command.trim().split(' ');

  switch (cmd.toLowerCase()) {
    case 'help':
      return `
Available commands:
  help     - Show this help message
  clear    - Clear the terminal screen
  echo     - Display a line of text
  date     - Display current date and time
  whoami   - Display current user
`;

    case 'echo':
      return args.join(' ');

    case 'date':
      return new Date().toLocaleString();

    case 'whoami':
      return 'guest';

    default:
      return `Command not found: ${cmd}. Type 'help' for available commands.`;
  }
};
