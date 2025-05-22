# TypeScript Pizza Ordering System

This practical example demonstrates why TypeScript is valuable for real-world applications through a simple pizza ordering system.

## Key TypeScript Features Demonstrated

### Type Definitions

```typescript
type Pizza = {
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza,
    status: string
}
```

### Type Safety for Arrays

```typescript
let orderQueue: Order[] = [];  // Strongly typed array
```

### Function Parameter & Return Type Annotations

```typescript
function addNewPizza(pizza: Pizza) {
    menu.push(pizza);
}

function placeOrder(pizzaName: string) {
    // Function with typed parameters
    // Implicitly returns Order or undefined
}

function completeOrder(orderID: number) {
    // Function with typed parameters
    // Implicitly returns Order or undefined
}
```

## Key Benefits Demonstrated

1. **Early Error Detection**
   - TypeScript prevents passing wrong types to functions
   - Example: `placeOrder(123)` would cause a compiler error

2. **Improved Code Completion**
   - IDE can suggest properties of typed objects
   - Example: When typing `pizza.`, IDE suggests `name` and `price`

3. **Self-Documenting Code**
   - Types serve as documentation
   - Clear structure for data like `Pizza` and `Order`

4. **Safer Refactoring**
   - Changing the structure of `Order` would show errors everywhere it's used

## Running with Bun

```bash
# Run the pizza ordering system
bun whyts/index.ts

# Run with watch mode for development
bun --watch whyts/index.ts
```

## Extended Features to Try

1. **Add Return Types to Functions**
   ```typescript
   function addNewPizza(pizza: Pizza): void {
       menu.push(pizza);
   }

   function placeOrder(pizzaName: string): Order | undefined {
       // Implementation
   }
   ```

2. **Use Enums for Order Status**
   ```typescript
   enum OrderStatus {
       Ordered = 'ordered',
       Preparing = 'preparing',
       Ready = 'ready',
       Completed = 'completed'
   }

   type Order = {
       id: number
       pizza: Pizza,
       status: OrderStatus
   }
   ```

3. **Add Error Handling with Union Types**
   ```typescript
   type OrderResult = 
       | { success: true, order: Order } 
       | { success: false, error: string };

   function placeOrder(pizzaName: string): OrderResult {
       const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
       
       if(!selectedPizza) {
           return { success: false, error: `${pizzaName} does not exist` };
       }
       
       // Rest of implementation
       return { success: true, order: newOrder };
   }
   ```

## Notes on Bun vs Node.js for TypeScript

- **Bun**: Native TypeScript support, no compilation step needed
- **Node.js**: Requires ts-node or compilation to JavaScript

### Bun Performance Benefits

1. Faster startup times for TypeScript files
2. Uses the same types from your tsconfig.json
3. Integrated package management with `bun install`
4. Better error messages with source maps

## Advanced TypeScript Concepts to Explore Next

- **Interfaces vs Types**
- **Generics** for reusable components
- **Readonly properties** for immutability
- **Utility Types** like `Partial<T>` and `Pick<T>`