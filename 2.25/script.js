function showFirstMessage(text){
    console.log(text);
}
showFirstMessage('hui2');



function calc(a,b){
    return (a+b);
}
console.log(calc(4,3));
// ----------------
// function declaration
function ret(){
    let num=50;
    return num;
}
console.log(ret());
// ---------------
// function expression
const logger=function(){
    console.log('hi');
};

logger();

// -----------------
стрелочная функция
const calcul=(a,b)=>a+b;
const calcul=(a,b)=>{return a+b};