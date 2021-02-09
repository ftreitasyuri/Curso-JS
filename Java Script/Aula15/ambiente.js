let num = [5, 8, 7, 9, 3] // array ou vertor é uma variavel composta
num[5] = 6 // num[5] = é para criar o quinto campo dentro da variavel num
num.push(4) // num.push() serve para adicionar um indice/chave no final da variavel
// exemplo a variavel num tem 5 indices ao usar o num.push() ele adiciona o 6º indice com o valor digitado

// num.length para ver o comprimento 
num.sort() // serve para colocar todos em ordem crescente

console.log(`Vendo em ordem crescente com |num.sort()| ${num}`)

console.log(`O comprimento do vetor é de ${num.length} chaves`)

let localizar = num.indexOf(3)


if (localizar == -1){
    console.log(`O valor não foi encontrado`)
}
else{
    console.log(`O valor está na posição ${localizar}`)
}


// DUAS FORMAS DE USAR O FOR

 for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o vetor ${num[pos]}`)
}

for (let pos in num){
    console.log(`A posição ${pos} tem o vetor ${num[pos]}`)
}
// FINAL DAS DUAS FORMAS DE USAR O FOR