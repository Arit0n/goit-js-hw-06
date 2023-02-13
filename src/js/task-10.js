function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  input: document.querySelector("input"),
  box: document.querySelector("#boxes"),
};
const createBox = (number) => {
  let arrayBox = [];
  if (number >= refs.input.min && number <= refs.input.max) {
    for (let i = 0; i <= number; i += 1) {
      const div = document.createElement("div");
      div.style.background = getRandomHexColor();
      div.style.width = `${30 + 10 * i}px`;
      div.style.height = `${30 + 10 * i}px`;
      arrayBox.push(div);
    }
  } else {
    alert("Введіть чило від 1 до 100");
  }
  return arrayBox;
};
const destroyBox = () => {
  refs.box.innerHTML = "";
  refs.input.value = "";
};

refs.buttonCreate.addEventListener("click", () => {
  let boxElements = createBox(refs.input.value);
  refs.box.append(...boxElements);
});
refs.buttonDestroy.addEventListener("click", () => {
  destroyBox();
});
console.log(refs.input.max);
