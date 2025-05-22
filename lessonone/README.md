# TypeScript Basics

This section covers the fundamentals of TypeScript types and basic concepts.

## Key Concepts Covered

- **Basic Types**
  - `string`: Text data
  - `number`: Numeric values (both integer and floating-point)
  - `boolean`: True/false values
  - `array`: Collection of values, typed as `Type[]` or `Array<Type>`
  - `any`: Opt-out of type checking
  - `void`: Absence of a value, typically for function returns
  - `null` and `undefined`: Special primitive types
  - `never`: Values that never occur (e.g., functions that always throw errors)

- **Type Annotations**
  ```typescript
  let name: string = "John";
  let age: number = 30;
  let isActive: boolean = true;
  let items: string[] = ["item1", "item2"];
  ```

- **Type Inference**
  ```typescript
  // TypeScript infers types when not explicitly declared
  let name = "John";        // inferred as string
  let age = 30;             // inferred as number
  let isActive = true;      // inferred as boolean
  ```

- **Object Types**
  ```typescript
  // Object type annotation
  let person: {
    name: string;
    age: number;
  } = {
    name: "John",
    age: 30
  };
  ```

- **Custom Types with Type Alias**
  ```typescript
  // Define a reusable type
  type Person = {
    name: string;
    age: number;
    email?: string;  // Optional property
  };

  // Use the type
  let employee: Person = {
    name: "Alice",
    age: 28
  };
  ```

## Running TypeScript Files with Bun

[Bun](https://bun.sh/) is a fast all-in-one JavaScript runtime that includes native TypeScript support.

```bash
# Run TypeScript file directly with Bun
bun lessonone/index.ts

# Watch mode (automatically re-run when files change)
bun --watch lessonone/index.ts
```

### Benefits of Using Bun with TypeScript

1. **Native TypeScript Support**: No need to compile TypeScript files separately
2. **Faster Execution**: Bun is typically faster than Node.js + ts-node
3. **Built-in TypeScript Loader**: No additional packages required
4. **All-in-one Toolchain**: Package manager, bundler, and runtime in one

## Notes for Future Reference

- Type annotations are removed during compilation and don't affect runtime performance
- Use `noImplicitAny` compiler option to catch places where types are unspecified
- TypeScript's type system is structural, not nominal (duck typing)
- The TypeScript compiler performs type erasure, meaning types don't exist at runtime