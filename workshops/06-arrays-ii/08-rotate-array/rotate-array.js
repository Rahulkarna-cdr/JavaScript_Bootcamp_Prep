// YOUR CODE BELOW
const rotateArray = (originalArray,rotateNum) => {
    let result = []
    for(let i=0;i<originalArray.length;i++){
        result[i] = originalArray[(originalArray.length-rotateNum+i)%originalArray.length]
    }
return result;
}