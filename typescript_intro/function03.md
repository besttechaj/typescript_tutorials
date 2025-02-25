# types of Functions in typescript

In TypeScript, functions can be categorized in several ways based on their structure and usage. Here are the main types of functions in TypeScript:

## 1. **Named Function**

```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3)); // Output: 8
```

- These functions have explicit names and can be called by their name.

### 2. **Anonymous Function**

```typescript
const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(4, 5)); // Output: 20
```

- These functions don’t have a name and are typically assigned to a variable.

### 3. **Arrow Function (Lambda Function)**

```typescript
const subtract = (a: number, b: number): number => a - b;
console.log(subtract(10, 5)); // Output: 5
```

- A concise syntax for writing functions.

### 4. **Function with Optional Parameters**

```typescript
function greet(name: string, message?: string): string {
  return `Hello, ${name}! ${message || 'How are you?'}`;
}
console.log(greet('John')); // Output: Hello, John! How are you?
```

- The `message` parameter is optional.

### 5. **Function with Default Parameters**

```typescript
function greetUser(name: string, message: string = 'Welcome!'): string {
  return `Hello, ${name}! ${message}`;
}
console.log(greetUser('Alice')); // Output: Hello, Alice! Welcome!
```

- If no value is passed, the default value is used.

### 6. **Rest Parameter Function**

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

- Accepts multiple arguments as an array.

### 7. **Function Overloading**

```typescript
function display(value: string): void;
function display(value: number): void;
function display(value: any): void {
  console.log(value);
}
display('Hello'); // Output: Hello
display(42); // Output: 42
```

- Allows multiple function signatures with different parameter types.

### 8. **Callback Function**

```typescript
function processData(data: string, callback: (result: string) => void): void {
  callback(data.toUpperCase());
}
processData('hello', (result) => console.log(result)); // Output: HELLO
```

- A function passed as an argument to another function.

### 9. **Generator Function**

```typescript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generatorFunction();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
```

- Functions that use `yield` to return values lazily.

### 10. **Asynchronous Function**

```typescript
async function fetchData(): Promise<string> {
  return 'Data fetched!';
}
fetchData().then(console.log); // Output: Data fetched!
```

- Uses `async` and `await` for handling promises.

\*/

//? return types of a function in typescript
/\*
In TypeScript, the return type of a function specifies the type of value the function will return. You can explicitly define it or let TypeScript infer it automatically.

---

### **1. Explicit Return Type**

You can specify the return type using `:` after the parameter list.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

- Here, `number` is the return type, meaning this function will always return a `number`.

---

### **2. Implicit Return Type (Type Inference)**

TypeScript automatically infers the return type based on the function body.

```typescript
function greet(name: string) {
  return `Hello, ${name}!`; // TypeScript infers this as 'string'
}
```

- The return type is inferred as `string` even though it is not explicitly written.

---

### **3. `void` (No Return Value)**

If a function doesn’t return anything, it has a `void` return type.

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

- A function with `void` can return `undefined`, but not any other value.

---

### **4. `never` (Function Never Returns)**

For functions that either throw errors or run infinitely.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log('Running...');
  }
}
```

- The `never` type ensures the function never reaches an endpoint.

---

### **5. Returning Union Types**

A function can return multiple possible types using a union (`|`).

```typescript
function getResult(status: boolean): string | number {
  return status ? 'Success' : 404;
}
```

- This function can return either a `string` or a `number`.

---

### **6. Returning Objects**

A function can return an object with a defined structure.

```typescript
function getUser(id: number): { id: number; name: string } {
  return { id, name: 'John Doe' };
}
```

- The function returns an object with `id` and `name` properties.

---

### **7. Returning Functions**

A function can return another function.

```typescript
function multiplier(factor: number): (value: number) => number {
  return (value) => value * factor;
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

- The `multiplier` function returns another function that multiplies numbers.

---

### **8. Asynchronous Function (`Promise<T>`)**

An `async` function always returns a `Promise`.

```typescript
async function fetchData(): Promise<string> {
  return 'Data Loaded';
}

fetchData().then(console.log); // Output: Data Loaded
```

- The return type is `Promise<string>` since `async` functions always return a promise.

---

Would you like examples based on a specific use case? 🚀
\*/

//# when you can't predict what will be the return type
function getVal(myval: number): any {
if (myval > 5) {
return true;
}
return '200 ok';
}

console.log(getVal(2));
console.log(getVal(10));

const heros_1 = ['thor', 'spiderman', 'ironman'];
const heros_2 = [11, 22, 33, 44];

// return type is string
heros_1.map((ele): string => `hero is ${ele}`);

// return type is number
heros_2.map((ele): number => 10);

// return type is void
function displayError(err_msg: string): void {
console.log(`error is: ${err_msg}`);
}

// never return keyword for throwing error
function showError(err_msg: string): never {
throw new Error(err_msg);
}

//? difference between "never" and "void" keyword
/\*

- difference between "never" keyword and "void" keyword

In TypeScript, the `never` type represents values that **never occur**. It is used for functions that **never return** or for code that is **impossible to reach**.

### **When to Use `never`**

1. **Functions that throw errors**

   ```typescript
   function throwError(message: string): never {
     throw new Error(message);
   }
   ```

   - This function never returns a value; it always throws an error.

2. **Functions with infinite loops**

   ```typescript
   function infiniteLoop(): never {
     while (true) {
       console.log('Running forever...');
     }
   }
   ```

   - The function never exits, so its return type is `never`.

3. **Exhaustive type checking (in `switch` statements)**

   ```typescript
   type Status = 'success' | 'error';

   function handleStatus(status: Status): void {
     switch (status) {
       case 'success':
         console.log('Success!');
         break;
       case 'error':
         console.log('Error!');
         break;
       default:
         const unexpected: never = status; // Ensures all cases are handled
         throw new Error(`Unexpected status: ${unexpected}`);
     }
   }
   ```

   - The `never` type ensures that all possible cases in a `switch` are covered. If a new case (e.g., `"pending"`) is added but not handled, TypeScript will show an error.

### **Difference Between `never` and `void`**

| Type    | Meaning                                                    |
| ------- | ---------------------------------------------------------- |
| `void`  | Function returns **undefined** or no value                 |
| `never` | Function **never returns** (throws error or infinite loop) |
