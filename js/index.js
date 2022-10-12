let usuario = localStorage.getItem ('usuario') || '';

const msjMensaje = document.querySelector('#msjBienvenida');

if (usuario==''){
    swal.fire({
        title: 'Indiquenos su nombre:',
        input: 'name',
        inputPlaceholder: 'nombre',
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                if (email === 'example@email.com') {
                  swal.showValidationError(
                    'This email is already taken.'
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
