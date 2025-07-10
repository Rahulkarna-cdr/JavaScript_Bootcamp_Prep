// YOUR CODE BELOW
const makeGrid = (numRows,numColumns)=> {
    
    let result = []
    for(let i=0;i<numColumns;i++){
        let rows = []
        for(let j=1;j<=numRows;j++){
        rows.push(j);
    }
    result.push(rows)
}
return result;
}
console.log(makeGrid(3,4))
