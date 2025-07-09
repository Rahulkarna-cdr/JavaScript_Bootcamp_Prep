// ### Crazy Caps

// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```

// YOUR CODE BELOW
const crazyCaps = (sentence)=> {
    let result = '';
    for(let i=0;i<sentence.length;i++){
        if(i%2===0){
            result += sentence[i];
        }
        else{
            result +=sentence[i].toUpperCase();
        }
    }
    return result;

}

console.log(crazyCaps('fullstack is amazing!'));