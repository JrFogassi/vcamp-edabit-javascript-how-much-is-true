function countTrue(arr) {

	//Contador inicia-se no 0

	let contador = 0;
	
	//Verifica se o índice é true, se for, o contador é aumentado
	
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == true){
			contador ++;
		}
	}
	
	return contador;
}