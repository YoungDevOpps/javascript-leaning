# Exercices – Fonctions JavaScript

Collection d'exercices sur les fonctions en JavaScript, organisée en trois
catégories, une par fichier. Chaque fichier exporte ses fonctions via
`module.exports` et [`index.js`](index.js) les utilise pour une démonstration.

## Structure

| Fichier | Contenu |
| --- | --- |
| [`stringManipulation.js`](stringManipulation.js) | Manipulation de chaînes de caractères |
| [`arrayFunctions.js`](arrayFunctions.js) | Opérations sur les tableaux |
| [`mathFunctions.js`](mathFunctions.js) | Fonctions mathématiques |
| [`index.js`](index.js) | Démonstration des trois catégories |

## 1. String Manipulation (`stringManipulation.js`)

| Fonction | Rôle |
| --- | --- |
| `reverseString(str)` | Inverse une chaîne de caractères |
| `countCharacters(str)` | Compte le nombre de caractères |
| `capitalizeWords(sentence)` | Met une majuscule à la première lettre de chaque mot |

```js
reverseString("bonjour");            // "ruojnob"
countCharacters("bonjour");          // 7
capitalizeWords("le petit chat");    // "Le Petit Chat"
```

## 2. Array Functions (`arrayFunctions.js`)

| Fonction | Rôle |
| --- | --- |
| `findMax(numbers)` | Retourne la valeur maximale du tableau |
| `findMin(numbers)` | Retourne la valeur minimale du tableau |
| `sumArray(numbers)` | Calcule la somme des éléments |
| `filterArray(array, condition)` | Filtre le tableau selon une fonction callback |

```js
findMax([4, 8, 15, 16, 23, 42]);              // 42
sumArray([4, 8, 15, 16, 23, 42]);             // 108
filterArray([1, 2, 3, 4], (n) => n % 2 === 0); // [2, 4]
```

## 3. Mathematical Functions (`mathFunctions.js`)

| Fonction | Rôle |
| --- | --- |
| `factorial(n)` | Calcule la factorielle d'un entier positif ou nul |
| `isPrime(n)` | Teste si un nombre est premier |
| `fibonacci(terms)` | Génère les `n` premiers termes de la suite de Fibonacci |

La fonction interne `ensureNumber(value)` valide l'entrée : les chaînes
numériques sont converties en nombre, toute autre valeur invalide lève une
erreur. Les entrées hors domaine (nombre négatif, non entier) lèvent également
une erreur.

```js
factorial(5);      // 120
isPrime(7);        // true
fibonacci(10);     // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
factorial("abc");  // Error: Valeur invalide : "abc" n'est pas un nombre.
```

## Lancer la démo

```bash
node index.js
```

## Prérequis

[Node.js](https://nodejs.org/) (aucune dépendance externe).
