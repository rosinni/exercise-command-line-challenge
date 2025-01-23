export const tutorials = [
  {
    id: "just_hang",
    title: {
      en: "Just Hang Around",
      es: "Solo Explora",
    },
    steps: [],
  },
  {
    id: "basics",
    title: {
      en: "Terminal Basics",
      es: "Fundamentos de Terminal",
    },
    steps: [
      {
        id: "help",
        instruction: {
          en: "Let's start with the basics! Type 'help' to see all available commands.",
          es: "¡Empecemos con lo básico! Escribe 'help' para ver todos los comandos disponibles.",
        },
        expectedCommand: "help",
        hint: {
          en: "Just type 'help' and press Enter",
          es: "Simplemente escribe 'help' y presiona Enter",
        },
      },
      {
        id: "whoami",
        instruction: {
          en: "Great! Now let's check who you are. Type 'whoami' to see your username.",
          es: "¡Genial! Ahora veamos quién eres. Escribe 'whoami' para ver tu nombre de usuario.",
        },
        expectedCommand: "whoami",
        hint: {
          en: "Type 'whoami' to see your current user",
          es: "Escribe 'whoami' para ver tu usuario actual",
        },
      },
      {
        id: "pwd",
        instruction: {
          en: "Let's see where we are in the file system. Type 'pwd' to print your working directory.",
          es: "Veamos dónde estamos en el sistema de archivos. Escribe 'pwd' para mostrar tu directorio actual.",
        },
        expectedCommand: "pwd",
        hint: {
          en: "Type 'pwd' to see your current location",
          es: "Escribe 'pwd' para ver tu ubicación actual",
        },
      },
      {
        id: "ls",
        instruction: {
          en: "Now, let's see what's in this directory. Type 'ls' to list the contents.",
          es: "Ahora, veamos qué hay en este directorio. Escribe 'ls' para listar el contenido.",
        },
        expectedCommand: "ls",
        hint: {
          en: "Type 'ls' to list directory contents",
          es: "Escribe 'ls' para listar el contenido del directorio",
        },
      },
      {
        id: "mkdir",
        instruction: {
          en: "Let's create a new directory. Type 'mkdir my_folder' to create a directory named 'my_folder'.",
          es: "Creemos un nuevo directorio. Escribe 'mkdir my_folder' para crear un directorio llamado 'my_folder'.",
        },
        expectedCommand: "mkdir my_folder",
        hint: {
          en: "Type 'mkdir my_folder' to create a new directory",
          es: "Escribe 'mkdir my_folder' para crear un nuevo directorio",
        },
      },
    ],
  },
  {
    id: "cmd_challenges",
    title: {
      en: "Command Line Challenges",
      es: "Desafíos de Línea de Comandos",
    },
    steps: [
      {
        id: "cd_into_directory",
        introduction: {
          en: "The 'cd' command, short for 'change directory', is used to navigate between directories in the file system. It's essential for moving around and accessing different parts of your file system.",
          es: "El comando 'cd', abreviatura de 'change directory', se usa para navegar entre directorios en el sistema de archivos. Es esencial para moverse y acceder a diferentes partes de tu sistema de archivos.",
        },
        instruction: {
          en: "Get inside the 'thecmdchallenge/' directory.",
          es: "Ingresa al directorio 'thecmdchallenge/'",
        },
        expectedCommand: "cd thecmdchallenge/",
        hint: {
          en: "Use 'cd' followed by the directory name to move inside it.",
          es: "Usa 'cd' seguido del nombre del directorio para ingresar a él.",
        },
      },
      {
        id: "pwd_check",
        introduction: {
          en: "The 'pwd' command stands for 'print working directory'. It displays the full path of the current directory you are in. This is useful for confirming your current location in the file system.",
          es: "El comando 'pwd' significa 'print working directory'. Muestra la ruta completa del directorio actual en el que te encuentras. Esto es útil para confirmar tu ubicación actual en el sistema de archivos.",
        },
        instruction: {
          en: "Now that we moved, verify your current location using pwd.",
          es: "Ahora que nos movimos, verifica tu ubicación actual usando pwd.",
        },
        expectedCommand: "pwd",
        hint: {
          en: "Type 'pwd' to see your current directory path",
          es: "Escribe 'pwd' para ver la ruta de tu directorio actual",
        },
      },
      {
        id: "list_files",
        introduction: {
          en: "The 'ls' command lists the contents of a directory. It's useful for seeing what files and directories are present in your current location.",
          es: "El comando 'ls' lista el contenido de un directorio. Es útil para ver qué archivos y directorios están presentes en tu ubicación actual.",
        },
        instruction: {
          en: "List all files in the current directory.",
          es: "Lista todos los archivos en el directorio actual.",
        },
        expectedCommand: "ls",
        hint: {
          en: "Use 'ls' to list directory contents",
          es: "Usa 'ls' para listar el contenido del directorio",
        },
      },
      {
        id: "create_directory",
        introduction: {
          en: "The 'mkdir' command stands for 'make directory'. It is used to create new directories in the file system. This is useful for organizing files into separate folders.",
          es: "El comando 'mkdir' significa 'make directory'. Se usa para crear nuevos directorios en el sistema de archivos. Esto es útil para organizar archivos en carpetas separadas.",
        },
        instruction: {
          en: "Create a new directory called 'exercise_files'.",
          es: "Crea un nuevo directorio llamado 'exercise_files'.",
        },
        expectedCommand: "mkdir exercise_files",
        hint: {
          en: "Use 'mkdir' followed by the directory name",
          es: "Usa 'mkdir' seguido del nombre del directorio",
        },
      },
      {
        id: "create_file",
        introduction: {
          en: "The 'touch' command is used to create new empty files. It's a quick way to create a file without opening an editor.",
          es: "El comando 'touch' se usa para crear nuevos archivos vacíos. Es una forma rápida de crear un archivo sin abrir un editor.",
        },
        instruction: {
          en: "Create a new file called 'test.txt'.",
          es: "Crea un nuevo archivo llamado 'test.txt'.",
        },
        expectedCommand: "touch test.txt",
        hint: {
          en: "Use 'touch' followed by the filename",
          es: "Usa 'touch' seguido del nombre del archivo",
        },
      },
      {
        id: "remove_file",
        introduction: {
          en: "The 'rm' command stands for 'remove'. It is used to delete files from the file system. Be careful with this command as it permanently removes files.",
          es: "El comando 'rm' significa 'remove'. Se usa para eliminar archivos del sistema de archivos. Ten cuidado con este comando ya que elimina archivos de forma permanente.",
        },
        instruction: {
          en: "Remove the file 'test.txt'.",
          es: "Elimina el archivo 'test.txt'.",
        },
        expectedCommand: "rm test.txt",
        hint: {
          en: "Use 'rm' followed by the filename",
          es: "Usa 'rm' seguido del nombre del archivo",
        },
      },
      {
        id: "tree_view",
        introduction: {
          en: "The 'tree' command displays the directory structure in a tree-like format. It's useful for visualizing the hierarchy of files and directories.",
          es: "El comando 'tree' muestra la estructura del directorio en un formato similar a un árbol. Es útil para visualizar la jerarquía de archivos y directorios.",
        },
        instruction: {
          en: "Display the directory structure using the tree command.",
          es: "Muestra la estructura del directorio usando el comando tree.",
        },
        expectedCommand: "tree",
        hint: {
          en: "Simply type 'tree' to see the directory structure",
          es: "Simplemente escribe 'tree' para ver la estructura del directorio",
        },
      },
    ],
  },
];


export const checkCommand = (command, currentStep) => {
  if (!currentStep) return false;

  // If the step is a discussion point or non-command step (expectedCommand is 'N/A')
  if (currentStep.expectedCommand === 'N/A') {
    // Consider these steps as automatically completed when any input is provided
    return true;
  }

  // Clean up the command by trimming whitespace and handling multiple spaces
  const cleanCommand = command.trim().replace(/\s+/g, " ").toLowerCase();
  const expectedCommand = currentStep.expectedCommand.toLowerCase();

  return cleanCommand === expectedCommand;
};
