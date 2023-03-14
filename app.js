const innInput = document.querySelector('#innInput'),
    innCheck = document.querySelector('#innCheck'),
    innResult = document.querySelector('.innResult')

const regExp = /^(1|2)\d{13}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'INN найдет'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'INN не найдет'
        innResult.style.color = 'red'
    }
}

box=document.querySelector('.box')
let position = 0;
setInterval(() => {
    if(position<450)
        position++
    box.style.left =`${position}px`
},10)
