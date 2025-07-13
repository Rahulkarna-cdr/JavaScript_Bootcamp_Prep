// YOUR CODE BELOW
const cacheSavings = (callback) => {

    let cache = {}

    return function(arg){

    if(!(arg in cache)){
        let callbackResult = callback(arg);
        cache[arg] = callbackResult;
    }

    return cache[arg];
    }

}