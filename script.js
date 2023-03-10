window.onload = function () {
  function initCalc() {
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

    function addOprtr(event) {
      if (event.currentTarget.innerText === "x") {
        atualizaVisor("*");
      } else if (event.currentTarget.innerText === "÷") {
        atualizaVisor("/");
      } else {
        atualizaVisor(event.currentTarget.innerText);
      }
    }

    function realizarOperacao() {
      atual.innerText = eval(atual.innerText);
    }

    function limpaVisor() {
      atual.innerText = "";
    }

    function delUltimoValor() {
      atual.innerText = atual.innerText.substring(
        0,
        atual.innerText.length - 1
      );
    }

    function atualizaVisor(valor) {
      atual.innerText += valor;
    }

    btnNum.forEach((numero) => {
      numero.addEventListener("click", addNum);
    });

    btnOperador.forEach((operador) => {
      operador.addEventListener("click", addOprtr);
    });

    btnClear.addEventListener("click", limpaVisor);

    btnDelete.addEventListener("click", delUltimoValor);

    btnIgual.addEventListener("click", realizarOperacao);
  }

  initCalc();
};
