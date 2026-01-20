//data types 
//two types
//1. Primitive data types
let a =12;
let b=a;
a =a+3;

//types: string, number, boolean, undefined, null, symbol, bigInt

//2. Non-primitive data types
//copy --> by reference
let temp_a =[1,2,3];
let temp_b = temp_a;
temp_b.pop();//remove value from array
//types: object, array, function

//<-----primitive data types------>
//types: string, number, boolean, undefined, null, symbol, bigInt
//string
// '' single quote
// "" double quote
// `` backtick
let d = "name";
d = 'name2';
d = `name3`;

//number
let e = 12;
e = 12.5;

//boolean
let f = true;
f = false;

//undefined
// you don't assign any value
let g;


//null
let h = null;

//symbol
//unique identifier
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1 === u2

let obj ={uid: 1, name: "test",email:"test@test.com"};
let u3 = Symbol("uid");
obj[u3] = "001";

//bigInt
let number = 9007199254740991;
let number2 = number + 6;
let num2 = 9007199254740991n;
num2 +3n;

//<-----non-primitive data types------>
//types: object, array, function

let temp_array = ["name", "age","phone number"];
let temp_object = {name: "test", age: 22, phone: "1234567890"};

function temp_function(){
    
}

//daynamic typing
let temp_d = "test";
temp_d = 12;
temp_d = {};

//typeof quirks
//type of 12
//check type of use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1"
//why typeof NaN --> number
//ex. "hello" - 5 -->NaN

//type creation
// "5" +1
// "5" -1