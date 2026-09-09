const numbers = [3, 8, 12, 5, 19, 21, 2, 14];

const students = [
  { id: 1, name: "Sara", grade: 18 },
  { id: 2, name: "Ali", grade: 9 },
  { id: 3, name: "Amal", grade: 14 },
  { id: 4, name: "Omar", grade: 7 },
  { id: 5, name: "Lina", grade: 20 },
];

const products = [
  { id: 1, name: "Keyboard", price: 120, inStock: true },
  { id: 2, name: "Mouse", price: 40, inStock: false },
  { id: 3, name: "Monitor", price: 500, inStock: true },
  { id: 4, name: "USB Cable", price: 10, inStock: true },
];

// 1. Sum all numbers
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// 2. Average grade of all students
let gradeSum = 0;
for (let i = 0; i < students.length; i++) {
  gradeSum += students[i].grade;
}
const averageGrade = gradeSum / students.length;
console.log(averageGrade);

// 3. Total price of products in stock only
let totalInStockPrice = 0;
for (let i = 0; i < products.length; i++) {
  if (products[i].inStock === true) {
    totalInStockPrice += products[i].price;
  }
}
console.log(totalInStockPrice);
