//function
// what --> function is a block of code which is used to perform a specific task
// why --> to avoid repetition and to make code modular and reusable
// how --> function functionName(parameters){ code to be executed }

//types of function
// function name(parms) {} --> function declaration
function abc(){}
// let name = function(parms) {} --> function expression
let fun= function(){}
// let name = (parms) => {} --> arrow function
let fun1 = () => {}

//parameters and arguments
// parameters --> variables listed as a part of function definition(parms --> () ni andar lakheli values
// arguments --> values passed to function when invoked (values passed during function call)

function cart(product, price){
    console.log(`adding ${product} at ${price}`)
}
cart("laptop", 45000);
cart("phone" , 25000);
cart("s23 ultra" , 105000);

function cart(codes, discount=0 , price){
    console.log(`adding ${codes} at ${price - discount}`)
}
cart("html", 500, 50);
cart("css" , 800, 80);
cart("js" , 1000, 100);

//  convert into arrow function
// let fun1 = () => {}
let cart2 = (product, discount=0 , price0) => {
    console.log(`adding ${product} at ${price0 - discount}`);
};

cart2(" arrow function html", 500, 50);
cart2(" arrow function css" , 800, 80);
cart2(" arrow function js" , 1000, 100);

//convert into function expression
// let name = function(parms) {}
let cart5 = function(product, discount=0 , price1){
    console.log(`adding ${product} at ${price1 - discount}`);
};
cart5("function declaration html", 500, 50);
cart5("function declaration css" , 800, 80);
cart5("function declaration js" , 1000, 100);

// default parameters
// default
function abcd(b =10, price = 0){
    console.log(price, b);
}
abcd(15);

function code(d=50, price=0){
    console.log(price, d);
}
code(20);
// use case -- fees / flipcart -- platform fee

//rest
// jyare function ma multiple arguments pass karva hoy to vadhare parms banava pade chhe te na karvu pade te mate rest pamams use karva chhiye (rest --->... jo function na params ni andar lakhavana aave se )

function def(a, b, c, d, e, f, g){
    console.log(a, b, c, d, e, f, g);
}
def(1, 2, 3, 4, 5, 6, 7);

function def1(...number){
    console.log(number);
}
def1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//early return pattern
function score1(value){
    if (value > 90) return "value is more than 90";
    if (value > 80) return "value is more than 80";
    if (value > 70) return "value is more than 70";
    if (value > 60) return "value is more than 60";
    return "value is less than 60";
}


// first class function and thair types:
// function can be treated as variables:
//let temp_a = function(){} - first class function
let cart4 = function(product, discount=0 , price1){
    console.log(`adding ${product} at ${price1 - discount}`);
};
cart5("function declaration html", 500, 50);
// function can be passed as arguments to other functions
function temp_b(fcn){
    fcn();
}
temp_b(function fcn2(){
    console.log("first class function");
});

// function can be returned from other functions
function abcd(){
    return function (){
        console.log("function return other function")
    };
}
//abcd();
abcd()(); // call a function that return other function

//higher order function (HDF)
// function that takes another function as an argumenyts or return a function as a result (eva function je return kare rk function athava acepts kare ek function params na)
function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback) {
    console.log(callback("Parth"));
}

processUser(greet);

// function abcd(val1){val();} --> abcd(function(){console.log ("hello")})

// pure vs impure function
// pure finction --> functiopn je same input par same output aapse and koi side effect na kare (pure funvtion bahar na state ne modify kare)
let a = 10;
function abcd_pure(){
    console.log("hello");
}

//inpure function --> function je same input par alag output aapse athava side effect kare (impure function bahar na state ne modify kare)
 function abcd_inpure(){
    a++;
    console.log(a);
 }
 
 //closure functon
 // function je potana function na variables ne access kari sake(returned function potana parent function na scope ne access kari sake)(function within function)

 function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let fnc = outer();
//  example




//texical scope --> nested function can access variable  declared in thair outer scope

function outer(){
    let outer_var = "outer variable";
    function inner(){
        let inner_var = "inner variable";
        console.log(outer_var);
        function most_inner(){
            console.log(inner_var);
            console.log(outer_var);
            let most_inner_var = "most inner variable";
            function super_inner(){
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            super_inner();
        }
        most_inner();
    }
    inner();
}
outer();

// IIFE --> Immediately Invoked Function Expression

(function() {})();

(function(){
    console.log("IIFE function executed");
})();

//Hoisting in function
hoistedFunction();

function hoistedFunction(){
    console.log("This function is hoisted");
}

// hoistedFunction1(); // Error: Cannot access 'hoistedFunctionExpr' before initialization
// let hoistedFunction1 = function(){
//     console.log("This is function expression");
// };

// hoistedFunction2(); // Error: Cannot access 'hoistedArrowFunction' before initialization
// let hoistedFunction2 = () => {
//     console.log("This is arrow function");
// };

//example 2
greet();

function greet() {
    console.log("Hello!");
}
// Ans: It will print "Hello!"
// Because function declarations are fully hoisted, so the function can be called before its definition without any error.

//example 3
function add(a, b) {
    return a + b;
    let add = (a, b) => a + b;
   
}
// Ans: The arrow function version is:
// let add = (a, b) => a + b;
// How: We remove the 'function' keyword and use the arrow (=>). Since the function returns something directly, we can skip the curly braces and return statement


// example 4
function welcome(name) {
    console.log("Welcome " + name);
}

welcome("user");
// Ans: "name" is the parameter because it is defined inside the function definition.  
// "user" is the argument because it is the actual value passed to the function when calling it.

// example 5
function temp(a, b, c) {
    console.log(a, b, c);
}

temp(1, 2);
// Ans: The function has 3 parameters (a, b, c) but only 2 arguments were passed (1, 2).  
// This does not cause an error.  
// The third parameter 'c' becomes undefined because no argument was given.


// example 6
function temp_user(name = "Guest") {
    console.log("Hello " + name);
}

temp_user();
// Ans: Output will be "Hello Guest".  
// There is no error because the function has a default parameter.  
// Since no argument is passed, JavaScript uses the default value "Guest".

// example 7
function number(...numbers) {
    console.log(numbers);
}

number(1, 2, 3, 4, 5);
// Ans: The output will be [1, 2, 3, 4, 5].  
// The ... operator is called the Rest Operator.  
// It collects all passed arguments into an array.  
// There is no error because the rest operator allows the function to accept unlimited arguments.

// example 8
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}
// Ans: The first function gives an error result (NaN) because the loop runs one step extra using i &lt;= scores.length and accesses scores[5] which is undefined.  
// The second function works correctly.  
// The output of calculateTotal(10, 20, 30, 40, 50) is 150 because the rest parameter collects all scores into an array and adds them properly.

// example 9
function checkAge(age){
    if (age < 18) {
        console.log("Too Young");
        return;      // EARLY RETURN
    }

    console.log("Access Granted");
}
// Ans: Using early return, the function becomes simpler and avoids unnecessary else.  
// If age is less than 18, the function returns immediately.  
// Otherwise it prints "Access Granted".

// example 10
function f() { 
    return; 
}
// Ans: The return value is undefined.  
// Because a return statement without any value automatically returns undefined in JavaScript.

// example 11
{/* <p>
Ans: It means functions in JavaScript are treated like values.  
They can be stored in variables, passed as arguments, returned from other functions,  
and used just like any other data type.  
This makes JavaScript powerful and flexible.
</p> */}

// example 12
let ab = function() {
    console.log("Hello");
};

ab();
// Ans: Yes, you can assign a function to a variable and then call it.  
// Because functions are first-class citizens in JavaScript, they can be stored in variables.  
// Calling a(); will print "Hello".

// example 13
function abcd1(val) {
    val();
}

abcd1(function () {
    console.log("Hello");
});
// Ans: Yes, you can pass a function into another function and execute it.  
// This works because functions are first-class citizens in JavaScript, meaning they can be passed as arguments.  
// In this example, abcd receives a function and calls it inside using val(), which prints "Hello".

// example 16

// Ans: Impure Function
// Why:

// Because it modifies an external variable (total += num). Pure functions must not change outside state.

// example 17
function num(total, num){
    return total + num;
}
// Why:
// Takes inputs and returns output without modifying outside variables → pure function.

// example 18
// Closure = A function that remembers variables from its outer scope even after the outer function has finished.
// Why:
// JavaScript keeps the outer scope alive for the inner function.

// example 19
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
// Ans: The output will be 1 and then 2.

//example 20
(function init(){
    console.log("Initialized");
})();

//Why:
// IIFE runs immediately without calling the function separately.

// example 21
// Ans:
// Use of IIFE → Data privacy & avoid global pollution.
// Real-world example → Module pattern that hides private variables.
// Given Example Explanation:
// score is private inside the IIFE and can only be accessed using getScore and setScore.
// Why:
// Variables inside IIFE are not accessible from outside → provides security.

// example 22
temp_var();
var temp_var = function(){
    console.log("Hello");
}
// Ans: It will throw a TypeError: temp_var is not a function.

//example 23
temp_var();
function temp_var(){
    console.log("Hello");
}
// Ans: It will print "Hello" because function declarations are hoisted completely.

// example 24
//Function Declaration
function hello() {
    console.log("Hello");
}

//Function Expression
var hello = function() {
    console.log("Hello");
}

//example 25
greet();
function greet(){
  console.log("Hello!");
}