var result5 = document.getElementById("result5")

function calcularAnioBis(){
var anioBis = document.getElementById("anioBis").value
    if(anioBis!=null)
    {
        anioBis =  parseInt(anioBis)
        result5.innerHTML = operarAnio(anioBis)
    }else{
        result5.innerHTML = "Valor invalido"
    }
}

function operarAnio(a){
    var msg
    if((a % 4) ===0 && (a % 100)!=0 ){
        msg = "Año Bisiesto"
    }else if ( (a % 100)===0 && (a % 400)===0){
        msg = "Año Bisiesto"
    }else{
        msg = "No es un Año Bisiesto"
    }
    return msg
}