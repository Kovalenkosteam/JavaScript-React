// console.log(Number.MAX_SAFE_INTEGER);
// const bigInt=23473574594325733333335000000064395n;
// const safeBigInt= BigInt(23473574594325733333335000000064);
// console.log(typeof(bigInt),typeof(safeBigInt));
// console.log(bigInt/safeBigInt) //округляет


let bigInt=1n;
let number=2;
console.log(bigInt+BigInt(number));
console.log(Number(bigInt)+number)