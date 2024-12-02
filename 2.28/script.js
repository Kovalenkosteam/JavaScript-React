const str = 'teSt';

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit='some Fruit';
console.log(fruit.indexOf('Fruit')); //поиск в строке


const logg='hello world!';
console.log(logg.slice(6,11)); //вырезать из строки
console.log(logg.slice(-6,-1));//вырезать с правого края
console.log(logg.substring(6,10));
console.log(logg.substr(6,3)); //c определенного индекса вырезать количество символов


const num=12.2;
console.log(Math.round(num)); //округление 


const test='12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
