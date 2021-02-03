function carregar () {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()

    // var hora = data.getHours()

    var hora = 21  
    // esse cod aolado é para forçar um horario

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12 ){
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#9fb1cc'
    }

    else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#ea855b'
    }

    else {
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#0c233b'
    }
}