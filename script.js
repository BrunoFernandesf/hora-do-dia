function CarregarHora() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('foto')

    var data = new Date()
    //var hora = data.getHours()
    hora = 20

    if(hora > 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'assets/manha.png'
        document.body.style.background = '#f2d0b5'
    }
    else if (hora > 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'assets/tarde.png'
        document.body.style.background = '#fbaa38'
    }
    else {
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'assets/noite.png'
        document.body.style.background = '#2d444c'
    }

}