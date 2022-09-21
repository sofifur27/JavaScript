let nombre = prompt("Ingrese su nombre: ");
  
  alert("👋 Hola " + nombre + "! " + "Mi nombre es Sofía, soy la creadora de ésta aplicación. ¡Un gusto! Te voy a ayudar a encontrar una playlist a medida... ¿Comenzamos? 🙂");
  
  const playlist1 = {
	link: "https://open.spotify.com/playlist/4lANDEaojBTkN3A3m2WQq4?si=aXV0QvMcQKePhpmU4EANRA",
	nombre: "playlist 1",
	humor: "triste",
  };
  const playlist2 = {
	link: "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=QwtHnXFoSJyisaNCL62wUA",
	nombre: "playlist 2",
	humor: "feliz",
  };
  const playlist3 = {
	link: "https://open.spotify.com/playlist/3g6Kv0FXVKtrl7N58hQiKb?si=djAjbngqS9qyDVvAM_n5Ag",
	nombre: "playlist 3",
	humor: "tranquilo",
  };
  const playlist4 = {
	link: "https://open.spotify.com/playlist/5We6JEGrjKCH6LN66wXvCj?si=K9Z60hf_SIWBvuXLHVmmog",
	nombre: "playlist 4",
	humor: "aventurero",
  };

let humorFeliz = document.getElementById("card1");
let humorTriste = document.getElementById("card2");
let humorTranqui = document.getElementById("card3");
let humorAventura = document.getElementById("card4");

const playlist = [playlist1, playlist2, playlist3, playlist4];

  const mostrarPlaylist = function (opcion) {

	let stringResultado = "Te recomiendo esta playlist 💪:\n\n";
	for (let i = 0; i < playlist.length; i++) {
	  if (playlist[i].humor == opcion) stringResultado += `Nombre: ${playlist[i].nombre}\nLink: ${playlist[i].link}\n\n`;
	}
	alert(stringResultado);
  };
  


humorFeliz.addEventListener('click', ()=>{
	mostrarPlaylist("feliz");
});

humorTriste.addEventListener('click', ()=>{
	mostrarPlaylist("triste");
});

humorTranqui.addEventListener('click', ()=>{
	mostrarPlaylist("tranquilo");
});

humorAventura.addEventListener('click', ()=>{
	mostrarPlaylist("aventurero");
});