// Fatorial é pegar o número de multiplicar pelo seu antecessor até chegar em 1
// Ex: 5 x 4 x 3 x 2 x 1

function fatorial(n1){

    let fat = 1

    for(let cont = n1; cont > 1; cont --){
        fat *= cont // = fat = fat * cont

    }
    return fat
}

console.log(fatorial(6)) // aqui é a chamada