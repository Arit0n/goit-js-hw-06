let counterValue = 0;

const counter = document.querySelector("#value");
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

plusBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
