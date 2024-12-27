// const now = new Date();
// console.log(now)

// const now = new Date('2024-12-27');
// console.log(now)

// const now = new Date(2024,1,15,5);
// console.log(now)

// const now = new Date(8846547461312);
// console.log(now)

const now = new Date();

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getDay())//получение дня недели воскресенье 0
// console.log(now.getUTCHours())
// console.log(now.getTimezoneOffset())// разница в минутах между UTC
// console.log(now.getTime()) // милисекунды


// console.log(now.setHours(18));
// console.log(now)

let start = new Date();

for (let i = 0; i< 10000000; i++) {
    let some = i**3
}
let end= new Date();

console.log('Execution time: ', end - start, 'ms');