//loops -- repeating code block

// for loop
//why use loops? when  you konw hoe ,many times you want to repeat code block
// print 1 to 10 --> console.log(1) ... console.log(10);
//kaya thi javanu che --> kya sudhi javanu chhe --> ketli vaar javanu chhe
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// while loop
// kya thi javanu che --> kya rokvanu che --> kevi rite javamu chhe
//while (ex. 1-> hello world -> stop when condition false)
//start
//while(end){
//code 
//change
//}

// let j = 10;
// while (j >=20){
//     console.log("j :", j);
//     j++;
// }

// let count = 5;

// while (count >= 1) {
//     console.log(count);
//     count--;
// }

// let k = 50;

// while (k <= 50) {
//     console.log("k :", k);
//     k++;
// }

// let c = 30;

// while (c > 20) {
//     console.log(c);
//     c--;   // decrease
// }

// let d= "10";
// while (d >= 20){
//     console.log(d);
//     d++;
// }

// let f =50;

// while (f >= 40){
//     console.log(f);
//     f--;
// }

// let q =50;

// while (q >= 40){
//     console.log(q);
//     --q;
// }

// do-while loop
// do{} while(end);
//start
//do{
//code
//change
//}while(end);

// let g = 10;

// do {
//     console.log("g :", g);
//     g++;
// } while (g <= 20);

// let h =30;
// do{
//     console.log("h :", h);
//     h--;
// }while(h >=20);

//break 

// for (let k=1; k <= 201; k++){
//     console.log("k :", k);
//     if (k === 32){
//         break;
//     }
// }

// for (let m=1; m <= 50; m--){
//     console.log("m :", m);
//     if (m === 32){
//         break;
//     }
// }

// continue
// for (let a=1; a <= 10; a++){
    
//     if (a === 5){
//         continue;

//     }
//     console.log("a :", a);
// }

// for (let a=1; a <= 10; a++){
    
//     if (a === 7){
//         continue;

//     }
//     console.log("a :", a);
// }

// example 1
// Print number from 1 to 10 using a for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// example 2
//Print number from 10 to 1 using while loop
// let j=10;
// while (j >=1){
//     console.log(j);
//     j--;
// }

// example 3
//Print even numbers from 1 to 20 using for loop

// for (let k=1; k <=20; k++){
//     if (k % 2 ===0){
//         console.log(k);
//     }
// }

// example 4
//Print odd numbers from 1 to 15 using while loop

// for (let i=1; i <=15; i++){
//     if (i % 2 !==0){
//         console.log(i);
//     }
// }

// example 5
//Print the multiplication table of 5

// for (let m=1; m <=10; m++){
//     console.log(`5 x ${m} = ${5 * m}`);
// }

// example 6
//Calculate the sum of numbers from 1 to 50

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;   // add each number to sum
// }

// console.log("Sum =", sum);

// example 7
//Print all numbers between 1 to 50 that are divisible by 3.

// for (let i=1; i <=50; i++){
//     if (i % 3 ===0){
//         console.log(i);
//     }
// }

// example 8
// Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let num = prompt("Enter a number:");

// num = Number(num);   // convert input to number

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is Even");
//     } else {
//         console.log(i + " is Odd");
//     }
// }

// example 9
//Count how many numbers between 1 to 100 are divisible by 3 or 5.

// for (let i=1; i <=100; i++){
//     if (i % 3 ===0 || i % 5 ===0){
//         console.log(i)
//     }
// }

// example 10
//Stop at First Multiple of 7

// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 ===0){
//         break;
//     }
// }

//>Write a Loop from 1 to 100 that:

// for(let i=1; i<= 100; i++){
//     console.log(i);
//     if(i ===100){
//         break;
//     }
// }

//example 11

// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);

// }

// example 12

// count = 0;
// for(let i =1; i<=100; i++){
//     if(i%2 ===1){
//         count++;
//         console.log(i);
//     }
//     console.log(i);
//     if(count ===5){cha
//         break;
//     }
// }
