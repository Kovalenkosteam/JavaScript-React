'use strict';

class Rectange{
	constructor(height, width){
		this.height=height;
		this.width=width;
	}
	calcArea(){
		return this.height*this.width;
	}
}

const square= new Rectange(7,15);
const long = new Rectange(20,100);
// console.log(square.calcArea());
// console.log(long.calcArea());






class ColoredRectangleWithText extends Rectange{
	constructor(height, width, text, bgColor){
		super(height,width);
		this.text=text;
		this.bgColor=bgColor;
	}
	showMyProps(){
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const div =new ColoredRectangleWithText(25,10,'hello', 'red');
div.showMyProps();
console.log(div.calcArea());