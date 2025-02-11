import sumar from "./sumador";
import multiplicar from "./multiplicador";

const firstSumar = document.querySelector("#primer-numero-Suma");
const secondSumar = document.querySelector("#segundo-numero-Suma");
const firstMultiplicar = document.querySelector("#primer-numero-Multiplica");
const secondMultiplicar = document.querySelector("#segundo-numero-Multiplica");
const Sumarform = document.querySelector("#sumar-form");
const Multiplicarform = document.querySelector("#multiplicar-form");
const resultadodiv = document.querySelector("#resultado-div");
const resultado2div =document.querySelector("#resultado2-div");

Sumarform.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberSuma = Number.parseInt(firstSumar.value);
  const secondNumberSuma = Number.parseInt(secondSumar.value);

  resultadodiv.innerHTML = "<p>" + sumar(firstNumberSuma, secondNumberSuma) + "</p>"

});

Multiplicarform.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberMultiplica = Number.parseInt(firstMultiplicar.value);
  const secondNumberMultiplica = Number.parseInt(secondMultiplicar.value);

  resultado2div.innerHTML = "<p>" + multiplicar(firstNumberMultiplica, secondNumberMultiplica) + "</p>"

});


