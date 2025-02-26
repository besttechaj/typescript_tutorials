# **📌 `instanceof` and Type Predicates in TypeScript**

Both `instanceof` and **type predicates** are used for **type narrowing** in TypeScript, but they work in different ways.

---

## **1️⃣ `instanceof` Operator**

The `instanceof` operator is used to check **if an object is an instance of a class**.

### **✅ Example: Using `instanceof` for Class Instances**

```ts
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Bike {
  ride() {
    console.log('Riding...');
  }
}

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive(); // ✅ TypeScript knows it's a Car
  } else {
    vehicle.ride(); // ✅ TypeScript knows it's a Bike
  }
}

const myCar = new Car();
const myBike = new Bike();

move(myCar); // Output: Driving...
move(myBike); // Output: Riding...
```

✔ `instanceof` helps TypeScript **narrow down** to the correct class type.  
✔ Works **only with classes**, not interfaces or object literals.

---

## **2️⃣ Type Predicates (`is` keyword)**

Type predicates provide **custom type checking functions** using the `is` keyword.

### **✅ Example: Using Type Predicates**

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
  return 'bark' in animal;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // ✅ TypeScript now knows it's a Dog
  } else {
    animal.meow(); // ✅ TypeScript now knows it's a Cat
  }
}

const dog: Dog = { bark: () => console.log('Woof!') };
const cat: Cat = { meow: () => console.log('Meow!') };

makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!
```

✔ **`animal is Dog`** → A custom type guard that tells TypeScript when `animal` is a `Dog`.  
✔ TypeScript uses this function for **narrowing inside conditions**.

---

## **3️⃣ Difference Between `instanceof` and Type Predicates**

| Feature    | `instanceof`          | Type Predicate (`is`)          |
| ---------- | --------------------- | ------------------------------ |
| Works with | **Classes only**      | **Interfaces & Types**         |
| Checks for | **Class Instances**   | **Custom type conditions**     |
| Uses       | `instanceof` operator | `is` keyword                   |
| Example    | `obj instanceof Car`  | `isDog(animal): animal is Dog` |

---

## **✨ Summary**

✔ **`instanceof`** → Used for **checking class instances**.  
✔ **Type Predicates (`is`)** → Used for **checking custom types** (interfaces, objects).
