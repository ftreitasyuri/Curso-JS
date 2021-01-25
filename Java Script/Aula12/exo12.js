var agora = new Date() //comando para pegar a hora e tbm serve para data e ano
var horas = agora.getHours() // o .get tem varias opçoes

console.log(`Agora são exatamente ${horas} horas.`)

if (horas < 12){
    console.log(`São ${horas} Bom dia!`)
}
else if (horas > 12 && horas < 18){
    console.log(`São ${horas} horas, Boa tarde!!!`)
}
else {
    console.log(`São ${horas} horas, Boa noite!!!`)
}