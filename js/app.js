
let musicaRock = document.getElementById("boton1");
let musicaElectro = document.getElementById("boton2");
let musicaInstrumental = document.getElementById("boton3");
let musicaAcustica = document.getElementById("boton4");


musicaRock.addEventListener('click', ()=>{
	window.location.href = "https://open.spotify.com/playlist/6oF4i9FMoWGfvwUUI7IpgH?si=3042e76d75f54b11";
});

musicaElectro.addEventListener('click', ()=>{
	window.location.href = "https://open.spotify.com/playlist/6szPbWeTEFjQM65f3kww1j?si=7db8c87786364bf7";
});

musicaInstrumental.addEventListener('click', ()=>{
	window.location.href = "https://open.spotify.com/playlist/0123C4HLWdQlBDMsLEATGT?si=c7ff4df0929c464e";
});

musicaAcustica.addEventListener('click', ()=>{
	window.location.href = "https://open.spotify.com/playlist/5nwzMNwrAWiLAbI4TIglPC?si=7838e45ff5c349cb"; 
});

let name = sessionStorage.getItem ('name');
console.log (typeof nombre);