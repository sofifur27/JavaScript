let playlist = [];
let contenedor = document.querySelector('#contenedor');

const filtrarYPintar = (lista) => {
	let listaFiltrada = lista.filter(elemento => elemento.estado == "feliz");
	console.log(listaFiltrada);

	listaFiltrada.forEach(element => {
		contenedor.innerHTML += `
		<div class="card">
      		<div class="card_image">
       			 <img src="${element.img}" />
     		 </div>
      		<div class="card_title">
        		<p class="title-black">${element.musica}</p>
      		</div>
      		<div id="boton8" class="boton">
        		<a href="${element.link}" class="btn btn-dark">PLAYLIST</a>
      		</div>
    	</div>
		`
	});
}

const leerDatos = async () => {
	let resp = await fetch("/js/data.json");
	let data = await resp.json();
	console.log(data);

	playlist = data;
	filtrarYPintar(playlist);
}
leerDatos()