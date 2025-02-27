# **Generics in TypeScript**

Generics allow us to create **reusable, type-safe components** that work with multiple data types while maintaining type safety.

---

## **1. What are Generics?**

- Generics allow **parameterized types** (like a function, but for types).
- They provide **type flexibility** while ensuring correctness.
- They help **avoid `any` type** and improve **code reusability**.

---

## **2. Syntax of Generics**

A generic type is defined using angle brackets (`<T>`).

```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(10)); // ✅ Output: 10
console.log(identity<string>('Hello')); // ✅ Output: Hello
```

Here, `<T>` acts as a **placeholder** for the actual type.

---

## **3. Types of Generics**

### **(A) Generic Functions**

Generic functions allow a function to work with **multiple types** without losing type safety.

```typescript
function getArray<T>(items: T[]): T[] {
  return items;
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['a', 'b', 'c']);

console.log(numArray); // ✅ Output: [1, 2, 3]
console.log(strArray); // ✅ Output: ['a', 'b', 'c']
```

---

### **(B) Generic Classes**

We can create **generic classes** to handle different data types.

```typescript
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>('Hello');

console.log(numberBox.getItem()); // ✅ Output: 100
console.log(stringBox.getItem()); // ✅ Output: Hello
```

---

### **(C) Generic Interfaces**

Generic interfaces allow us to create **type-flexible interfaces**.

```typescript
interface Pair<K, V> {
  key: K;
  value: V;
}

const numberPair: Pair<number, string> = { key: 1, value: 'One' };
const stringPair: Pair<string, boolean> = { key: 'isAvailable', value: true };

console.log(numberPair); // ✅ Output: { key: 1, value: 'One' }
console.log(stringPair); // ✅ Output: { key: 'isAvailable', value: true }
```

---

### **(D) Generic Constraints**

We can **restrict** the types that generics accept using `extends`.

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(`Length: ${arg.length}`);
}

logLength('Hello'); // ✅ Allowed (string has length)
// logLength(100); ❌ Error: Number doesn't have a length property
logLength({ length: 10 }); // ✅ Allowed
```

Here, `T extends Lengthwise` ensures that `T` has a `length` property.

---

### **(E) Generic Type Aliases**

Generics can be used in **type aliases**.

```typescript
type ResponseData<T> = {
  data: T;
  success: boolean;
};

const userResponse: ResponseData<string> = {
  data: 'User fetched successfully',
  success: true,
};

console.log(userResponse);
```

---

### **(F) Generic with Default Type**

Generics can have **default types**.

```typescript
function createList<T = string>(items: T[]): T[] {
  return items;
}

const numbers = createList([1, 2, 3]); // Defaults to `number[]`
const strings = createList(['a', 'b', 'c']); // Defaults to `string[]`

console.log(numbers, strings);
```

---

### **Key Takeaways**

✅ **Reusability** – Write once, use with multiple types.  
✅ **Type Safety** – Avoids `any`, ensuring correct type usage.  
✅ **Constraints** – Can restrict generic types.  
✅ **Default Types** – Allows setting a default type.

---

In **TypeScript**, the key differences between **class, interface, abstract, generics, and type** are as follows:

---

## **1. Class** (Blueprint for Objects)

- A **class** is a blueprint for creating objects.
- It can have **properties, methods, constructors, and access modifiers** (`public`, `private`, `protected`).
- Supports **inheritance** (`extends`).

### **Example:**

```typescript
class Car {
  constructor(public brand: string, private speed: number) {}

  accelerate(): void {
    console.log(`${this.brand} is accelerating.`);
  }
}

const myCar = new Car('Tesla', 200);
myCar.accelerate(); // Output: Tesla is accelerating.
```

✅ **Use classes when you need object-oriented programming (OOP) features like methods and inheritance.**

---

## **2. Interface** (Defines a Structure, No Implementation)

- **Interfaces only define the shape** (structure) of an object.
- They do **not provide implementations** (unlike classes).
- Supports **inheritance** (`extends`) and can be implemented by classes.

### **Example:**

```typescript
interface Person {
  name: string;
  age: number;
}

const user: Person = { name: 'John', age: 30 }; // ✅ Valid
```

✅ **Use interfaces to define the structure of an object without implementation.**

---

## **3. Abstract Class** (Partially Implemented Class)

- Cannot be instantiated directly.
- Can have **both implemented and abstract methods**.
- Must be **extended** by child classes.

### **Example:**

```typescript
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void; // Must be implemented by subclasses

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog('Buddy');
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Buddy is moving.
```

✅ **Use abstract classes when you want to enforce certain methods but allow partial implementation.**

---

## **4. Generics** (Reusable & Flexible Types)

- Allows creating reusable **functions, classes, and interfaces** that work with different types.
- Uses `<T>` notation to represent a **placeholder type**.

### **Example:**

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(5)); // Output: 5
console.log(identity<string>('Hello')); // Output: Hello
```

✅ **Use generics when you want functions or classes to work with multiple types dynamically.**

---

## **5. Type** (Alias for Custom Types)

- Similar to an interface, but more flexible.
- Can be used to define **primitive types, unions, and tuples**.

### **Example 1: Basic Type Alias**

```typescript
type ID = string | number;

const userId: ID = 101; // ✅ Works
const anotherId: ID = 'ABC123'; // ✅ Works
```

### **Example 2: Object Type**

```typescript
type Car = {
  brand: string;
  speed: number;
};

const myCar: Car = { brand: 'Ford', speed: 120 }; // ✅ Works
```

✅ **Use `type` when defining unions, primitives, or tuple types. Use `interface` for objects when extending is needed.**

---

## **Key Differences Summary**

| Feature                      | **Class**                   | **Interface**                  | **Abstract**                     | **Generics**                 | **Type**     |
| ---------------------------- | --------------------------- | ------------------------------ | -------------------------------- | ---------------------------- | ------------ |
| **Can have implementation?** | ✅ Yes                      | ❌ No                          | ✅ Partial                       | ❌ No                        | ❌ No        |
| **Can be instantiated?**     | ✅ Yes                      | ❌ No                          | ❌ No                            | ✅ Yes                       | ✅ Yes       |
| **Supports inheritance?**    | ✅ Yes (`extends`)          | ✅ Yes (`extends`)             | ✅ Yes (`extends`)               | ✅ Yes (`extends`)           | ❌ No        |
| **Supports methods?**        | ✅ Yes                      | ❌ No (only method signatures) | ✅ Yes (partial)                 | ✅ Yes                       | ❌ No        |
| **Usage?**                   | Object-oriented programming | Object structure               | Partially implemented base class | Reusable functions & classes | Custom types |

---

### **When to Use What?**

- **Class:** When you need object-oriented programming (OOP) features like methods, properties, and inheritance.
- **Interface:** When you only need to define the shape of an object.
- **Abstract Class:** When you need a class that enforces certain methods but allows some implementation.
- **Generics:** When you want to write reusable code that works with different types.
- **Type:** When you need flexible type definitions (especially for unions and primitives).

Would you like **real-world examples** of each for better understanding? 🚀
