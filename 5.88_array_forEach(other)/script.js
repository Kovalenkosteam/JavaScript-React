//filter

// const names=['Eugene', 'Alex', 'Boris', 'Vladimir', 'Ann'];
// const shortNames=names.filter(function(name){
// 	return name.length<=5;
// });
// console.log(shortNames);


//map

// const answers=['EugeNe', 'ALex', 'BO:ris', 'VlaaaAdimir', 'Ann'];
// const result = answers.map(item=>item.toLowerCase());
// console.log(result);



//every,some
//some хоть один
//every каждый
// const anything=['EugeNe', 'ALex', 'BO:ris', 'VlaaaAdimir', 'Ann', 4, 'we4#wef'];
// console.log(anything.some(item=>typeof(item)==='number'));
// console.log(anything.every(item=>typeof(item)==='number'));


//reduce

// const arr=[1,7,3,9,13,7];
// const sum = arr.reduce((sum,current)=>sum+current);
// // const sum = arr.reduce((sum,current)=>sum+current,3);
// //3 в конце это начальное значение
// console.log(sum);


// const nam=['EugeNe', 'ALex', 'BO:ris', 'VlaaaAdimir', 'Ann', 4, 'we4#wef'];
// // const res= nam.reduce((sum,current)=>sum+', '+current);
// const res= nam.reduce((sum,current)=>`${sum}, ${current}`);
// console.log(res);


// const obj={
// 	eugene:'persone',
// 	Ann:'persone',
// 	dog:'animal',
// 	cat:'animal'
// };

// const newarr=Object.entries(obj)
// .filter((item)=>item[1]==='persone');
// // .map((item)=>item[0]);
// console.log(newarr);





//  У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

//  Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

//  Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray);



// const films = [
// 	{
// 		name: 'Titanic',
// 		rating: 9
// 	},
// 	{
// 		name: 'Die hard 5',
// 		rating: 5
// 	},
// 	{
// 		name: 'Matrix',
// 		rating: 8
// 	},
// 	{
// 		name: 'Some bad film',
// 		rating: 4
// 	}
// ];

// function showGoodFilms(arr) {
// 	return arr.filter((item)=>item.rating>=8);
// }
// console.log(showGoodFilms(films));


// function showListOfFilms(arr) {
// 	return arr.reduce((sum,current)=>`${typeof(sum)==='object'?sum.name:sum},${current.name}`);
// }
// console.log(showListOfFilms(films));


// function setFilmsIds(arr) {
// 	return arr.map((item, i) => {
// 		item.id = i;
// 		return item;
// 	});
// }
// console.log(setFilmsIds(films));


// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
// 	return arr.every(item => item.id != 'undefined');
// }
// console.log(checkFilms(tranformedArray));




// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

// Пример:

// getPositiveIncomeAmount(funds) => 13300

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:
// getTotalIncomeAmount(funds) => -500


const funds = [
	{ amount: 1400 },
	{ amount: 2400 },
	{ amount: 1000 },
	{ amount: 500 },
	{ amount: 10400 },
	{ amount: 11400 }
];

// const getPositiveIncomeAmount = (data) => {
// 	return data.reduce((sum, curr) => curr.amount>0?sum+curr.amount:sum, 0);
// };
// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
	if(data.some((item)=>item.amount>0)){
		return data.reduce((sum,curr)=>sum+curr.amount,0);
	}else{
		getTotalIncomeAmount(data);
	}
	
};

console.log(getTotalIncomeAmount(funds));