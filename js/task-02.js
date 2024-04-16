const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  // Selectăm lista ul#ingredients
const ulIngredients = document.getElementById("ingredients");

// Iterăm prin fiecare ingredient din matrice
ingredients.forEach(ingredient => {
  // Creăm un element <li>
  const li = document.createElement("li");
  // Adăugăm numele ingredientului ca text în elementul <li>
  li.textContent = ingredient;
  // Adăugăm clasa "item" la elementul <li>
  li.classList.add("item");
  // Inserăm elementul <li> în lista ul#ingredients
  ulIngredients.appendChild(li);
});

