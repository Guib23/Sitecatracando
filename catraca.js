var condu = document.getElementById("condução")
var recarga = Number(document.getElementById("reg").value)
function calculoCondução(){
    if(condu.value =="onibus"){
        var soma = recarga / 4.30
        document.getElementById("res").value = soma
        console.log(condu)
    }else if(condu.value == "trem"){
        var soma = recarga / 4.50
        document.getElementById("res").value = soma
    }else if(condu.value == "integração"){
        var soma = recarga / 7.48
        document.getElementById("res").value = soma
    }
}
