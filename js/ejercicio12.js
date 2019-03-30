var result12 = document.getElementById('result12')

function calcularSumatoria(){
    var cantidadTerminos = document.getElementById('cantidadTerminos').value
    if(!esNulo(cantidadTerminos)){
        cantidadTerminos = parseInt(cantidadTerminos)
       var resultado = sumatoria(cantidadTerminos)
       result12.innerHTML = `Sumatoria es ${resultado}`
    }else{
        result12.innerHTML = 'Digita dos numeros'
    }
}

function sumatoria(n){
    let suma=0
    for (let index=1; index<=n; index++) {
        suma+= 1/index
    }
    return suma
}
