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

//controlflow


// =============================
// JavaScript Control Flow Examples
// =============================

// 1. If Statements
if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true); // condition false, won't run
}

if (!12) {
    console.log("number");
}

// 2. If-Else Statements
if (12 > 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 > 13) {
    console.log(true);
} else {
    console.log(false);
}

if (!12) {
    console.log("number");
} else {
    console.log("not a number");
}

// 3. If...Else If...Else Example
let loggedin = true;
let isAdmin = false;

if (loggedin && isAdmin) {
    console.log("show admin panel");
} else if (loggedin) {
    console.log("show user");
} else {
    console.log("please log in");
}

// 4. Switch Case Examples
let coupon = 'first50';
switch (coupon) {
    case 'first50':
        console.log("you got 50%");
        break;
    case 'BOGO':
        console.log("buy one get one free");
        break;
    case 'blackFriday':
        console.log("70% off on all items");
        break;
    default:
        console.log("invalid coupon");
}

let mode = "dark";
switch (mode) {
    case "light":
        console.log("Light mode activated");
        break;
    case "dark":
        console.log("Dark mode activated");
        break;
    default:
        console.log("Invalid mode");
}

// 5. Early Return Pattern
function score(value) {
    if (value > 90) return "value is more than 90";
    if (value > 80) return "value is more than 80";
    if (value > 70) return "value is more than 70";
    if (value > 60) return "value is more than 60";
    return "value is less than 60";
}

console.log(score(85)); // example call

function score2(value) {
    if (value < 60) return "value is less than 60";
    if (value < 70) return "value is more than 60";
    if (value < 80) return "value is more than 70";
    if (value < 90) return "value is more than 80";
    return "value is more than 90";
}

console.log(score2(75));

// 6. Switch Case Fall-Through Example
let x = 2;
switch (x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}

// 7. Grading Function
function getGrade(score) {
    if (score < 0 || score > 100) return "Invalid Marks";
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 33) return "D";
    return "Fail";
}

console.log(getGrade(85));

// 8. Rock-Paper-Scissors (If-Else)
function rps(user, computer) {
    if (user === "rock" && computer === "scissors") return "user wins";
    if (user === "scissors" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";

    if (user === "scissors" && computer === "rock") return "computer wins";
    if (user === "rock" && computer === "paper") return "computer wins";
    if (user === "paper" && computer === "scissors") return "computer wins";

    return "it's a tie";
}

console.log(rps("rock", "scissors"));
console.log(rps("paper", "rock"));
console.log(rps("rock", "paper"));
console.log(rps("scissors", "scissors"));

// 9. Compact RPS Version
function rpsCompact(user, computer) {
    if (user === computer) return "It's a tie";
    const winCombo = { rock: "scissors", scissors: "paper", paper: "rock" };
    return winCombo[user] === computer ? "User wins" : "Computer wins";
}

console.log(rpsCompact("rock", "scissors"));
console.log(rpsCompact("paper", "rock"));
console.log(rpsCompact("rock", "paper"));
console.log(rpsCompact("scissors", "scissors"));

// 10. While Loop Examples
let k = 50;
while (k <= 50) {
    console.log("k :", k);
    k++;
}

let c = 30;
while (c > 20) {
    console.log(c);
    c--;
}

let d = 1;
while (d <= 5) {
    console.log("hello");
    d++;
}

//loops
# JavaScript Loops

Loops are used to **repeat a block of code multiple times**.  
They are useful when you **know how many times** or **under what condition** the code should run.

---

## 1. For Loop

```js
// Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Print 5 to 1
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

// Print 50
let k = 50;
while (k <= 50) {
    console.log("k :", k);
    k++;
}

// Print 30 down to 21
let c = 30;
while (c > 20) {
    console.log(c);
    c--;
}

// Print "hello" 5 times
let d = 1;
while (d <= 5){
    console.log("hello");
    d++;
}

// Decrement from 50 to 40
let f = 50;
while (f >= 40){
    console.log(f);
    f--;
}

// Alternative decrement using prefix
let q = 50;
while (q >= 40){
    console.log(q);
    --q;
}

// Count 10 to 20
let g = 10;
do {
    console.log("g :", g);
    g++;
} while (g <= 20);

// Count 30 down to 20
let h = 30;
do {
    console.log("h :", h);
    h--;
} while(h >= 20);



# JavaScript Functions – Complete Guide (All Code in One File)

## What is a Function?
A function is a block of code that performs a specific task.

---

## Function Types
### Function Declaration
```javascript
function abc(){}
```

### Function Expression
```javascript
let fun = function(){}
```

### Arrow Function
```javascript
let fun1 = () => {}
```

---

## Parameters & Arguments
```javascript
function cart(product, price){
    console.log(`adding ${product} at ${price}`);
}
cart("laptop", 45000);
cart("phone" , 25000);
cart("s23 ultra" , 105000);
```

---

## Default Parameters
```javascript
function abcd(b =10, price = 0){
    console.log(price, b);
}
abcd(15);
```

---

## Rest Parameters
```javascript
function def1(...number){
    console.log(number);
}
def1(1,2,3,4,5,6,7,8,9,10);
```

---

## Early Return Pattern
```javascript
function score1(value){
    if (value > 90) return "value is more than 90";
    if (value > 80) return "value is more than 80";
    if (value > 70) return "value is more than 70";
    if (value > 60) return "value is more than 60";
    return "value is less than 60";
}
```

---

## First Class Functions
```javascript
let cart4 = function(product, discount=0 , price1){
    console.log(`adding ${product} at ${price1 - discount}`);
};

function temp_b(fcn){
    fcn();
}

temp_b(function (){
    console.log("first class function");
});
```

---

## Higher Order Functions (HOF)
```javascript
function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback) {
    console.log(callback("Parth"));
}

processUser(greet);
```

### Another Example
```javascript
function abcd(val){
    val();
}

abcd(function(){
    console.log("hello");
});
```

---

