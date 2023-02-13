const input = document.querySelector("input#font-size-control");
const fontSpan = document.querySelector("span#text");
fontSpan.style.fontSize = `${input.value}px`;
input.addEventListener("input", (e) => {
  fontSpan.style.fontSize = `${e.target.value}px`;
});
