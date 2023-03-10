// window.onload;

const btnNum = document.querySelectorAll(".btn-num");
const btnOperador = document.querySelectorAll(".btn-operador");
const btnClear = document.querySelector(".btn-clear");
const btnDelete = document.querySelector(".btn-delete");
const btnIgual = document.querySelector(".btn-igual");
const anterior = document.querySelector(".anterior");
const atual = document.querySelector(".atual");

function addNum(event) {
  atualizaVisor(event.currentTarget.innerText);
}

function limpaVisor() {
  atual.innerText = "";
}

function atualizaVisor(valor) {
  atual.innerText += valor;
}
btnNum.forEach((numero) => {
  numero.addEventListener("click", addNum);
});

btnClear.addEventListener("click", limpaVisor);
