//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();
    //     console.log('Touch start');
    //     console.log(e.touches[0].clientX, e.touches[0].clientY);
    // });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Touch move');
        console.log(e.touches);
        
        //touches
        //targetTouches
        //changedTouches
    });
});