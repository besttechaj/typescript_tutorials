# objects in typescript

## **Objects in TypeScript**

In TypeScript, objects are used to group related data and functionality. TypeScript provides **strict type checking** for objects, ensuring type safety.

---

## **1️⃣ Basic Object Type**

You can define an object with specific key-value pairs.

```typescript
let user: { name: string; age: number } = {
  name: 'John Doe',
  age: 30,
};
console.log(user.name); // Output: John Doe
```

- The object `user` has two properties:
  - `name` (type: `string`)
  - `age` (type: `number`)

---

## **2️⃣ Optional Properties (`?`)**

Properties can be optional using `?`.

```typescript
let person: { name: string; age?: number } = {
  name: 'Alice',
};
console.log(person.age); // Output: undefined
```

- Here, `age` is optional, so it may or may not exist.

---

## **3️⃣ Read-Only Properties (`readonly`)**

Properties can be **read-only** to prevent modification.

```typescript
let car: { readonly brand: string; model: string } = {
  brand: 'Tesla',
  model: 'Model 3',
};

// car.brand = "BMW"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property
```

---

## **4️⃣ Using `type` for Object Definition**

We can create a reusable object structure using `type`.

```typescript
type User = {
  name: string;
  age: number;
};

let customer: User = { name: 'Bob', age: 40 };
```

---

## **5️⃣ Using `interface` for Objects**

`interface` is another way to define object structures.

```typescript
interface Person {
  name: string;
  age: number;
  greet(): string;
}

let employee: Person = {
  name: 'Charlie',
  age: 28,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(employee.greet()); // Output: Hello, my name is Charlie
```

- Interfaces can define **methods** inside objects.

---

## **6️⃣ Nested Objects**

Objects can have other objects as properties.

```typescript
type Address = {
  city: string;
  country: string;
};

type Employee = {
  name: string;
  address: Address; // Nested object
};

let worker: Employee = {
  name: 'David',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

console.log(worker.address.city); // Output: New York
```

---

## **7️⃣ Objects with Dynamic Keys (`index signatures`)**

If the object has keys that are not predefined, use an **index signature**.

```typescript
type User = {
  [key: string]: string | number;
};

let user: User = {
  name: 'Eve',
  age: 22,
  country: 'India',
};

console.log(user['name']); // Output: Eve
```

- This allows adding **any string-based key** with `string | number` values.

---

## **8️⃣ Object with Function Properties**

Objects can contain functions as values.

```typescript
type Calculator = {
  add: (a: number, b: number) => number;
};

let calc: Calculator = {
  add: (x, y) => x + y,
};

console.log(calc.add(5, 3)); // Output: 8
```

---

## **9️⃣ Object Type with `class`**

TypeScript classes also define objects with specific properties and methods.

```typescript
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo(): string {
    return `Student: ${this.name}, Age: ${this.age}`;
  }
}

let student1 = new Student('Sam', 21);
console.log(student1.getInfo()); // Output: Student: Sam, Age: 21
```

---

## **🔹 Summary Table**

| Feature                          | Example                                          |
| -------------------------------- | ------------------------------------------------ | --- |
| Basic Object                     | `{ name: "Alice", age: 25 }`                     |
| Optional Property (`?`)          | `{ name: "Alice", age?: number }`                |
| Readonly Property                | `{ readonly id: 123 }`                           |
| `type` for Objects               | `type User = { name: string; age: number }`      |
| `interface` for Objects          | `interface Person { name: string; age: number }` |
| Nested Objects                   | `{ address: { city: "NY" } }`                    |
| Dynamic Keys (`index signature`) | `{ [key: string]: string }`                      |
| Function in Object               | `{ greet(): string }`                            |
| Class-based Object               | `class Student { constructor() { } }`            | 🚀  |

```typescript
const User = {
  name: 'hitesh',
  email: '<hitesh@gmail.com>',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: 'abhishek', isPaid: false });

function createCourse(): { name: string; price?: number } {
  return { name: 'reactjs', price: 199 };
}
```
