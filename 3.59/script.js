const user = {
    name: 'Alex',
    surname: 'Smith',
    age: 25,
    city: 'New York',
    showPublicData: function () {
        console.log(`${this.name} ${this.surname}, ${this.age} years old, from ${this.city}`)
    }
}
const userMap=new Map(Object.entries(user));
console.log(userMap);
const newUserObject=Object.fromEntries(userMap);
console.log(newUserObject)

const budget = [5000, 15000, 20000]
const shops = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 }
]
// const map = new Map();
const map = new Map([
    [{ paper: 400 }, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

// map.set(shops[0], 5000);
// map.set(shops[1], 3000);
// map.set(shops[2], 4000);
// console.log(map)
// console.log(map.get(shops[0]))
// console.log(map.has(shops[1]))

// map.delete(key)
// map.clear()
// map.size



// map.keys();
// let goods=[];
// for (let shop of map.keys()) {
//     // console.log(shop)
//     goods.push(Object.keys(shop))
// }
// console.log(goods)



// for(let price of map.values()){
//     console.log(price)
// }


// for (let price of map.entries()) {
//     console.log(price)
// }


// for (let [shop, price] of map.entries()) {
//     console.log(shop,price)
// }


// map.forEach((value,key,map)=>{
//     console.log(value,key)
// })