// console.log('запрос данных...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });
// req.then((product) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             product.status = 'order';
//             // resolve(product);
//             reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify=true;
//     return data;
// }).then(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log('этот код делается в любом случае')
// })
// .catch(()=>{
//     console.error('Произошла ошибка')
// })

// then-выполняется после успешного промисв
// catch пропускает then и выполняет код, если есть ошибка
// finaly выполняется в любом случае





const test=time=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),time)
    })
}

test(1000).then(()=>console.log('1000 ms'));
test(3000).then(()=>console.log('3000 ms'));


// Promise.all([test(1000),test(3000)]).then(()=>{console.log('выполняется только после того как выполнится 1000 и 3000')});


Promise.race([test(1000),test(3000)]).then(()=>{console.log('выполняется только после того как выполнится один из промисов')});