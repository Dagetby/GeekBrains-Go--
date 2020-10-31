'use strict';



function mathOperation(arg1, arg2,  operation) {
    switch(operation) {
        case "sum":
            alert(sum(arg1,arg2))
            break;
        case "div":
            alert(div(arg1,arg2))
            break;
        case "mult":
            alert(mult(arg1,arg2))
            break;
        case "sub":
            alert(sub(arg1,arg2))
            break;
        default:
            alert("Not found Type")
    }
}

function sum(arg1, arg2) {
    return arg1 + arg2;
}
function div(arg1, arg2) {
    return arg1 / arg2;
}
function mult(arg1, arg2) {
    return arg1 * arg2;
}
function sub(arg1, arg2) {
    return arg1 - arg2;
}


mathOperation(1,2,"sum")
mathOperation(1,2,"div")
mathOperation(1,2,"sub")
mathOperation(1,2,"mult")
mathOperation(1,2,"adas")
