let a = 12
let b = 4

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiple = (a, b) => a * b;
let exponent = (a, b) => a ** b;
let divison = (a, b) => a / b;
let modulus = (a, b) => a % b;

console.log(`A: ${a}`);
console.log(`B: ${b}`);
console.log(`Tambah(a, b)`);
console.log(`log : Penjumlahan ${a} + ${b} = ${add(a, b)}`);
console.log(`Kurang(a, b)`);
console.log(`log : Pengurangan ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Kali(a, b)`);
console.log(`log : Perkalian ${a} * ${b} = ${multiple(a, b)}`);
console.log(`Pangkat(a, b)`);
console.log(`log : Perpangkatan ${a} ** ${b} = ${exponent(a, b)}`);
console.log(`Bagi(a, b)`);
console.log(`log : Pembagian ${a} / ${b} = ${divison(a, b)}`);
console.log(`Sisa bagi(a, b)`);
console.log(`log : Modulus ${a} % ${b} = ${modulus(a, b)}`);