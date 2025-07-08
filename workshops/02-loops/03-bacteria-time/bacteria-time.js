// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {
    if(currentNum>targetNum){
        return "targetNum must be larger than currentNum";
    }
    let numOfMins=0;
    for(let i=currentNum;i<targetNum;i=i*2){
        numOfMins += 20;
    }
    return numOfMins;

}
console.log(bacteriaTime(3,6000))