const calc = require('./calculator');

console.log("Addition: 5 + 3 =", calc.add(5, 3));
console.log("Subtraction: 10 - 4 =", calc.sub(10, 4));
console.log("Multiplication: 6 * 7 =", calc.mul(6, 7));
console.log("Division: 20 / 4 =", calc.div(20, 4));
console.log("Division by zero: 10 / 0 =", calc.div(10, 0));
