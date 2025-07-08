// YOUR CODE BELOW
const onlyOdds = (num)=> {
    let sum =0;
    if(num<1){
        return 0
    }
    else
    {
        for(let i=0;i<num;i++){
            if(i%2!==0){
                sum+=i;
            }
        }

    }
    return sum;
}

console.log(onlyOdds(6));