const listEl = document.querySelectorAll(".item");
console.log("Number of categories:" + listEl.length);
listEl.forEach((list) => {
  const hEl = list.querySelector("h2");
  const liEl = list.querySelectorAll("li");
  console.log(`Category: ${hEl.innerHTML}`);
  console.log(`Elements: ${liEl.length}`);
});
