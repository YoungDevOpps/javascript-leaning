// ===== Array Functions =====

// Retourne la valeur maximale d'un tableau de nombres
function findMax(numbers) {
  return numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
}

// Retourne la valeur minimale d'un tableau de nombres
function findMin(numbers) {
  return numbers.reduce((min, current) => (current < min ? current : min), numbers[0]);
}

// Calcule la somme de tous les éléments d'un tableau
function sumArray(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

// Filtre les éléments d'un tableau selon une condition donnée (fonction callback)
function filterArray(array, condition) {
  return array.filter(condition);
}

module.exports = { findMax, findMin, sumArray, filterArray };
