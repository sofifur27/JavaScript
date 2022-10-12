let usuario = localStorage.getItem ('usuario') || '';

const msjMensaje = document.querySelector('#msjBienvenida');

if (usuario==''){
    swal.fire({
        title: 'Indiquenos su nombre:',
        input: 'nombre',
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
  })
    localStorage.setItem('usuario',usuario);
    actualizarMensaje();
}
actualizarMensaje();
console.log(usuario);


function actualizarMensaje () {
    msjMensaje.textContent=`Hola ${usuario}`;
}
