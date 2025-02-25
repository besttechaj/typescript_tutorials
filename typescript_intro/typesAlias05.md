# type aliases in typescript

## **Type Aliases in TypeScript**

Type aliases in TypeScript allow you to create custom names for types, making your code more readable and reusable.

---

### **Syntax**

```typescript
type AliasName = ExistingType;
```

### **Examples**

#### **1. Basic Type Alias**

```typescript
type Age = number;
let myAge: Age = 25;
```

---

#### **2. Alias for Objects**

```typescript
type Person = {
  name: string;
  age: number;
};

let user: Person = {
  name: 'John',
  age: 30,
};
```

---

#### **3. Alias for Union Types**

```typescript
type ID = string | number;
let userId: ID = 'abc123'; // or 123
```

---

#### **4. Alias for Function Types**

```typescript
type Add = (x: number, y: number) => number;

const addNumbers: Add = (a, b) => a + b;
```

---

#### **5. Alias for Tuples**

```typescript
type Coordinates = [number, number];

let point: Coordinates = [10, 20];
```

---

#### **6. Using Type Aliases with Generics**

```typescript
type Response<T> = {
  data: T;
  status: number;
};

let userResponse: Response<{ name: string }> = {
  data: { name: 'Alice' },
  status: 200,
};
```

---

### **Type Alias vs Interface**

| Feature                                       | Type Alias                 | Interface      |
| --------------------------------------------- | -------------------------- | -------------- |
| Can be used for primitives, unions, functions | ✅                         | ❌             |
| Can extend other types                        | ✅ (with intersection `&`) | ✅ (`extends`) |
| Can be merged automatically                   | ❌                         | ✅             |

Example of intersection (`&`):

```typescript
type Employee = { id: number };
type Manager = { level: string };
type TeamLead = Employee & Manager;

let lead: TeamLead = { id: 1, level: 'Senior' };
```

---

### **When to Use Type Aliases?**

- When defining **primitive types, unions, tuples, or function types**.
- When you **don’t need** to extend or merge types dynamically.
- When you prefer a **simpler syntax** over `interface`.
