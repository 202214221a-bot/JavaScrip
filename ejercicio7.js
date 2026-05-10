let precio = 100;

let descuento = 20;

let descuentoTotal = precio * descuento / 100;

let precioFinal = precio - descuentoTotal;

document.getElementById("resultado").innerHTML =
"Precio final: S/ " + precioFinal;