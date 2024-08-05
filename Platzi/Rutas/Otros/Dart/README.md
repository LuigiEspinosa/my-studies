# Curso de Dart desde Cero

- Desarrollador por Google: Presentado en 2011 como una alternativa más moderna a Javascript.
- Influencia: Toma las bases modernas de lenguajes como Java, C#, Ruby y hasta TypeScript.

## Como funciona Dart?

- Dart VM: Es la maquina virtual donde se ejecuta el código necesario para el desarrollo.
- Multiplataforma: Web gracias al convertidor dart2js. Nativo gracias a Flutter y dart2native.
- Just-in-Time: Agregar recursos de desarrollo que facilitan la ejecución y debugueo (hot reload).
- Ahead-of-Time: Optimiza las aplicaciones y remueve recursos innecesarios, creando compilaciones más rápidas

```dart
void main() {
  print('Hello World!');
}
```

## Tipos de datos básicos

### Uso de var

- Inferencia: Son cambiados en tiempo de compilación por la computadora.
- Comodín: Es una forma de usar un comodín que permite despreocuparse por la declaración.

```dart
void main() {
  // String nombre = "Amanda"
  var nombre = "Amanda";
  print(nombre);

  nombre = "Beto";
  print(nombre);
}
```

```dart
void main() {
  // El valor no puede cambiar - Su valor debe ser conocido al momento de compilar
  const nombre = "Amanda";
  print(nombre);
}
```

```dart
void main() {
  // No se conoce el valor al momento de la compilación
  final nombre = "Amanda";
  print(nombre);

  final pi = 3.14;
  print(pi);
}
```

### Tipo dynamic y su uso

- Inferencia: Es igual que el `var`, Dart infiere el tipo de dato.
- Mutabilidad: Puede cambiar su tipo en cualquier momento, debe usarse solo en casos específicos, porque es mucha responsabilidad.

```dart
void main() {
  dynamic nombre = "Amanda";
  print(nombre);

  nombre = "Beto";
  print(nombre);

  nombre = 3.14
  print(nombre);
}
```

## Manipulación de variables

### Declaración de variables

Se declara: Es el lugar donde la variable adquiere el nombre que la identifica y el tipo. i.e. `String nombre` - `int edad`.

### Inicialización de variables

Es cuando la variable adquiere su valor inicial. Puede estar junto a la declaración. i.e.

```dart
void main() {
  String nombre = "Amanda";
  
  int edad;
  edad = 12;
```

### Asignación de variables

Es cuando se reemplaza el valor anterior de una variable por uno nuevo. i.e.

```dart
void main() {
  String nombre = "Amanda";
  nombre = "Beto"
  
  int edad = 12;
  edad = 23;
```

### Incrementación y decrementación de variables (Enteros)

Los números pueden ser incrementados de 1 en 1 con unos operadores `++` o decrementados con `--`.

## Operaciones

```dart
void main() {
  int valor1 = 7;
  int valor2 = 3;

  // Suma
  int resultadoSuma = valor1 + valor2;
  print("El resultado de la suma es: $resultadoSuma");
  
  // Resta
  int resultadoResta = valor1 - valor2;
  print("El resultado de la resta es: $resultadoResta");
  
  // Division: El resultado de la división siempre es Double
  double resultadoDiv = valor1 / valor2;
  print("El resultado de la division es: $resultadoDiv");
  
  // Producto: El resultado del producto, depende del tipo de dato ingresado:
  // int * int = int
  // double * double = double
  // int * double = double
  int resultadoProd = valor1 * valor2;
  print("El resultado del producto es: $resultadoProd");

  // Parte entera del Resultado de una División ~/
  int resultadoIntDiv = valor1 ~/ valor2;
  print("La parte entera de la división es: $resultadoIntDiv");
  
  // Operador módulo %: Nos devuelve el resto entero de una división
  int resultadoModDiv = valor1 % valor2;
  print("El resto entero de la división es: $resultadoModDiv");
}
```

```dart
void main() {
  int valor1 = 8;
  int valor2 = 2;
  
  // Asignamos a valor1 la suma de valor1 + valor2
  valor1 += valor2;
  print("El resultado de valor1 + valor2: $valor1");
}
```

```dart
void main() {
  // Operaciones Lógicas
  bool llueve = true;
  bool haceFrio = false;
  
  // Operación Or: es falsa solo cuando ambas condiciones son falsas, el resto de los casos es verdadera
  bool llevoAbrigo = llueve || haceFrio;
  print("$llueve || $haceFrio == $llevoAbrigo");
  
  // Operador And: Es verdadero solo si ambas variables son verdaderas, el resto de los casos es falsa
  bool llevoAbrigoAND = llueve && haceFrio;
  print("$llueve && $haceFrio == $llevoAbrigoAND");
  
  // Operador Ternario ?: Funciona como un if de forma abreviada
  
  // Operador Negación !: Nos devuelve el valor opuesto de la variable, si es true nos devuelve false y viceversa.
  print(!llueve);
}
```

## Que es una coleccion?

Es una estructura, que representa un grupo de valores mediante una unica variable. Por lo general solo contiene un unico tipo de dato y cada valor puede ser localzado por un indice.

### Beneficios de usar una coleccion

- Esfuerzo: Reduce los esfuerzos de programacion.
- Manipulación: Permiten manipular las estructuras.
- Reutilizacion: Fomenta la reutilizacion de software.

## Coleccion de tipo Lista

Es un tipo de dato que consiste en una secuencia ordenada de valores de un tipo especifico y de tamano variable.

```dart
List <int> = [1,2,3];
List <String> = [''];
```
### Propiedades:

- first
- isEmpty
- isNotEmpty
- length
- last
- reversed

### Funciones:

- add
- insert
- removeAt
- clear

## Coleccion de tipo Set

Es un parecido a una lista, con la diferencia de que **NO** puede tener valores duplicados.

```dart
Set <String> = {};
```

Tienen las mismas propiedades y funciones que una coleccion de tipo Lista. A diferencia de esta, para seleccionar un elemento se utiliaza la funcion `elementAt()` en vez de `[]`.

```dart
Set <String> contries = {'Colombia', 'Panama', 'Guatemala'};
List <String> paises = ['Colombia', 'Panama', 'Guatemala'];

for (int i = 0; i < countries.length; i++) {
  print(countries.elementAt(i));
  print(paises[i]);
}
```

## Collecion de tipo Map

Es una coleccion de pares de llave - valor (Key, value). tambien se les conoce como diccionarios, donde la llave no se puede repetir.

```dart
Map <String, dynamic> _person = {
  'Name': 'Ana',
  'Age': 14,
  'Height': 1.6,
  'Country': 'RD'
};
```

### Propiedades de Map

- keys
- values
- ... Demas propiedades.

### Funciones de Map

- addAll
- remove
- ... Demas propiedades.

## Valores nulos

Cuando el conjunto no tiene una llave asociada, retorna `null`. Null es un tipo de valor que no representa nada, por lo que puede ser comparado medienta un if.

