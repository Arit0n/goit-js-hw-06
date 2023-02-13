const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", eventInput);

function eventInput() {
  if (refs.input.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  } else {
    refs.nameLabel.textContent = refs.input.value;
  }
}
console.log(refs.input);
