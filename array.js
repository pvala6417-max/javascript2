//array -- hold multiple values in a single variable
// [1,2,3,4,5]
//["hello", "a", "b", "c"]
// [2, "bye", "hello", 50]

//create
//define a variable = [multiple values];
let arr= [1,2,3,4,5];

//access
//position = [0,1,2,3,4]
//access first element
// array_name[position]
//arr[3], arr[2], arr[10]

//modify
//array_name[position] = new_value
// arr[0] = 10

//array methods (variable_name.method_name())
// push, pop, shift, unshift, length, slice, splice, forEach, map, filter, reduce
//push --> enter new value into array -- place it into last
arr.push(5);
// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakhava to te method kevai
// use case --- enter new producats into exiting producats list

let cars = ["BMW", "Audi", "Mercedes"];

cars.push("Tesla");

console.log(cars);

//pop --> remove last element from array
// cars.pop();
// use case -- remove last product from existing products list
// cars.pop();

//shift --> remove first element from array
// cars.shift();
// use case -- remove first product from existing products list
cars.shift();

//unshift --> add new element at first position
// cars.unshift("Volvo");
// use case -- add new product at first position in existing products list
cars.unshift("Volvo");

//splice --> add/remove element at specific position
// cars.splice(position, number_of_elements_to_remove, new_element1, new_element2,...)
// use case -- add/remove product at specific position in existing products list

cars.splice(2, 2); // removing elements

//slice --> extract a portion of array --specific position and specific number of elements
// new_array = cars.slice(start_position, end_position)
// use case -- extract a portion of products from existing products list

// use case --copy specifics data and save it into new variable 
let animals = ["dog", "cat", "lion", "tiger"];

let pets = animals.slice(0, 2); // copy specific part


//splice vs slice
//splice --> modify original array
//slice --> does not modify original array

// reverse -- reverse the array
let g = [1,2,3,4,5];
g.reverse(); // [5,4,3,2,1]
// use case -- reverse the order of products in existing products list

//sort -- sort the array asending order
let h = [3,1,4,2,5];
h.sort(); // [1,2,3,4,5]
// desending order
//  let i=h.sort(function(a,b){
//     return b-a;
// });

// Q1. push()
// Add a new task 'Buy milk'
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log(tasks); // ['Wake up', 'Brush teeth', 'Buy milk']



// Q2. pop()
// Remove last notification
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log(notifications); // ['Email', 'Message']



// Q3. shift()
// Remove first customer
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
console.log(customers); // ['Customer2', 'Customer3']



// Q4. unshift()
// Add new song at beginning
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
console.log(playlist); // ['Song A', 'Song B', 'Song C']



// Q5. splice()
// Remove 'Alex' and add 'John', 'Sara'
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log(students); 
// ['Mike', 'John', 'Sara', 'Emma', 'Sophia']



// Q6. splice()
// Remove 2 items starting from index 1
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log(menu); // ['Burger', 'Salad']



// Q7. slice()
// Weekend days only
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);
console.log(weekend); // ['Saturday', 'Sunday']



// Q8. reverse()
// Reverse levels
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log(levels); // ['Hard', 'Medium', 'Easy']



// Q9. sort()
// Sort scores ascending
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log(scores); // [12, 34, 45, 78, 89]



// Q10. sort() numbers
// Sort prices low to high
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log(prices); // [49, 149, 199, 299, 999]



// Q11. slice() vs splice()
// Create new array of first 3 items (NO change original)
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let first3 = products.slice(0, 3);
console.log(first3); // ['Laptop', 'Phone', 'Tablet']
console.log(products); // unchanged



// Q12. splice() complex
// Remove 'Blue', add 'Purple' & 'Orange'
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log(colors); 
// ['Red', 'Green', 'Purple', 'Orange', 'Yellow']



// Q13. reverse() + push()
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log(steps); 
// ['Step 3', 'Step 2', 'Step 1', 'Final Step']



// Q14. sort() strings ignoring case
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);
// ['alice', 'Bob', 'charlie', 'David'] (already alphabetical)



// Q15. movie watchlist
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');         // Add
movies.shift();                   // Remove first
movies.sort();                    // Sort
console.log(movies);
// ['Gladiator', 'Inception', 'Titanic']



// Q16. splice() return value
let nums1 = [10, 20, 30, 40];
let removedNums = nums1.splice(1, 2);
console.log(removedNums); // [20, 30]
console.log(nums1);       // [10, 40]



// Q17. slice() immutability
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log(result); // [20, 30]
console.log(nums2);  // unchanged


// Q19. reverse() mutation
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log(reversedLetters); // ['c', 'b', 'a']
console.log(letters);         // ['c', 'b', 'a'] (same array, mutated


// Q21. splice() with deleteCount 0
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');
console.log(arr1); 
// ['x', 'new', 'y', 'z'] (inserts without deleting)

// Q23. slice() negative index
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log(sliced); 
// [300, 400]



// Q24. splice() vs slice()
// a) Update original → splice()
// b) Keep original same → slice()



// Q25. Chained methods
let arr2 = [1, 2, 3];
// shift() → removes first element = 1
// push(1) → array becomes [2, 3, 1]
arr2.push(arr2.shift());
console.log(arr2); 
// [2, 3, 1]

//use case -- sort product price low to high

let arr4 =[10, 2, 5, 20, 30]

let arr5 =['b','f','z','q','m','k']

//for each loop
//for each --array ni direk  value mate loop chalse
let i = [10, 35, 40, 68]

i.forEach(val =>{
    let new_val = val+ 10;
    console.log(new_val)
});

//.map() method;
//map tyare j use karvu ke jyare ek new array create karvo chhe 
//first map create a black array -- only for undarstanding
let data = [10, 20, 50, 40, 15];

let temp_data = data.map(val => {
    if(val > 20){
        return val;
    }
});

let product_data =["html","css","java","python"]

let temp1_data = product_data.map(string =>{
    if (string.length >4){
        return string;
    }
})

console.log(temp1_data) 

const steps1 = [1000, 2000, 3000];

const newsteps1= steps1.map(val =>{
    return val * 2;
});
console.log(newsteps1)

// 2. Convert minutes to seconds

// Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds)

//filter 
//filter tyare use karvu ke jyare ek new array create karvo chhe with condition
//in return true/false
//if true --> add into new array
//if else (false) --> not add into new array

let laptops_parice = [15000, 20000, 30000, 65000, 99000, 45000];

let ex_laptops = laptops_parice.filter((price)=>{
    if(price > 30000) return true;
});
console.log(ex_laptops)

// ex. product ma thi specifics price na product new array ma store karva hoy
// if you want to show only expensive product on your homepage
// if you want to filter producat based on price
let p_data =["LAPTOP", "phone","mobile",];

let p1_data = p_data.filter((string) =>{
    if(string==="phone" || string==="mobile") return true;
});
console.log(p1_data)

//reduce
//reduce tyare j use karvu ke jyare ek single value calculate karvi hoy from array
let f_price =[15, 20, 30, 45, 38];

let fi_price =f_price.reduce((a,val)=>{
    return a + val;
}, 0);
// accumulator --> je value function ma return thase --> accumulator name change kari salo cho
// val --> array ni darek value

const prices1= [499, 299, 199];
const totalPrice = prices1.reduce((total, price) => total + price, 0);
console.log(totalPrice)

const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark < max ? mark : max;
}, marks[0]);
console.log(highest)

const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
console.log(totalChars)

const words1 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words1.reduce((text, word) => text + ' ' + word);
console.log(sentence)

// example1
// ### Q1. Grocery Store – Total Cost

// 1. Keep items costing more than 100
// 2. Add 5% tax
// 3. Find total cost

const prices11= [50, 120, 300, 80, 200];

const totalCost = prices11
  .filter(p => p > 100)        // [120, 300, 200]
  .map(p => p * 1.05)          // add 5% tax → [126, 315, 210]
  .reduce((acc, curr) => acc + curr, 0);  // total = 651

console.log(totalCost); // 651

// example2
// Keep days with minutes ≥ 20
// Convert minutes → calories (1 min = 4 cal)
// Find total calories

const minutes11 = [10, 25, 40, 15, 60];

const totalCalories = minutes11
  .filter(m => m >= 20)       // [25, 40, 60]
  .map(m => m * 4)            // convert to calories → [100, 160, 240]
  .reduce((acc, curr) => acc + curr, 0); // total = 500

console.log(totalCalories); // 500

//find 
//find tyare j use karvu ke jyare array mathi ek value find kari hoy based on condition
// find() return kare chhe array on element--> cakkback returns value mathi
//.find() stops at the first match
// it does not continue looping

let product =["leptop", "mobile","tablet","desktop","smarth watch"]
let find_product = product.find((item)=>{
    //console.log("can't find product");//not working why?
    if(item === "mobile"){
        return true;
    }else if (item === "tablet"){
            return true;
    }else{
        return false;
    }        
});
console.log(find_product);

//use case -- data mathi ek value find karvi hoy based on name
//ex. product ma thi specifics producat find karvo hoy based on name

//find vs fillter 
//real life scenario shoping mall security
//your are a security guard at a shoping mall 
// check the list of visitor 
let people = ["john","sara","mike","anna","david","sara"];

//find --> you are looking for the first person named "sara" in the list and stop seaching (pehli var j male, bs e j and anagal check kare )

let person= people.find((name) => name === "sara");
console.log(person);

//filter --> you want to find all visitor named "sara" in the list (all data check kare and list na end sudhi check kare)

let Allsara = people.filter((name) => name === "sara");
console.log(Allsara);

//// some
// check kare chhe ke array ma koi pan ek item condition satisfy
// kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return
// true or false, find() return value of array
// give ans in true and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some((val) => {
    if (val > 85) return true;
    // if (val < 85) return "need improvement";  
});
console.log(any);
// use case -- check if some product are out of stock in your cart

// every
// check kare chhe ke array ma baddha j items condition satisfy
// kare chhe ke nahi
// true --> baddha items condition match kare
// false --> ek pan fail thay to

let def = [20, 30, 90, 45];

let num = def.every(function(val){
    return val < 40;
});

console.log(num);

// use case --> check all student is pass or not
//some (), find(), filter(),every()
let producat = ["tablet", "mobile","laptop","mobile"]
//method --> condition -->output
let p1= producat.some((item) => {
    if(item === "mobile");
});
console.log(p1);//output false

let p2= producat.find((item) => {
    if(item === "mobile");
    return "mobile";
});
console.log(p2)

let p3 = producat.filter((item) => {
    return item === "mobile";
});
console.log(p3);

let p4 = producat.every((item) => {
    return item === "mobile";
});
console.log(p3);

// Destructuring operator --> give value to variable 
// (ex. we don't use every time arr1[1], just save it into variable let [ , k ] = arr1)

let arr6 = [1, 2, 3, 4, 5];

// let j = arr4[0];
// let k = arr4[2];

let [ j, , k] = arr6;  // --> destructuring

// let [j, , k] = arr4;

console.log(k);

let user_data = ["test", "test@gmail.com", "Male", "Surat"];
let [name,email,gender,city] =user_data;
// name, email, gender, city
console.log("name:", name);
console.log("email:",email);
console.log("gender:",gender);
console.log("city:",city);

// spread operator --> copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3;  // just give reference not copy value
// (when you change into arr4 that will be change arr3 too)

let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spread --> into Array and Object

let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];

let mix_arr = [...temp_arr, ...temp_arr2];

console.log(mix_arr);


