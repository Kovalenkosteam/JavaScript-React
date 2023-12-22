// function User(name,age){
// 	this.name=name;
// 	let userAge=age;

// 	this.say=function(){
// 		console.log(`имя пользователя: ${this.name}, возраст ${userAge}`);
// 	};

// 	this.getAge=function(){
// 		return userAge;
// 	};
	
// 	this.setAge=function(age){
// 		if(typeof age === 'number' && age>0 && age<110){
// 			userAge=age;
// 		}else{
// 			console.log('недопустимое значени');
// 		}
// 	};
// }

// const  ivan=new User('Ivan',27);
// console.log(ivan.name);
// console.log(ivan.getAge());


// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();



class User{
	constructor(name,age){
		this.name=name;
		this._age=age;
	}
	
	surname='family'; //#surname='family' закрытый доступ

	say=()=>{
		console.log(`имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
	}

	get age(){
		return this._age;
	}
	
	set age (age){
		if(typeof age === 'number' && age>0 && age<110){
			this._age=age;
		}else{
			console.log('недопустимое значени');
		}
	}
}

const  ivan=new User('Ivan',27);
console.log(ivan.surname);
console.log(ivan._age);
ivan.say();
  