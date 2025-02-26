# Union types in typescript

## **Union Types in TypeScript**

Union types allow you to specify multiple types for a variable, making your code more flexible while still maintaining type safety.

---

### **1. Basic Syntax**

A union type uses the **`|` (pipe) operator** to combine multiple types.

```typescript
let value: string | number;
value = 'Hello'; // ✅ Allowed
value = 42; // ✅ Allowed
// value = true; // ❌ Error: Type 'boolean' is not assignable to 'string | number'
```

---

### **2. Union with Functions**

Union types can be used as function parameters or return types.

```typescript
function formatInput(input: string | number): string {
  return `Formatted: ${input}`;
}

console.log(formatInput('Hello')); // "Formatted: Hello"
console.log(formatInput(123)); // "Formatted: 123"
```

---

### **3. Union with Arrays**

You can have an array that accepts multiple types.

```typescript
let data: (string | number)[] = [1, 'two', 3, 'four'];
```

---

### **4. Union with Objects**

You can define different shapes of objects using unions.

```typescript
type Car = { brand: string; speed: number };
type Bike = { brand: string; hasGear: boolean };

let vehicle: Car | Bike;

vehicle = { brand: 'Honda', speed: 120 }; // ✅ Allowed (Car)
vehicle = { brand: 'Yamaha', hasGear: true }; // ✅ Allowed (Bike)
// vehicle = { brand: "Tesla" }; // ❌ Error: Missing required properties
```

---

### **5. Narrowing with Type Guards**

Since union types can hold different values, **TypeScript does not assume a specific type**. You need **type guards** to handle them properly.

#### **Using `typeof`**

```typescript
function processInput(input: string | number) {
  if (typeof input === 'string') {
    console.log('String length:', input.length);
  } else {
    console.log('Doubled number:', input * 2);
  }
}

processInput('Hello'); // Output: String length: 5
processInput(10); // Output: Doubled number: 20
```

#### **Using `in` Operator (for Objects)**

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function handlePet(pet: Dog | Cat) {
  if ('bark' in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```

#### **Using `instanceof`**

```typescript
class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Bike {
  ride() {
    console.log('Riding a bike...');
  }
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

useVehicle(new Car()); // Driving a car...
useVehicle(new Bike()); // Riding a bike...
```

---

### **6. Union vs Intersection**

- **Union (`|`)**: The variable can be **either** type.
- **Intersection (`&`)**: The variable must satisfy **all** types.

```typescript
type A = { x: string };
type B = { y: number };

let unionExample: A | B = { x: 'Hello' }; // ✅ Either one works
let intersectionExample: A & B = { x: 'Hello', y: 10 }; // ✅ Must include both
```

---

### **7. Discriminated Unions (Best Practice)**

A **discriminated union** is a pattern where each type in a union has a common property (discriminator).

```typescript
type Square = { kind: 'square'; size: number };
type Circle = { kind: 'circle'; radius: number };

type Shape = Square | Circle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
  }
}

console.log(getArea({ kind: 'circle', radius: 5 })); // 78.54
```

---

### **8. Union with Generics**

```typescript
function wrapValue<T extends string | number>(value: T): { value: T } {
  return { value };
}

console.log(wrapValue(42)); // { value: 42 }
console.log(wrapValue('hello')); // { value: "hello" }
```

---

### **Summary**

| Feature                        | Example                           |
| ------------------------------ | --------------------------------- | ------------------------ |
| **Basic Union Type**           | `let x: string                    | number;`                 |
| **Function Parameter**         | `function process(input: string   | number) {}`              |
| **Union Array**                | `let arr: (string                 | number)[] = [1, "two"];` |
| **Union Objects**              | `let carOrBike: Car               | Bike;`                   |
| **Type Guard (`typeof`)**      | `if (typeof x === "string") {}`   |
| **Type Guard (`in` operator)** | `if ("bark" in pet) {}`           |
| **Type Guard (`instanceof`)**  | `if (obj instanceof Class) {}`    |
| **Discriminated Union**        | `if (shape.kind === "circle") {}` |

Would you like me to expand on any part? 🚀
