# TypeScript Tutorial Project

A step-by-step learning project for TypeScript fundamentals with practical examples.

## Project Structure

```
typescript-tutorial/
├── lessonone/
│   └── index.ts      # Basic TypeScript types and object structure examples
├── whyts/
│   ├── index.ts      # Pizza ordering system in TypeScript
│   └── index.js      # Compiled JavaScript version of the pizza ordering system
└── README.md         # This file
```

## Lessons Overview

### Lesson One: TypeScript Basics
- Primitive data types (string, number, boolean)
- Custom types
- Object types and nested objects
- Type definitions for structured data

### Why TypeScript: Pizza Ordering System
A practical example demonstrating TypeScript's benefits with:
- Type definitions for menu items
- Strongly-typed function parameters and returns
- Object structure enforcement
- Error prevention through type checking

## Running the Examples

### Prerequisites
- Node.js (v14 or later recommended)
- TypeScript installed globally

```bash
npm install -g typescript
```

### Compile TypeScript Files
```bash
# Compile a specific TypeScript file
tsc lessonone/index.ts

# Or compile a specific directory
tsc whyts/index.ts
```

### Run with ts-node (recommended for development)
```bash
# Install ts-node globally
npm install -g ts-node

# Run TypeScript files directly
ts-node lessonone/index.ts
ts-node whyts/index.ts
```

## Setting Up a TypeScript Project

To create a properly configured TypeScript project:

1. Initialize a new TypeScript project:
```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
```

2. Configure your `tsconfig.json` with appropriate settings
3. Add scripts to your package.json:
```json
"scripts": {
  "start": "tsc && node dist/index.js",
  "dev": "ts-node src/index.ts"
}
```

## Key TypeScript Features Demonstrated

1. **Type Annotations** - Explicitly defining variable types
2. **Custom Type Definitions** - Creating reusable types
3. **Object Interfaces** - Defining object structures
4. **Type Safety** - Preventing runtime errors through compile-time checking

## Learning Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## Next Steps

- Add function return types
- Explore generics
- Implement interfaces
- Learn about TypeScript modules