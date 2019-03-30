var result16 = document.getElementById('result16')

function calcularNumeros(){
    var valorParaExceder = document.getElementById('num').value
    if(!esNulo(valorParaExceder)){
        valorParaExceder = parseInt(valorParaExceder)
        console.log("es entero")
        var resultado = sumarNumerosParaExceder(valorParaExceder)
        result16.innerHTML = resultado
    }else{
        result16.innerHTML = 'Digita un numero'
        console.log("No es entero")
    }
}

function sumarNumerosParaExceder(n){
    var suma=0
    var naturalMinimo=0
    while(suma<=n){
        naturalMinimo+=1
        suma +=naturalMinimo
        
    }
    return naturalMinimo
}

