let a=5;
let b=a;
b+=5;
console.log(b)
console.log(a)

const obj={
    a:5,
    b:1
}
const copy2=obj;//копирует ссылку на объек, а не новый
copy.a=10
console.log(copy2);
console.log(obj);

// ----------------------------------------

function copy(main){
    let objCopy={};
    let key;
    for(key in main){
        objCopy[key]=main[key]
    }
    return objCopy;
}

const numbers={
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    },
    d:8
}
const newNumbers=copy(numbers);
console.log(newNumbers)
newNumbers.a=10;
console.log(newNumbers)
// ---------------------------------------------

const add={
    f:17,
    g:20
}
console.log(Object.assign(numbers,add))

const clone=Object.assign({},add);
clone.f=45;
console.log(add);
console.log(clone);
// ------------------------------------------

const oldArr=['a','b','c'];
const newArr=oldArr.slice();
newArr[1]='m'
console.log(oldArr);
console.log(newArr)

// --------------------------------------------

const video=['youtube','vimeo','rutube'];
const blogs=['worldpress','livejournal','blogger'];
const internet=[];
internet.push(...video,...blogs,'vk');
console.log(internet);

// --------------------------------------------

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num=[2,5,7];
log(...num);

// --------------------------------------------
const array=['a','b'];
const newArray=[...array]
newArray[1]='n';
console.log(array);
console.log(newArray)
const q={
    one:1,
    two:2
}
const newObj={...q};
newObj.one=4;
console.log(q);
console.log(newObj)