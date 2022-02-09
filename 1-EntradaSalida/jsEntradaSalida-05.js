/*
Franco Barrio
Ejercicio 5
*/
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

let nombreIngresado;
let	edadIngresada;
let mensaje;


nombreIngresado = document.getElementById("elNombre").value;
edadIngresada = document.getElementById("laEdad").value;


mensaje = "usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años";




	alert(mensaje);
 


}

