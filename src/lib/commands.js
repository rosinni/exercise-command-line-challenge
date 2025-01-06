import { fileSystem } from "./fileSystem";

const COMMANDS = [
  "help",
  "clear",
  "echo",
  "date",
  "whoami",
  "ls",
  "cd",
  "pwd",
  "mkdir",
  "touch",
  "rm",
  "tree",
  "cat",
  "cp",
  "mv",
];

export const getSuggestions = (input) => {
  const [cmd, ...args] = input.split(" ");

  // If completing a command (no space)
  if (args.length === 0) {
    return COMMANDS.filter((command) => command.startsWith(cmd.toLowerCase()));
  }

  // If completing a path argument
  if (
    ["cd", "ls", "rm", "cat", "cp", "mv"].includes(cmd.toLowerCase().trim()) &&
    args.length === 1
  ) {
    const path = args[0] || "";
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1];
    const parentPath = parts.slice(0, -1).join("/");

    // Get the directory we're searching in
    const searchDir = parentPath
      ? fileSystem.resolvePath(parentPath)
      : fileSystem.currentDir;

    if (!searchDir || searchDir.type !== "directory") return [];

    // Get suggestions from current directory level
    const suggestions = [];
    for (const [name, node] of searchDir.children) {
      if (name.startsWith(lastPart)) {
        // Add trailing slash to directories
        const suggestion = node.type === "directory" ? name + "/" : name;
        // Concatenate with parent path if it exists
        suggestions.push(
          parentPath ? `${parentPath}/${suggestion}` : suggestion,
        );
      }
    }

    return suggestions;
  }

  return [];
};

export const executeCommand = (command) => {
  const [cmd, ...args] = command.trim().split(" ");

  // Handle compound commands with &&
  if (command.includes("&&")) {
    const commands = command.split("&&").map((cmd) => cmd.trim());
    let output = "";
    let allCorrect = true;

    for (const cmd of commands) {
      const result = executeCommand(cmd);

      if (result.output) {
        output += result.output + "\n";
      }
      if (!result.correct) {
        allCorrect = false;
      }
    }
    return { output: output.trim(), correct: allCorrect };
  }

  let output;
  let correct = true;

  switch (cmd.toLowerCase()) {
    case "help":
      output = `
Available commands:
  help              - Show this help message
  clear             - Clear the terminal screen
  echo <text>       - Display a line of text
  date              - Display current date and time
  whoami            - Display current user
  tree              - Display directory structure with emojis

File System Commands:
  ls [-a|-R] [path] - List directory contents (-a: show hidden, -R: recursive)
  cd <path>         - Change directory
  pwd               - Print working directory
  mkdir [-p] <path> - Create a new directory (-p: create parent dirs)
  touch <name>      - Create a new empty file
  rm [-r] <path>    - Remove a file or directory (-r: recursive)
  cat <file>        - Display file contents
  cp <src> <dest>   - Copy a file
  mv <src> <dest>   - Move a file or directory`;
      break;
    case "echo":
      output = args.join(" ");
      break;

    case "date":
      output = new Date().toLocaleString();
      break;

    case "whoami":
      output = "guest";
      break;

    case "tree":
      output = fileSystem.tree();
      break;

    case "ls":
      let showHidden = false;
      let recursive = false;
      let path = "";

      args.forEach((arg) => {
        if (arg === "-a") showHidden = true;
        else if (arg === "-R") recursive = true;
        else if (!arg.startsWith("-")) path = arg;
      });

     
      output = fileSystem.ls(path, { showHidden, recursive });
      break;

    case "cd":
      if (!args[0]) {
        output = "cd: missing operand";
        correct = false;
      } else {
        const cdResult = fileSystem.cd(args[0]);
        output = cdResult || `Changed directory to ${fileSystem.pwd()}`;
      }
      break;

    case "pwd":
      output = fileSystem.pwd();
      break;

    case "mkdir":
      if (!args[0]) {
        output = "mkdir: missing operand";
        correct = false;
      } else if (args[0] === "-p") {
        if (!args[1]) {
          output = "mkdir: missing directory operand";
          correct = false;
        } else {
          output = fileSystem.mkdirp(args[1]);
        }
      } else {
        output = fileSystem.mkdir(args[0]);
      }
      break;

    case "touch":
      if (!args[0]) {
        output = "touch: missing operand";
        correct = false;
      } else {
        output = fileSystem.touch(args[0]);
      }
      break;

    case "rm":
      if (!args[0]) {
        output = "rm: missing operand";
        correct = false;
      } else if (args[0] === "-r" || args[0] === "-rf") {
        if (!args[1]) {
          output = "rm: missing directory operand";
          correct = false;
        } else {
          output = fileSystem.rmdir(args[1]);
        }
      } else {
        output = fileSystem.rm(args[0]);
      }
      break;

    case "cat":
      if (!args[0]) {
        output = "cat: missing operand";
        correct = false;
      } else {
        output = fileSystem.cat(args[0]);
      }
      break;

    case "cp":
      if (args.length < 2) {
        output = "cp: missing destination operand";
        correct = false;
      } else {
        output = fileSystem.cp(args[0], args[1]);
      }
      break;

    case "mv":
      if (args.length < 2) {
        output = "mv: missing destination operand";
        correct = false;
      } else {
        output = fileSystem.mv(args[0], args[1]);
      }
      break;

    default:
      output = `Command not found: ${cmd}. Type 'help' for available commands.`;
      correct = false;
  }
  return { output, correct };
};
