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
let cart3 = function(product, discount=0 , price1){
    console.log(`adding ${product} at ${price1 - discount}`);
};
cart3("function declaration html", 500, 50);
cart3("function declaration css" , 800, 80);
cart3("function declaration js" , 1000, 100);

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
cart3("function declaration html", 500, 50);
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

