# **Getter and Setter in TypeScript**

In TypeScript, **getters (`get`) and setters (`set`)** are used to control access to **private** properties of a class. They allow encapsulation, meaning you can enforce validation, formatting, or logic while getting and setting values.

---

## **1. Getter (`get`)**

- Used to **retrieve** (read) the value of a private property.
- Works like a method but is accessed like a property.

### **2. Setter (`set`)**

- Used to **modify** (write) the value of a private property.
- Can include validation logic before assigning a value.

---

## **Example: Using Getter and Setter**

```typescript
class Person {
  private _age: number = 0; // Private property (naming convention: _age)

  constructor(age: number) {
    this._age = age;
  }

  // Getter method
  public get age(): number {
    console.log('Getting age...');
    return this._age;
  }

  // Setter method with validation
  public set age(newAge: number) {
    if (newAge < 0) {
      console.log('Age cannot be negative!');
    } else {
      console.log('Setting age...');
      this._age = newAge;
    }
  }
}

const person = new Person(25);

console.log(person.age); // ✅ Calls the getter
person.age = 30; // ✅ Calls the setter
console.log(person.age); // ✅ Calls the getter again

person.age = -5; // ❌ Invalid, setter prevents negative age
```

### **Output:**

```
Getting age...
25
Setting age...
Getting age...
30
Age cannot be negative!
```

---

## **Why Use Getters and Setters?**

✅ **Encapsulation:** Protects the class data from unintended modifications.  
✅ **Validation:** Ensures only valid values are assigned.  
✅ **Custom Logic:** Can add logic before getting/setting a property.

---

## **Example: Getter for Read-Only Property**

```typescript
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // Getter only (no setter, read-only)
  public get area(): number {
    return Math.PI * this._radius * this._radius;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.area); // ✅ Allowed (getter)
// myCircle.area = 200; ❌ Error: Cannot assign to 'area' because it has only a getter
```

---

## **Example: Setter with Custom Logic**

```typescript
class Temperature {
  private _celsius: number = 0;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  public get fahrenheit(): number {
    return this._celsius * 1.8 + 32; // Convert Celsius to Fahrenheit
  }

  public set fahrenheit(value: number) {
    this._celsius = (value - 32) / 1.8; // Convert Fahrenheit to Celsius
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // ✅ 77 (Celsius to Fahrenheit)
temp.fahrenheit = 86; // ✅ Setting value in Fahrenheit
console.log(temp.fahrenheit); // ✅ 86 (Updated)
```

---

## **Key Takeaways**

- **Use `get` to retrieve a private property safely.**
- **Use `set` to validate or modify the property before assignment.**
- **Avoid direct access to private members for better control.**
- **Getters can be used for computed properties (e.g., `area`, `fahrenheit`).**

Would you like an example with an **interface or inheritance?** 🚀
