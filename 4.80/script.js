const log=function(a,b, ...rest){
    console.log(a,b,rest);
}
log('basic','rest','oper','useer');


function calcOrDouble(number,basis=2){
    console.log(number*basis)
}

calcOrDouble(3);