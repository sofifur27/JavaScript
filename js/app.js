//Mis objetos
const playlist1 = {
	link: "https://open.spotify.com/playlist/4lANDEaojBTkN3A3m2WQq4?si=aXV0QvMcQKePhpmU4EANRA",
	nombre: "playlist1",
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
  
  //Creo mi array
  const arrayPlaylist = [];
  
  //Agrego mis objetos al array
  arrayPlaylist.push(playlist1, playlist2, playlist3, playlist4);
  
  //Mi funcion para mostrar las playlist
  const mostrarPlaylist = function (opcion) {
	//Creo el string para mostrar en el alert
	let stringResultado = "Te recomiendo esta/s playlist 💪:\n\n";
  
	//Recorro el array y guardo en el string la info de los objetos que cumplan con la condicion
	for (let i = 0; i < arrayPlaylist.length; i++) {
	  if (arrayPlaylist[i].humor == opcion) stringResultado += "Nombre: " + arrayPlaylist[i].nombre + "\nLink: " + arrayPlaylist[i].link + "\n\n";
	}
  
	//Muestro el restulado
	alert(stringResultado);
  };
  
  //Inicio
  let nombre = prompt("Ingrese su nombre: ");
  
  alert("👋 Hola " + nombre + "! " + "Mi nombre es Sofía, soy la creadora de ésta aplicación. ¡Un gusto! Te voy a ayudar a encontrar una playlist a medida... ¿Comenzamos? 🙂");
  
  let humor = prompt(`¿Cómo te sentís hoy? Ingrese el número que más se le acerque:
  1. triste 😔
  2. feliz 😀
  3. tranquilo 😌
  4. aventurero 🤗`);
  
  switch (humor) {
	case "1":
	  mostrarPlaylist("triste");
	  break;
	case "2":
	  mostrarPlaylist("feliz");
	  break;
	case "3":
	  mostrarPlaylist("tranquilo");
	  break;
	case "4":
	  mostrarPlaylist("aventurero");
	  break;
  }