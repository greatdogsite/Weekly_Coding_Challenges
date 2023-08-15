function charCount(myChar, str) {
	let array = str.split("");
	sum = 0;
	for (let letter of array){
		if (letter === myChar){
			sum++;			
		}
	}
	return sum;
}

console.log(charCount("i", "I like fish"))