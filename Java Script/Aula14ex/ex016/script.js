
// alert('Olá')

function contar(){
// let e var da no mesmo
    let ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('resultado')

   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        // window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel Contar'

    }
    else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if( p <= 0){

            window.alert('Passo Inválido, considerando passo 1')
            p = 1
        }
    

        // Contagem Crescente
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
        // Contagem Regressiva
        else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }

    }




}