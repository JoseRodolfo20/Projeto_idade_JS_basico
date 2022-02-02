function verificar(){
    let agora = new Date()
    let ano = agora.getFullYear()
    let fano = document.querySelector('input#txtano')
    let sexo = document.getElementsByName('radsex')
    let res = document.querySelector('div#res')
    let img = document.querySelector('img#foto')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Digite um ano válido.')
    }else{
        let idade = ano - Number(fano.value)
        let genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.src = 'criançaH.jpg'
            }else if(idade >= 12 && idade < 30){
                img.src = 'jovemH.jpg'
            }else if(idade >= 30 && idade < 65){
                img.src = 'adultoH.jpg'
            }else if(idade >= 65){
                img.src = 'idosoH.jpg'
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.src = 'criançaM.jpg'
            }else if(idade >= 12 && idade < 30){
                img.src = 'jovemM.jpg'
            }else if(idade >= 30 && idade < 65){
                img.src = 'adultoM.jpg'
            }else if(idade >= 65){
                img.src = 'idosoM.jpg'
            }
        }

        res.innerHTML = `Voce tem ${idade} anos e é um(a) ${genero}`
        res.appendChild(img)
    }
}