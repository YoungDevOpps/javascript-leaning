const numbers = [3, 8, 12, 5, 19, 21, 2, 14];

const students = [
  { id: 1, name: "Sara", grade: 18 },
  { id: 2, name: "Ali", grade: 9 },
  { id: 3, name: "Amal", grade: 14 },
  { id: 4, name: "Omar", grade: 7 },
  { id: 5, name: "Lina", grade: 20 },
];

// 1. Find the first number greater than 15
const firstBiggerThan15 = numbers.find((n) => n > 15);
console.log(firstBiggerThan15);

// 2. Search a student by id (returns undefined when not found)
function getStudentById(id) {
  return students.find((student) => student.id === id);
}

console.log(getStudentById(3));
console.log(getStudentById(99));
