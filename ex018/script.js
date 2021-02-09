let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#resultado')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        
        return true
    }
    else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}


function adicionar(){
    // !inLista esse ! significa não esta pro java script
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' // esse comando serve para limpar o res quando adicionar um valor em num
         
        
    }     
    else {
        window.alert('Valor inválido, ou já adicionado')
    }

    num.value = ''
    num.focus() // para levar o cursor na caixa de texto.


}

function finalizar(){

    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){ // laço para vetores, varre o vetor inteiro
            soma += valores[pos]
            if( valores[pos] > maior)
            maior = valores[pos]

            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot



        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valores informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valores informado foi ${menor}.</p>`
        res.innerHTML += `<p> A soma entre todos os valores é de ${soma}.</p>`
        res.innerHTML += `<p>A média entre todos os valores é de ${media}</p>`
    }
}