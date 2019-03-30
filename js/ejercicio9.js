var result9 = document.getElementById('result9')
const PAR_DE_CONEJOS = 2


function numeroDeConejos(){
    var numeroDeConejos = document.getElementById('numConejos').value    
    if(!esNulo(numeroDeConejos)){
        numeroDeConejos = parseInt(numeroDeConejos)
        console.log(numeroDeConejos)
        var totalConejos = 0, vectorDeParejasDeConejos=[]
        var vectorDeMeses=[],meses = 0
        while(totalConejos < numeroDeConejos){
            vectorDeMeses.push(meses+1)
            console.log(`mes: ${meses} y vector de mese: ${vectorDeMeses}`)
            var conejos  = cantidadConejosUltimoMes(vectorDeMeses[vectorDeMeses.length-1]) 
            vectorDeParejasDeConejos.push(conejos)
            console.log(`vector parejas ${vectorDeParejasDeConejos}`)
            totalConejos = vectorDeParejasDeConejos.reduce(sumarConejos,0)
            console.log(`Total de conejos ${totalConejos}`)
            meses++
        }
        result9.innerHTML = `En ${meses} meses se tienen ${totalConejos} de conejos`
         
    }else{
        result9.innerHTML = 'Digita un valor'
    }
}

const cantidadConejosPorMes = item => Math.pow(PAR_DE_CONEJOS,item)

function cantidadConejosUltimoMes(ultimoMes){
    var potencia = Math.pow(PAR_DE_CONEJOS,ultimoMes)
    console.log(`item ${ultimoMes} y elevado es ${potencia}`)
    return Math.pow(PAR_DE_CONEJOS,ultimoMes)
}

const sumarConejos = (count,item) => count+=item 