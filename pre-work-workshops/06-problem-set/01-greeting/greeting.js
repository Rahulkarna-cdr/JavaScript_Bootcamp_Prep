// YOUR CODE BELOW
const greeting = (fname)=>{
    if(fname===undefined){
        return "Hello!"
    }
    else{
        return `Hello ${fname}!`
    }
}

console.log(greeting())