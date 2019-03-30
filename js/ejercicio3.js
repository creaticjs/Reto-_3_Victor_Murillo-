let result3 = document.getElementById("result3")
var valores = []
function addValor(){
    var valor = document.getElementById("valor").value
    if(valor!=null){
        let numValor = parseFloat(valor)
        if(typeof(numValor)==="number"){
            valores.push(numValor)
            document.getElementById("valor").value = ""
        }else{
            result3.innerHTML = "No es un numero valido"
        }
    }else{
        result3.innerHTML = "Digita algun valor numerico"
    }
}


function operar(){
    let vectorResultados = calcularMayor(valores)
    let media = calcularMedia(valores)
    console.log(vectorResultados)
    console.log(media)
    result3.innerHTML = "Mayor:" + "  " + vectorResultados[0] + "  " + "Menor:" + "  " + vectorResultados[vectorResultados.length-1] +"  "+ "Media: " + "  " + media 
    valores.splice(0,valores.length)

}


function calcularMayor(vector){

    for (let i = 0; i < vector.length; i++) {
        for (let j = 0; j < vector.length; j++) {
            if(vector[j] < vector[j+1]){
                let mayor = vector[j+1]
                vector[j+1] = vector[j]
                vector[j] = mayor
            }
            
        }
        
    }
    return vector

}

function calcularMedia(vector){
    var media = 0
    vector.forEach(element => {
        media += element
    });
    return (media/(vector.length))
}