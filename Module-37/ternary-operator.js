let money = 500;

let condition = (money> 300 && money>800) ? 'biriyani' :  'sada vat';

console.log(condition);

// number to string
let num1 = 53;

let strNum1 = num1 + '';

console.log(strNum1);

// string to number

let convertString = +strNum1;
console.log(convertString)


const isActive = false;

const showUser = () => console.log('show user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser()

// if left side is true, then it will be executed
isActive && showUser();

// if leftside is false, it will also check right side, then any side is true, it will show true value

isActive || showUser();
