// ### Reverse Array

// Write a function that accepts an array and reverses that array in place. The
// behavior should mimic the behavior of the native .reverse() array method.
// However, your reverse function should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

// ```javascript
// let myArray = [1, 2, 3, 4];
// reverse(myArray);
// console.log(myArray) // [4, 3, 2, 1]
// ```

// YOUR CODE BELOW

const reverseArray = (arr)=>{
    const dummyArray = [];
    for(let i=arr.length-1;i>=0;i--){
        dummyArray.push(arr[i])
    }

    while(arr.length !=0){
        arr.pop();
    }

    for(let i=0; i<dummyArray.length; i++){
        arr.push(dummyArray[i])
    }

// return arr.splice(0,(arr.length)/2)
    return arr;
}
// let myArray = [1, 2, 3, 4];
// console.log(reverseArray(myArray))
// console.log(myArray)