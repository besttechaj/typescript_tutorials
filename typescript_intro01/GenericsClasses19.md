# **Generic Classes in TypeScript**

Generic classes allow us to **create reusable, type-safe class structures** while working with multiple data types.

---

## **1. What is a Generic Class?**

A **generic class** uses a **type parameter** `<T>` to define properties and methods that work with different data types.

### **Basic Syntax**

```typescript
class ClassName<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
```

Here, `<T>` acts as a **placeholder** for the actual type.

---

## **2. Example: Generic Class with a Single Type**

```typescript
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }

  setItem(newItem: T): void {
    this.item = newItem;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getItem()); // ✅ Output: 100

const stringBox = new Box<string>('Hello');
console.log(stringBox.getItem()); // ✅ Output: "Hello"
```

### **Explanation**

- The class **`Box<T>`** stores any type (`T`) and provides methods to **get and set values**.
- `numberBox` is a `Box<number>`, and `stringBox` is a `Box<string>`, ensuring **type safety**.

---

## **3. Generic Class with Multiple Types**

We can use multiple type parameters `<T, U>` for flexibility.

```typescript
class Pair<T, U> {
  private key: T;
  private value: U;

  constructor(key: T, value: U) {
    this.key = key;
    this.value = value;
  }

  getKey(): T {
    return this.key;
  }

  getValue(): U {
    return this.value;
  }
}

const pair1 = new Pair<number, string>(1, 'One');
console.log(pair1.getKey(), pair1.getValue()); // ✅ Output: 1, "One"

const pair2 = new Pair<string, boolean>('isAvailable', true);
console.log(pair2.getKey(), pair2.getValue()); // ✅ Output: "isAvailable", true
```

### **Explanation**

- The **`Pair<T, U>`** class holds **two different types**.
- `pair1` is **`Pair<number, string>`**.
- `pair2` is **`Pair<string, boolean>`**.

---

## **4. Generic Class with Constraints (`extends`)**

We can **restrict** generic types using `extends`.

```typescript
interface Printable {
  print(): void;
}

class Printer<T extends Printable> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  printItem(): void {
    this.item.print();
  }
}

class Document implements Printable {
  print(): void {
    console.log('Printing document...');
  }
}

const doc = new Document();
const docPrinter = new Printer<Document>(doc);
docPrinter.printItem(); // ✅ Output: Printing document...
```

### **Explanation**

- `T extends Printable` ensures `T` has a `print()` method.
- **Prevents passing invalid types**.

---

## **5. Generic Class with Default Type**

We can provide a **default type** for generics.

```typescript
class Store<T = string> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

const stringStore = new Store('Default Item');
console.log(stringStore.getItem()); // ✅ Output: "Default Item"

const numberStore = new Store<number>(123);
console.log(numberStore.getItem()); // ✅ Output: 123
```

### **Explanation**

- `Store<T = string>` defaults `T` to `string` if no type is provided.

---

## **6. Real-World Example: Generic Data Storage Class**

A class that can store and manage different data types.

```typescript
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Apple');
textStorage.addItem('Banana');
textStorage.removeItem('Apple');
console.log(textStorage.getItems()); // ✅ Output: ["Banana"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // ✅ Output: [10, 20]
```

### **Explanation**

- `DataStorage<T>` can store **any type** (`string`, `number`, etc.).
- It provides **methods to add, remove, and retrieve** stored data.

---

### **Final Takeaways**

✅ **Reusability** – Works with multiple types.  
✅ **Type Safety** – Prevents incorrect type assignments.  
✅ **Flexibility** – Can use **single or multiple** generic types.  
✅ **Constraints (`extends`)** – Restricts type usage.  
✅ **Default Type** – Provides a fallback type if none is specified.
