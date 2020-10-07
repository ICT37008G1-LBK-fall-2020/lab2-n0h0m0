
	for( let j=2; j <=20; j++){
		//j -> x
		var isPrime = true;

		for(var i=2;i<j;i++){
			if(j%i==0){
				isPrime = false;
			}
		}

		if(isPrime){
			alert(j);
		}
	}