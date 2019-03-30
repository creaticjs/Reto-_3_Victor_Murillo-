var result11 = document.getElementById('result11')

function calcularPrimo(){
    var numPrimo = document.getElementById('numPrimo').value
    if(!esNulo(numPrimo)){
        numPrimo = parseInt(numPrimo)
        console.log("es entero")
        var resultado = hallarDivisores(numPrimo)
        result11.innerHTML = resultado
    }else{
        result11.innerHTML = 'Digita un numero'
        console.log("No es entero")
    }
}

function hallarDivisores(n){
    let dividendo=1
    let esPrimo = 'Es un numero Primo'  
    if(n===1){
        esPrimo = 'No es un numero Primo'
    }else{
        while(dividendo<n){
            if (n%dividendo === 0 && dividendo>1){
                esPrimo = 'No es un numero Primo'
                break;
            }
            dividendo+=1
        } 
    }       
    return esPrimo
}

