function mostraMenu(){
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('revela')){
        menuMobile.classList.remove('revela');
        document.querySelector('.icone').src="assets/menuMobile.svg"
    } else{
        menuMobile.classList.add('revela')
        document.querySelector('.icone').src="assets/close.svg"

    }
}

function mostraTexto(){
    let textoInteresses = document.querySelector('.texto_interesses');
    textoInteresses.innerHTML = 'Passar o texto que queremos nessa string'
}