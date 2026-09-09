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

// 1. Double every number
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// 2. Keep only student names
const studentNames = [];
for (let i = 0; i < students.length; i++) {
  studentNames.push(students[i].name);
}
console.log(studentNames);

// 3. Add 19% tax to each product price
const TAX_RATE = 0.19;
const productsWithTax = [];
for (let i = 0; i < products.length; i++) {
  productsWithTax.push({
    name: products[i].name,
    finalPrice: products[i].price + products[i].price * TAX_RATE,
  });
}
console.log(productsWithTax);
