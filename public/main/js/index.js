const menuBurgue = document.getElementById('menuBurgue');
const minimizeMenu = document.getElementById('minimizeMenu');
const menuOptions = document.getElementById('menuOptions');
const logoAGI = document.getElementById('logoAGI');
const tituloUser = document.getElementById('tituloUser')
const minimizedClass = 'minimized';
const sair = document.getElementById('sair')

sair.addEventListener('click', function(){
    window.location.href = '../../index.html';

})
function toggleMenu() {
    const isMinimized = menuBurgue.classList.contains(minimizedClass);

    if (isMinimized) {
        menuBurgue.classList.remove(minimizedClass);
        menuBurgue.classList.remove("fade");
        logoAGI.src = '../../public/main/img/logoAGI.png'

        localStorage.setItem('menuState', 'expanded');
        tituloUser.style.fontSize = '19.5px'
        menuOptions.style.fontSize = 'small';


    } else {
        menuBurgue.classList.add("fade");
        menuBurgue.classList.add(minimizedClass);
        logoAGI.src = '../../public/main/img/logoAGIencolhido.png';

        menuOptions.style.fontSize = '0px';
        tituloUser.style.fontSize = '0'
        localStorage.setItem('menuState', 'minimized');
    }
}

minimizeMenu.addEventListener('click', toggleMenu);

//--Garante que ao recarregar a pagina com o menu minimizado a animação funcione corretamente--
function applyTimeoutOnLoad() {
    const savedMenuState = localStorage.getItem('menuState');

    if (savedMenuState === 'minimized') {
        menuBurgue.classList.add(minimizedClass);
        minimizeMenu.classList.add(minimizedClass);
        logoAGI.src = '../../public/main/img/logoAGIencolhido.png';
        menuOptions.style.fontSize = '0px';
        tituloUser.style.fontSize = '0'


    }
}

applyTimeoutOnLoad();


// Obtém uma referência ao elemento de conteúdo
const conteudoElement = document.querySelector('.conteudo');

// Função para carregar uma página via AJAX
function carregarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            conteudoElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a página: ' + error);
        });
};

document.querySelector('#alterar').addEventListener('click', () => {
    carregarPagina('./appList.html');
});

var novaProcedure = document.getElementById('labelNovaProcedure');
var inicio = document.getElementById('inicio');
inicio.addEventListener('click', ()=>{
    carregarPagina('./index.html')

})
novaProcedure.addEventListener('click', ()=> {
    carregarPagina('./createprocpage.html')
});


carregarPagina('./index.html');



