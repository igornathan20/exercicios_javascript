var form = document.getElementById("form");
var palavra = document.getElementById("palavra");

document.body.appendChild(form);

form.addEventListener("submit",function(e) {
    // alerta o valor do campo
   document.write(palavra.value);

    // impede o envio do form
    
});

