/*
Franco Barrio
Ejercicio 7
*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 + numero2

	mensaje= "La suma es " + resultado;
	
	alert(mensaje);	
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 - numero2;

	mensaje= "La resta es " + resultado;
	
	alert(mensaje);	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 * numero2

	mensaje= "La multiplicacion es  " + resultado;
	
	alert(mensaje);		
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 / numero2;

	mensaje= "La division es " + resultado;
	
	alert(mensaje);	
}

