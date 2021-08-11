const paint = document.getElementById('paint');
const ctx = paint.getContext('2d');

let teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

let x = 200;
let y = 200;
let xM, yM;
let estado;

document.addEventListener('keydown', detectarTeclado);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', mouseUp);

dibujarLinea("#f00", x-1, y-1, x+1, y+1, ctx);

function mouseDown(evento) {
    estado = 1;
    xM = evento.layerX;
    yM = evento.layerY;
}

function mouseMove(evento) {
    let colorLinea = "#f0f";

    if (estado == 1) {
        dibujarLinea(colorLinea, xM, yM, evento.layerX, evento.layerY, ctx);

        xM = evento.layerX;
        yM = evento.layerY
    }
}

function mouseUp(evento) {
    estado = 0;
    xM = evento.layerX;
    yM = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function detectarTeclado(evento) {
    var colorLinea = '#00f';
    var movimiento = 10;

    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujarLinea(colorLinea, x, y, x - movimiento, y, ctx);
            x = x - movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorLinea, x, y, x, y - movimiento, ctx);
            y = y - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorLinea, x, y, x + movimiento, y, ctx);
            x = x + movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorLinea, x, y, x, y + movimiento, ctx);
            y = y + movimiento;
            break;
    
        default:
            break;
    }

    // console.log('Tecla oprimida');
    // console.log(evento.keyCode);
}