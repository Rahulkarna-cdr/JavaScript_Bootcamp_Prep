// ### Only One

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```

// YOUR CODE BELOW
const onlyOne = (arg1,arg2,arg3)=> {
    if(arg1 && (!arg2 && !arg3)){
        return true;
    }
    else if(arg2 && (!arg1 && !arg3)){
        return true;
    }
    else if(arg3 && (!arg1 && !arg2)){
        return true;
    }
    else{
        return false;
    }
}

console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2))