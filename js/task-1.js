const allCategories = document.querySelector("#categories");
const categories = allCategories.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}, Items: ${categoryItems}`);
  });