# TypeScript Learning Journey

A comprehensive learning project for TypeScript with detailed documentation and examples.

## Table of Contents

- [TypeScript Basics](./lessonone/README.md)
- [Practical TypeScript: Pizza Ordering System](./whyts/README.md)

## Project Structure

```
typescript-tutorial/
├── README.md                 # This overview file
├── lessonone/                # Basic TypeScript concepts
│   ├── index.ts              # Type examples and demonstrations
│   ├── index.js              # Compiled JavaScript version
│   └── README.md             # Detailed notes on TypeScript basics
└── whyts/                    # Why use TypeScript demonstration
    ├── index.ts              # Pizza ordering system 
    ├── index.js              # Compiled JavaScript version
    └── README.md             # Notes on practical TypeScript benefits
```

## Using Bun with TypeScript

This project uses [Bun](https://bun.sh/) as the runtime for TypeScript files. Bun offers several advantages for TypeScript development:

### Installation

```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash
```

### Running TypeScript Files

```bash
# Run a TypeScript file directly
bun path/to/file.ts

# Run with watch mode (auto-reload on changes)
bun --watch path/to/file.ts
```

### Using as a Package Manager

```bash
# Initialize a new project
bun init

# Install dependencies
bun install <package-name>

# Run scripts from package.json
bun run <script-name>
```

## TypeScript Setup

### Using TypeScript with Bun

Bun has built-in TypeScript support. To configure TypeScript:

```bash
# Create tsconfig.json
bunx tsc --init
```

### Key tsconfig.json Settings

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Learning Path

1. **Start with [TypeScript Basics](./lessonone/README.md)**
   - Learn fundamental types and concepts
   - Understand type annotations and inference

2. **Apply concepts with the [Pizza Ordering System](./whyts/README.md)**
   - See practical benefits of TypeScript
   - Learn about object types and type safety

3. **Next Topics to Explore**
   - Interfaces and Classes
   - Generics
   - Advanced Types
   - Modules and Namespaces
   - Decorators

## TypeScript Cheat Sheet

### Basic Types

```typescript
// Primitive types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple
let tuple: [string, number] = ["hello", 10];

// Any (avoid when possible)
let notSure: any = 4;

// Void
function warnUser(): void {
  console.log("Warning!");
}

// Never
function error(): never {
  throw new Error("Error");
}
```

### Object Types

```typescript
// Object type
let person: { name: string; age: number } = { name: "Alice", age: 25 };

// Type alias
type Person = {
  name: string;
  age: number;
  email?: string; // Optional property
};

// Interface
interface User {
  id: number;
  name: string;
  readonly role: string; // Can't be changed after creation
}
```

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Bun Documentation](https://bun.sh/docs)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)