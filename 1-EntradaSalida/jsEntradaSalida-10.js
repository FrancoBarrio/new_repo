/*
Franco Barrio
Ejercicio 10
*/
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numero1;
	let numero2;
	let numero3;

	numero1 = parseInt(document.getElementById("txtIdImporte").value);

	numero2 = numero1 * 0.25;

	numero3 = numero1 - numero2;

	document.getElementById("txtIdResultado").value = numero3;
}
