'use strict'
// function showTHis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this)
//         return a+b;
//     }
//     console.log(sum());
// }
// showTHis(4,5);




// const obj={
//     a:20,
//     b:15,
//     sum:function(){
//         function shout(){
//             console.log(this)
//         }
//         shout();
//     }
// }
// obj.sum();




// function User(name,id){
//     this.name=name;
//     this.id=id;
//     this.human=true;
//     this.hello=function(){
//         console.log(`Hello`+this.name)
//     }
// }
// let ivan=new User('ivan',23)




// function sayName(surname,asd){
//     console.log(this);
//     console.log(this.name+surname+asd);
// }
// const user={
//     name:'John',
// }
// sayName.call(user,' smith',' bob'); //заменить контекст вызова
// sayName.apply(user,[' smith',' bob']);
// function count(num){
//     return this*num;
// }
// const double=count.bind(2)
// console.log(double(3));

//обычная функция: this=window, но если use strict-undefined
//контекст вызова у методов объекта-сам объект
//this в конструкторах и классах-это новый экземпляр объектов
//ручная привязка this:call,apply,bind




const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log(this)
    this.style.backgroundColor = 'red'
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this)
        };
        say();
    }
}

obj.sayNumber(); //this=obj

const double = a => a * 2
console.log(double(4))