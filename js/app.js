let nombre = prompt("Ingrese su nombre: ");
alert ("hola " + nombre + "! " + "Mi nombre es Sofía, soy la creadora de ésta aplicación. ¡Un gusto! Te voy a ayudar a encontrar una playlist hecha especialmente para vos en el día de hoy a partir de algunas preguntas... ¿Comenzamos? :)");

let humor = prompt (`¿Cómo te sentís hoy? Ingrese el número que más se le acerque:
1. triste
2. feliz
3. tranquilo
4. aventurero`);
switch (humor) {
case "1":
	let music = prompt("Aveces es bueno permitirse estar mal... En estos casos, ¿Qué estilo de música buscas escuchar? ¿Música FELIZ para levantar el ánimo, música TRISTE para buscar identificarse o callar la cabeza con TRANQUILIDAD?");
	if(music == "feliz"){
	let genre = prompt (`¡Me alegra leer eso! ¿Por cuál género te soles inclinar en estos casos?:
1. pop/rock
2. techno/electrónica`);
	switch (genre) {
	case "1":
	let idioma = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varias
4. Instrumental (sin letra)`);
	switch (idioma) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "4":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
			};
			break;
		case "2":
			let idiom = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varias
4. Instrumental (sin letra)`);
		switch (idiom) {
			case "1":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
			case "2":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
			case "3":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
			case "4":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
		}
	}
	}
	else if(music=="triste"){
	let genre = prompt (`Entiendo... ¿Por cuál género te soles inclinar en estos casos?:
1. Música acústica
2. Blues/Jazz`);
	switch (genre) {
		case "1":
			let idioma = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varias
4. Instrumental (sin letra)`);
			switch (idioma) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "4":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
			};
			break;
		case "2":
			let idiom = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varias
4. Instrumental (sin letra)`);
			switch (idiom) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "4":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
			};
			break;
	}
	}
	else if(music=="tranquilidad"){
		let genre = prompt (`No es mala decisión. ¿Preferís con letra o solo instrumental?:
1. Con letra
2. Sin letra`);
		switch (genre) {
			case "1":
				let idioma = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varios idiomas`);
			switch (idioma) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				}
			break;
			case "2":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
		};
		break;
		}
	else{
		alert ("Lamentablemente, no contaba con esa opción");
		break;
	};
	break;

case "2":
	let felicidad = prompt("¡Me alegra escuchar eso! ¿Deseas MANTENER esta emoción o buscas TRANQUILIDAD?");
	if (felicidad == "mantener"){
		let genre = prompt (`¡Vamos! ¿Cuál género suele mantener tu felicidad?:
1. pop/rock
2. techno/electrónica`);
	switch (genre) {
	case "1":
	let idioma = prompt (`¿En qué idioma lo preferís escuchar?:
1. Inglés
2. Español
3. Varias
4. Instrumental (sin letra)`);
	switch (idioma) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "4":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
			};
			break;
		case "2":
			let idiom = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varias
4. Instrumental (sin letra)`);
		switch (idiom) {
			case "1":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
			case "2":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
			case "3":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
			case "4":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
		}
	}
	}
	else if(felicidad == "tranquilidad") {
		let genre = prompt (`No es mala decisión. ¿Preferís con letra o solo instrumental?:
1. Con letra
2. Sin letra`);
				switch (genre) {
					case "1":
						let idioma = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varios idiomas`);
					switch (idioma) {
						case "1":
							alert (prompt ("Por último... ¿Su edad?"));
							break;
						case "2":
							alert (prompt ("Por último... ¿Su edad?"));
							break;
						case "3":
							alert (prompt ("Por último... ¿Su edad?"));
							break;
						}
					break;
					case "2":
						alert (prompt ("Por último... ¿Su edad?"));
						break;
				};
				break;
	}
	else{
		alert ("Lamentablemente, no contaba con esa opción");
		break;
	};
	break;

case "3":
let tranquilo = prompt (`Mi decisión favorita :) ¿Preferís con letra o solo instrumental?:
1. Con letra
2. Sin letra`);
		switch (tranquilo) {
			case "1":
				let idioma = prompt (`¿En qué idioma preferís escuchar música?:
1. Inglés
2. Español
3. Varios idiomas`);
			switch (idioma) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				}
			break;
			case "2":
				alert (prompt ("Por último... ¿Su edad?"));
				break;
		};
	break;
case "4":
	let aventura = prompt (`¡Me encanta ese espíritu aventurero! ¿Arrancamos con canciones de antes del 2000 o luego del 2000?
1. antes del 2000
2. Después del 2000`);
	switch (aventura){
		case "1":
			let idioma = prompt (`¿En qué idioma preferís escuchar hoy?:
1. Inglés
2. Español
3. Varios idiomas`);
			switch (idioma) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				}
			break;
		case "2":
			let idiom = prompt (`¿En qué idioma preferís escuchar hoy?:
1. Inglés
2. Español
3. Varios idiomas`);
			switch (idiom) {
				case "1":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "2":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				case "3":
					alert (prompt ("Por último... ¿Su edad?"));
					break;
				}
			break;
	}
break;
default:
	break;
}

