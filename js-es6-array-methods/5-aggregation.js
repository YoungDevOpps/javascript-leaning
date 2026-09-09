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
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total);

// 2. Average grade of all students
const averageGrade =
  students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(averageGrade);

// 3. Total price of products in stock only
const totalInStockPrice = products
  .filter((product) => product.inStock)
  .reduce((sum, product) => sum + product.price, 0);
console.log(totalInStockPrice);
