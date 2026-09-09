// ===== String Manipulation Functions =====

// Inverse une chaîne de caractères
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Compte le nombre de caractères d'une chaîne
function countCharacters(str) {
  return str.length;
}

// Met en majuscule la première lettre de chaque mot d'une phrase
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word === "") return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

module.exports = { reverseString, countCharacters, capitalizeWords };
