// ### Zero Dark Thirty

// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `zeroDarkThirty` should return a number with all of the zeroes removed:

// ```javascript
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// zeroDarkThirty(0) // => NaN
// ```

// YOUR CODE BELOW
const zeroDarkThirty = (arg) => {
    const strArg = String(arg);
    let result =''
    if(strArg[0]=== '0'){
        return NaN;
    }

        for(let i=0;i<strArg.length;i++){
            if(strArg[i]!=='0'){
                result += strArg[i]
            }
        }
    
    return Number(result);
}

console.log(zeroDarkThirty(102302));
