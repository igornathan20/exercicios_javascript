function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
   
msg.innerHTML = `Agora sao ${hora} : ${minutos} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.webp'
        document.getElementById('quadrado').style.background = "red"

}
else if (hora >=12 && hora <18){
    img.src= 'imagens/tarde.jpg'
}
else {
    img.src = 'imagens/noite.webp'
}
}