# **📌 What is an Interface in TypeScript?**

An **interface** in TypeScript defines the **structure of an object**, ensuring type safety and consistency across the code.

✔ **Interfaces do not generate JavaScript code** (only for type checking).  
✔ **They define the shape of an object but do not provide implementation**.  
✔ **Interfaces can be extended (inherited) and implemented by classes**.

---

## **🔹 1. Basic Interface (Object Structure)**

```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const person1: Person = {
  name: 'John',
  age: 25,
  isStudent: false,
};

console.log(person1.name); // Output: John
```

✔ Ensures `person1` follows the correct structure.

---

## **🔹 2. Optional Properties (`?`)**

```ts
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}

const myCar: Car = { brand: 'Toyota', model: 'Corolla' }; // ✅ No error
```

✔ The `year` property is optional.

---

## **🔹 3. Readonly Properties (`readonly`)**

```ts
interface User {
  readonly id: number;
  name: string;
}

const user1: User = { id: 101, name: 'Alice' };

// user1.id = 202; // ❌ Error: Cannot modify readonly property
```

✔ Prevents modification of `id`.

---

## **🔹 4. Interface for Functions**

```ts
interface Greet {
  (name: string): string;
}

const sayHello: Greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(sayHello('Mike')); // Output: Hello, Mike!
```

✔ Ensures functions follow the correct signature.

---

## **🔹 5. Interface for Arrays**

```ts
interface StringArray {
  [index: number]: string;
}

const names: StringArray = ['Alice', 'Bob', 'Charlie'];

console.log(names[1]); // Output: Bob
```

✔ Defines an array of strings with **numeric indexing**.

---

## **🔹 6. Interface for Classes (`implements`)**

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog('Buddy');
myDog.makeSound(); // Output: Woof! Woof!
```

✔ Ensures the `Dog` class follows the `Animal` interface.

---

## **🔹 7. Extending Interfaces (Inheritance)**

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const pet: Dog = {
  name: 'Max',
  breed: 'Labrador',
};
console.log(pet.name); // Output: Max
```

✔ `Dog` **inherits** `name` from `Animal`.

---

## **🔹 8. Extending Multiple Interfaces**

```ts
interface Engine {
  startEngine(): void;
}

interface MusicSystem {
  playMusic(): void;
}

class Car implements Engine, MusicSystem {
  startEngine() {
    console.log('Engine started.');
  }

  playMusic() {
    console.log('Playing music...');
  }
}

const myCar = new Car();
myCar.startEngine(); // Output: Engine started.
myCar.playMusic(); // Output: Playing music...
```

✔ A class can **implement multiple interfaces** (unlike classes, which can only extend one class).

---

## **🔹 9. Hybrid Interface (Function + Object)**

An interface can describe both **functions and properties**.

```ts
interface Counter {
  count: number;
  increment(): void;
}

const counter: Counter = {
  count: 0,
  increment() {
    this.count++;
  },
};

counter.increment();
console.log(counter.count); // Output: 1
```

✔ Defines both properties and methods.

---

## **🔹 10. Interface vs Type Alias**

| Feature                     | Interface                    | Type Alias   |
| --------------------------- | ---------------------------- | ------------ |
| Object Structure            | ✅ Yes                       | ✅ Yes       |
| Extends Another Type?       | ✅ Yes (`extends`)           | ✅ Yes (`&`) |
| Can Define Functions?       | ✅ Yes                       | ✅ Yes       |
| Can Define Primitive Types? | ❌ No                        | ✅ Yes       |
| Can Be Merged?              | ✅ Yes (Declaration Merging) | ❌ No        |

🔹 **Use Interface** when defining objects & classes.  
🔹 **Use Type Alias** when defining unions & primitives.

---

## **✨ Summary**

✔ **Interfaces define object structures.**  
✔ **They enforce type safety and consistency.**  
✔ **They can be extended and implemented by classes.**  
✔ **They support optional and readonly properties.**  
✔ **Use interfaces for objects & class design.**

Would you like an example related to MERN or Java? 🚀
