function addUp(num) {
    let sum = 0;
    let count = 1;
    while(num > 0){
        sum += count
        count +=1
        num -= 1;
    }
    return sum;	
}

console.log(addUp(5));