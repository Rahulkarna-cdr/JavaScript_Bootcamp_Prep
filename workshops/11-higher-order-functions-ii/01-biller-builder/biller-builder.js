// ### Biller Builder

// Write a function billerBuilder that takes the name of a state as a parameter.
// billerBuilder should return a new function that takes the price of an item and
// returns the correct final price of the item, given the following:
//   - if NY, charge 3% for shipping and 4% for sales tax
//   - if NJ, charge 5% for shipping and 6.625% for sales tax

// ```javascript
// let newYorkBiller = biller('NY');
// newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04)

// let newJersBiller = biller('NJ');
// newJersBiller(100) // => 111.95625 (100 * 1.05 * 1.06625)
// ```

// YOUR CODE BELOW
function billerBuilder(state) {
    if(state === 'NY' ){
        return function(num){  //When you don’t have the value right now, but you want to create a function that can receive that value later and do something with it, you return a function that takes that value as a parameter.
        return newYorkBiller(num);
        }
    }
    else if(state === 'NJ'){
        return function(num){
            return newJersBiller(num);
        }
    }    
}

function newYorkBiller(num) {
    let finalPrice = num * 1.03 * 1.04;
    return finalPrice;
    
}

 function newJersBiller(num) {
    let finalPrice = num *1.05*1.06625;
    return finalPrice;
}

let newYorkBill = billerBuilder('NY');
newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04)

let newJersBill = billerBuilder('NJ');
newJersBiller(100) // => 111.95625 (100 * 1.05 * 1.06625)