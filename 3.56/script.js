// let id = Symbol('id');
// const obj = {
//     'name': 'Test',
//     age: 25,
//     [id]:1,
//     getId:function(){
//         return this[id];
//     }
// }

// // let id = Symbol('id');
// // obj[id]=1;
// console.log(obj)
// console.log(Object.getOwnPropertySymbols(obj))
// for( let value in obj)console.log(value)







const myDB={
    movies:[],
    actors:[],
    [Symbol('id')]:123,
    [Symbol.for('id2')]:1233
}

myDB.id='1231231231231';
console.log(myDB)
console.log(myDB['id'])
console.log(myDB[Symbol.for('id2')])