// Démonstration des trois catégories de fonctions

const { reverseString, countCharacters, capitalizeWords } = require("./stringManipulation");
const { findMax, findMin, sumArray, filterArray } = require("./arrayFunctions");
const { factorial, isPrime, fibonacci } = require("./mathFunctions");

console.log("===== String Manipulation =====");
console.log(reverseString("bonjour"));
console.log(countCharacters("bonjour"));
console.log(capitalizeWords("le petit chat dort"));

console.log("\n===== Array Functions =====");
const nombres = [4, 8, 15, 16, 23, 42];
console.log("max :", findMax(nombres));
console.log("min :", findMin(nombres));
console.log("somme :", sumArray(nombres));
console.log("pairs :", filterArray(nombres, (n) => n % 2 === 0));

console.log("\n===== Mathematical Functions =====");
console.log("factorielle de 5 :", factorial(5));
console.log("7 est premier ?", isPrime(7));
console.log("10 termes de Fibonacci :", fibonacci(10));

// Exemple de saisie non numérique : une erreur est levée
try {
  factorial("abc");
} catch (error) {
  console.log("Erreur attendue :", error.message);
}
