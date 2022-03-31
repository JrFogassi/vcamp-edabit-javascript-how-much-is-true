function countTrue(arr) {
	let contador = 0;
	
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == true){
			contador ++;
		}
	}
	
	return contador;
}