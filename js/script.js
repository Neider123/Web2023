const btnLanzarModal = document.getElementById('lanzarModal');
const btnOcultarModal = document.querySelector('#ocultarModal');

const contModal = document.querySelector('.contenedor_modal');


btnLanzarModal.addEventListener('click',(e) =>{
    e.preventDefault();
    contModal.classList.add('mostrar');
} )