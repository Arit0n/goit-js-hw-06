const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingEl = document.querySelector("#ingredients");
const array = [];
ingredients.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add(".item");
  array.push(liEl);
});
ingEl.append(...array);
