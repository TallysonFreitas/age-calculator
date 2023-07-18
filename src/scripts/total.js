document.addEventListener('DOMContentLoaded',function () {  
    const dias = document.querySelector('#days')
    const meses = document.querySelector('#months')
    const anos = document.querySelector('#years')

    const diasb = document.querySelector('#days-b')
    const mesesb = document.querySelector('#months-b')
    const anosb = document.querySelector('#years-b')

    const button = document.getElementById('botao')
    const avisos = document.querySelectorAll('.aviso')


    const hoje = new Date()

    button.addEventListener('click', function () {  
        idade()
    })

    function idade() {  
        const nascimento = new Date(anos.value, meses.value, dias.value)
        const idade = new Date()
        idade.setFullYear(hoje.getFullYear() - anos.value)
        idade.setMonth(hoje.getMonth() - meses.value + 1)
        idade.setDate(hoje.getDate() - dias.value)

        if(dias.value == '' || meses.value == '' || anos.value == ''){
            if(dias.value == ''){
                avisos[1].classList.add('error')
                avisos[1].innerHTML = 'Is Required'
            }
            if(meses.value == ''){
                avisos[2].classList.add('error')
                avisos[2].innerHTML = 'Is Required'
            }
            if(anos.value == ''){
                avisos[3].classList.add('error')
                avisos[3].innerHTML = 'Is Required'
            }
        }else if(nascimento.getTime() > hoje.getTime()){
                avisos[0].classList.add('error')
                avisos[0].innerHTML = 'A data de nascimento nao pode ser maior que a data atual'
        }else if(dias.value > 31 || meses.value > 11 || anos.value > hoje.getFullYear()){
            if(dias.value > 31){
                avisos[1].classList.add('error')
                avisos[1].innerHTML = 'Invalid'
            }
            if(meses.value > 12){
                avisos[2].classList.add('error')
                avisos[2].innerHTML = 'Invalid'
            }
            if(anos.value > hoje.getFullYear()){
                avisos[3].classList.add('error')
                avisos[3].innerHTML = 'Invalid'
            }
        }
        else{
            for(let i = 0; i < avisos.length; i++){
                avisos[i].classList.remove('error')
            }
            anosb.innerHTML = idade.getFullYear()
            mesesb.innerHTML = idade.getMonth()
            diasb.innerHTML = idade.getDate()
        }
        
    }
    
})

