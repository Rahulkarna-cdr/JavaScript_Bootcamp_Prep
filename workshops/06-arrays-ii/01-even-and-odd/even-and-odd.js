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