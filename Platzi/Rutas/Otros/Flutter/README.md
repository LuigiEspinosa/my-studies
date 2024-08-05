# Curso de Flutter

## ¿Qué es Flutter?

Flutter es una tecnología híbrida creada por Google para desarrollar aplicaciones nativas (cross platform) en iOS y Android. Su principal objetivo es el diseño de interfaces móviles y está basado en un lenguaje de programación que permite compartir código fuente para ambas plataformas acorde a una lógica de negocio.

Flutter utiliza Dart, un lenguaje de programación originado por Google y que estaría orientado a aplicaciones móviles y web. Se espera que esta plataforma sea el framework principal de aplicaciones para Fuschia que se encuentra en construcción.

### Características de Flutter

Flutter compila directamente hacia el código final que interactúa con el procesador, saltándose los pasos intermedios, por lo que las aplicaciones creadas tienen un mejor desempeño y rendimiento. Esto la diferencia de:

- El desarrollo híbrido de WebView para mostrar código HTML.
- El desarrollo bridge que utiliza renderers intermedios de código para generar apps.

También esta tecnología emplea sus propios Widgets y engine de renderizado llamado Skia Canvas desarrollado en C++.

### ¿Qué es mejor Flutter o React Native?

A diferencia de React Native, Flutter se encarga de realizar vistas personalizadas en lugar de llamar solo los componentes nativos. Esto significa que el mismo render efectuado en Android se hace para iOS, visualmente van a ser iguales, porque trabaja en el pixel perfect.

### Desventaja de Flutter

Sin embargo, tienes como desventaja que si estás usando un patrón de diseño que es particular de Android y lo llevas para iOS (por ejemplo un Float Action Button), provocas que los usuarios de IOS se sientan ajenos a esa interfaz. Por esta razón, algunas funciones o características que no existen en iOS pueden ser más lentas que en Android.

### Ventajas de Flutter

- Cuenta con una gran cantidad de componentes (API, UI, navegación y pruebas).
- Permite programar con un único lenguaje desde diferentes dispositivos (iOS, Mac, Linux).
- Ofrece un mejor rendimiento utilizando Skia como motor al controlar cada pixel.

## Dart

Dart es el lenguaje de programación que usa Flutter para operar. Es un lenguaje de programación que usa el paradigma de Programación Orientada a Objetos (OOP). Ha sido creado por Google y es considerado por algunos como "el lenguaje de programación del futuro" por su versatilidad de uso.

Dart se puede usar en dispositivos móviles con Flutter; en el desarrollo web, a través de un framework para el desarrollo frontend con JavaScript llamado AngularDart, que es una combinación con Angular; e incluso se puede usar en desarrollo backend a través de frameworks para HTTP servers como Aqueduct.

La sintaxis de Dart se parece bastante a Java. Sin embargo, Google ha declarado que Dart está inspirado totalmente en la programación reactiva y estilo de programación de React.js.

## Desarrolladores Android, iOS y Xamarin.forms

### Android

Todo lo que tenemos en las interfaces de Android como: botones, textos, etiquetas, imágenes, etc., proviene (o es una instancia) de la clase padre `View` y todos estos elementos en su conjunto, al final, constituirán a su vez un `View`. El lenguaje de esquematización usado en Android para diseñar y definir la composición de las interfaces es `XML`.

### iOS

De manera similar, en iOS todo lo que tenemos en las interfaces como: botones, textos, etiquetas, etc., proviene (o es una instancia) de la clase principal `UIView`. Para la composición y diseño de las interfaces iOS cuenta con un entorno gráfico dedicado a esta tarea cuyo componente principal son los Storyboards.

### Xamarin / Xamarin.Forms

En el ecosistema de desarrollo multiplataforma de Microsoft y .NET, Xamarin / Xamarin.Forms, los elementos que conforman las interfaces de las aplicaciones: botones, textos, imágenes, etc., son instancias de la clase base `Element` mientras que para el diseño y composición de la interfaz, el lenguaje de esquematización utilizado es `XAML` (derivado de XML).

### Flutter

En Flutter, el equivalente a los Views, UIViews y Elements, con los que se componen las interfaces de las aplicaciones, son los Widgets, de hecho todo en Flutter es en esencia, un Widget, y la forma en que se diseñan y se componen las interfaces es mediante la definición de árboles de Widgets o Widget tree en los que todos los Widget de la interfaz están organizados de forma anidada y representan atributos o propiedades de este árbol.

## Composición de un proyecto en Flutter

Veremos los diferentes tipos de proyectos que podemos crear con Flutter: Flutter Application, Flutter Plugin, Flutter Package o Flutter Module. Para el proyecto que desarrollaremos en este curso escogeremos Flutter Application. Seguidamente indicamos las configuraciones básicas para definir nuestro proyecto como el nombre, ubicación del SDK, ubicación del proyecto, la descripción y el company domain, entre otros.

Una vez completado el proceso de inicialización, Android Studio habrá generado el sistema de archivos del proyecto que contendrá básicamente las siguientes carpetas:

- flutter_app/ : carpeta raíz del proyecto, donde además crearemos entre otras cosas las carpetas donde guardaremos nuestros recursos o assets de la aplicación.

  - android/ : aquí se almacenarán todos los archivos que corresponden a un proyecto Android. Es en esta ubicación donde se encontrarán los archivos de configuración y demás recursos que pudiéramos querer retocar o modificar en Android Studio para comportamientos particulares de la app en esta plataforma, como el FlutterActivity o el AndroidManifest.

  - ios/ : similarmente, aquí se almacenarán todos los archivos que corresponden al sistema operativo iOS. Es en esta ubicación donde se encontrarán los archivos de configuración y otros que pudiéramos querer retocar o ajustar en XCode para comportamientos específicos relacionados con esta plataforma, como el FlutterAppDelegate o el info.plist, entre otros.

  - lib/ : es aquí donde encontramos todos los archivos que corresponden a nuestro proyecto con Dart y donde vive la aplicación Flutter. Todos los archivos que estaremos generando durante el curso se almacenarán en esta carpeta.

Hay un archivo especial llamado pubspec.yaml donde se guardan las configuraciones del proyecto. Este archivo está escrito en el lenguaje YAML, que es un formato de serialización de datos legible por humanos inspirado en XML. En este archivo tendremos que declarar todos los recursos externos o assets que vamos a utilizar en nuestro proyecto como: fuentes de letras, imágenes, etc.

## Programación Declarativa

El estilo de programación que utiliza Flutter se llama Programación Declarativa, inspirado en el estilo de programación de React y que va de la mano con el paradigma de Programación Funcional.

Existen dos tipos de estilos de programación:

- **Programación Imperativa:** es el estilo de programación que más se utiliza en lenguajes de programación tradicionales como Lenguaje C, Java, PHP o JavaScript. En general la programación imperativa se fundamenta en el uso de métodos de clases que reciben parámetros o argumentos sencillos para realizar tareas específicas.

- **Programación Declarativa:** este estilo de programación utiliza como parámetros estructuras un poco más complejas formadas por datos compuestos, objetos, pares propiedad-valor, etc. que en cierta forma es más fácil de leer y más comprensible para el desarrollador. Este estilo de programación es el que usa Flutter.

Básicamente ambos estilos de programación hacen lo mismo, producen los mismos resultados, su diferencia radica esencialmente en la legibilidad y la organización del código.

## Widgets con estado y sin estado

### Widgets con estado o StatefulWidgets

Son todos los widgets con los que el usuario de la aplicación puede tener una interacción directa. Por ejemplo: Checkbox, Radio, Slider, Form. Este tipo de widgets por lo general disparan algún evento, acción o comportamiento determinado como respuesta a la interacción con el usuario.

### Widgets sin estado o StatelessWidgets

Los widgets de este tipo no reaccionan ante el intento de interacción con el usuario. No tienen asociado una acción o comportamiento particular. Son estáticos en la interfaz. Por ejemplo: Icono, Texto, Contenedor con color, entre otros.

Ambos tipos de widgets heredan sus características y comportamientos de una clase principal `Widget`.

Flutter maneja fundamentalmente dos clases de Widgets, los que heredan (o extienden) sus propiedades y comportamientos a partir de la clase StatelessWidget y los que heredan (o extienden) de la clase StatefulWidget. Comprender la diferencia entre estos dos tipos de Widgets será especialmente importante cuando vayamos a programar la lógica de nuestra aplicación.

Lo primero que debemos comprender es qué significan los términos Stateless y Stateful:

- **Stateless:** sin estado. (Que es inmutable. Que no cambia)
- **Stateful:** que posee estado. (Que puede cambiar)

El estado es un concepto propio de la programación funcional, y en términos muy generales se refiere al valor o situación de todo el conjunto de variables, métodos y funciones contenidas en una clase en un momento dado. Para ilustrarlo un poco, sería como una "fotografía" de todos los valores asociados a una clase. Lo peculiar de este concepto es que un estado puede ser mutable, que puede cambiar o ser cambiado en algún momento durante la ejecución de la aplicación, dependiendo de algún evento o variable externa; o, por otro lado, pudiera ser inmutable, que nunca cambia, o que sus valores no dependen de ningún elemento o evento externo o interacción con el usuario.

En síntesis, el State es un tipo de clase particular que almacena la situación, o el estado, de un Widget durante la ejecución de la aplicación y, como parte de su comportamiento, presta atención a los eventos o interacciones externas que le sucedan a éste y que puedan generar una modificación o alteración de sus propiedades, métodos o funciones. Como resultado, el State devuelve una nueva "fotografía", con la nueva situación ya cambiada del Widget y este se vuelve a renderizar en la interfaz.
