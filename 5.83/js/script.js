const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');//настройки
    request.setRequestHeader('Content-tyle', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         const data = JSON.parse(request.response);
    //         inputUsd.value=(+inputRub.value/data.current.usd).toFixed(2)
    //     }else{
    //         inputUsd.value='Ошибка'
    //     }
    // })

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value=(+inputRub.value/data.current.usd).toFixed(2)
        }else{
            inputUsd.value='Ошибка'
        }
    })
})