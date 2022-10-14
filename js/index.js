let usuario = localStorage.getItem("usuario") || '';
let mensaje = document.querySelector('#mensaje');

if(usuario==''){
  Swal.fire({
    title:'¡Bienvenido/a!',
    text:'Ingrese su nombre',
    input: 'text',
    preConfirm: (nombre)=>{
      usuario = nombre;
      localStorage.setItem('usuario',nombre);
    }
  })
}
mensaje.textContent=`Hola ${usuario}`
