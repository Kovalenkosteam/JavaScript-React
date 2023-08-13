const log= function(a,b, ...rest){
	console.log(a,b,rest);
};
log('asd','xzc','qwe','vbn');

function calc(num,bas=4){
	console.log(num*bas);
}

calc(3,6);