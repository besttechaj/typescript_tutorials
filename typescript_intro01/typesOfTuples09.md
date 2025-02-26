# **Types of Tuples in TypeScript**

Tuples in TypeScript are a special type of array that allows you to store a **fixed number of elements** where each element can have a different type.

---

## **1. Basic Tuple**

A tuple with a fixed number of elements with different types.

```typescript
let user: [string, number] = ['Alice', 25];
console.log(user[0]); // "Alice"
console.log(user[1]); // 25
```

---

## **2. Optional Tuple Elements**

You can make some elements **optional** using `?`.

```typescript
let person: [string, number, boolean?];

person = ['John', 30]; // ✅ Allowed
person = ['Jane', 25, true]; // ✅ Allowed
```

---

## **3. Readonly Tuples**

To prevent modifying the tuple, use `readonly`.

```typescript
let coordinates: readonly [number, number] = [10, 20];
// coordinates[0] = 50; // ❌ Error: Cannot modify a readonly tuple
```

---

## **4. Tuple with Labels (Named Tuples)**

Improves readability by providing names to tuple elements.

```typescript
type Person = [name: string, age: number];

let person: Person = ['Alice', 30];
console.log(person[0]); // "Alice"
console.log(person[1]); // 30
```

---

## **5. Tuple with Rest Parameters**

Tuples can include a **rest parameter** (`...`) to allow multiple elements of the same type.

```typescript
type NumberList = [number, ...number[]];

let numbers: NumberList = [1, 2, 3, 4, 5]; // ✅ Allowed
let singleNumber: NumberList = [10]; // ✅ Allowed
```

---

## **6. Tuple as Function Return Type**

A function can return a tuple.

```typescript
function getUser(): [string, number] {
  return ['Alice', 25];
}

const user = getUser();
console.log(user); // ["Alice", 25]
```

---

## **7. Tuple with Union Types**

A tuple where elements can be multiple types.

```typescript
let data: [number | string, boolean];

data = [100, true]; // ✅ Allowed
data = ['Hello', false]; // ✅ Allowed
```

---

## **8. Tuple Array (Array of Tuples)**

An array containing multiple tuples.

```typescript
let users: [string, number][] = [
  ['Alice', 30],
  ['Bob', 25],
  ['Charlie', 35],
];

console.log(users[1]); // ["Bob", 25]
```

---

## **9. Tuple with Enums**

Tuples can contain **enum values**.

```typescript
enum Role {
  Admin,
  User,
}

let employee: [string, Role];

employee = ['Alice', Role.Admin];
console.log(employee); // ["Alice", 0]
```

---

## **10. Tuple Destructuring**

You can extract tuple values using destructuring.

```typescript
let user: [string, number] = ['Alice', 30];

let [name, age] = user;
console.log(name); // "Alice"
console.log(age); // 30
```

---

## **Summary**

| Type                      | Example                                       |
| ------------------------- | --------------------------------------------- | ------------------ |
| **Basic Tuple**           | `let user: [string, number] = ["Alice", 25];` |
| **Optional Tuple**        | `let person: [string, number, boolean?];`     |
| **Readonly Tuple**        | `let coordinates: readonly [number, number];` |
| **Named Tuple**           | `type Person = [name: string, age: number];`  |
| **Tuple with Rest**       | `type Numbers = [number, ...number[]];`       |
| **Function Return Tuple** | `function getUser(): [string, number];`       |
| **Tuple with Union**      | `let data: [number                            | string, boolean];` |
| **Tuple Array**           | `let users: [string, number][];`              |
| **Tuple with Enum**       | `let employee: [string, Role];`               |
| **Tuple Destructuring**   | `let [name, age] = user;`                     |

Would you like to explore a specific type in more detail? 🚀
