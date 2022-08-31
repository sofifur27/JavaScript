let entrada = prompt ("Forme su propia oración o escriba ESC para finalizar");
let texto = " ";
while (entrada != "ESC" && entrada != "esc") {
	texto += entrada + " ";
	entrada = prompt ("Ingrese un texto o ESC para interrumpir");
}
alert (texto);
