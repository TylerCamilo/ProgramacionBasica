var imagenes =[];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
/* 
var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho",80,50);
var tocinauro = new Pakiman("Tocinauro",120,40);
*/
//lo anterior lo remmplamos por lo siguiente entre parentesis
var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

for (var pakin of coleccion)
{
    pakin.mostrar();
}


