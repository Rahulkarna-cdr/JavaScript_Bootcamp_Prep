// YOUR CODE BELOW
const howEqual = (arg1,arg2) => {
    debugger;
    if(arg1 == arg2 && typeof(arg1)!=typeof(arg2)){
        return 'loosely';
    }
    else if(arg1 == arg2 && typeof(arg1)==typeof(arg2)){
        return 'strictly';
    }
    else{
        return 'not equal'
    }

}


