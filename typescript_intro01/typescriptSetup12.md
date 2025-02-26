# **📌 Setting Up TypeScript (Step by Step)**

You can set up **TypeScript** globally on your system or for a specific project.

---

## **1️⃣ Install TypeScript (Globally or Locally)**

### ✅ **Install TypeScript Globally** (Available Everywhere)

```sh
npm install -g typescript
```

🔹 **Check Installation**

```sh
tsc --version
```

✔ If installed correctly, it will show the TypeScript version.

---

### ✅ **Install TypeScript Locally (For a Project)**

Inside your project folder, run:

```sh
npm init -y  # Initialize package.json (if not already created)
npm install --save-dev typescript
```

This installs TypeScript **only for this project**.

---

## **2️⃣ Create a TypeScript Configuration File (`tsconfig.json`)**

Run this command to generate a default `tsconfig.json`:

```sh
tsc --init
```

This file allows you to customize **TypeScript settings**.

---

## **3️⃣ Create and Compile a TypeScript File**

### ✅ **Create a New TypeScript File (`index.ts`)**

```ts
const message: string = 'Hello, TypeScript!';
console.log(message);
```

🔹 Save it as **`index.ts`**.

---

## **4️⃣ Compile TypeScript to JavaScript**

Run the **TypeScript Compiler (`tsc`)**:

```sh
tsc index.ts
```

✔ This generates a **JavaScript file** (`index.js`).

---

## **5️⃣ Run the Compiled JavaScript Code**

Run the JavaScript file using **Node.js**:

```sh
node index.js
```

✔ You should see **"Hello, TypeScript!"** printed on the console.

---

## **6️⃣ Watch Mode (Auto Compile on Changes)**

Instead of manually running `tsc` every time, use **watch mode**:

```sh
tsc --watch
```

✔ This **automatically compiles TypeScript files** whenever you save changes.

---

## **7️⃣ Setting Up TypeScript in a Project (Optional)**

If you’re working on a **MERN/Node.js project**, you may need extra setup:

```sh
npm install --save-dev ts-node nodemon @types/node
```

🔹 Run TypeScript files directly using:

```sh
npx ts-node index.ts
```

✔ No need to compile separately!

---

### **✨ Summary**

| Step                             | Command                     |
| -------------------------------- | --------------------------- |
| **Install TypeScript Globally**  | `npm install -g typescript` |
| **Check TypeScript Version**     | `tsc --version`             |
| **Create TypeScript Project**    | `tsc --init`                |
| **Compile TypeScript File**      | `tsc index.ts`              |
| **Run Compiled JavaScript File** | `node index.js`             |
| **Enable Watch Mode**            | `tsc --watch`               |

Do you want to set up **TypeScript with React, Node.js, or a full-stack project?** 🚀
