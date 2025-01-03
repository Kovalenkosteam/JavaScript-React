
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calcArea(){
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(width, height, text, bgColor){
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps(){
        console.log(`Text: ${this.text}, Background Color: ${this.bgColor}`);
    }
}

// const square=new Rectangle(10,10);
// const long=new Rectangle(30,100)
// console.log(square.calcArea())
// console.log(long.calcArea())
const div=new ColoredRectangleWithText(25,10,'hello','green');
div.showMyProps();
console.log(div.calcArea())