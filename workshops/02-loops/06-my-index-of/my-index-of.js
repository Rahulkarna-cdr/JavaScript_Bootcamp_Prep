// YOUR CODE BELOW
const myIndexOf = (source,searchValue,startIdx) => {
    debugger;
    if(startIdx===undefined){
        startIdx =0
    }

        for(let i=startIdx;i<=source.length-searchValue.length;i++){
          let trimmedStr = source.slice(i,searchValue.length+i);
          
            if(trimmedStr === searchValue){
                return i;
            }
        }  

return -1;
}     


console.log(myIndexOf('hello','l'))
console.log(myIndexOf('twice twice', 'ice'));
console.log(myIndexOf('twice twice', 'ice', 5))
console.log(myIndexOf('happy string', 'sad'));