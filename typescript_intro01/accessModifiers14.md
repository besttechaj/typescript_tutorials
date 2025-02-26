# **Access Modifiers in TypeScript**

Access modifiers in TypeScript are used to control the visibility (or accessibility) of **class members** (properties and methods). The three main access modifiers are:

1. **`public`** (default)
2. **`private`**
3. **`protected`**

Additionally, **`readonly`** is a modifier used for immutability but is not an access modifier.

---

## **1. `public` (Default)**

- Members marked as `public` can be **accessed from anywhere** (inside or outside the class).
- If no access modifier is specified, it is `public` by default.

### **Example:**

```typescript
class Car {
  public brand: string; // Public property

  constructor(brand: string) {
    this.brand = brand;
  }

  public showBrand() {
    // Public method
    console.log(`Car brand: ${this.brand}`);
  }
}

const myCar = new Car('Toyota');
console.log(myCar.brand); // ✅ Accessible from outside
myCar.showBrand(); // ✅ Accessible from outside
```

---

## **2. `private`**

- Members marked as `private` **cannot** be accessed outside the class.
- They are only accessible within the **same class**.

### **Example:**

```typescript
class BankAccount {
  private balance: number; // Private property

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  private showBalance() {
    // Private method
    console.log(`Balance: ${this.balance}`);
  }

  public withdraw(amount: number) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, Remaining Balance: ${this.balance}`);
    }
  }
}

const myAccount = new BankAccount(1000);
// console.log(myAccount.balance); ❌ Error: Property 'balance' is private
myAccount.withdraw(200); // ✅ Allowed
// myAccount.showBalance(); ❌ Error: Method 'showBalance' is private
```

---

## **3. `protected`**

- Similar to `private`, but `protected` members **can be accessed in derived (child) classes**.
- They **cannot** be accessed outside the class unless inherited.

### **Example:**

```typescript
class Person {
  protected name: string; // Protected property

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private empId: number;

  constructor(name: string, empId: number) {
    super(name); // Accessing protected member in child class
    this.empId = empId;
  }

  public display() {
    console.log(`Employee: ${this.name}, ID: ${this.empId}`); // ✅ Accessible in child class
  }
}

const emp = new Employee('John', 123);
emp.display(); // ✅ Allowed
// console.log(emp.name); ❌ Error: Property 'name' is protected
```

---

## **4. `readonly` (Not an Access Modifier, but Important)**

- **Prevents modification** of a property after it is initialized.
- Can be combined with `public`, `private`, or `protected`.

### **Example:**

```typescript
class Car {
  public readonly model: string;

  constructor(model: string) {
    this.model = model;
  }

  changeModel(newModel: string) {
    // this.model = newModel; ❌ Error: Cannot assign to 'model' because it is a read-only property
  }
}

const myCar = new Car('Honda');
// myCar.model = "Toyota"; ❌ Error: Cannot modify readonly property
console.log(myCar.model); // ✅ Allowed
```

---

## **Comparison Table**

| Modifier      | Accessible Inside Class | Accessible in Child Class | Accessible Outside Class   |
| ------------- | ----------------------- | ------------------------- | -------------------------- |
| **public**    | ✅ Yes                  | ✅ Yes                    | ✅ Yes                     |
| **private**   | ✅ Yes                  | ❌ No                     | ❌ No                      |
| **protected** | ✅ Yes                  | ✅ Yes                    | ❌ No                      |
| **readonly**  | ✅ Yes                  | ✅ Yes                    | ✅ Yes (but cannot modify) |

---

### **Final Thoughts**

- **Use `public`** when you want members to be accessible everywhere.
- **Use `private`** when you want to restrict access to the same class only.
- **Use `protected`** when you want members accessible in child classes but not outside.
- **Use `readonly`** to make properties immutable after initialization.

Would you like more examples on specific use cases? 🚀
