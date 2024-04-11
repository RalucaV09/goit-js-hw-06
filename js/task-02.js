const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredients) => {
  // Creăm un element <li>
  const listItem = document.createElement("li");

  listItem.textContent = ingredients;

  listItem.classList.add("item");

  ingredientsList.appendChild(listItem);
});
