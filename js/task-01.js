const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

const numberOfCategories = categoryItems.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach(item => {
  
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryElements = item.querySelectorAll('ul li');
  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
