'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    age: 25,
    city: 'New York',
    showPublicData: function () {
        console.log(`${this.name} ${this.surname}, ${this.age} years old, from ${this.city}`)
    }
}
// user.showPublicData();

// for(let key in user){
//     console.log(user[key])
// }



// const str='string'
// for(let key in str){
//     console.log(str[key])
// }


// const arr=['b','a','c']
// for(let key in arr){
//     console.log(arr[key])
// }

// const arr2=['b','a','c']
// for(let key of arr2){
//     console.log(key)
// }

const salaries = {
    john: 500,
    bob: 2000,
    ann: 5000,
    sayHello: function () {
        console.log('hi');
    }
}

salaries[Symbol.iterator] = function () {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current += 500;
                return { done: false, value: this.current }
            } else {
                return { done: true }
            }

        }
    }
}

const iterator=salaries[Symbol.iterator]();
console.log(iterator.next());
// for(let res of salaries){
//     console.log(res)
// }