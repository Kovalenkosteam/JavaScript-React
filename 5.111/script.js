// function* generator(x){
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const gen = generator();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next().value)



function* count(n){
    for(let i=0; i<n; i++){
        yield i;
    }
}
// const counter= count(4)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)

for(let i of count(8)){
    console.log(i)
}
