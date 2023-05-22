function mostraMenuMobile() {
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('revelaElemento')) {
        menuMobile.classList.remove('revelaElemento');
        document.querySelector('.icone').src = "assets/menuMobile.svg"
    } else {
        menuMobile.classList.add('revelaElemento')
        document.querySelector('.icone').src = "assets/close.svg"

    }
}

document.querySelector('.botaoMenuMobile').onclick = mostraMenuMobile;

//---------------------------------------
const listaDeIconesInteresses = document.querySelectorAll('.icone_interesses')

for(let i = 0; i < listaDeIconesInteresses.length; i++) {
    const INTERESSE = listaDeIconesInteresses[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const textoInteresses = {
    'interesse_html':'O html estrutura a página da web',
    'interesse_css':'O css estiliza a página da web',
    'interesse_javascript':'É a linguagem de programação que permite dinamismo e interatividade',
    'interesse_git':'É um controlador de versões de projetos'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesses')
    let caixaDisplay = document.querySelector('#caixa-interesses')

    caixaDisplay.classList.remove('caixa_interesses')

    texto.innerHTML = textoInteresses[idInteresse] || ''
}