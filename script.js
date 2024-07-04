const pedidoButton = document.querySelector('.pedido button');
const menuSelecao = document.getElementById('menu-selecao');

pedidoButton.addEventListener('click', (e) => {
    e.preventDefault();
    menuSelecao.style.display = 'flex';
    menuSelecao.scrollIntoView({ behavior: 'smooth' });
});

const mostrarSelecaoButton = document.getElementById('mostrar-selecao');
const resultadoDiv = document.getElementById('resultado');

