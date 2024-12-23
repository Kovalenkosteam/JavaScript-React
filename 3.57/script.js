'use strict'
const user = {
    name: 'Alex',
    surname: "Smith",
    // birthday: '20/04/1993',
    showPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'birthday', { value: prompt('date?'), enumerable: true, configurable: true });
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
Object.defineProperty(user, 'showPublicData', { enumerable: false });

for (let key in user) {
    console.log(key)
}

Object.defineProperties(user, {
    name: { writable: true, enumerable: true },
    surname: { writable: true, enumerable: true },
    showPublicData: { writable: true, enumerable: false }
});

// Object.defineProperty(user,'name',{writable:false});
// Object.defineProperty(user,'gender',{value:'male'});
// user.name='Bob'
// console.log(user);




//wtitable
//enumerable
//configurable