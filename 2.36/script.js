let str='some';
let strObj=new String(str);
console.log(typeof(str))
console.log(typeof(strObj))


console.dir([1,2,3]);
// ---------------------------------------
const soldier={
    health:400,
    armor:150,
    sayHello:function(){
        console.log('Hello')
    }
}

const john={
    health:100
}
console.log(john);
// john.__proto__=soldier; // старый форомат
Object.setPrototypeOf(john,soldier)
console.log(john)
console.log(john.armor)
john.sayHello()

const Bob=Object.create(soldier);
Bob.sayHello();
