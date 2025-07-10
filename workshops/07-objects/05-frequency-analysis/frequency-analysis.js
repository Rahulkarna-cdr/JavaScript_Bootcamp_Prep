// ### Frequency Analysis

// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.

// ```javascript
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
// ```

//YOUR CODE BELOW

const frequencyAnalysis1 = (str)=> {
    const words = str.toLowerCase();
    let anObj = {}
      for(let i=0;i<str.length;i++){
        const key = words[i]
        let count =0;
            for(let j=0;j<str.length;j++){
                if(key === words[j]){
                    count++;
                }
            }
            anObj[key] = count;
      }

      return anObj;
}

const frequencyAnalysis =(str)=>{
    let anObj = {};
    for(let i=0; i<str.length; i++){
        // if(!anObj[str[i]]){
        //     anObj[str[i]] = 1;
        // }else{
        //     anObj[str[i]] += 1
        // }
        anObj[str[i]] = (anObj[str[i]] || 0) + 1

        
    }

    return anObj;
}

console.log(frequencyAnalysis('abca'))