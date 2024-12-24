const arr = ['alex', 'anna', 'bob', 'robert', 'anna'];
const set = new Set(arr);

set.add('ivan')
set.add('bob')



// set.delete(value);
// set.has(value)
// set.clear();
// set.size
// console.log(set);

// for (let value of set) console.log(value)


// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain, set)
// })

// console.log(set.values());

// console.log(set.keys())

// console.log(set.entries())


function unique(arr){
    return Array.from(new Set(arr))
}
console.log(unique(arr));