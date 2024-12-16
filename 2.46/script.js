// console.log(document.documentElement)
// console.log(document.body.childNodes)//получить ноды внутри родителя
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastChild)

// console.log(document.querySelector('#current').parentNode.parentNode)// нода
// console.log(document.querySelector('#current').parentElement) //элемент
// console.log(document.querySelector('[data-current="3"').nextSibling)//следующий сосед нода
// console.log(document.querySelector('[data-current="3"').previousSibling)


// console.log(document.querySelector('[data-current="3"').nextElementSibling) // следующий сосед



for (let node of document.body.childNodes){
    if (node.nodeName=='#text'){
        continue;
    }
    console.log(node);
}