import React from "react";
import styles from "../styles/Terminal.module.css";

const Instructions = ({ currentLanguage }) => {
  const commands = [
    {
      name: "help",
      description:
        currentLanguage === "en"
          ? "Show available commands"
          : "Mostrar comandos disponibles",
    },
    {
      name: "clear",
      description:
        currentLanguage === "en"
          ? "Clear the terminal screen"
          : "Limpiar la pantalla del terminal",
    },
    {
      name: "echo <text>",
      description:
        currentLanguage === "en"
          ? "Display a line of text"
          : "Mostrar una línea de texto",
    },
    {
      name: "date",
      description:
        currentLanguage === "en"
          ? "Display current date and time"
          : "Mostrar fecha y hora actual",
    },
    {
      name: "whoami",
      description:
        currentLanguage === "en"
          ? "Display current user"
          : "Mostrar usuario actual",
    },
    {
      name: "tree",
      description:
        currentLanguage === "en"
          ? "Display directory structure with emojis"
          : "Mostrar estructura de directorios con emojis",
    },
    {
      name: "ls [path]",
      description:
        currentLanguage === "en"
          ? "List directory contents"
          : "Listar contenido del directorio",
    },
    {
      name: "cd <path>",
      description:
        currentLanguage === "en" ? "Change directory" : "Cambiar directorio",
    },
    {
      name: "pwd",
      description:
        currentLanguage === "en"
          ? "Print working directory"
          : "Mostrar directorio actual",
    },
    {
      name: "mkdir <name>",
      description:
        currentLanguage === "en"
          ? "Create a new directory"
          : "Crear un nuevo directorio",
    },
    {
      name: "touch <name>",
      description:
        currentLanguage === "en"
          ? "Create a new empty file"
          : "Crear un nuevo archivo vacío",
    },
    {
      name: "rm <path>",
      description:
        currentLanguage === "en"
          ? "Remove a file or directory"
          : "Eliminar un archivo o directorio",
    },
  ];

  return (
    <>
      <h2>
        {currentLanguage === "en"
          ? "Available Commands"
          : "Comandos Disponibles"}
      </h2>
      <div className={styles.commandList}>
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
        <h3>
          {currentLanguage === "en"
            ? "Keyboard Shortcuts:"
            : "Atajos de Teclado:"}
        </h3>
        <ul>
          <li>
            {currentLanguage === "en"
              ? "Tab - Show command suggestions"
              : "Tab - Mostrar sugerencias de comandos"}
          </li>
          <li>
            {currentLanguage === "en"
              ? "↑/↓ - Navigate suggestions/history"
              : "↑/↓ - Navegar sugerencias/historial"}
          </li>
          <li>
            {currentLanguage === "en"
              ? "Enter - Execute command"
              : "Enter - Ejecutar comando"}
          </li>
          <li>
            {currentLanguage === "en"
              ? "Ctrl+L or 'clear' - Clear screen"
              : "Ctrl+L o 'clear' - Limpiar pantalla"}
          </li>
          <li>
            {currentLanguage === "en"
              ? "Esc - Close suggestions"
              : "Esc - Cerrar sugerencias"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Instructions;
