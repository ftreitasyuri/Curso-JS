function validar(){

    var mult = document.getElementById('num')
    var res = document.getElementById('seltab')
    

    //  var numero = Number(mult.value)
    

    if (mult.value.length == 0){
        
        window.alert('Número muito grande tente um menor.')
    }
   
    else{
        
        let numero = Number(mult.value)
        let contador  = 1
        
        res.innerHTML = ''
        while (contador <= 10){
            let item = document.createElement('option')
            item.text = `${numero} X ${contador} = ${numero*contador}`
            res.appendChild(item)
            contador++
        }

    }


     
}