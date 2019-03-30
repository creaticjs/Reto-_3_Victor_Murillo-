var result13 = document.getElementById('result13')

function calcularSumaDeSerie(){
    var terminos = document.getElementById('terminos').value
    if(!esNulo(terminos)){
        terminos = parseInt(terminos)
       var resultado = sumaDeSerie(terminos)
       result13.innerHTML = `Sumatoria es ${resultado}`
    }else{
        result13.innerHTML = 'Digita dos numeros'
    }
}

function sumaDeSerie(n){
    let resultado = 0
    for (let index = 1; index <=n; index++) {
       resultado += (n)/(Math.pow(2,n))
    }
    return resultado
}