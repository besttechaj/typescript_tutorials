# readonly in typescript

## **`readonly` in TypeScript**

The `readonly` keyword in TypeScript makes object properties **immutable** (i.e., they cannot be modified after initialization).

---

## **1️⃣ Readonly in Objects**

You can mark object properties as `readonly` to prevent modifications.

```typescript
type Car = {
  readonly brand: string;
  model: string;
};

let myCar: Car = { brand: 'Tesla', model: 'Model 3' };

// myCar.brand = "BMW"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property
myCar.model = 'Model S'; // ✅ Allowed
```

- `brand` is **readonly**, so trying to modify it results in an error.
- `model` is **not readonly**, so it can be changed.

---

## **2️⃣ Readonly in `interface`**

You can use `readonly` inside interfaces to enforce immutability.

```typescript
interface User {
  readonly id: number;
  name: string;
}

let user: User = { id: 1, name: 'Alice' };

// user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property
user.name = 'Bob'; // ✅ Allowed
```

---

## **3️⃣ Readonly Arrays (`ReadonlyArray<T>`)**

The `ReadonlyArray<T>` type prevents modification of arrays.

```typescript
let numbers: ReadonlyArray<number> = [1, 2, 3];

// numbers.push(4); // ❌ Error: Property 'push' does not exist on type 'readonly number[]'
// numbers[0] = 10; // ❌ Error: Index signature in type 'readonly number[]' only permits reading

console.log(numbers[0]); // ✅ Allowed: Reading is fine
```

- **Operations like `push()`, `pop()`, `shift()`, and `splice()` are not allowed**.
- You can only **read** values, not modify them.

🔹 **Alternative:** Use `readonly` with arrays.

```typescript
let items: readonly string[] = ['Apple', 'Banana'];
```

---

## **4️⃣ Readonly in `class` Properties**

In classes, `readonly` ensures properties cannot be changed after initialization.

```typescript
class Person {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let person1 = new Person(101, 'John');

// person1.id = 102; // ❌ Error: Cannot assign to 'id' because it is a read-only property
person1.name = 'Alice'; // ✅ Allowed
```

- `id` is **readonly**, so it cannot be modified after creation.

---

## **5️⃣ Difference Between `readonly` and `const`**

| Feature        | `readonly` (Object Property)                            | `const` (Variable)                    |
| -------------- | ------------------------------------------------------- | ------------------------------------- |
| **Usage**      | Used in object properties, class fields, and interfaces | Used for variables and constants      |
| **Mutability** | Prevents modification of object properties              | Prevents reassignment of the variable |
| **Example**    | `readonly id: number = 1;`                              | `const PI = 3.14;`                    |
| **Works With** | Objects, classes, interfaces, arrays                    | Primitive types, objects, arrays      |

```typescript
const myCar = { brand: 'Tesla' };
myCar.brand = 'BMW'; // ✅ Allowed (const prevents reassignment, but object properties can change)

let myCar2: { readonly brand: string } = { brand: 'Tesla' };
// myCar2.brand = "BMW"; // ❌ Error: Read-only property
```

---

### **🚀 Summary**

- `readonly` prevents **modification** of object properties after initialization.
- `ReadonlyArray<T>` ensures **arrays remain unchanged**.
- Used in **objects, interfaces, and classes** for **type safety**.
- Different from `const`, which prevents **variable reassignment** but allows object property changes.
