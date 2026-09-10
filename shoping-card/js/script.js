// =====================================================
// SHOPPING CART - script.js
// =====================================================
document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------------------------------
  // Références aux éléments globaux (header + modals)
  // ---------------------------------------------------
  const totalPriceEl = document.querySelector(".total");
  const shoppingCountEl = document.querySelector(".shopping-count");
  const favoritesCountEl = document.querySelector(".favorites-count");
  const cartModalList = document.querySelector("#cartModal .list-group");
  const cartModalTotal = document.querySelector("#cartModal .modal-total");
  const favoritesModalList = document.querySelector("#favoritesModal .list-group");

  function getProductCards() {
    return document.querySelectorAll(".list-products > .card-body");
  }

  // ---------------------------------------------------
  // Recalcule le prix total + remplit le modal "panier"
  // ---------------------------------------------------
  function updateCart() {
    let total = 0;
    let itemCount = 0;
    cartModalList.innerHTML = "";

    getProductCards().forEach((card) => {
      const name = card.querySelector(".card-title").textContent.trim();
      const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
      const quantityEl = card.querySelector(".quantity");
      const quantity = parseInt(quantityEl.textContent, 10);

      total += unitPrice * quantity;

      if (quantity > 0) {
        itemCount++;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const infoSpan = document.createElement("span");
        infoSpan.innerHTML = `${name} <span class="text-muted">x ${quantity}</span> — ${unitPrice * quantity} $`;

        const removeBtn = document.createElement("i");
        removeBtn.className = "fas fa-trash-alt remove-item";
        removeBtn.title = "Retirer du panier";
        removeBtn.addEventListener("click", () => {
          quantityEl.textContent = "0";
          updateCart();
        });

        li.appendChild(infoSpan);
        li.appendChild(removeBtn);
        cartModalList.appendChild(li);
      }
    });

    if (itemCount === 0) {
      cartModalList.innerHTML = '<li class="list-group-item text-muted">Votre panier est vide</li>';
    }

    totalPriceEl.textContent = `${total} $`;
    cartModalTotal.textContent = `Total : ${total} $`;
    shoppingCountEl.textContent = itemCount;
  }

  // ---------------------------------------------------
  // Remplit le modal "favoris"
  // ---------------------------------------------------
  function updateFavorites() {
    favoritesModalList.innerHTML = "";
    let favCount = 0;

    getProductCards().forEach((card) => {
      const heart = card.querySelector(".fa-heart");
      if (heart.classList.contains("liked")) {
        favCount++;
        const name = card.querySelector(".card-title").textContent.trim();

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = name;

        const removeBtn = document.createElement("i");
        removeBtn.className = "fas fa-trash-alt remove-item";
        removeBtn.title = "Retirer des favoris";
        removeBtn.addEventListener("click", () => {
          heart.classList.remove("liked");
          updateFavorites();
        });

        li.appendChild(nameSpan);
        li.appendChild(removeBtn);
        favoritesModalList.appendChild(li);
      }
    });

    if (favCount === 0) {
      favoritesModalList.innerHTML = '<li class="list-group-item text-muted">Aucun favori pour le moment</li>';
    }

    favoritesCountEl.textContent = favCount;
  }

  // ---------------------------------------------------
  // Branche les évènements sur chaque produit
  // ---------------------------------------------------
  getProductCards().forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantityEl = card.querySelector(".quantity");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");

    plusBtn.addEventListener("click", () => {
      quantityEl.textContent = parseInt(quantityEl.textContent, 10) + 1;
      updateCart();
    });

    minusBtn.addEventListener("click", () => {
      const qty = parseInt(quantityEl.textContent, 10);
      if (qty > 0) {
        quantityEl.textContent = qty - 1;
        updateCart();
      }
    });

    deleteBtn.addEventListener("click", () => {
      quantityEl.textContent = "0";
      updateCart();
    });

    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("liked");
      updateFavorites();
    });
  });

  // ---------------------------------------------------
  // Etat initial au chargement de la page
  // ---------------------------------------------------
  updateCart();
  updateFavorites();
});
