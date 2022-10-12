let usuario = localStorage.getItem ('usuario') || '';

const msjMensaje = document.querySelector('#msjBienvenida');


if (usuario==''){
    const name = await Swal.fire({
    title: 'Ingrese su nombre:',
    input: 'name',
    inputLabel: 'Su nombre',
    inputPlaceholder: 'Ingrese su nombre',
    preConfirm: (name) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (name === 'usuario') {
              swal.showValidationError(
                'This name is already taken.'
              )
            }
            resolve()
        }, 2000)
      })
    }
  })
    localStorage.setItem('usuario',usuario);
    actualizarMensaje();
}
actualizarMensaje();
console.log(usuario);


function actualizarMensaje () {
    msjMensaje.textContent=`Hola ${usuario}`;
}
