# **📌 Difference Between `type` and `interface` in TypeScript**

In TypeScript, both `type` and `interface` can be used to define object shapes, but they have key differences.

---

## **🔹 1️⃣ Basic Difference**

| Feature                  | `interface`                                             | `type`                                                   |
| ------------------------ | ------------------------------------------------------- | -------------------------------------------------------- | ------------------------- |
| **Purpose**              | Used for defining object structures and class contracts | Can define object types, unions, intersections, and more |
| **Object Shape**         | ✅ Yes                                                  | ✅ Yes                                                   |
| **Extensibility**        | ✅ Can be extended (`extends`)                          | ✅ Can be extended (`&`)                                 |
| **Union & Intersection** | ❌ No union types                                       | ✅ Supports union (`                                     | `) and intersection (`&`) |
| **Merging**              | ✅ Can merge multiple declarations                      | ❌ Cannot merge                                          |
| **Performance**          | ✅ Better performance                                   | ❌ Slightly slower in complex cases                      |

---

## **🔹 2️⃣ Object Type Definition**

Both `interface` and `type` can define an object structure.

### **✅ Using `interface`**

```ts
interface User {
  name: string;
  age: number;
}

const user: User = { name: 'Alice', age: 25 };
```

### **✅ Using `type`**

```ts
type User = {
  name: string;
  age: number;
};

const user: User = { name: 'Alice', age: 25 };
```

✔ **Both work the same way!**

---

## **🔹 3️⃣ Extending Objects**

### **✅ `interface` (Extends Another Interface)**

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  company: string;
}

const emp: Employee = { name: 'John', company: 'Google' };
```

✔ **Interfaces can be extended using `extends`.**

---

### **✅ `type` (Using Intersection `&`)**

```ts
type Person = { name: string };
type Employee = Person & { company: string };

const emp: Employee = { name: 'John', company: 'Google' };
```

✔ **Types can be combined using `&` (intersection).**

---

## **🔹 4️⃣ Union Types (`type` Only)**

`type` can define **union types**, but `interface` **cannot**.

```ts
type Status = 'Pending' | 'Completed' | 'Failed'; // ✅ Works

interface Status {
  type: 'Pending' | 'Completed' | 'Failed'; // ❌ Not possible
}
```

✔ **Use `type` for unions.**

---

## **🔹 5️⃣ Function Signatures**

Both can define function signatures.

### **✅ Using `interface`**

```ts
interface Greet {
  (name: string): string;
}

const sayHello: Greet = (name) => `Hello, ${name}!`;
```

### **✅ Using `type`**

```ts
type Greet = (name: string) => string;

const sayHello: Greet = (name) => `Hello, ${name}!`;
```

✔ **Both work the same way!**

---

## **🔹 6️⃣ Declaration Merging (`interface` Only)**

Interfaces can **merge** multiple declarations.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: 'Alice', age: 25 }; // ✅ Works!
```

✔ **Interfaces merge automatically!**  
❌ `type` cannot do this.

---

## **🔹 7️⃣ Which One to Use?**

| Use Case                      | Recommendation |
| ----------------------------- | -------------- | --------- |
| Defining object structure     | `interface` ✅ |
| Extending objects             | `interface` ✅ |
| Using union types (`          | `)             | `type` ✅ |
| Merging types dynamically     | `interface` ✅ |
| Function signatures           | Both work ✅   |
| Performance in large projects | `interface` ✅ |

---

## **✨ Conclusion**

✔ **Use `interface`** when designing **object structures or extending objects**.  
✔ **Use `type`** when defining **union types, intersections, or function types**.  
✔ **For classes, prefer `interface`** since it supports `implements`.  
✔ **For merging declarations, use `interface`**, as `type` does not support it.

Would you like a real-world example related to MERN or Java? 🚀
