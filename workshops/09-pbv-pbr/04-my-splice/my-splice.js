// ### My Splice

// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
// array method. However, mySplice should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method
// can actually take any number of values to add).

// Do not use .splice in your function.


// ```javascript
// let myArray = [1, 2, 3];

// mySplice(myArray, 1, 1, 'apples')) // => [2]

// console.log(myArray)    // [1,'apples', 3]
// ```

// YOUR CODE BELOW
const mySplice = (arr,startIdx=0,deleteCount,item)=>{
    const deletedItem = []
    const keptItem = []
    for(let i=0;i<startIdx;i++){
        keptItem.push(arr[i])
    }
    if(item !== undefined){
        keptItem.push(item)
    }

    for(let i=startIdx;i<startIdx+deleteCount;i++){
        deletedItem.push(arr[i])
    }

    for (let i = startIdx + deleteCount; i < arr.length; i++) {
        keptItem.push(arr[i]);
      }

      while (arr.length) {
        arr.pop();
      }

      for(let i=0;i<keptItem.length;i++){
        arr.push(keptItem[i])
      }

return deletedItem;
}
let myArray = [1, 2, 3];
console.log(mySplice(myArray, 1, 1, 'apples'))