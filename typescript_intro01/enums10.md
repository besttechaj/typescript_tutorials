# **Enums in TypeScript**

Enums (short for **enumerations**) in TypeScript are a way to define a **set of named constants**. They make it easier to work with fixed sets of related values.

---

## **1. Numeric Enums (Default)**

By default, enums are assigned **numeric values** starting from `0` and incrementing by `1`.

```typescript
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // Output: 0
console.log(Direction.Right); // Output: 3
```

### **Custom Numeric Values**

You can manually assign values to the enum members.

```typescript
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.NotFound); // Output: 404
```

---

## **2. String Enums**

Instead of numbers, enums can store **string values**.

```typescript
enum Status {
  Pending = 'PENDING',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
}

console.log(Status.Completed); // Output: "COMPLETED"
```

---

## **3. Heterogeneous Enums (Mixed Types)**

Enums can contain both **numeric and string values**, but this is uncommon.

```typescript
enum MixedEnum {
  Yes = 'YES',
  No = 'NO',
  Unknown = 0,
}

console.log(MixedEnum.No); // Output: "NO"
```

---

## **4. Computed Enums**

Enums can have values that depend on other values.

```typescript
enum MathConstants {
  PI = 3.14,
  HalfPI = PI / 2, // Computed value
  TwoPI = PI * 2, // Computed value
}

console.log(MathConstants.HalfPI); // Output: 1.57
```

---

## **5. Reverse Mapping**

Numeric enums support **reverse mapping**, meaning you can access an enum's key using its value.

```typescript
enum Colors {
  Red = 1,
  Green,
  Blue,
}

console.log(Colors.Red); // Output: 1
console.log(Colors[1]); // Output: "Red" (reverse mapping)
```

📌 **Note:** Reverse mapping only works for **numeric enums**, not for string enums.

---

## **6. Const Enums (`const enum`)**

`const enum` improves performance by inlining enum values instead of creating an object at runtime.

```typescript
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let move = Directions.Up; // Compiles to: let move = 0;
```

🔹 **Benefits:** Eliminates extra JavaScript code and improves performance.

---

## **7. Enum with Functions**

Enums can be used as function parameters.

```typescript
enum Size {
  Small,
  Medium,
  Large,
}

function getSize(size: Size) {
  switch (size) {
    case Size.Small:
      return 'Small size selected';
    case Size.Medium:
      return 'Medium size selected';
    case Size.Large:
      return 'Large size selected';
  }
}

console.log(getSize(Size.Medium)); // Output: "Medium size selected"
```

---

## **8. Enum as Object Keys**

Enums can be used as object keys for better organization.

```typescript
enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

const permissions = {
  [Role.Admin]: ['create', 'edit', 'delete'],
  [Role.User]: ['read'],
};

console.log(permissions[Role.Admin]); // Output: ["create", "edit", "delete"]
```

---

## **9. Enum with `keyof` (Type Extraction)**

Extracts all possible values from an enum.

```typescript
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

type StatusKeys = keyof typeof Status; // "Active" | "Inactive"
```

---

## **Summary**

| Type                    | Example                                             |
| ----------------------- | --------------------------------------------------- |
| **Numeric Enum**        | `enum Direction { Up, Down }`                       |
| **Custom Numeric Enum** | `enum StatusCode { Success = 200, NotFound = 404 }` |
| **String Enum**         | `enum Status { Pending = "PENDING" }`               |
| **Heterogeneous Enum**  | `enum Mixed { Yes = "YES", No = 0 }`                |
| **Computed Enum**       | `enum Math { PI = 3.14, HalfPI = PI / 2 }`          |
| **Reverse Mapping**     | `enum Colors { Red = 1 }; console.log(Colors[1]);`  |
| **Const Enum**          | `const enum Size { Small, Medium, Large }`          |
| **Enum with Function**  | `function getSize(size: Size) {}`                   |
| **Enum as Object Key**  | `const obj = { [Role.Admin]: ["edit"] };`           |
| **Enum with keyof**     | `type StatusKeys = keyof typeof Status;`            |

Would you like me to expand on a specific type? 🚀
