// YOUR CODE BELOW
const mySlice = (originalArray,startIdx,endIdx)=> {
    let result = []
    if(startIdx ===undefined){
        return originalArray;
    }
    if(startIdx<0){
        startIdx = originalArray.length + startIdx;
    }

    if(endIdx<0){
        endIdx = originalArray.length + endIdx;
    }

    if(startIdx && !endIdx){
        for(let i= startIdx; i<originalArray.length;i++){
            result.push(originalArray[i])
        }
    }

    for(let i=startIdx;i<endIdx;i++){
        result.push(originalArray[i])
    }

    return result;
}

console.log(mySlice([1, 2, 3], 1, 2))
console.log(mySlice([1, 2, 3]) );
console.log(mySlice([1, 2, 3], 1))
console.log(mySlice([1, 2, 3], -1))