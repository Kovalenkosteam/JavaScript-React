// 'use strict';
// // function showThis(a,b){
// // 	console.log(this);
// // 	function sum(){
// // 		console.log(this);
// // 		return a+b;
// // 	}
// // 	console.log(sum());
// // }
// // showThis(4,5);

// // const obj={
// // 	a:20,
// // 	b:15,
// // 	sum:function(){
// // 		console.log(this);
// // 	}
// // };
// // obj.sum();


// // function User(name,id){
// // 	this.name=name;
// // 	this.id=id;
// // 	this.human=true;
// // }
// // let eugene = new User('eugene', 30);
// // console.log(eugene);


// function sayName(surname){
// 	console.log(this);
// 	console.log(this.name+' '+surname);
// }
// const user = {
// 	name:'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num){
// 	return this*num;
// }
// const double = count.bind(2);
// //2 идет в this а num будет передаваться в double
// console.log(double(3));




// // 1. Обычная функция: this=window, но если use strict- то undefined
// // 2. Контекст у методов объекта- сам объект 
// // 3. this в конструкторах и классах - это новый экземпляр объекта



// const btn=document.querySelector('button');
// btn.addEventListener('click',function(){
// 	// this.style.backgroundColor='red';
// 	// или
// 	// event.target.style.backgroundColor ='red';

// 	console.log(this);
// });



const obj={
	num:5,
	sayNumber:function(){
		const say=()=>{
			console.log(this);
		};
		say();
	}
};
obj.sayNumber();
