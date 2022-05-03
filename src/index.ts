let valorIngresado: number = document.getElementById("valorGastado").value;
let buttonCheck = document.getElementById("buttonCheck");
let valorDescuento: number = 1000;
let valorFinal: number = 0;
buttonCheck.addEventListener("click", () => {
  if (valorIngresado.value > valorDescuento) {
    valorFinal = valorIngresado.value - valorIngresado.value * 0.1;
    console.log("El precio final es con descuento es ", valorFinal);
  } else {
    console.log("No se pudo realizar el descuento, monto minimo es de $1000");
  }
});
