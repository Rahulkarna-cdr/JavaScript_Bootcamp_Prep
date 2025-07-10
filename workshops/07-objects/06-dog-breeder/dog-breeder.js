// ### Frequency Analysis

// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.

// ```javascript
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
// ```

// YOUR CODE BELOW
const dogBreeder = (name='Steve',age) => {

    if(typeof name ==='number'){
        age=name;
        name= 'Steve'
    }

    let newObj ={
        'name' : name,
        'age' : age
    }
    return newObj;


}
console.log(dogBreeder('Sam',12))
console.log(dogBreeder(15));