// ### Deeper Copy

// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
// dimensional array.

// ```javascript
// let myArray = [1, [2, 3]];

// let copy = deeperCopy(myArray);
// copy[1].push(4);

// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray); // [1, [2, 3, 4]]
// ```

//YOUR CODE BELOW
const deeperCopy = (arr)=> {
    const newArr = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let innerArr = []
            for(let j=0;j<arr[i].length;j++){
                innerArr.push(arr[i][j])
            }
            newArr.push(innerArr)
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr;

}
// let myArray = [1, [2, 3]];

// let copy = deeperCopy(myArray);
// copy[1].push(4);

// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray);

