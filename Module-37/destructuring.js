const [x, y] = [5, 34]
console.log(x, y);

const numbers = [66, 99];
const [m, n] = numbers;
console.log(m, n);

function destructuring(num1, num2){
    const value = [num1, num2];
    return value;
}

const [first, sec] = destructuring(45, 54);
console.log(first, sec)