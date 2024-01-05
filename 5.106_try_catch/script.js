try {
	console.log('normal');
	console.log(a);
	console.log('still normal');
} catch(e){
	console.log(e.name);
	console.log(e.massage);
	console.log(e.stack);
}
console.log('still normal2');