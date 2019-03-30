var result17 = document.getElementById('result17')
var vectorNotas=[]
var longitudArray


function tamanioVectorNotas(){
    longitudArray = document.getElementById('longitudArray').value
    longitudArray = parseInt(longitudArray)
    //vectorNotas = new Array(longitudArray)
    //console.log(`longitud ${longitudArray} y vector ${vectorNotas.length}`)

}

function agregarNotas(){

     
        let nota = document.getElementById('numeroDeNotas').value
        if(!esNulo(nota)){
            nota = parseInt(nota)
            vectorNotas.push(nota)
            console.log(`Vector ${vectorNotas.length} valor ${nota}`)
            if(vectorNotas.length  === (longitudArray)){
                var resultado = metodoBurbuja(vectorNotas)
                var media = resultado.reduce(sumaNumeros,0) / (resultado.length)
                result17.innerHTML = `Mayor ${resultado[0]}, Menor ${resultado[resultado.length-1]}, Media ${media}`
                document.getElementById('longitudArray').value = ''
                document.getElementById('numeroDeNotas').value = ''
                vectorNotas.splice(0,vectorNotas.length)
            }

        }else{
            result17.innerHTML = 'Digita un numero'
        }
    
}

function metodoBurbuja(vector){
    for (let index = 0; index < vector.length; index++) {
        for (let j = 0; j < vector.length; j++) {
            if(vector[j] < vector[j+1]){
                let aux = vector[j+1]
                vector[j+1] = vector[j]
                vector[j]=aux

            }
            
        }
        
    }
    return vector
}

const sumaNumeros = (count,item) =>{
    count += item
    return count
}