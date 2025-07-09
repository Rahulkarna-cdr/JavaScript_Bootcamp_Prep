// ### Most Vowels

// Define a function, `mostVowels`, that accepts one argument, a string of words.

// `mostVowels` should return the word that has the most vowels.

// ```javascript
// mostVowels('I am a keeper with some real rhythms'); // => keeper
// ```

// If none of the words have any vowels, return an empty string.

// ```javascript
// mostVowels('try my gym'); // => ''
// ```

// YOUR CODE BELOW
const mostVowels = (sentence) => {
    debugger;
    const words = sentence.split(' ')
    const vowels = 'aeiouAEIOU';
    let maxVowels = 0;
    let maxVowelWord = '';

    for(let i=0;i<words.length;i++){
        let currentWord = words[i];
        let currentVowelCount = 0;
        for(let j=0; j<currentWord.length; j++){
            if(vowels.includes(currentWord[j])){
                currentVowelCount++
            }
        }
        if(currentVowelCount>maxVowels){
            maxVowels=currentVowelCount;
            maxVowelWord = currentWord;
        }
    }
    return maxVowelWord;

}

console.log(mostVowels('I am a keeper with some real rhythms'))

