# **Type Narrowing in TypeScript**

1. typeof type guards
2. truthiness narrowing
3. equality narrowing
4. in operator narrowing
5. instanceof narrowing
6. assignments
7. control flow analysis
8. using type predicated
9. discriminated unions
10. the never type
11. exhaustiveness checking

**Type narrowing** in TypeScript is the process of refining the type of a variable **within a specific scope** based on runtime checks. This helps TypeScript understand the actual type and provide better type safety.

---

## **1. Typeof Narrowing (Primitive Types)**

The `typeof` operator helps **narrow primitive types** (`string`, `number`, `boolean`, etc.).

```typescript
function processValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // ✅ TypeScript knows it's a string
  } else {
    console.log(value.toFixed(2)); // ✅ TypeScript knows it's a number
  }
}

processValue('hello'); // Output: "HELLO"
processValue(10.1234); // Output: "10.12"
```

**✔️ Key Benefit**: TypeScript narrows the type inside each block.

---

## **2. Truthiness Narrowing (Falsy/Truthy Values)**

TypeScript automatically **narrows falsy values** like `null`, `undefined`, `false`, `0`, and `""`.

```typescript
function printMessage(message?: string) {
  if (!message) {
    console.log('No message provided.'); // message is narrowed to undefined | ""
  } else {
    console.log('Message:', message.toUpperCase()); // message is now string
  }
}

printMessage(); // Output: No message provided.
printMessage('Hello'); // Output: Message: HELLO
```

**✔️ Key Benefit**: Helps avoid `undefined` or `null` errors.

---

## **3. Equality Narrowing (`===`, `!==`)**

Using strict equality (`===`, `!==`) **refines types**.

```typescript
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase()); // ✅ TypeScript knows x is a string
  } else {
    console.log('Values are different');
  }
}

compare('hello', 'hello'); // Output: HELLO
compare(10, false); // Output: Values are different
```

**✔️ Key Benefit**: Ensures **correct type comparison**.

---

## **4. Instanceof Narrowing (Objects & Classes)**

The `instanceof` operator **checks if an object is an instance of a class**.

```typescript
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ TypeScript knows it's a Dog
  } else {
    animal.meow(); // ✅ TypeScript knows it's a Cat
  }
}

makeSound(new Dog()); // Output: Woof!
makeSound(new Cat()); // Output: Meow!
```

**✔️ Key Benefit**: Works well with **class-based objects**.

---

## **5. In Operator Narrowing (Object Properties)**

The `in` operator checks if a property **exists in an object**, helping TypeScript infer the type.

```typescript
type User = { name: string; email: string };
type Admin = { name: string; permissions: string[] };

function printUserInfo(person: User | Admin) {
  if ('email' in person) {
    console.log(`User Email: ${person.email}`); // ✅ TypeScript knows it's User
  } else {
    console.log(`Admin Permissions: ${person.permissions.join(', ')}`); // ✅ It's Admin
  }
}

printUserInfo({ name: 'Alice', email: 'alice@example.com' });
// Output: User Email: alice@example.com

printUserInfo({ name: 'Bob', permissions: ['read', 'write'] });
// Output: Admin Permissions: read, write
```

**✔️ Key Benefit**: Helps **distinguish object types**.

---

## **6. Discriminated Unions (Tag-Based Narrowing)**

A **common pattern** in TypeScript where each type has a **unique property** (`kind`).

```typescript
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };

function calculateArea(shape: Circle | Square) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2; // ✅ It's a Circle
  } else {
    return shape.side ** 2; // ✅ It's a Square
  }
}

console.log(calculateArea({ kind: 'circle', radius: 5 })); // Output: 78.54
console.log(calculateArea({ kind: 'square', side: 4 })); // Output: 16
```

**✔️ Key Benefit**: TypeScript **automatically narrows based on the `kind` property**.

---

## **7. Type Predicates (`is` Operator)**

Type predicates (`is`) allow **custom type narrowing**.

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function printLength(value: unknown) {
  if (isString(value)) {
    console.log('Length:', value.length); // ✅ TypeScript knows it's a string
  } else {
    console.log('Not a string');
  }
}

printLength('Hello'); // Output: Length: 5
printLength(123); // Output: Not a string
```

**✔️ Key Benefit**: **Custom type guards** for better **type inference**.

---

## **8. Exhaustive Checks with `never`**

Using `never` ensures **all cases are handled**.

```typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function getShapeInfo(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return `Circle with radius ${shape.radius}`;
    case 'square':
      return `Square with side ${shape.side}`;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // ❌ Error if a case is missing
  }
}
```

**✔️ Key Benefit**: Ensures **all cases are handled**.

---

## **Final Takeaways**

✅ **`typeof` for primitives** (string, number, boolean).  
✅ **`in` operator** for object properties.  
✅ **`instanceof` for class-based objects**.  
✅ **`is` for custom type guards**.  
✅ **Discriminated Unions (`kind`) for better type inference**.  
✅ **Exhaustive Checks with `never` to catch missing cases**.
