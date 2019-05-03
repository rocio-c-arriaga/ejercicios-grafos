//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arr) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arr.length; i++) {
		imprime += "<tr><td>" + arr[i].numHabitacion + "</td><td>" + arr[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

//stub
function ordenaPorHabitacion(arreglo) {
	//En esta función escribe la función que ordenará el arreglo por habitación
}

function ordenaPorHuesped(arreglo) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped
}


registro.sort (function (arr[i].numHabitacion, arr[i].numHuesped)//high order function funcione predefindas a evaluar
	



