# **Abstract Class in TypeScript**

An **abstract class** in TypeScript is a **blueprint** for other classes. It **cannot be instantiated** directly but serves as a base class for child classes.

---

## **1. What is an Abstract Class?**

- **Defines common properties and methods** that subclasses must implement.
- **Cannot be instantiated** directly.
- Can have **abstract methods** (methods without implementation).
- Can have **regular (concrete) methods** with implementation.

### **Syntax:**

```typescript
abstract class Animal {
  abstract makeSound(): void; // Abstract method (no implementation)

  move(): void {
    // Concrete method (has implementation)
    console.log('Moving...');
  }
}
```

---

## **2. Types of Abstract Classes**

### **(A) Abstract Class with Abstract Methods**

- Abstract methods **must** be implemented in derived (child) classes.

```typescript
abstract class Animal {
  abstract makeSound(): void; // Abstract method (no body)

  move(): void {
    // Concrete method (has implementation)
    console.log('Moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Barking...');
  }
}

const myDog = new Dog();
myDog.makeSound(); // ✅ Output: Barking...
myDog.move(); // ✅ Output: Moving...
// const animal = new Animal(); ❌ Error: Cannot create an instance of an abstract class
```

---

### **(B) Abstract Class with Concrete Methods**

- Can have both **abstract and non-abstract (concrete) methods**.

```typescript
abstract class Vehicle {
  abstract start(): void; // Abstract method (must be implemented)

  stop(): void {
    // Concrete method
    console.log('Stopping the vehicle...');
  }
}

class Car extends Vehicle {
  start(): void {
    console.log('Starting the car...');
  }
}

const myCar = new Car();
myCar.start(); // ✅ Output: Starting the car...
myCar.stop(); // ✅ Output: Stopping the vehicle...
```

---

### **(C) Abstract Class with Properties**

- Can have **regular and abstract properties**.

```typescript
abstract class Person {
  abstract name: string; // Abstract property

  greet(): void {
    // Concrete method
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

const student = new Student('John');
student.greet(); // ✅ Output: Hello, my name is John
```

---

### **(D) Abstract Class with Constructor**

- Abstract classes **can have constructors** to initialize common properties.

```typescript
abstract class Shape {
  constructor(public color: string) {}

  abstract getArea(): number; // Abstract method
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle('Red', 10, 5);
console.log(rect.getArea()); // ✅ Output: 50
console.log(rect.color); // ✅ Output: Red
```

---

### **Key Differences: Abstract Class vs Interface**

| Feature                                                 | Abstract Class   | Interface                    |
| ------------------------------------------------------- | ---------------- | ---------------------------- |
| **Can have methods with implementation?**               | ✅ Yes           | ❌ No                        |
| **Can have constructors?**                              | ✅ Yes           | ❌ No                        |
| **Can have access modifiers (`private`, `protected`)?** | ✅ Yes           | ❌ No                        |
| **Can be instantiated?**                                | ❌ No            | ❌ No                        |
| **Can implement multiple?**                             | ❌ No (only one) | ✅ Yes (multiple interfaces) |

---

### **Final Thoughts**

- Use **abstract classes** when you need a **base class** with shared logic.
- Use **interfaces** when you only need to define a structure.
