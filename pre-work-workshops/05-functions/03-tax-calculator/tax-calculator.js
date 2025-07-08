// YOUR CODE BELOW
const taxCalculator = (price, state) => {
    let returnedValue;
    if(state ==="NY"){
        returnedValue = price + price *0.04;
    }
    else if(state ==='NJ'){
        returnedValue = price + price * 6.625/100;
    }

    return returnedValue;
}

console.log(taxCalculator(100, 'NY'));