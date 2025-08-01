// ### Remove Columns

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */
// ```

// YOUR CODE BELOW
const removeColumns = (originalGrid, numColumns) => {
    let newArr = []
    for(let i=0;i<originalGrid.length;i++){
        for(let j=0;j<numColumns;j++){
            originalGrid[i].pop()
        }
    }
    return originalGrid;

}

console.log(removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2))