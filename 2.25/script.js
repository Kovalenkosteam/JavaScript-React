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
// ----------------------------------

const usdCurr=100;
const eurCurr=110;
function convert(amount, curr){
    let convertSum=amount*curr;
    return convertSum;
}

console.log(convert(30,usdCurr));
console.log(convert(4,eurCurr));
// -----------------------------
function test(){
    for(let i=0;i<5;i++){
        console.log(i);
        // if(i===3) return
    }
    console.log('done');
}
test();