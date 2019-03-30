var result8 = document.getElementById('result8')
const N =100
var x
function aproximarExponencial(){
     x = document.getElementById('x').value    
    if(!esNulo(x)){
        x = parseInt(x)

        var vectorNumeros = vectorFactorial(N)
        console.log(vectorNumeros)
        var vectorNumeradores = vectorNumeros.map(exponente)
        console.log(vectorNumeradores)
        var vectorDenominadoresFactoriales = vectorNumeros.map(calcularVectorFactorial)
        console.log(vectorDenominadoresFactoriales)
        var suma = calcularSuma(vectorNumeradores,vectorDenominadoresFactoriales)
        console.log(suma)
        result8.innerHTML = `${suma}`
    }else{
        result8.innerHTML = 'Digita un numero'
    }
    
}

const esNulo = numero => numero===''

const vectorFactorial = n => arrayDeNumeros(n+1)

const exponente = (value) => Math.pow(x,value)
//hallar el denominador de factoriales

const calcularVectorFactorial = item =>{
    var productoria=1
    for(var i=1; i<=item;i++){
        productoria *= i
    }
    return productoria
}

function calcularSuma(numerador,denominador){
    var suma=0
    for(var i=0;i<numerador.length;i++){
        suma += (numerador[i]/denominador[i])
    }
    return suma + 1
}