// 1. Primitive Data Types (Core Foundation)

// These are immutable (value-based).

let name = "Navneet";   // String
let age = 21;           // Number
let isDev = true;       // Boolean
let x = null;           // Null
let y;                  // Undefined
let big = 123n;         // BigInt
let sym = Symbol("id"); // Symbol


// undefined → variable declared, not assigned
// null → intentionally empty

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null


// 2. Non-Primitive (Reference Types)
let obj = { name: "Navneet" };
let arr = [1, 2, 3];

let a1 = [1, 2];
let b1 = a1;

b1.push(3);

console.log(a1); // [1, 2, 3]


// 🔹 3. typeof (and its lies)
typeof "hello"   // "string"
typeof 123       // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" ❌ (JS bug)


// 🔹 4. Type Coercion 
console.log("5" + 2); // "52"
console.log("5" - 2); // 3

// JS silently converts types.


// 5. Truthy & Falsy (Real-world impact)

// Falsy:

// false, 0, "", null, undefined, NaN

// Everything else = truthy

if ("0") console.log("runs"); // runs

// Blind spot:

if ([]) // true
    if ({}) // true

        // 6. Deep vs Shallow Copy (Advanced but IMPORTANT)
        // ❌ Shallow Copy
        let obj1 = { name: "Navneet" };
let obj2 = obj1;

obj2.name = "Dev";

console.log(obj1.name); // Dev

// ✅ Deep Copy

let obj1 = { name: "Navneet" };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = "Dev";

console.log(obj1.name); // Navneet