/*
Franco Barrio
Ejercicio 6
*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;
    let mensaje;
    
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 + numero2;
    
	mensaje = "El resultado es " + (resultado);
	
	alert(mensaje);
}

