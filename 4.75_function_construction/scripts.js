'use strict';
function User (name, id){
	this.name=name;
	this.id=id;
	this.human=true;
	this.hello=function(){
		console.log(`Hello ${this.name}`);
	};
}


// class User{
// 	constructor(name,id){
// 		this.name=name;
// 		this.id=id;
// 		this.human=true;
// 	}
// 	hello(){
// 		console.log(`Hello ${this.name}`);
// 	}
// 	exit(){
// 		console.log(`Пользователь ${this.name} ушел`);
// 	}
// }



User.prototype.exit=function(){
	console.log(`Пользователь ${this.name} ушел`);
};
const eugene=new User('Eugene',30);
const alex = new User('Alex',25);
console.log(eugene);
eugene.hello();
eugene.exit();