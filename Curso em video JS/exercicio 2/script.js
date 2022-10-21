function verificar(){
var data = new Date()
var ano = data.getFullYear()
var anoform = document.getElementById("ano")
var res = document.getElementById("res")

var sex = document.getElementsByName("sexo")
var idade = ano - anoform.value
var genero = ''

if (sex[0].checked){ genero = "masculino"}
else {
    genero = "feminino"
}

if (anoform.value.length == 0 || anoform.value > ano ){
 window.alert("verifique o ano de nescimento")
}
else{
     window.alert("isso ae meu chapa")
}
 window.alert(genero )

 
 res.style.textAlign = "center"
 res.innerHTML =   $(idade)  
 
}