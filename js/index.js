let usuario = localStorage.getItem ('usuario') || '';

const msjMensaje = document.querySelector('#msjBienvenida');

if (usuario==''){
    usuario = prompt ("Ingrese su nombre:")
    localStorage.setItem('usuario',usuario);
    actualizarMensaje();
}
actualizarMensaje();
console.log(usuario);


function actualizarMensaje () {
    msjMensaje.textContent=`Hola ${usuario}`;
}

const boton = document.querySelector("#card1")

boton.addEventListener("click", () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
}
)