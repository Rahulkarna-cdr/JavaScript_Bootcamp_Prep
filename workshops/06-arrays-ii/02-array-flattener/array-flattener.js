// ### Array Flattener

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```

// YOUR CODE BELOW
const arrayFlattener = (arr)=> {
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let j=0;j<arr[i].length;j++){
                newArr.push(arr[i][j])
            }
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(arrayFlattener([1,[2, 3], 4]))