// const timerId= setTimeout(logger,2000); //можно просто setTimeout без переменной setTimeout(logger,2000)

// clearInterval(timerId)//остановка
// function logger() {
//     console.log("text");
// }



// const btn = document.querySelector('.btn');
// let timerId;
// let i=0;
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 1000)
// }, 2000);

// function logger() {
//     if (i === 5) {
//         clearInterval(timerId);
//     }
//     console.log("text");
//     i++
// }



// let id=setTimeout(function log(){
//     console.log('text');
//     id=setTimeout(log,500)
// },500);





const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let pos = 0;

// function myAnimation(){
//     setInterval(frame,80)
//     function frame(){
//         if(pos==300){
//             clearInterval();
//         }else{
//             pos++;
//             elem.style.top=pos+'px';
//             elem.style.left=pos+'px';
//         }        
//     }
// };
// btn.addEventListener('click', myAnimation);



function myAnimation() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation)
    }
};
// btn.addEventListener('click', ()=> requestAnimationFrame(myAnimation));
btn.addEventListener('click', myAnimation);

btn.addEventListener('mouseleave', () => {
    cancelAnimationFrame(myAnimation);
    console.log('dscf')
});