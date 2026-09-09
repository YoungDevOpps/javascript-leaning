const numbers = [3, 8, 12, 5, 19, 21, 2, 14];

const students = [
  { id: 1, name: "Sara", grade: 18 },
  { id: 2, name: "Ali", grade: 9 },
  { id: 3, name: "Amal", grade: 14 },
  { id: 4, name: "Omar", grade: 7 },
  { id: 5, name: "Lina", grade: 20 },
];

// 1. Print each number
for (let i = 0; i < numbers.length; i++) {
  console.log(`Number: ${numbers[i]}`);
}

// 2. Print each student's grade
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} got ${students[i].grade}/20.`);
}
