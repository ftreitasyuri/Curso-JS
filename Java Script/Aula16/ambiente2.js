 function soma (n1=0, n2=0){
     if ((n1 + n2) % 2 == 0 ){
         return 'Par'
     }
     else {
         return 'Impar'
     }
 }

 let resultado = soma(3, 9)

 console.log(resultado)