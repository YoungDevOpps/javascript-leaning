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

// 1. Keep only even numbers
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);

// 2. Split students by grade
const passedStudents = students.filter((student) => student.grade >= 10);
const failedStudents = students.filter((student) => student.grade < 10);
console.log(passedStudents);
console.log(failedStudents);

// 3. Keep only products in stock
const availableProducts = products.filter((product) => product.inStock);
console.log(availableProducts);
