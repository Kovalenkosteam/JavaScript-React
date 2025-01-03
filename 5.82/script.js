const persone={
    name:'alex',
    phone:'+7888888888',
    parents:{
        mom:'olga',
        dad:'mike'
    }
};

// console.log(JSON.stringify(persone))//конвертация в JSON
// console.log(JSON.parse(JSON.stringify(persone))); //из JSON в обычный объект

const clone= JSON.parse(JSON.stringify(persone));//глубокая копия объета
clone.parents.mom='Ann';
console.log(persone)
console.log(clone)