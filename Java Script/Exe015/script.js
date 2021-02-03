function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] informações invalidas tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       
       
        if (fsex [0].checked ){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/cri-menino.png')
            }
            else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jov-homem.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adul-homem.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/ido-homem.png')
            }
    }
        else if (fsex [1].checked){
        genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/cri-menina.png')
            }
            else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jov-mulher.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adul-mulher.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/ido-mulher.png')
            }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)

    }
}