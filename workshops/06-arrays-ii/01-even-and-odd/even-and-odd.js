// ### Even and Odd

// Define a function, `evenAndOdd`, that accepts an array.

// `evenAndOdd` should return a new array. The first element in the new array
// should be an array with all of the even numbers from the original array. The
// second element in the new array should be an array with all of the odd numbers
// from the original array.

// ```javascript
// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
// ```

// YOUR CODE BELOW
const evenAndOdd = (originalArr)=> {
    let oddArr = []
    let evenArr = []
    let mergedArr = []
    for(let i=0;i<originalArr.length;i++){
        if(originalArr[i]%2===0){
            evenArr.push(originalArr[i])
        }
        else{
            oddArr.push(originalArr[i])
        }
    }
    mergedArr.push(evenArr)
    mergedArr.push(oddArr)
    return mergedArr;
}
console.log(evenAndOdd([1,2,3,4,5,6]))