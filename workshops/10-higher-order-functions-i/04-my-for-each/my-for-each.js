// ### My For Each

// Write a function myForEach that accepts an array and a callback function. The
// behavior of myForEach should mirror the functionality of the native .forEach()
// array method as closely as possible

// ```javascript
// let sum = 0;

// function addToSum(num) {
//     sum += num;
// }

// let nums = [1, 2, 3];

// myForEach(nums, addToSum);

// console.log(sum); // 6
// ```

// YOUR CODE BELOW
const myForEach = (arr, addToSum ) => {
    for(let i=0;i<arr.length;i++){
        addToSum(arr[i],i)
    }    
}

let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3, 4];

myForEach(nums, addToSum);

console.log(sum);