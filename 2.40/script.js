function createCountrer(){
    let counter=0;
    const myFunction=function(){
        counter+=1;
        return counter;
    }
    return myFunction;
}
const increment=createCountrer();
const c1=increment();
const c2=increment();
const c3=increment();
console.log(c1,c2,c3);