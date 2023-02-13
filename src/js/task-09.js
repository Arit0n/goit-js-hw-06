const refs = {
  button: document.querySelector("button.change-color"),
  body: document.querySelector("body"),
  colorValue: document.querySelector("span.color"),
};
refs.button.addEventListener("click", getRandomHexColor);
function getRandomHexColor(event) {
  console.log(event);
  refs.body.style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  refs.colorValue.textContent = `${refs.body.style.background}`;
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
