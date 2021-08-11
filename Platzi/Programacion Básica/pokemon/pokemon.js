var imagenes = [];

imagenes['Squirtle'] = './img/cerdo.png';
imagenes['Bulbasaur'] = './img/pollo.png';
imagenes['Charmander'] = './img/vaca.png';

var coleccion = [];

coleccion.push(new Pokemon("Squirtle", "Agua", 100, 30));
coleccion.push(new Pokemon("Bulbasaur", "Planta", 80, 50));
coleccion.push(new Pokemon("Charmander", "Fuego", 120, 40));

for (var p of coleccion) {
    p.mostrar();
}