// YOUR CODE BELOW
const mySlice = (originalString,startIdx, endIdx)=> {
    debugger;
    let result = ''
    if(startIdx===undefined && endIdx === undefined){
        return originalString;
    }
     
    if(endIdx === undefined){
        for(let i=startIdx;i<originalString.length;i++){
            result += originalString[i]
        }
    }

    for(let i=startIdx; i<endIdx; i++){
        result += originalString[i]
    }

    return result;

}

console.log(mySlice('slice and dice', 2));
console.log(mySlice('slice and dice', 2, 5) )
console.log(mySlice('slice and dice'))