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
  }
];

export const checkCommand = (command, currentStep) => {
  if (!currentStep) return false;
  return command.trim().toLowerCase() === currentStep.expectedCommand.toLowerCase();
};
