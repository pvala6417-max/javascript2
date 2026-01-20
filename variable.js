
var a = "hello";
var _b = "there";
var $c = "world";
d = 20;

console.log(a,_b,$c,d);

var name = "username";
let name2 = "username";

// Reassignment, redeclaration
var temp = 12;
temp = "number"; // Reassignment
var temp = "24"; // redeclaration

// errors when convert let -> var
// let temp_a = "hello";
// var temp_a = "hello";

const t1 = "constant";
// t1 = "change";


// scope (global, Block, functional)
var e = 23 // global scope
console.log("Global Scope " + e);
{
var e = 25; // block scope
console.log("block Scope "+ e);
}
function abc() {
var e = 30 // functional scope
console.log("functional scope "+ e);
}
abc();
console.log("Outside" + e);


// scope (global, Block, functional)
let f = 23 // global scope
console.log("Global Scope " + f);
{
let f = 25; // block scope
console.log("block Scope "+ f);
}
function abc() {
let f = 30 // functional scope
console.log("functional scope "+ f);
}
abc();
console.log("Outside" + f);

// Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

let temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you error;
// Hoisting Impact on var, let, const
/*
var --> hoist -> undefined
let --> hoist --> error
const --> hoist --> error
*/