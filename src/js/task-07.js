const input = document.querySelector("#font-size-control");
const fontSpan = document.querySelector("#text");

input.addEventListener("input", rangeValue);

function rangeValue(event) {
  fontSpan.style.fontSize = `${event.currentTarget.value}px`;
}
