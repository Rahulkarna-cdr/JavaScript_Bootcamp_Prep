// YOUR CODE BELOW
const myMnemonic = (...str)=> {
    let outputStr ='';
    for(let i=0;i<str.length;i++){
        let currentWord = str[i];
        let currentChar = currentWord[0];

        outputStr +=currentChar;
    }
return outputStr;
}

console.log(myMnemonic('We', 'Eat', 'Eggs'));