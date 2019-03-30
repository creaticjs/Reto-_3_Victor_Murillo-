
var result7 = document.getElementById('result7')
var cantidadDeNumerosPerfectos = 1
var numeroParaEvaluar = 1
function calcularNumerosPerfecto(){
    
    //debemos dividir cada numero a evaluar entre los numero del 1 a esta ese numero
  
    while(cantidadDeNumerosPerfectos<4){
        var dividendos = arrayDeNumeros(numeroParaEvaluar)
        var divisores = dividendos.map(calcularDivisores)
        var esPerfecto = divisores.reduce(sumaDeDivisores,0)
        if(esPerfecto === numeroParaEvaluar){
            console.log(`Numero perfecto es ${esPerfecto}`)
            result7.innerHTML += `${esPerfecto}, `
            numeroParaEvaluar +=1
            cantidadDeNumerosPerfectos +=1
        }else{
            numeroParaEvaluar += 1
        }
    } 
}

const arrayDeNumeros = (cantidad) =>{
    var vectorNumerico=[]
    for(let i=1; i<cantidad;i++){
        vectorNumerico.push(i)
    }
    return vectorNumerico
} 

const calcularDivisores = (numero) =>{
    if(numeroParaEvaluar % numero === 0){
        return numero
    }else{
        return 0
    }
}

const sumaDeDivisores = (count,numero)=>{
    //console.log(`contador = ${count}`)
    return count += numero 
    
}