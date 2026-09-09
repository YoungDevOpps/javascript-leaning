// =====================================================
// SHOPPING CART - script.js
// Gère : quantité (+/-), suppression, like, prix total
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const totalEl = document.querySelector(".total");
  const productCards = document.querySelectorAll(".list-products > .card-body");

  // Recalcule le prix total à partir de la quantité des produits encore présents
  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".list-products > .card-body").forEach((card) => {
      const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
      const quantity = parseInt(card.querySelector(".quantity").textContent, 10);
      total += unitPrice * quantity;
    });

    totalEl.textContent = `${total} $`;
  }

  // Branche les évènements sur chaque produit
  productCards.forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantityEl = card.querySelector(".quantity");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");

    // "+" : augmente la quantité
    plusBtn.addEventListener("click", () => {
      quantityEl.textContent = parseInt(quantityEl.textContent, 10) + 1;
      updateTotal();
    });

    // "-" : diminue la quantité sans descendre en dessous de 0
    minusBtn.addEventListener("click", () => {
      const quantity = parseInt(quantityEl.textContent, 10);
      if (quantity > 0) {
        quantityEl.textContent = quantity - 1;
        updateTotal();
      }
    });

    // Corbeille : retire le produit de la carte et du total
    deleteBtn.addEventListener("click", () => {
      card.remove();
      updateTotal();
    });

    // Coeur : ajoute/retire la classe "liked" (couleur gérée en CSS)
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("liked");
    });
  });

  updateTotal();
});
