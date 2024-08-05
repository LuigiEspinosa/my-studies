// TODO ES UN OBJETO Y TODOS HEREDAN DE LA CLASE OBJECT

// VARIABLES

// No es fuertemente tipado
var nombre = 'Cuatro';

// Usamos esta palabra clave dynamic cuando pensamos que el tipo de dato cambiará en el futuro.
dynamic nombre = 'Cuatro';

// Podemos especificar el tipo de dato
String nombre = 'Cuatro';

// CONSTANTES
// const debe tener asignado el valor en tiempo de compilación y final en tiempo de ejecución.

final nombre = 'Cuatro';
final String nickname = 'Luigi';

const nombre = 'Cuatro';
const String nickname = 'Luigi';

// TIPOS DE DATOS

// numbers: int, double
int x = 10;
double y = 20.67;

// strings: '' y "" son equivalentes
String word = 'palabra';
var palabra = 'palabra';

// También podemos usar var

String palabraDoble = "palabra Doble Comilla";

String textoMultilinea = '''Un texto
multilinea''';

String variable_name = """Otro texto
multilinea""";

// booleans: true or false
bool verdadero = true;

// lists:
var lita = [11, 12, 13];

// maps:
var dias = {
  // Key: Value
  'Lu': 'Enero',
  'Ma': 'Martes',
  'Mi': 'Miércoles'
};

var meses = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo'
};

// FUNCIONES
// A una función se le pueden asignar valores que pasan como parámetros y ademas puede devolver un dato.
void myFunction(param1, param2, param3) {...}

// LA FUNCIÓN main() Es el punto de entrada de una aplicación
void main() {
  querySelector('#sample_text_id')
    ...text = 'Click me!'
    ...onClick.listen(reverseText);
}

// CONTROL DE FLUJO
if and else
for loops
while and do-while loops
break and continue
switch and case
assert

// EXCEPCIONS

// Throw
throw FormalException('Expected at least 1 section');

// Catch
try {

} on OutOfLlamasException {

} on Exception catch(e) {

} catch (e) {

}

// CLASES Y CONSTRUCTORES

class Point {
  num x, y;

  // Syntactic sugar for setting x and y
  // Before the constructor body runs.
  Point(this.x, this.y);
}

// HERENCIA
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ...
}

class SmartTelevision extends Television {
  void turnOn() {
    _boolNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ...
}

// SOBREESCRITURA DE MÉTODOS
class SmartTelevision extends Television {
  @override

  void turnOn {...}
  // ...
}

// ENUM
enum Color { red, green, blue}
