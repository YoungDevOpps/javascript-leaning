// ===== Mathematical Functions =====
// Pour ces fonctions on s'assure que l'utilisateur saisit bien un nombre.

// Vérifie que la valeur reçue est un nombre valide, sinon lève une erreur
function ensureNumber(value) {
  const number = typeof value === "string" ? Number(value) : value;

  if (typeof number !== "number" || Number.isNaN(number)) {
    throw new Error(`Valeur invalide : "${value}" n'est pas un nombre.`);
  }
  return number;
}

// Calcule la factorielle d'un nombre entier positif
function factorial(n) {
  const number = ensureNumber(n);

  if (!Number.isInteger(number) || number < 0) {
    throw new Error("La factorielle nécessite un entier positif ou nul.");
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Vérifie si un nombre est premier
function isPrime(n) {
  const number = ensureNumber(n);

  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Génère la suite de Fibonacci jusqu'à un nombre de termes donné
function fibonacci(terms) {
  const count = ensureNumber(terms);

  if (!Number.isInteger(count) || count < 0) {
    throw new Error("Le nombre de termes doit être un entier positif ou nul.");
  }

  const sequence = [];
  for (let i = 0; i < count; i++) {
    if (i < 2) {
      sequence.push(i);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

module.exports = { ensureNumber, factorial, isPrime, fibonacci };
