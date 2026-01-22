// control flow statements in JavaScript

// 1. If-Else Statement (if, if else, if...else if...else)
// if condition {})

if(12 <13){
    console.log(true);
}

if(15 < 13){
    console.log(true);
}// condition is false that why if statment not run

if (!12){
    console.log("number");
}

//if-else statement
if(12 > 13){
    console.log(true);
}else{
    console.log(false);
}

if (15 > 13){
    console.log(true);
}// condition is true that why if statment run
else{
    console.log(false);
}

if(!12){
    console.log("number");
}else{
    console.log("not a number");
}

//if...else if...else statement

// if(condition){
// }else if(condition2){
// }else{
// }

/* if(loggedin && isAdmin){
    console.log("show admin panel");
}else if(loggedin){
    console.log("show user");
}else{
    console.log("please log in");
} */

// switch case statement

switch ('first50'){
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

//early return pattern

function score(value){
    if (value > 90){
        return "value is more than 90";
    }
     else if (value > 80){
        return "value is more than 80";
    }
     else if (value > 70){
        return "value is more than 70";
    } else if (value > 60){
        return "value is more than 60";
    }else{
        return "value is less than 60";
    }
    
}
score(85);


function score1(value){
    if (value > 90) return "value is more than 90";
    if (value > 80) return "value is more than 80";
    if (value > 70) return "value is more than 70";
    if (value > 60) return "value is more than 60";
    return "value is less than 60";
}

function score2(value){
    if (value < 60) return "value is less than 60";
    if (value < 70) return "value is more than 60";
    if (value < 80) return "value is more than 70";
    if (value < 90) return "value is more than 80";
    return "value is more than 90";
}

//example 1
let x = 2;

switch(x){
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}

//example 2

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid Marks";
    }

    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 33) return "D";

    return "Fail";
}

function rps(user, computer){
    if (user === "rock" && computer === "scissors") return "user wins";
    if (user === "scissors" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";
    if (user === "scisers" && computer === "rock") return "computer wins";
    if (user === "rock" && computer === "paper") return "computer wins";
    if (user === "paper" && computer === "scissors") return "computer wins";
    return "it's a tie";
   
}

function rps(user, computer) {
    if (user === "rock" && computer === "scissors") return "user wins";
    if (user === "scissors" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";
    return "it's a wins";
}



