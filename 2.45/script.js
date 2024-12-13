const overlay=document.querySelector('overlay')
const btn = document.querySelectorAll('button');
// btn.addEventListener('click',()=>{
//     alert('clicks')
// });




let i=0;

const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if(i==1){
        btn.removeEventListener('click', deleteElement);
    }
}

// btn.addEventListener('mouseenter', (e) => {
//     btn.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
//     console.log(e.target);
//     console.log('X: ' + e.pageX + " Y: " + e.pageY)
// });



// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
btn.forEach(item=>{
    item.addEventListener('click', deleteElement, {once:true});
})




const link=document.querySelector('a');
link.addEventListener('click',(e)=>{
    e.preventDefault();
});


document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});