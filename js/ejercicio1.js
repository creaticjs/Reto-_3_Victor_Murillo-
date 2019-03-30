var result1 = document.getElementById("result1")

function calcularAumento(){
    var salario = document.getElementById("salario")
    if(salario.value!=""){
        var numSalario = parseFloat(salario.value)        
        if(numSalario!="number"){
            console.log(numSalario)
            evaluarSalario(numSalario)
        }else{
            result1.innerHTML= "Ingresa un valor numerico"
        }

    }else{
        result1.innerHTML = "Ingresa el salario"
    }
}

function evaluarSalario(n){
    if(n>=0 && n<=9000){
        var aumento = n + n*20/100
        result1.innerHTML = "Salario nuevo = " + aumento
    }else if(n>=9001 && n<=15000){
        var aumento = n + n*10/100
        result1.innerHTML = "Salario =" + aumento
    }else if(n>=15001 && n<=20000){
        var aumento = n + n*5/100
        result1.innerHTML = "Salario =" + aumento
    }else if(n>20000){
        result1.innerHTML = "Salario =" + aumento
    }else{
        result1.innerHTML = "No se admiten numeros negativos"
    }
}