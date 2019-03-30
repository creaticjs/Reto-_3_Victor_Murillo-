var result15 = document.getElementById('result15')

var cantDeNumPerfectos = 1
var numParaEvaluar = 1
function hallarNumerosPerfectos(){
    numeroMaximo = document.getElementById('nMaximo').value
    //debemos dividir cada numero a evaluar entre los numero del 1 a esta ese numero
    numeroMaximo = parseInt(numeroMaximo)
    console.log(numeroMaximo)
   if(numeroMaximo<=5){
    while(cantDeNumPerfectos < numeroMaximo){
        var numDividendos = arrayDeNumeros(numParaEvaluar)
        var numDivisores = numDividendos.map(calcularDivisores2)
        var numEsPerfecto = numDivisores.reduce(sumaDeDivisores,0)
        if(numEsPerfecto === numParaEvaluar){
            console.log(`Numero perfecto es ${numEsPerfecto}`)
            result15.innerHTML += `${numEsPerfecto}, `
            numParaEvaluar +=1
            cantDeNumPerfectos +=1
        }else{
            numParaEvaluar += 1
        }
    } 
   }else{
    result15.innerHTML = "Un numero menor o igual a 5"
   }
}


const calcularDivisores2 = (numero) =>{
    if(numParaEvaluar % numero === 0){
        return numero
    }else{
        return 0
    }
}

