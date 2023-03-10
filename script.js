// window.onload;

const buttons = document.querySelectorAll("button");
const visor = document.querySelector(".visor");

buttons.forEach((element) => {
  element.addEventListener("click", adicionaNumero);
});

function adicionaNumero() {
  let numero = this.innerText;
}
