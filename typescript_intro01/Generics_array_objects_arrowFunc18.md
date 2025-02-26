# **Generics in TypeScript (Arrays, Objects, and Functions)**

Generics allow **type-safe** and **reusable** code for arrays, objects, and functions while maintaining flexibility.

---

## **1. Generics in Arrays**

Generics help define **type-safe** arrays while keeping them flexible.

### **(A) Generic Array Syntax**

```typescript
let numbers: Array<number> = [1, 2, 3, 4]; // ✅ Number array
let strings: Array<string> = ['A', 'B', 'C']; // ✅ String array
```

OR using shorthand syntax:

```typescript
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['A', 'B', 'C'];
```

### **(B) Generic Function with Arrays**

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([10, 20, 30])); // ✅ Output: 10
console.log(getFirstElement<string>(['Apple', 'Banana'])); // ✅ Output: "Apple"
```

Here, `<T>` makes the function work for **any type of array**.

---

## **2. Generics in Objects**

### **(A) Generic Object Type**

```typescript
interface Person<T> {
  name: string;
  info: T;
}

const student: Person<number> = { name: 'John', info: 101 }; // info as number
const employee: Person<string> = { name: 'Doe', info: 'HR Manager' }; // info as string

console.log(student, employee);
```

Here, the **info property** can have different types (`number` or `string`).

### **(B) Generic Function for Objects**

```typescript
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = mergeObjects({ name: 'Alice' }, { age: 25 });
console.log(result); // ✅ Output: { name: "Alice", age: 25 }
```

This function **merges two objects** while preserving their types.

---

## **3. Generics in Array Functions**

Array methods like `map`, `filter`, and `reduce` work with generics.

### **(A) Generic `map` Function**

```typescript
function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}

const numbers = [1, 2, 3];
const strings = mapArray(numbers, (num) => `Number: ${num}`);
console.log(strings); // ✅ Output: ['Number: 1', 'Number: 2', 'Number: 3']
```

Here, `<T>` is the input type, and `<U>` is the output type.

### **(B) Generic `filter` Function**

```typescript
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const evenNumbers = filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0);
console.log(evenNumbers); // ✅ Output: [2, 4]
```

This function **filters elements** based on a condition.

### **(C) Generic `reduce` Function**

```typescript
function sumArray<T extends number>(arr: T[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([10, 20, 30])); // ✅ Output: 60
```

Here, `T extends number` ensures only numbers are passed.

---

### **Final Takeaways**

✅ **Generics in Arrays** → Ensures type-safe lists.  
✅ **Generics in Objects** → Enables flexible object structures.  
✅ **Generics in Array Functions** → Enhances reusability while maintaining type safety.
