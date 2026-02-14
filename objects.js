// Objects vs Array
// Objects --> when you want to show all data based on one entity
// (ek j entity mate all data jota hoy) (ex. one user data)
// Array --> when you want to show entity (ex. all users)

// let user_data = [
//     {name: "abc", email: "test@gmail.com"},
//     {name: "def"},
//     {name: "abc1"},
//     {name: "ABC"}
// ]

// create
// variable = {}
// key : value --> key-value structure

let user = {
    name: "Test",
    email: "test@gmail.com",
    roll_no: 70,
};

// access (dot vs square notation)

// console.log(user.name);
// console.log(user["email"]);
//user ['name']
//user [name]
let demo ="name"
// user[demo]// --> convert into name {demo ='name'} --> output : abc

// Nesting and Deep Access
const user1 = {
    name: "test",
    address: {
        city: "Surat",
        pin: 395009,
        locations: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmail.com",
}; // --> nested Object

user1.address.locations.lat;   // --> Deep Access
// user1.address.locations.lng;

// Object destructuring:
// let { lat, lng } = user1.address.locations;
// let { lat: abc_lat } = user1.address.locations;
// destructure and rename variable name


// let demo1 = {
//     first_name: "Demo",
//     last_name: "User",
//     age: 45,
//     email: "demo@user.com"
// }


// Looping
// for (variable name in object_name){}
// for (const key in demo1) {
//     console.log(key);
// }
// obj.key --> not working


const abc_1 ={
    name : "parth",
    age : 21,
    email :"parth12@gmail.com",
    location : {
           lng : 23.3,
    },
}; 

// abc_1.location;

const updatedabc_1 ={
    ...abc_1,
    name : "parth1"
};
console.log(updatedabc_1)



// Copying Objects: Spred, Object.assign, deep clone
// Spred
// let user_data = { ...demo };
// let user_data = {gender: "Male", ...demo} // add key–value and copy object

// Use case: State update
const user11 = {
    name: "Amit",
    age: 30
};

const updatedUser = {
    ...user11,
    age: 31
};

console.log(updatedUser);

// const updatedabc_1 ={
//     ...abc_1,
//     name : "parth1"
// };
// console.log(updatedabc_1)


// Object.assign ---> copy and add keys-value
let user_data_assign = Object.assign({}, demo); // → nothing will be add just copy

let user_data_assign1 = Object.assign({ phone_number: 7894567894 }, demo); 
// → add and copy


// Use case: Default settings + user settings merge
const defaultSettings = {
    theme: "Light",
    language: "en"
};

const userSettings = {
    theme: "dark"
};

const finalSettings = Object.assign({}, defaultSettings, userSettings);

// 1. .find() – First even number
const seats1 = [3, 5, 8, 10, 7];
const firstEvenSeat = seats1.find(seat => seat % 2 === 0);
console.log("1. First Even Seat:", firstEvenSeat);  // 8


// 2. .some() – Any even number?
const seats2 = [3, 5, 7, 9];
const hasEvenSeat = seats2.some(seat => seat % 2 === 0);
console.log("2. Has Even Seat:", hasEvenSeat);  // false


// 3. .find() – First passing mark
const marks11 = [25, 35, 40, 60];
const firstPass = marks11.find(mark => mark >= 40);
console.log("3. First Passing Mark:", firstPass);  // 40


// 4. .some() – Any failed student?
const marks2 = [60, 70, 55, 30];
const hasFail = marks2.some(mark => mark < 40);
console.log("4. Has Failed Student:", hasFail);  // true


// 5. .find() – First affordable product
const prices111 = [1500, 1200, 800, 2000];
const affordable = prices111.find(price => price <= 1000);
console.log("5. First Affordable Product:", affordable);  // 800


// 6. .some() – Any discount item?
const prices2 = [500, 800, 1200, 300];
const hasDiscountItem = prices2.some(price => price < 500);
console.log("6. Has Discount Item:", hasDiscountItem);  // true


// 7. .find() – First long word
const words11 = ['hi', 'hello', 'javascript', 'ok'];
const longWord = words11.find(word => word.length > 5);
console.log("7. First Long Word:", longWord);  // javascript


// 8. .some() – Any empty input?
const inputs = ['name', 'email', '', 'password'];
const hasEmpty = inputs.some(input => input === '');
console.log("8. Has Empty Input:", hasEmpty);  // true


// 9. .find() – First high transaction
const transactions = [200, 500, 1200, 3000, 400];
const highTransaction = transactions.find(amount => amount > 1000);
console.log("9. First High Transaction:", highTransaction);  // 1200


// 10. .some() – System alert check
const temperatures = [30, 32, 35, 42, 36];
const isOverheated = temperatures.some(temp => temp > 40);
console.log("10. Is Overheated:", isOverheated);  // true

// Q1
const prices1111 = [100, 200, 300];
const updatedPrices = prices1111.map(p => p + 20);

// Q2
const marks111 = [35, 60, 45, 20, 80];
const passing = marks111.filter(m => m >= 40);

// Q3
const attendance = [80, 90, 70, 85];
const hasLowAttendance = attendance.some(a => a < 75);

// Q4
const prices21 = [1200, 800, 450, 600];
const discounted = prices21.find(p => p < 500);

// Q5
const salaries1 = [18000, 25000, 30000, 15000];
const filtered = salaries1.filter(s => s > 20000);
const withBonus = filtered.map(s => s + 2000);
const totalPayout = withBonus.reduce((a, b) => a + b, 0);

// Q6
const ratings = [4, 5, 4, 4];
const allGood = ratings.every(r => r >= 4);

// Q7
const expenses1 = [200, 150, 300, 100];
const totalExpenses = expenses1.reduce((a, b) => a + b, 0);

// Q8
const scores1 = [45, 60, 80, 30, 70];
const updatedScores = scores1.filter(s => s > 50).map(s => s + 10);

// Q9
const scores2 = [95, 90, 85, 80];
const [first, second] = scores2;

// Q10
const cart1 = [200, 400];
const cart2 = [300, 500];
const mergedCart = [...cart1, ...cart2];

// Q11
const expenses2 = [200, 450, 800, 1200];
const allValidExpenses = expenses2.every(e => e < 1000);

// Q12
const transactions1 = [500, -200, 1200, 300];
const firstBigTransaction = transactions1.find(t => t > 1000);
const hasNegativeTransaction = transactions.some(t => t < 0);

// Q13
const marks21 = [30, 45, 60, 25, 80];
const passedMarks = marks21.filter(m => m >= 40);
const avgMarks = passedMarks.reduce((a, b) => a + b, 0) / passedMarks.length;

// Q14
const temps = [22, 30, 45, 28];
const anyHighTemp = temps.some(t => t > 40);
const allAbove20Temp = temps.every(t => t > 20);

// Q15
const a = [1, 2, 3];
const b = [4, 5, 6];
const mergedAB = [...a, ...b];
const totalAB = mergedAB.reduce((x, y) => x + y);

// Q16
const scores3 = [60, 70, 80, 90];
const avgScore = scores3.reduce((a, b) => a + b, 0) / scores3.length;
const eligible = scores3.every(s => s > avgScore);

// Q17
const inputs1= ['', '', 'name', 'email'];
const firstValid = inputs1.find(i => i !== '');

// Q18
const salaries2 = [20000, 30000, 40000];
const newSalaries = [...salaries2, 50000];

// Q19
const performance = [55, 65, 45, 80];
const anyLowPerformance = performance.some(p => p < 50);
const allAbove60Performance = performance.every(p => p > 60);

// Q20
const x = [1, 2, 3];
const y = [4, 5, 6];
const mergedXY = [...x, ...y];
const evenXY = mergedXY.filter(n => n % 2 === 0);
const squaredXY = evenXY.map(n => n * n);
const totalXY = squaredXY.reduce((a, b) => a + b);

// Q1
const priceListA = [100, 200, 300];
const priceListAUpdated = priceListA.map(x => x + 10);

// Q2
const numListA = [1, 2, 3, 4, 5, 6];
const numListAEvens = numListA.filter(x => x % 2 === 0);

// Q3
const valueSetA = [10, -5, 20];
const valueSetAHasNegative = valueSetA.some(x => x < 0);

// Q4
const markListA = [45, 60, 70];
const markListAAllPass = markListA.every(x => x >= 40);

// Q5
const scoreSetA = [20, 40, 55, 70];
const scoreSetAFirstGt50 = scoreSetA.find(x => x > 50);

// Q6
const billListA = [120, 300, 80];
const billListATotal = billListA.reduce((a, b) => a + b, 0);

// Q7
const hourListA = [1, 2, 1.5];
const hourListAMinutes = hourListA.map(x => x * 60);

// Q8
const inputFieldsA = ['name', '', 'email'];
const inputFieldsAFirstEmpty = inputFieldsA.find(x => x === '');

// Q9
const mixedValuesA = [5, 0, 8];
const mixedValuesAHasZero = mixedValuesA.some(x => x === 0);

// Q10
const evenSetA = [2, 4, 6];
const evenSetADouble = evenSetA.map(x => x * 2);

// Q11
const dataSetA = [10, 20, 30];
const [dataAFirst, dataASecond] = dataSetA;

// Q12
const groupA1 = [1, 2];
const groupA2 = [3, 4];
const groupAMerged = [...groupA1, ...groupA2];

// Q13
const tempListA = [30, 40, 45];
const tempListAAllBelow50 = tempListA.every(x => x < 50);

// Q14
const numSetB = [1, 3, 4, 6];
const numSetBFirstEven = numSetB.find(x => x % 2 === 0);

// Q15
const stepListA = [2000, 3000, 1500];
const stepListATotal = stepListA.reduce((a, b) => a + b, 0);

// Q16
const salarySetA = [18000, 26000, 30000];
const salarySetAFiltered = salarySetA.filter(x => x > 25000);

// Q17
const salarySetB = [15000, 22000, 28000];
const salarySetBBonus = salarySetB.filter(x => x > 20000).map(x => x + 500);

// Q18
const expenseListA = [50, 200, 150, 80];
const expenseListATotal = expenseListA.filter(x => x > 100).reduce((a, b) => a + b, 0);

// Q19
const scoreListB = [60, 70, 80];
const scoreListBAvg = scoreListB.reduce((a, b) => a + b, 0) / scoreListB.length;
const scoreListBAnyBelowAvg = scoreListB.some(x => x < scoreListBAvg);

// Q20
const numSetC = [10, 14, 21];
const numSetCFirstDiv7 = numSetC.find(x => x % 7 === 0);

// Q21
const productPricesA = [500, 1000, 1500];
const productPricesADiscount = productPricesA.map(x => x * 0.9);

// Q22
const workoutMinutesA = [20, 45, 60];
const workoutMinutesATotal = workoutMinutesA.filter(x => x > 30).reduce((a, b) => a + b, 0);

// Q23
const fieldInputsA = ['name', 'email', 'password'];
const fieldInputsAAllFilled = fieldInputsA.every(x => x !== '');

// Q24
const arrayX1 = [1];
const arrayX2 = [2];
const arrayX3 = [3];
const arrayXMerged = [...arrayX1, ...arrayX2, ...arrayX3];

// Q25
const markListB = [55, 48, 35, 70];
const markListBFirstFail = markListB.find(x => x < 40);

// Q26
const markListC = [30, 45, 60, 80];
const markListCPassed = markListC.filter(x => x >= 40);
const markListCAvgPassed = markListCPassed.reduce((a, b) => a + b, 0) / markListCPassed.length;

// Q27
const numSetD = [1, 2, 3, 4, 5];
const numSetDSquaredOdd = numSetD.filter(x => x % 2 !== 0).map(x => x * x);

// Q28
const valueListB = [200, 500, 1500];
const valueListBHasBig = valueListB.some(x => x > 1000);

// Q29
const numSetE = [10, 20, 30, 40];
const [numSetEFirst, ...numSetERest] = numSetE;

// Q30
const workHoursA = [6, 8, 9, 7];
const workHoursAReward = workHoursA.filter(x => x >= 8).reduce((a, b) => a + b, 0);

// Q31
const wordListA = ['hi', 'hello', 'world'];
const wordListAFirstLong = wordListA.find(x => x.length > 4);

// Q32
const evenCheckA = [2, 4, 6, 8];
const evenCheckAAllEven = evenCheckA.every(x => x % 2 === 0);

// Q33
const arrayY1 = [1, -2];
const arrayY2 = [3, -4];
const arrayYPositive = [...arrayY1, ...arrayY2].filter(x => x > 0);

// Q34
const billPricesA = [200, 400];
const billPricesATotal = billPricesA.map(x => x * 1.05).reduce((a, b) => a + b, 0);

// Q35
const tempListB = [20, 30, 40];
const tempListBAvg = tempListB.reduce((a, b) => a + b, 0) / tempListB.length;
const tempListBFirstAboveAvg = tempListB.find(x => x > tempListBAvg);

// Q36
const mergeA1 = [1, 2, 3];
const mergeA2 = [4, 5, 6];
const mergeAResultSum = [...mergeA1, ...mergeA2]
  .filter(x => x % 2 === 0)
  .reduce((a, b) => a + b, 0);

// Q37
const scoreListC = [60, 70, 80];
const scoreListCAvg = scoreListC.reduce((a, b) => a + b, 0) / scoreListC.length;
const scoreListCAllAboveAvg = scoreListC.every(x => x > scoreListCAvg);

// Q38
const txListA = [100, 500, 900];
const txListAAvg = txListA.reduce((a, b) => a + b, 0) / txListA.length;
const txListAFirstAboveAvg = txListA.find(x => x > txListAAvg);

// Q39
const numSetF = [1, 2, 3, 4, 5];
const numSetFEvenSquaredTotal = numSetF
  .filter(x => x % 2 === 0)
  .map(x => x * x)
  .reduce((a, b) => a + b, 0);

// Q40
const arrZ1 = [-1, 2];
const arrZ2 = [3, -4];
const arrZSumPositive = [...arrZ1, ...arrZ2].filter(x => x > 0).reduce((a, b) => a + b, 0);

// Q41
const numSetG = [4, 6, 9, 11];
const isPrimeFn = n => n > 1 && [...Array(n).keys()].slice(2).every(i => n % i !== 0);
const numSetGHasPrime = numSetG.some(isPrimeFn);

// Q42
const valueSetC = [30, 60, 80];
const valueSetCWeighted = valueSetC
  .map(x => (x > 50 ? x * 2 : x))
  .reduce((a, b) => a + b, 0);

// Q43
const numSetH = [10, 20, 50];
let cumSumH = 0;
const numSetHFirstGreaterCumulative = numSetH.find(x => (cumSumH += x) && x > cumSumH - x);

// Q44
const salarySetC = [20000, 30000];
const salarySetCTotal = salarySetC
  .map(x => (x + 2000) * 0.9)
  .reduce((a, b) => a + b, 0);

// Q45
const priceListC = [400, 800, 1200];
const priceListCWithinBudget = priceListC.every(x => x <= 1000);

// Q46
const maxArrA = [10, 40];
const maxArrB = [30, 20];
const maxArrValue = Math.max(...maxArrA, ...maxArrB);

// Q47
const numSetI = [10, 20, 60];
const numSetIAvg = numSetI.reduce((a, b) => a + b, 0) / numSetI.length;
const numSetIFirstFailRule = numSetI.find(x => x > 2 * numSetIAvg);

// Q48
const distListA = [3, 6, 10];
const distListATotal = distListA
  .filter(x => x > 5)
  .map(x => x + 1)
  .reduce((a, b) => a + b, 0);

// Q49
const uniqueCheckA = [1, 2, 3, 2];
const uniqueCheckAResult = uniqueCheckA.length === new Set(uniqueCheckA).size;

// Q50
const finalA1 = [1, 2, 3];
const finalA2 = [4, 5, 6];
const finalMerged = [...finalA1, ...finalA2];
const finalAvg = finalMerged.reduce((a, b) => a + b, 0) / finalMerged.length;
const finalFiltered = finalMerged.filter(x => x > finalAvg);
const finalSquared = finalFiltered.map(x => x * x);
const finalBossTotal = finalSquared.reduce((a, b) => a + b, 0);
                