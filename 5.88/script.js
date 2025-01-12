//filter:
const names=['IvAn','AnNN','Volandemart','Bob','John'];
console.log(names)
// const shortNames=names.filter(name=>name.length<5)
const shortNames=names.filter(function(name){
    return name.length<5
})
console.log(shortNames)


//map
const lowerCase=names.map(item=>item.toLowerCase())
console.log(lowerCase)

//every/some
const names2=['IvAn','AnNN','Volandemart','Bob','John',8];
console.log(names2.some(item=>typeof(item)==='number'))
console.log(names2.every(item=>typeof(item)==='number'))


//reduce
const arr=[4,5,1,8,4,2];

console.log(arr.reduce((sum,curr)=>sum+curr,0))
console.log(names.reduce((sum,curr)=>sum+', '+curr))




const obj={
    ivan:'persone',
    ann:'persone',
    volandemart:'persone',
    dog:'animal',
    cat:'animal'
}

const newArr=Object.entries(obj)
.filter(item=>item[1]==='persone')
.map(item=>item[0])
console.log(newArr)
