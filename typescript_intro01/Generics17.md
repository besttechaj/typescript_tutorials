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
