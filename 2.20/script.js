if (4 == 4) {
    console.log('ok!')
} else {
    console.log('Error')
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('error');
} else {
    console.log('ok');
}


const num = 500;
(num === 50) ? console.log('ok') : console.log('error');


const num = 50;
switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('угадал');
        break;
    default:
        console.log('неа');
        break;
}