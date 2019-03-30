var result10 = document.getElementById('result10')

function calcularMCD(){
    var numeroA = document.getElementById('numA').value
    var numeroB = document.getElementById('numB').value
    if(!esNulo(numeroA) && !esNulo(numeroB)){
        numeroA = parseInt(numeroA)
        numeroB = parseInt(numeroB)

       var resultado = hallarMCD(numeroA,numeroB)
       console.log(`MCD es ${resultado}`)
       result10.innerHTML = `MCD es ${resultado}`
    }else{
        result10.innerHTML = 'Digita dos numeros'
        console.log("No son entero")
    }
}

function hallarMCD(a,b){
    if(a<b){
        let aux = a
        a = b
        b = aux
    }
    let residuo=1
    let MCD
    while(residuo>0){
        residuo = a % b
        if(residuo>0){
            a = b
            b = residuo
        }else{
            
            MCD = b
            break;
        }
    }
    return MCD
}