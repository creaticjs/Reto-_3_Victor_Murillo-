var result14 = document.getElementById('result14')
const CARACTER = '*'
function mostrarLineas(){
    var numeroDeLineas = document.getElementById('numeroDeLineas').value
    if(!esNulo(numeroDeLineas)){
        numeroDeLineas = parseInt(numeroDeLineas)
       var resultado = concatenarCaracterYlineas(numeroDeLineas)
       result14.innerHTML =  resultado
    }else{
        result14.innerHTML = 'Digita dos numeros'
    }
}

function concatenarCaracterYlineas(n){
    let concatenacion=''
    for (let index = 1; index <= n; index++) {
        concatenacion += '<p>' + repetirCaracter(index) + '</p>'
    }
    return concatenacion
}

function repetirCaracter(nVeces){
    let concatenacion = ''
    for (let index = 1; index <= nVeces; index++) {
        concatenacion += CARACTER 
    }
    return concatenacion
}