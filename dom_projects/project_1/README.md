# project_1 – Shopping Cart (DOM)

Checkpoint GoMyCode : rendre un panier d'achat entièrement fonctionnel en
JavaScript à partir du HTML et du CSS fournis. Les articles sont déjà
présélectionnés ; l'utilisateur agit dessus depuis cet écran.

## Fonctionnalités

| Action | Comment |
| --- | --- |
| Ajuster la quantité | Boutons `+` (`.fa-plus-circle`) et `-` (`.fa-minus-circle`) ; la quantité ne descend pas sous 0 |
| Supprimer un article | Icône corbeille (`.fa-trash-alt`) : la carte est retirée du DOM |
| Aimer un article | Icône cœur (`.fa-heart`) : bascule la classe `liked`, la couleur change (CSS) |
| Prix total | `.total` recalculé à chaque changement de quantité ou suppression |

## Structure

```
project_1/
├── index.html          Structure fournie (3 produits : Baskets, Socks, Bag)
├── style/style.css      Style fourni + règle .fa-heart.liked
├── js/script.js         Événements DOM (le travail du checkpoint)
└── assets/              Images des produits
```

Bootstrap et Font Awesome sont chargés via CDN.

## Lancer

Ouvrir `index.html` dans un navigateur (double-clic), ou servir le dossier :

```bash
npx serve .
```

## Détail JS

- Tout est initialisé après `DOMContentLoaded`.
- `updateTotal()` reparcourt les cartes encore présentes dans le DOM à chaque
  appel, ce qui garde le total correct après une suppression.
- La couleur du cœur est gérée en CSS via `.fa-heart.liked`, le JS ne fait que
  basculer la classe.
