// YOUR CODE BELOW
const crazyCaps = (sentence)=> {
    let result = '';
    for(let i=0;i<sentence.length;i++){
        if(i%2===0){
            result += sentence[i];
        }
        else{
            result +=sentence[i].toUpperCase();
        }
    }
    return result;

}

console.log(crazyCaps('fullstack is amazing!'));