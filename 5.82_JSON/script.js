const person={
	name:'Eugene',
	tel:'+79780556794',
	parents:{
		mom:'Olga',
		dad:'Mike'
	}
};
// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));

const clone= JSON.parse(JSON.stringify(person));
console.log(clone);
