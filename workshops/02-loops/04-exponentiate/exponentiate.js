// YOUR CODE BELOW
const exponentiate = (base,power)=> {
    let result =1;
    for(let i=0;i<power;i++){
        result *=base;
    }
return result;
}

console.log(exponentiate(2, 5) )