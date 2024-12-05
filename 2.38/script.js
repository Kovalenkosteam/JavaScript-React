function sayHello(){
    console.log('hello world');
}
sayHello();


function hi(){
    console.log('Sau Hi');
}

hi();

const arr = [1,14,4,30,54]
const sorted=arr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}

console.log(sorted);