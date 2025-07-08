// YOUR CODE BELOW
const everyWhichWay = (firstNum,secondNum,thirdNum)=> {
    if(firstNum+secondNum === thirdNum){
        return 'sum'
    }
    else if(firstNum-secondNum === thirdNum){
        return 'difference'
    }
    else if(firstNum*secondNum === thirdNum){
        return 'product'
    }
    else if(firstNum/secondNum === thirdNum){
        return 'fraction'
    }
    else{
        return null
    }
}

console.log(everyWhichWay(10, 20, 30));
