# **📌 Classes and Their Types in TypeScript**

In TypeScript, **classes** provide a way to create reusable object-oriented structures. They include properties, constructors, methods, and access modifiers.

---

## **1️⃣ Basic Class in TypeScript**

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
```

✔ **Properties** → `name` and `age`.  
✔ **Constructor** → Initializes values when an object is created.  
✔ **Method (`greet`)** → Prints a message.

---

## **2️⃣ Types of Classes in TypeScript**

TypeScript supports several types of classes:

### **✅ 1. Normal Class (Public by Default)**

By default, all properties and methods are **public**.

```ts
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  display() {
    console.log(`Car brand: ${this.brand}`);
  }
}

const car1 = new Car('Toyota');
car1.display(); // Output: Car brand: Toyota
```

---

### **✅ 2. Class with Access Modifiers (`public`, `private`, `protected`)**

| Modifier    | Description                                |
| ----------- | ------------------------------------------ |
| `public`    | Accessible everywhere (default)            |
| `private`   | Only accessible inside the class           |
| `protected` | Accessible inside the class and subclasses |

```ts
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, department: string) {
    super(name, salary, department);
  }

  getDepartment(): string {
    return this.department; // ✅ Allowed (protected)
  }
}

const emp = new Employee('John', 50000, 'HR');
console.log(emp.name); // ✅ Works (public)
// console.log(emp.salary);  // ❌ Error: Property 'salary' is private
// console.log(emp.department); // ❌ Error: 'department' is protected
console.log(emp.getSalary()); // ✅ Works
```

✔ `private` → Not accessible outside the class.  
✔ `protected` → Accessible inside subclasses.

---

### **✅ 3. Readonly Properties (`readonly`)**

`readonly` properties **can be initialized but not modified**.

```ts
class Company {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const c1 = new Company('Google');
console.log(c1.name); // Output: Google
// c1.name = "Microsoft"; // ❌ Error: Cannot assign to 'name' because it is a read-only property
```

✔ **Useful for constants that should not change**.

---

### **✅ 4. Static Properties & Methods**

`static` properties/methods belong to the **class, not instances**.

```ts
class MathUtil {
  static PI: number = 3.14;

  static square(num: number): number {
    return num * num;
  }
}

console.log(MathUtil.PI); // ✅ Output: 3.14
console.log(MathUtil.square(5)); // ✅ Output: 25
```

✔ **Access without creating an instance** (`MathUtil.PI` instead of `new MathUtil().PI`).

---

### **✅ 5. Abstract Classes**

`abstract` classes **cannot be instantiated directly**.  
They are meant to be **extended by other classes**.

```ts
abstract class Animal {
  abstract makeSound(): void; // Must be implemented by child classes

  move(): void {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
myDog.move(); // Output: Moving...
```

✔ **Abstract Methods (`makeSound`)** → Must be implemented in child classes.  
✔ **Normal Methods (`move`)** → Can have implementation.

---

### **✅ 6. Class with Implements (`interface`)**

A class can **implement an interface** to ensure it follows a specific structure.

```ts
interface Vehicle {
  speed: number;
  accelerate(): void;
}

class Bike implements Vehicle {
  speed: number = 0;

  accelerate(): void {
    this.speed += 10;
    console.log(`Speed increased to ${this.speed} km/h`);
  }
}

const myBike = new Bike();
myBike.accelerate(); // Output: Speed increased to 10 km/h
```

✔ **Ensures structure but doesn’t provide implementation.**  
✔ Similar to **abstract classes**, but a class can implement **multiple interfaces**.

---

## **✨ Summary**

| Type                     | Description                                          | Example                             |
| ------------------------ | ---------------------------------------------------- | ----------------------------------- |
| **Normal Class**         | Basic class with properties & methods                | `class Car { }`                     |
| **Access Modifiers**     | `public`, `private`, `protected` for data protection | `private salary: number;`           |
| **Readonly Class**       | Properties that cannot be modified                   | `readonly name: string;`            |
| **Static Class**         | Properties/methods accessible without an instance    | `static PI = 3.14;`                 |
| **Abstract Class**       | Cannot be instantiated, must be extended             | `abstract class Animal { }`         |
| **Implements Interface** | Ensures a class follows a structure                  | `class Bike implements Vehicle { }` |

---

### **🚀 What Next?**

- Do you need **examples for MERN or full-stack development?**
- Would you like to see **how TypeScript classes work in a project?**
