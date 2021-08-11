// alert("Work!");

const d = document.getElementById("dibujito");
const ancho = d.width;
const textInput = document.getElementById('textInput');

const button = document.getElementById('button');
button.addEventListener('click', dibujoPorClick);

const lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("#4caf50", 400, 1, 1, 1);
dibujarLinea("#4caf50", 399, 399, 399, 1);
dibujarLinea("#4caf50", 1, 1, 1, 400);
dibujarLinea("#4caf50", 1, 399, 399, 399);

// dibujarLinea("#f00", 20, 200, 300, 300);
// dibujarLinea("#00f", 25, 200, 300, 3);
// dibujarLinea("#ffc0cb", 10, 300, 220, 10);
// dibujarLinea("#ff0", 300, 100, 100, 220);

function dibujoPorClick() {
    const color = "#444";

    let lineas = parseInt(textInput.value);
    let espacio = ancho / lineas;

    let xi, xf, yi, yf;
    let nxf, nyf;

    for (let l = 0; l<lineas; l++) {
        xf = espacio * l;
        yi = espacio * (l + 1);
        xi = espacio * l;
        yf = espacio * (l + 1);

        nxf = ancho - xf;
        nyf = ancho - yf;

        dibujarLinea(color, xi, ancho, ancho, nyf);
        dibujarLinea(color, 0, xf, nxf, 0);
        dibujarLinea(color, 0, xf, yi, ancho);
        dibujarLinea(color, xi, 0, ancho, yf);

        console.log("Linea " + (l + 1));
    }
}

function dibujarLinea(colorL, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorL;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}