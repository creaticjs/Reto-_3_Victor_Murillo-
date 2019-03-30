
let result2 = document.getElementById("result2")
function calcularAproximacion(){
    let numTerminos = document.getElementById("numTerminos")
    if(numTerminos.value!=""){
        let cantidad = parseInt(numTerminos.value)
        if(typeof(cantidad)==="number"){
            console.log("es un numero",cantidad)
            let res = calcularProducto(cantidad)            
            result2.innerHTML = "PI =" + res
        }else{
            console.log("no es un numero")
        }
    }else{
        result2.innerHTML = "Digita una cantidad de terminos para PI"
    }
}

function calcularProducto(n){
    var aproximacion = 1
    for(let i=1; i<=n;i++){
        let numerador = (4*i*i)
        let denominaor = (((2*i)-1) * ((2*i)+1))
        let div = numerador/denominaor
        console.log("num:"+" " + numerador + " " + "deno:" + " " + denominaor + "div" + " " + div)
        aproximacion = aproximacion * div 
        console.log(`division ${div} y la aproximacion ${aproximacion}`)
    }
    return aproximacion*2
}