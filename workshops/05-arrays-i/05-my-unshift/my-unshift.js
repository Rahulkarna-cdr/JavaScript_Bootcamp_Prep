// ### My Unshift

// Write a function `unShift` that takes an array and a value of any type as arguments.

// `unShift` should return a new array, with the given value as the first element
// in the new array.

// ```javascript
// unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
// ```

// Do not use the built-in .shift method for this problem!

// YOUR CODE BELOW
const myUnshift  = (arr,val) => {
    let newArr = []
    newArr.push(val)
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i])
    }
return newArr;
}

console.log(myUnshift ([1, 2, 3], 0));