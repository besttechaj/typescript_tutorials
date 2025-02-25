// variable declaration using its type

/*

//? strict type checking in typescript 
### **What is Strict Type Checking in TypeScript? (Easy Explanation)**  

**Strict Type Checking** means TypeScript enforces type rules strictly, preventing unexpected errors by making sure variables, functions, and objects always have the correct data types.  

---

### **Example Without Strict Type Checking (`strict: false`)**  
```ts
let data; // No type specified (implicitly 'any')
data = 10;       
data = "Hello";  // No error, but risky!
```
❌ **Risk:** TypeScript doesn’t check if `data` changes from a number to a string, which can cause runtime errors.

---

### **Example With Strict Type Checking (`strict: true`)**  
```ts
let data: number = 10;
data = "Hello";  // ❌ ERROR: Type 'string' is not assignable to type 'number'
```
✅ **Benefit:** TypeScript prevents assigning a string to a number variable, reducing unexpected bugs.

---

### **How to Enable Strict Type Checking?**  
1. Open **`tsconfig.json`**.  
2. Set `"strict": true` inside the `"compilerOptions"` section:  
   ```json
   {
     "compilerOptions": {
       "strict": true
     }
   }
   ```
---

### **Key Benefits of Strict Type Checking:**  
✅ **Prevents Type Errors** – Catches mistakes before running the code.  
✅ **Improves Code Reliability** – Ensures variables have correct types.  
✅ **Better Auto-Completion & Suggestions** – Helps with IntelliSense in VS Code.  

Would you like more details or examples? 😊
*/

//? datatypes in typescript
/* 
### **Data Types in TypeScript**  
TypeScript provides **static typing**, which helps catch errors at compile time. It includes all JavaScript data types along with additional types.

---

## **1️⃣ Primitive Types**  
These are the basic types found in JavaScript.

### **1.1 `string` (Textual Data)**
```typescript
let name: string = "John Doe";
```

### **1.2 `number` (Integer & Floating-point)**
```typescript
let age: number = 25;
let price: number = 99.99;
```

### **1.3 `boolean` (True/False)**
```typescript
let isActive: boolean = true;
```

### **1.4 `null` and `undefined`**
```typescript
let emptyValue: null = null;
let notAssigned: undefined = undefined;
```

---

## **2️⃣ Special Types**
These are unique to TypeScript.

### **2.1 `any` (Disables Type Checking)**
Allows any type (not recommended unless necessary).  
```typescript
let randomValue: any = "Hello";
randomValue = 10; // ✅ No error
```

### **2.2 `unknown` (Safer Alternative to `any`)**
Must be checked before using.  
```typescript
let value: unknown = "Hello";
// console.log(value.toUpperCase()); // ❌ Error: Object is of type 'unknown'
if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Works fine
}
```

### **2.3 `never` (Function Never Returns)**
For functions that always throw errors or run indefinitely.  
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

### **2.4 `void` (No Return Value)**
Used for functions that do not return a value.  
```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

---

## **3️⃣ Complex Types**
These allow more structured data.

### **3.1 `array` (List of Items)**
```typescript
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["Apple", "Banana"];
```

### **3.2 `tuple` (Fixed-Length Array with Different Types)**
```typescript
let person: [string, number] = ["Alice", 25];
```

### **3.3 `object` (Custom Data Structures)**
```typescript
let user: { name: string; age: number } = { name: "John", age: 30 };
```

---

## **4️⃣ Advanced Types**
### **4.1 `union` (Multiple Possible Types)**
```typescript
let id: number | string;
id = 101;    // ✅ Valid
id = "ABC";  // ✅ Valid
```

### **4.2 `type alias` (Custom Type)**
```typescript
type User = { name: string; age: number };
let customer: User = { name: "Bob", age: 40 };
```

### **4.3 `enum` (Named Constants)**
```typescript
enum Status {
    Success = 1,
    Failure = 0
}
let result: Status = Status.Success;
```

### **4.4 `interface` (Object Type Definition)**
```typescript
interface Car {
    brand: string;
    model: string;
}

let myCar: Car = { brand: "Tesla", model: "Model 3" };
```

---

## **5️⃣ Function Return Types**
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

---

### **Summary Table**
| Type        | Example |
|-------------|---------|
| `string`    | `"Hello"` |
| `number`    | `42` |
| `boolean`   | `true / false` |
| `null`      | `null` |
| `undefined` | `undefined` |
| `any`       | `let x: any = 5;` |
| `unknown`   | `let x: unknown = "Hello";` |
| `never`     | `function throwError(): never { throw new Error(); }` |
| `void`      | `function log(): void { console.log("Hello"); }` |
| `array`     | `let arr: number[] = [1, 2, 3];` |
| `tuple`     | `let t: [string, number] = ["A", 1];` |
| `object`    | `let obj: { name: string } = { name: "Alice" };` |
| `enum`      | `enum Colors { Red, Blue }` |
| `union`     | `let id: number | string = 123;` |
| `interface` | `interface User { name: string; }` |

Would you like a hands-on example for any of these? 🚀
*/

//! primitive datatypes - string, number, boolean

// string
let greeting: string = `hello moto`;
console.log(greeting);

// number (int or float -> treated as number only)
let userID = 1212212.4;
userID.toFixed(); // format them as a string
console.log(typeof userID);
console.log(userID);
/*
### **Understanding `toFixed()` in TypeScript**
In TypeScript (and JavaScript), the `.toFixed()` method is used on **numbers** to format them as a **string** with a specified number of decimal places.

#### **Example:**
```ts
let a = 3232.3;
console.log(a.toFixed());   // "3232"
console.log(a.toFixed(2));  // "3232.30"
console.log(a.toFixed(4));  // "3232.3000"
```
---

### **Explanation:**
- `toFixed()` converts the **number** to a **string**.
- If no argument is passed, it defaults to `0` decimal places (rounding to the nearest integer).
- If an argument (`n`) is passed, it ensures `n` decimal places.

---

### **Key Notes:**
- `toFixed()` **returns a string**, not a number.
- The number is **rounded** when necessary.
- The argument must be between `0` and `100`, but browsers usually support up to `20`.

### **Difference Between `toString()` and `toFixed()` in TypeScript**

Both `.toString()` and `.toFixed()` convert numbers to strings, but they serve different purposes.

| Feature        | `toString()` | `toFixed()` |
|---------------|-------------|-------------|
| **Purpose** | Converts a number to a string in different bases (default: base 10) | Formats a number as a string with a fixed number of decimal places |
| **Returns** | A string representation of the number | A string with a specified number of decimal places |
| **Modifies Decimal Places?** | ❌ No | ✅ Yes |
| **Supports Number Bases?** | ✅ Yes (binary, octal, hexadecimal, etc.) | ❌ No |
| **Rounding Applied?** | ❌ No | ✅ Yes (Rounds to the specified decimal places) |

---

### **Example of `toString()`**
```ts
let num = 255;
console.log(num.toString());    // "255"  (default base 10)
console.log(num.toString(2));   // "11111111" (binary)
console.log(num.toString(16));  // "ff" (hexadecimal)
```

🔹 `toString(base)` is useful when converting numbers to **binary (2), octal (8), or hexadecimal (16)**.

---

### **Example of `toFixed()`**
```ts
let num = 10.6789;
console.log(num.toFixed());   // "11"  (rounded, default 0 decimal places)
console.log(num.toFixed(2));  // "10.68" (rounded to 2 decimal places)
console.log(num.toFixed(4));  // "10.6789" (4 decimal places)
```
🔹 `toFixed(n)` is useful for **formatting currency or decimal precision**.

---

### **Key Takeaways**
- Use **`toString()`** when converting a number to a string (especially in different bases).
- Use **`toFixed()`** when formatting a number with a fixed number of decimal places.

*/

// boolean
let loggedIn: boolean = true;
console.log(loggedIn);

//! any keyword
/*
### **`any` Keyword in TypeScript**  

The `any` type in TypeScript allows a variable to hold **any type of value**, bypassing strict type checking. It effectively disables TypeScript’s type safety.  

#### **Usage Example:**
```ts
let data: any = 10;       // Number
data = "Hello";           // String
data = true;              // Boolean
data = { name: "John" };  // Object
```

#### **Key Points:**
✅ Allows dynamic typing (similar to JavaScript).  
✅ Useful when migrating JavaScript code to TypeScript.  
❌ Reduces TypeScript's benefits (no type safety, error checking).  
❌ Should be avoided where possible; use **unknown** or proper types instead.  

Would you like an example of when `any` can be useful? 😊
*/
