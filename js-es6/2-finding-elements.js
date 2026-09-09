const numbers = [3, 8, 12, 5, 19, 21, 2, 14];

const students = [
  { id: 1, name: "Sara", grade: 18 },
  { id: 2, name: "Ali", grade: 9 },
  { id: 3, name: "Amal", grade: 14 },
  { id: 4, name: "Omar", grade: 7 },
  { id: 5, name: "Lina", grade: 20 },
];

// 1. Find the first number greater than 15
let firstBiggerThan15;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 15) {
    firstBiggerThan15 = numbers[i];
    break; // stop as soon as we find it
  }
}
console.log(firstBiggerThan15);

// 2. Search a student by id
function getStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return undefined; // no student found
}

console.log(getStudentById(3));
console.log(getStudentById(99));
