import { fileSystem } from './fileSystem';

export const tutorials = [
  {
    id: 'basics',
    title: 'Terminal Basics',
    steps: [
      {
        id: 'help',
        instruction: "Let's start with the basics! Type 'help' to see all available commands.",
        expectedCommand: 'help',
        hint: "Just type 'help' and press Enter",
      },
      {
        id: 'whoami',
        instruction: "Great! Now let's check who you are. Type 'whoami' to see your username.",
        expectedCommand: 'whoami',
        hint: "Type 'whoami' to see your current user",
      },
      {
        id: 'pwd',
        instruction: "Let's see where we are in the file system. Type 'pwd' to print your working directory.",
        expectedCommand: 'pwd',
        hint: "Type 'pwd' to see your current location",
      },
      {
        id: 'ls',
        instruction: "Now, let's see what's in this directory. Type 'ls' to list the contents.",
        expectedCommand: 'ls',
        hint: "Type 'ls' to list directory contents",
      },
      {
        id: 'mkdir',
        instruction: "Let's create a new directory. Type 'mkdir my_folder' to create a directory named 'my_folder'.",
        expectedCommand: 'mkdir my_folder',
        hint: "Type 'mkdir my_folder' to create a new directory",
      }
    ]
  },
  {
    id: 'cmd_challenges',
    title: 'Command Line Challenges',
    steps: [
      {
        id: 'challenge_start',
        instruction: "Welcome to the Command Line Challenge! First, let's create our challenge directory. Type 'mkdir thecmdchallenge' to begin.",
        expectedCommand: 'mkdir thecmdchallenge',
        hint: "Type 'mkdir thecmdchallenge' to create the challenge directory",
        setup: () => fileSystem.mkdir('thecmdchallenge')
      },
      {
        id: 'cd_into_directory',
        instruction: "Get inside the 'thecmdchallenge' directory.",
        expectedCommand: 'cd thecmdchallenge',
        hint: "Use 'cd' followed by the directory name to move inside it."
      },
      {
        id: 'print_current_directory',
        instruction: "Print the current directory path.",
        expectedCommand: 'pwd',
        hint: "Type 'pwd' to see your current location."
      },
      {
        id: 'create_small_name',
        instruction: "Create a deep directory structure: 'small-name/level1/level2/level3/level4/level5/level6'",
        expectedCommand: 'mkdir -p small-name/level1/level2/level3/level4/level5/level6',
        hint: "Use 'mkdir' with proper path to create nested directories."
      },
      {
        id: 'create_funcode',
        instruction: "Create a directory named 'funcode' with a subdirectory 'the-most-funny'.",
        expectedCommand: 'mkdir -p funcode/the-most-funny',
        hint: "Use 'mkdir -p' to create parent and child directories."
      },
      {
        id: 'create_boring_folder',
        instruction: "Create a directory named 'boringfolder' with a subdirectory 'child'.",
        expectedCommand: 'mkdir -p boringfolder/child',
        hint: "Use 'mkdir -p' to create the directory structure."
      },
      {
        id: 'clear_terminal',
        instruction: "Clear all the clutter from the command line.",
        expectedCommand: 'clear',
        hint: "Type 'clear' to clean up the command line."
      },
      {
        id: 'touch_files',
        instruction: "Create an empty file named 'the-ultimate-joke.txt' in the current directory.",
        expectedCommand: 'touch the-ultimate-joke.txt',
        hint: "Use 'touch' to create an empty file."
      },
      {
        id: 'remove_boring_folder',
        instruction: "Remove the 'boringfolder' directory and all its contents.",
        expectedCommand: 'rm -r boringfolder',
        hint: "Use 'rm -r' to remove a directory and its contents."
      }
    ]
  }
];

export const checkCommand = (command, currentStep) => {
  if (!currentStep) return false;
  
  // Clean up the command by trimming whitespace and handling multiple spaces
  const cleanCommand = command.trim().replace(/\s+/g, ' ').toLowerCase();
  const expectedCommand = currentStep.expectedCommand.toLowerCase();
  
  // If the step has a setup function, run it when the command matches
  if (cleanCommand === expectedCommand && currentStep.setup) {
    currentStep.setup();
  }
  
  return cleanCommand === expectedCommand;
};
