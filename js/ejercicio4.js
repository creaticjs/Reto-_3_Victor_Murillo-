var result4 = document.getElementById("result4")

function calcularDia()
{
    var anio = document.getElementById("anio").value
    if(anio!=null)
    {
        let numAnio = parseInt(anio)
        if(numAnio>=1990 && numAnio <=2000)
        {
            let dia = operarAnio(numAnio)
            result4.innerHTML = hallarMesDia(dia)
            
        }else
        {
            result4.innerHTML = "Digita un año entre 1990 y 2000"
        }
    }else
    {
        result4.innerHTML = "Digita un numero"
    }
}

function operarAnio(a)
{
    let A = a % 19
    let B = a % 14
    let C = a % 7
    let D = (19 * A + 24) % 30
    let E = (2*B + 4*C + 6*D + 5 )% 7
    let N = 22 + D + E
    return N

}

function hallarMesDia(d)
{
    var msg 
    if(d>31)
    {
    msg = "Abril:" + " " + (d-31)
    }else
    {
    msg = "Marzo:" + " " + d
    }
    return msg
}