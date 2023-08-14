function numberOfVowels(word){
    let vowels = ["a","e","i","o","u"];
    let n = 0;
    for (letter of word.split("")){
        if (vowels.includes(letter)){
            n++;
        }
    }
    return n;
}

// console.log(numberOfVowels("vowels"));

function divisibleByTen(n){
    if(n%10 === 0){
        return true;
    }
    return false;
}

// console.log(divisibleByTen(9));

function removeSpacesFromString(word){
    let spacelessWord = "";
    for (letter of word.split("")){
        if (letter !== " "){
            spacelessWord += letter;
        }
    }
    return spacelessWord
}

// console.log(removeSpacesFromString("fi sh"));

function noNegativeNumbers(array){
    let newArray = []
    for (number of array){
        if (number >= 0){
            newArray.push(number);
        }
    }
    return newArray;
}

// console.log(noNegativeNumbers([0,1,2,-1,-3]))

function sortArrayLowToHigh(array){
    let sortedArray = []
    let length = array.length;
    let low;
    while (sortedArray.length != length){
        low = array[0];
        for (number of array){
            if(number < low){
                low = number;
            }
        }
        sortedArray.push(low);
        array.splice(array.indexOf(low),1)
    }
    return sortedArray;
}

// console.log(sortArrayLowToHigh([11,5,12,3]))

function reverseArray(array){
    return array.reverse();
}

function reverseArrayAlt(array){
    let newArray = []
    let i = array.length-1;
    while (i >= 0){
        newArray.push(array[i]);
        i--;
    }
    return newArray;
}

// console.log(reverseArrayAlt([3,6,9]))