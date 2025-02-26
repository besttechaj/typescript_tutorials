# Arrays in typescript

## **Arrays in TypeScript**

In TypeScript, arrays allow you to store multiple values of the same type. You can define arrays in different ways and even enforce strict type rules.

---

### **1. Declaring Arrays**

#### **Using Type Notation (`Type[]`)**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];
```

#### **Using Generic Notation (`Array<Type>`)**

```typescript
let numbers: Array<number> = [10, 20, 30];
let names: Array<string> = ['John', 'Doe'];
```

---

### **2. Readonly Arrays**

To prevent modification of an array:

```typescript
let colors: readonly string[] = ['red', 'green', 'blue'];
// colors.push("yellow"); // ❌ Error: Cannot modify a readonly array
```

---

### **3. Array of Objects**

```typescript
type User = { id: number; name: string };

let users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
```

---

### **4. Multi-Dimensional Arrays**

```typescript
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
```

---

### **5. Tuple Arrays (Fixed-Length)**

Tuples enforce **fixed length and type order**.

```typescript
let user: [string, number] = ['Alice', 25];
// user = [25, "Alice"]; // ❌ Error: Type mismatch
```

---

### **6. Array Methods in TypeScript**

All JavaScript array methods work in TypeScript, such as:

```typescript
let fruits: string[] = ['Apple', 'Banana', 'Mango'];

// Adding elements
fruits.push('Orange'); // ["Apple", "Banana", "Mango", "Orange"]

// Removing elements
fruits.pop(); // ["Apple", "Banana", "Mango"]

// Mapping over array
let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits); // ["APPLE", "BANANA", "MANGO"]
```

---

### **7. Union Types in Arrays**

An array can hold multiple types using a union type:

```typescript
let mixed: (number | string)[] = [1, 'Hello', 3, 'World'];
```

---

### **8. Array with Generics**

You can use generics to create reusable array types:

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let firstNumber = getFirstElement<number>([10, 20, 30]); // 10
let firstString = getFirstElement<string>(['Alice', 'Bob']); // "Alice"
```

---

### **Summary**

| Feature           | Example                                             |
| ----------------- | --------------------------------------------------- | -------------------------- |
| Basic Array       | `let nums: number[] = [1, 2, 3];`                   |
| Generic Array     | `let nums: Array<number> = [1, 2, 3];`              |
| Readonly Array    | `let colors: readonly string[] = ["red", "green"];` |
| Array of Objects  | `let users: User[] = [{ id: 1, name: "Alice" }];`   |
| Multi-Dimensional | `let matrix: number[][] = [[1, 2], [3, 4]];`        |
| Tuples            | `let user: [string, number] = ["Alice", 25];`       |
| Union Types       | `let mixed: (number                                 | string)[] = [1, "Hello"];` |

## Difference between normal array and generic array

### **"A Generic Array Lets You Define the Type Dynamically" – What Does It Mean? 🤔**

It means that **you don’t have to specify a fixed type** when writing the code. Instead, you can create a flexible function or class that works with **any type**.

---

### **🔹 Example 1: Normal Array (Fixed Type)**

If you use a normal array (`T[]`), you must **specify the type manually**:

```typescript
let numbers: number[] = [1, 2, 3]; // Can only store numbers
let words: string[] = ['hello', 'world']; // Can only store strings
```

🚫 **Problem:** If you want a function to work with both `number[]` and `string[]`, you would have to write separate functions.

---

### **🔹 Example 2: Generic Array (`Array<T>`) - Type Defined Dynamically**

With **Generics (`Array<T>`)**, TypeScript **figures out the type automatically** based on what you pass.

```typescript
function getFirstElement<T>(arr: Array<T>): T {
  return arr[0]; // Works with any type of array
}

// TypeScript automatically sets T as 'number' here
console.log(getFirstElement([10, 20, 30])); // Output: 10

// TypeScript automatically sets T as 'string' here
console.log(getFirstElement(['apple', 'banana', 'cherry'])); // Output: "apple"
```

✅ **No need to manually specify the type!** TypeScript **dynamically** assigns it based on the input.

---

### **🔍 What’s the Benefit?**

| Feature                      | Normal Array (`T[]`)                               | Generic Array (`Array<T>`)                                            |
| ---------------------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| **Type Flexibility**         | ❌ Fixed (e.g., `number[]` only)                   | ✅ Works with any type (e.g., `Array<number>`, `Array<string>`, etc.) |
| **Works with Functions?**    | ❌ Requires multiple functions for different types | ✅ One function works with all types                                  |
| **Better Code Reusability?** | ❌ No                                              | ✅ Yes                                                                |

---

### **🚀 Summary**

- **Normal Array (`T[]`)** → Fixed type (e.g., `number[]`, `string[]`).
- **Generic Array (`Array<T>`)** → Type is **decided at runtime**, making the code **more flexible and reusable**.

## Difference between normal array and tuple

### **Difference Between Normal Array and Tuple in TypeScript**

In TypeScript, both **arrays** and **tuples** store multiple values, but they have key differences in how they work.

---

## **1️⃣ Normal Array (`T[]`) - Flexible Size & Type**

A **normal array** in TypeScript stores multiple elements of the **same type** and can be of **dynamic size**.

```typescript
let numbers: number[] = [1, 2, 3, 4]; // Only numbers
let names: string[] = ['Alice', 'Bob']; // Only strings
let mixed: (number | string)[] = [1, 'hello', 2]; // Can hold numbers & strings
```

✅ **Pros:**  
✔ Can store multiple values of the same type  
✔ Can grow or shrink in size

❌ **Cons:**  
✖ No strict control over the number of elements or their exact types

---

## **2️⃣ Tuple (`[T1, T2, ...]`) - Fixed Size & Type Order**

A **tuple** is a special type of array where **each element has a fixed type and position**.

```typescript
let person: [string, number] = ['Alice', 25]; // First must be a string, second must be a number
```

✅ **Pros:**  
✔ Ensures a **fixed** number of elements  
✔ Each position has a **specific type**  
✔ Great for structured data like **key-value pairs**

❌ **Cons:**  
✖ Fixed size (cannot grow dynamically like an array)  
✖ You must follow the **exact order** of types

---

## **🔍 Key Differences:**

| Feature               | Normal Array (`T[]`)                           | Tuple (`[T1, T2, ...]`)                                               |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| **Size**              | ✅ Dynamic (can grow/shrink)                   | ❌ Fixed (cannot add/remove freely)                                   |
| **Type**              | ✅ Same type for all elements                  | ✅ Each element has a specific type                                   |
| **Order of Elements** | ❌ No strict order                             | ✅ Must follow a defined order                                        |
| **Use Case**          | List of similar items (e.g., numbers, strings) | Structured data (e.g., coordinates `[x, y]`, user info `[name, age]`) |

---

## **Example Use Cases**

### ✅ **Use an Array (`T[]`)** when

✔ You need a **list of similar items** (e.g., numbers, strings)  
✔ The array size is **not fixed**

```typescript
let scores: number[] = [85, 90, 78]; // A list of scores (size can change)
```

---

### ✅ **Use a Tuple (`[T1, T2]`)** when

✔ You need **fixed-size, structured data**  
✔ Each value has a **specific meaning and type**

```typescript
let user: [string, number] = ['Alice', 25]; // Name + Age
let coordinates: [number, number] = [10.5, 20.3]; // X, Y positions
```

---

### **🚀 Conclusion**

✔ Use **arrays** when storing **a list of similar items** (e.g., numbers, names).  
✔ Use **tuples** when **the number of elements and their types must be fixed** (e.g., `[name, age]`, `[latitude, longitude]`).

Would you like a real-world example? 😊
