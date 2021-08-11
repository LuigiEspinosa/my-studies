const canvas = document.getElementById("villa");
const ctx = canvas.getContext("2d");

const imageWidth= 64;
const imageHeight= 64;
const pasos = 10;

let assetsIndex = 0;
let posicionX = 250;
let posiciony = 250;

// Assets
const villaAssets = [
  {
    url:'./img/tile.png',
    esAleatorio: false,
    sePuedeMover: false,
  },
  {
    url:'./img/cerdo.png',
    esAleatorio: true,
    sePuedeMover: false,
  },
  {
    url:'./img/pollo.png',
    esAleatorio: true,
    sePuedeMover: false,
  },
  {
    url:'./img/vaca.png',
    esAleatorio: true,
    sePuedeMover: false,
  },
  {
    url:'./img/lobo.png',
    esAleatorio: false,
    sePuedeMover: true,
  }
]

const teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
}

//Eventos
document.addEventListener('keydown', moverLobo);

// Funcion que  permite cargar assets de forma recursiva
function cargarAssest() {
  if(assetsIndex < villaAssets.length) {
    const assets = villaAssets[assetsIndex];

    assets.imagen = new Image();
    assets.imagen.src = assets.url;
    assets.imagen.addEventListener("load", function(){
      dibujarassets(assets);
    });
  }
}

function dibujarassets(assets) {
    if(assets.esAleatorio) {
      // Dibuja pokemones
      aletorio(1, 2);
      dibujarAnimales(assets.imagen, 1)
    } else {

      let x = assets.sePuedeMover ? posicionX : 0;
      let y = assets.sePuedeMover ? posiciony : 0;

      // Dibuja fondo
      ctx.drawImage(assets.imagen, x, y)

      // Cargar otro asset
      assetsIndex++;
      cargarAssest();
    }
}

function dibujarAnimales(imagen, cantidad) {
  for(let i=0; i < cantidad; i+=1)
  {
    const x = aletorio(0, 6);
    const y = aletorio(0, 6);
    const posX = x * imageWidth;
    const posY = y * imageHeight;
    ctx.drawImage(imagen, posX, posY)
  }

  // Cargar otro asset
  assetsIndex++;
  cargarAssest();
}

function aletorio(min, maxi) {
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) +min;
  return resultado;
}

function moverLobo(evento) {
  assetsIndex = 0;

  switch (evento.keyCode) {
      case teclas.UP:
        posiciony = posiciony - pasos;
      break;
      case teclas.DOWN:
        posiciony = posiciony + pasos;
      break;
      case teclas.LEFT:
        posicionX = posicionX - pasos;
      break;
      case teclas.RIGHT:
        posicionX = posicionX + pasos;
      break;
    default:
        console.log("Tecla incorrecta");
  }

  cargarAssest();
}

// Iniciar App
cargarAssest();