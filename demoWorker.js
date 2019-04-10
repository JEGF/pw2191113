var i = 0;

function cuenta() {
	i= i+1;
	//Envia respuesta al Worker que lo
	//manda llamar
	postMessage(i);
	//Ejecutamos cuenta() cada 500
	// milisegundos
	setTimeout("cuenta()",500);
}
cuenta();