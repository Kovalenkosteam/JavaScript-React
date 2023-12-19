// new RegExp('pattern', 'flags');
// /pattern/flags

const ans = prompt('Введите имя');
const reg = /\d/; // n-это то что ищем
// console.log(reg.test(ans)); //если в ans будет reg(буква n), то вернет true

console.log(ans.match(reg));
//классы 
// \d - цифры /\d/i (D-не цифры)
// \w - буквы
// \s - пробелы


//флаги
// i найти вне зависимости от регистра
// g найти везде
// m искать в строказ с переносами
// console.log(ans.search(reg));//ищет только первое вхождение
// console.log(ans.match(reg)); 

// console.log(ans.replace(/./g,"*")); //(заменить все символы на звездочку)точка значит все символы. если найти точку то перед ней поставить \

// console.log('12-34-56'.replace(/-/g,':')); // замена - на :



const str='My name is R2D2';
console.log(str.match(/\w\d\w\d/i));