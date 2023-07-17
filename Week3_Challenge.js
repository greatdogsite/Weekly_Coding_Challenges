function LongestWord(sen) { 
    let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    sen = sen.toLowerCase().split("");
    let longWord = "";
    let word = "";
     for( i in sen){
       if(letterArray.includes(sen[i])){
        word += sen[i];
        if (word.length > longWord.length){
          longWord = word;
        }
       }
      else{
        word = "";
      }
     }
    return longWord; 
  }
     
  // keep this function call here 
  let string = "I love dogs i4555."
  console.log(LongestWord(string));