class FileSystemNode {
  constructor(name, type = 'file', content = '') {
    this.name = name;
    this.type = type; // 'file' or 'directory'
    this.content = content;
    this.children = new Map(); // For directories
    this.parent = null;
  }
}

class FileSystem {
  constructor() {
    this.root = new FileSystemNode('/', 'directory');
    this.currentDir = this.root;
  }

  // Helper method to resolve path
  resolvePath(path) {
    if (!path) return this.currentDir;
    
    const parts = path.split('/').filter(Boolean);
    let current = path.startsWith('/') ? this.root : this.currentDir;
    
    for (const part of parts) {
      if (part === '..') {
        current = current.parent || current;
      } else if (part !== '.') {
        const next = current.children.get(part);
        if (!next) return null;
        current = next;
      }
    }
    return current;
  }

  // File system operations
  mkdir(name) {
    if (this.currentDir.children.has(name)) {
      return `mkdir: ${name}: Directory already exists`;
    }
    const newDir = new FileSystemNode(name, 'directory');
    newDir.parent = this.currentDir;
    this.currentDir.children.set(name, newDir);
    return '';
  }

  cd(path) {
    if (path === '/') {
      this.currentDir = this.root;
      return '';
    }
    
    const target = this.resolvePath(path);
    if (!target) {
      return `cd: ${path}: No such directory`;
    }
    if (target.type !== 'directory') {
      return `cd: ${path}: Not a directory`;
    }
    
    this.currentDir = target;
    return '';
  }

  ls(path) {
    const target = path ? this.resolvePath(path) : this.currentDir;
    if (!target) {
      return `ls: ${path}: No such file or directory`;
    }
    if (target.type === 'file') {
      return target.name;
    }
    return Array.from(target.children.keys()).join('\n') || '';
  }

  pwd() {
    const parts = [];
    let current = this.currentDir;
    while (current) {
      if (current === this.root) {
        parts.unshift('');
        break;
      }
      parts.unshift(current.name);
      current = current.parent;
    }
    return parts.join('/') || '/';
  }

  touch(name) {
    if (this.currentDir.children.has(name)) {
      return `touch: ${name}: File already exists`;
    }
    const newFile = new FileSystemNode(name, 'file');
    newFile.parent = this.currentDir;
    this.currentDir.children.set(name, newFile);
    return '';
  }

  rm(path) {
    if (!path) {
      return 'rm: missing operand';
    }
    
    const parts = path.split('/');
    const name = parts.pop();
    const parentPath = parts.join('/');
    const parent = parentPath ? this.resolvePath(parentPath) : this.currentDir;
    
    if (!parent || !parent.children.has(name)) {
      return `rm: ${path}: No such file or directory`;
    }
    
    parent.children.delete(name);
    return '';
  }
}

export const fileSystem = new FileSystem();
