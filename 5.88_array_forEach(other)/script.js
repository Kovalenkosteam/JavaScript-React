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


const obj={
	eugene:'persone',
	Ann:'persone',
	dog:'animal',
	cat:'animal'
};

const newarr=Object.entries(obj)
.filter((item)=>item[1]==='persone')
.map((item)=>item[0]);
console.log(newarr);