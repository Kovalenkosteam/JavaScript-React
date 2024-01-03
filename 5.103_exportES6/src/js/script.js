// import {one,two} from './variable'; //импорт нескольких переменных
// import {one as digit,two} from './variable'; // меняет имя имортируемых переменных
// console.log(`${digit} and ${two}`);

import * as data from './variable'; //импорт всего с указанием нового 'объекта'
data.sayhi();