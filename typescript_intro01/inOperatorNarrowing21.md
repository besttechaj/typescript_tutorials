# **📌 The `in` Operator Narrowing in TypeScript**

TypeScript’s **type narrowing** helps determine a variable's type based on conditions.  
The **`in` operator** is used for **type narrowing** by checking if a **property exists in an object**.

---

## **🔹 1️⃣ Basic Syntax of `in` Operator**

```ts
'propertyName' in object;
```

✔ Returns **`true`** if the object contains the specified property.  
✔ Helps TypeScript **narrow down** types in **union types**.

---

## **🔹 2️⃣ Example: Narrowing Between Different Object Types**

When working with **union types**, we can use `in` to check if a property exists before using it.

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(animal: Dog | Cat) {
  if ('bark' in animal) {
    animal.bark(); // ✅ TypeScript knows it's a Dog
  } else {
    animal.meow(); // ✅ TypeScript knows it's a Cat
  }
}

const dog: Dog = { bark: () => console.log('Woof!') };
const cat: Cat = { meow: () => console.log('Meow!') };

makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!
```

✔ **`in` Operator** helps TypeScript understand if it's a **Dog or Cat**.  
✔ No need for **type assertions (`as Dog`)**.

---

## **🔹 3️⃣ Example: Checking for Optional Properties**

The `in` operator can also be used for **optional properties**.

```ts
type User = { name: string };
type Admin = { name: string; isAdmin: boolean };

function checkUser(user: User | Admin) {
  if ('isAdmin' in user) {
    console.log(`${user.name} is an Admin`);
  } else {
    console.log(`${user.name} is a Regular User`);
  }
}

checkUser({ name: 'Alice', isAdmin: true }); // Output: Alice is an Admin
checkUser({ name: 'Bob' }); // Output: Bob is a Regular User
```

✔ The `in` operator **checks if `isAdmin` exists**, so TypeScript knows it’s an **Admin**.

---

## **🔹 4️⃣ Example: Using `in` with Classes**

The `in` operator works with **instances of classes** too.

```ts
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Boat {
  sail() {
    console.log('Sailing...');
  }
}

function move(vehicle: Car | Boat) {
  if ('drive' in vehicle) {
    vehicle.drive(); // ✅ TypeScript knows it's a Car
  } else {
    vehicle.sail(); // ✅ TypeScript knows it's a Boat
  }
}

move(new Car()); // Output: Driving...
move(new Boat()); // Output: Sailing...
```

✔ TypeScript correctly detects whether the **object is `Car` or `Boat`**.

---

## **🔹 5️⃣ When to Use the `in` Operator?**

| Use Case                                         | Solution             |
| ------------------------------------------------ | -------------------- |
| **Distinguishing object types in union types**   | ✅ Use `in` operator |
| **Checking for optional properties**             | ✅ Use `in` operator |
| **Working with class instances**                 | ✅ Use `in` operator |
| **Checking for method existence before calling** | ✅ Use `in` operator |

---

### **✨ Summary**

✔ The `in` operator **checks if a property exists in an object**.  
✔ Helps TypeScript **narrow down** union types and optional properties.  
✔ Works with **interfaces, types, and classes**.
