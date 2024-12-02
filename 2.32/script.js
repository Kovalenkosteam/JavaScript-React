// const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    arr: [2, 5, {}],
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest:function(){
        console.log('test');
    }
};

const {border}=options.colors;
console.log(border)


// options.makeTest();


// console.log(Object.keys(options))
// console.log(Object.keys(options).length)


// console.log(options['colors']['border']);
// console.log(options.name);
// delete options.name
// console.log(options);



let counter=0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`свойства ${i} имеет значение ${options[key][i]}`);
            // counter++;
        }
    } else {
        console.log(`свойства ${key} имеет значение ${options[key]}`);
        
    }
    counter++;
}
console.log(counter);


