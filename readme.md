# JavaScript Learning Guide

This project demonstrates fundamental JavaScript concepts including variables, scope, and hoisting.

## 📚 Topics Covered

### 1. **Variables (var, let, const)**
Learn the differences between three ways to declare variables in JavaScript:
- **var** - Function-scoped, can be re-declared and reassigned
- **let** - Block-scoped, cannot be re-declared but can be reassigned
- **const** - Block-scoped, cannot be re-declared or reassigned

### 2. **Variable Declaration & Initialization**
- **Declaration**: Creating a variable without a value
- **Initialization**: Assigning a value to the variable for the first time

### 3. **Variable Scope**
Understanding where variables are accessible:
- **Global Scope** - Accessible everywhere
- **Function Scope** - Only accessible inside the function
- **Block Scope** - Only accessible inside curly braces `{}`

### 4. **Temporal Dead Zone (TDZ)**
- `let` and `const` variables cannot be accessed before initialization
- Using them before declaration throws a `ReferenceError`
- `var` does not have TDZ - it returns `undefined`

### 5. **Hoisting**
JavaScript automatically moves declarations to the top of their scope:
- **var** - Hoisted as `undefined`
- **let** - Hoisted but not accessible (ReferenceError)
- **const** - Hoisted but not accessible (ReferenceError)

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Open the browser console (F12 → Console tab)
3. You'll see the output of all JavaScript examples

## 📝 Example Output

The script demonstrates:
- Variable declaration with different keywords
- Scope behavior with global, function, and block scopes
- Hoisting effects on different variable types
- Temporal dead zone errors

## 💡 Key Takeaways

✅ Use `const` by default  
✅ Use `let` when you need to reassign  
❌ Avoid `var` in modern JavaScript

---

**Learning Objective**: Understand how JavaScript handles variables and their scope at a deeper level.



Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Give as Error </p>
<p>Why : nm exists but is not initialized yet resulting in </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: This is not given a error</p>
<p>Why : when console.log(b) runs b exists but has no value yet.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: output is 2</p>
<p>Why : var ignores block scope { }</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:  Inside: 20  Outside: 10</p>
<p>Why : let is block-scoped so The a inside { } is a different variable than the a outside</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error:  this work: person.name = "user"; </p>
<p>Why : const does not make the object immutable and It only makes the reference constant  const protects the reference, not the object itself</p>
</div>

# JavaScript Data Types – All in One Code

This file contains **all JavaScript data types** with examples in a single code block.

---

## 📌 All JavaScript Data Types (Primitive + Non-Primitive)

```javascript
// ===============================
//   1. Primitive Data Types
// ===============================

// ---------- String ----------
let str1 = 'Hello';
let str2 = "World";
let str3 = `JavaScript`;

console.log(str1, str2, str3);


// ---------- Number ----------
let num1 = 12;
let num2 = 12.5;

console.log(num1, num2);


// ---------- Boolean ----------
let isLogin = true;
let isAdmin = false;

console.log(isLogin, isAdmin);


// ---------- Undefined ----------
let a;
console.log(a);  // undefined


// ---------- Null ----------
let b = null;
console.log(b);


// ---------- Symbol ----------
let uid = Symbol("id");
let objWithSymbol = {
    name: "Test User",
    [uid]: "001"
};
console.log(objWithSymbol);


// ---------- BigInt ----------
let bigNumber = 12345678901234567890n;
console.log(bigNumber);



// ===============================
//   2. Non-Primitive Data Types
// ===============================

// ---------- Object ----------
let user = {
    id: 1,
    nam

     <!-- Example 1 -->
    
        <h3>Example 1 :</h3>
        <p>Q: true + false</p>
        <p class="answer">Ans: 1</p>
        <p>✔ true → 1, false → 0 → 1 + 0 = 1</p>
    

    <!-- Example 2 -->
    
        <h3>Example 2 :</h3>
        <p>Q: null + 1</p>
        <p class="answer">Ans: 1</p>
        <p>✔ null becomes 0 → 0 + 1 = 1</p>
  

    <!-- Example 3 -->

        <h3>Example 3 :</h3>
        <p>Q: "12" + 12</p>
        <p class="answer">Ans: "1212"</p>
        <p>✔ String + Number → String concatenation</p>


    <!-- Example 4 -->

        <h3>Example 4 :</h3>
        <p>Q: !!undefined</p>
        <p class="answer">Ans: false</p>
        <p>✔ undefined → falsy → !!undefined = false</p>


    <!-- Example 5 -->

        <h3>Example 5 :</h3>
        <p>Q: "12" - 1</p>
        <p class="answer">Ans: 11</p>
        <p>✔ "-" forces conversion to number → 12 - 1 = 11</p>


    <!-- NaN Explanation -->

        <h3>Why typeof NaN is "number"?</h3>
        <p class="answer">Ans: Because NaN is a failed number operation.</p>
        <p>Example: "hello" - 5 → NaN</p>


    <!-- Undefined vs Null -->
>
        <h3>Undefined vs Null</h3>
        <p><b>undefined:</b> variable declared but no value assigned</p>
        <p><b>null:</b> developer manually sets empty value</p>

        <p>Example:</p>
        <p>let x; → x is <span class="answer">undefined</span></p>
        <p>let y = null; → y is <span class="answer">null</span></p>


        //oprator

        # JavaScript Examples

This file contains various JavaScript examples demonstrating conditional statements, logical operators, ternary operators, and increment/decrement operators.

```javascript
// Example 1: Logical AND (&&)
let x = 10;
let y = 20;
if(x > 5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}

// Example 2: Logical OR (||)
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Access granted");
}else{
    console.log("Access Denied");
}

// Example 3: Logical NOT (!)
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}

// Example 4: Truthy / Falsy value
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}

// Example 5: Ternary Operator - Grade
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);

// Example 6: Ternary Operator - Status
let points = 70;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

// Example 7: Ternary Operator - Access
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

// Example 8: Postfix Increment (a++)
let a1 = 5;
a1++;
console.log(a1);

// Example 9: Prefix Increment (++a)
let a2 = 8;
++a2;
console.log(a2);

// Example 10: Postfix Increment with assignment
let b = 4;
let c = b++;
console.log(b, c); // b=5, c=4

// Example 11: Prefix Increment with assignment
let f = 4;
let g = ++f;
console.log(f, g); // f=5, g=5

// Example 12: Combination of postfix and prefix
let n = 5;
let result = n++ + ++n;
console.log(result); // 5 + 7 = 12

// Example 13: Function increment (incorrect usage)
let likes = 100;
function likePost(){
    // result ++likes; // Invalid code, corrected below:
    likes++;
}
likePost();
console.log(likes); // 101

// Example 14: Postfix decrement in condition
let count = 5;
if(count-- === 5){   
    console.log("Matched");
}else{
    console.log("Not Matched"); 
}

