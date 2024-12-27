'use strict'

// let user={
//     name:'john'
// }
// let map= new WeakMap();
// map.set(user,'data')

// user =null;
// console.log(map);


let cache= new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let john={name:'john'}
let ann={name:'ann'}

cacheUser(john);
cacheUser(ann);

ann=null;

console.log(cache.has(ann));
console.log(cache.has(john));

// WeakSet
//add,has,delete

let messages=[
    {text:'hello',from:'John'},
    {text:'world',from:'Alex'},
    {text:'...',from:'M'}
];

let readMessages= new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);
readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));

