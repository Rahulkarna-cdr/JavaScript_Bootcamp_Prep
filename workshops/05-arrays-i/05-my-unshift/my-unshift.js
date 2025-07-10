// YOUR CODE BELOW
const myUnshift  = (arr,val) => {
    let newArr = []
    newArr.push(val)
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i])
    }
return newArr;
}

console.log(myUnshift ([1, 2, 3], 0));