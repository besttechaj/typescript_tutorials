# **Discriminated Unions & Exhaustiveness Checking with `never` in TypeScript**

Discriminated unions and exhaustiveness checking are powerful techniques for handling **multiple related types** in TypeScript.

---

## **1. What is a Discriminated Union?**

A **discriminated union** is a union type where **each type has a common property** (discriminator) that differentiates them.

### **Example**

```typescript
type Dog = { kind: 'dog'; barkVolume: number };
type Cat = { kind: 'cat'; purrLoudness: number };

type Pet = Dog | Cat; // ✅ Discriminated Union

function describePet(pet: Pet) {
  if (pet.kind === 'dog') {
    console.log(`A dog that barks at volume ${pet.barkVolume}`);
  } else {
    console.log(`A cat that purrs at loudness ${pet.purrLoudness}`);
  }
}

describePet({ kind: 'dog', barkVolume: 5 }); // ✅ "A dog that barks at volume 5"
describePet({ kind: 'cat', purrLoudness: 3 }); // ✅ "A cat that purrs at loudness 3"
```

### **Key Features**

✔ **Each type has a unique `"kind"` property**.  
✔ **TypeScript narrows the type based on `kind`**.  
✔ **Prevents incorrect property access**.

---

# **2. Using Discriminated Unions in Functions**

When working with functions, **TypeScript automatically narrows types**.

```typescript
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };
type Rectangle = { kind: 'rectangle'; width: number; height: number };

type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape): number {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'square') {
    return shape.side ** 2;
  } else {
    return shape.width * shape.height;
  }
}

console.log(calculateArea({ kind: 'circle', radius: 5 })); // ✅ Output: 78.54
console.log(calculateArea({ kind: 'square', side: 4 })); // ✅ Output: 16
console.log(calculateArea({ kind: 'rectangle', width: 4, height: 6 })); // ✅ Output: 24
```

✔ **Ensures type safety**.  
✔ **No need for type assertions** (`as`).  
✔ **Eliminates runtime errors due to invalid access**.

---

# **3. Exhaustiveness Checking with `never`**

The `never` type ensures that **all possible cases in a discriminated union are handled**.

### **Example**

```typescript
function getShapeDescription(shape: Shape): string {
  switch (shape.kind) {
    case 'circle':
      return `Circle with radius ${shape.radius}`;
    case 'square':
      return `Square with side ${shape.side}`;
    case 'rectangle':
      return `Rectangle with width ${shape.width} and height ${shape.height}`;
    default:
      const exhaustiveCheck: never = shape; // ❌ TypeScript error if a case is missing
      return exhaustiveCheck;
  }
}
```

### **How it Works**

- If a new shape (e.g., `Triangle`) is added to `Shape`, TypeScript will throw an **error at compile time**.
- This prevents missing cases and **ensures all types are covered**.

---

# **4. Real-World Example: Handling API Responses**

### **Scenario:** Handling API responses that return different types of status results

```typescript
type SuccessResponse = { status: 'success'; data: string };
type ErrorResponse = { status: 'error'; errorMessage: string };
type LoadingResponse = { status: 'loading' };

type ApiResponse = SuccessResponse | ErrorResponse | LoadingResponse;

function handleApiResponse(response: ApiResponse) {
  switch (response.status) {
    case 'success':
      console.log(`Data received: ${response.data}`);
      break;
    case 'error':
      console.log(`Error occurred: ${response.errorMessage}`);
      break;
    case 'loading':
      console.log('Loading...');
      break;
    default:
      const exhaustiveCheck: never = response; // ❌ Error if a case is missing
      return exhaustiveCheck;
  }
}

handleApiResponse({ status: 'success', data: 'User data' }); // ✅ "Data received: User data"
handleApiResponse({ status: 'error', errorMessage: 'Network error' }); // ✅ "Error occurred: Network error"
handleApiResponse({ status: 'loading' }); // ✅ "Loading..."
```

✔ **Ensures all response types are handled**.  
✔ **Prevents runtime bugs due to missing cases**.

---

# **5. Preventing Future Bugs with `never`**

If a new type is added to `ApiResponse`, TypeScript will throw an error **until it is handled in the `switch` statement**.

```typescript
type PendingResponse = { status: 'pending' };
type UpdatedApiResponse = ApiResponse | PendingResponse;

function handleUpdatedResponse(response: UpdatedApiResponse) {
  switch (response.status) {
    case 'success':
      console.log(`Data received: ${response.data}`);
      break;
    case 'error':
      console.log(`Error occurred: ${response.errorMessage}`);
      break;
    case 'loading':
      console.log('Loading...');
      break;
    default:
      const exhaustiveCheck: never = response; // ❌ TypeScript error: 'pending' is not assignable to never
      return exhaustiveCheck;
  }
}
```

**✔ TypeScript prevents runtime errors by forcing us to handle the new `pending` case.**

---

# **Final Takeaways**

✅ **Discriminated Unions**

- Use a common `"kind"` property for **type narrowing**.
- TypeScript automatically **eliminates incorrect property access**.

✅ **Exhaustiveness Checking (`never`)**

- Ensures **all possible cases** in a `switch` are handled.
- **Prevents runtime errors** when new types are added.
