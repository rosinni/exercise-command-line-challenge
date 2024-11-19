import { fileSystem } from './fileSystem';

const COMMANDS = [
  'help',
  'clear',
  'echo',
  'date',
  'whoami',
  'ls',
  'cd',
  'pwd',
  'mkdir',
  'touch',
  'rm'
];

export const getSuggestions = (input) => {
  const [cmd, ...args] = input.trim().split(' ');
  
  // If we're completing a command (no space)
  if (args.length === 0) {
    return COMMANDS.filter(command => 
      command.startsWith(cmd.toLowerCase())
    );
  }
  
  // If we're completing a path argument
  if (['cd', 'ls', 'rm'].includes(cmd.toLowerCase()) && args.length === 1) {
    const currentDir = fileSystem.currentDir;
    const prefix = args[0] || '';
    return Array.from(currentDir.children.keys())
      .filter(name => name.startsWith(prefix));
  }
  
  return [];
};

export const executeCommand = (command) => {
  const [cmd, ...args] = command.trim().split(' ');

  switch (cmd.toLowerCase()) {
    case 'help':
      return `
Available commands:
  help              - Show this help message
  clear             - Clear the terminal screen
  echo <text>       - Display a line of text
  date              - Display current date and time
  whoami            - Display current user

File System Commands:
  ls [path]         - List directory contents
  cd <path>         - Change directory
  pwd               - Print working directory
  mkdir <name>      - Create a new directory
  touch <name>      - Create a new empty file
  rm <path>         - Remove a file or directory`;

    case 'echo':
      return args.join(' ');

    case 'date':
      return new Date().toLocaleString();

    case 'whoami':
      return 'guest';

    // File system commands
    case 'ls':
      return fileSystem.ls(args[0]);

    case 'cd':
      return fileSystem.cd(args[0] || '/');

    case 'pwd':
      return fileSystem.pwd();

    case 'mkdir':
      if (!args[0]) return 'mkdir: missing operand';
      return fileSystem.mkdir(args[0]);

    case 'touch':
      if (!args[0]) return 'touch: missing operand';
      return fileSystem.touch(args[0]);

    case 'rm':
      return fileSystem.rm(args[0]);

    default:
      return `Command not found: ${cmd}. Type 'help' for available commands.`;
  }
};
