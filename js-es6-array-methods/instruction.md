```javascript
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
```

**A. Iteration**

1. Print each number from the numbers array with the text:Number: X (replace X with the value).
2. For each student in students, print a sentence like:Sara got 18/20.

**B. Finding elements**

1. Find the first number in numbers that is greater than 15.Store it in a variable called firstBiggerThan15 and print it.
2. Write a function getStudentById(id) that:
3. searches the students array for a student with the given id,
4. returns the student object if found,
5. returns undefined if no student with that id exists.Example: getStudentById(3) should return { id: 3, name: "Amal", grade: 14 }.

**C. Filtering**

1. Create a new array evenNumbers that contains only the even numbers from numbers.
2. From students, create two new arrays:
3. passedStudents: students with grade >= 10
4. failedStudents: students with grade < 10
5. From products, create a new array availableProducts that contains only the products with inStock === true.

**D.Transforming**

1. Create a new array doubledNumbers where every value from numbers is multiplied by 2.
2. Create a new array studentNames that contains only the name of each student.
3. Assume a tax rate of 19%. Create a new array productsWithTax where each element is an object with:
4. name
   finalPrice (original price plus 19% tax)Example of one element:{ name: "Keyboard", finalPrice: 142.8 }

**E.Aggregation**

1.Calculate the total sum of all numbers in numbers and store it in a variable total.
2.Calculate the average grade of all students in students.
3.Only considering products where inStock === true, calculate the total price of these products.
