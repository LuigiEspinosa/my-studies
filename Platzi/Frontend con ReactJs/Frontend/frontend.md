# Curso de Frontend Developer

## Introducción

### HTML

Son siglas en Inglés para HyperText Markup Language o Lenguaje de marcado de hipertexto. Nos sirve para estructurar toda nuestra página web, colocar text, imágenes, botones, videos, etc.

### CSS

Son las siglas en inglés para Cascading Style Sheets u Hoja de estilos en cascada. Se encarga de darle los estilos y/o diseño al sitio web. Nos permite estilizar nuestra estructura HTML.

### Motores de renderizado

Cuando escribimos nuestros archivos HTML y CSS con determinada etiquetas el navegador para poder entender hace uso de un motor que le permite renderizar en píxeles lo que hemos programado.

### Pasos del motor de renderizado

1. Transforma el HTML en objetos que el navegador puede entender que lo conocemos como DOM (Document Object Model).
2. Calcula cada uno de los estilos que tiene que ir en cada uno de los nodos (elementos HTML). Agarra cada uno de los estilos y los añade a cada uno de los elementos del DOM.
3. Calcula la dimensión de cada nodo, es decir, su posición, tamaño, estructura de todo el sitio.
4. Pinta las diferentes cajas, ya teniendo todo lo anterior cargado.
5. Agarra cada uno de los componentes que ya cargados, puede ser en diferents capas, realiza una captura y eso es lo que se renderizará en el navegador.

## Maquetación con HTML

### Anatomía de un elemento HTML

- **Sintáxis:** Nos da la estructura de todas las etiquetas.
- **Atributos:** Los colocamos en las etiquetas de apertura y cada uno tiene una función específico según sea la etiqueta.
- **Anidamiento:** Podemos colocar etiquetas dentro de otras etiquetas, las vamos a colocar según la estrucutra que necesitemos.
- **Elementos vacíos** No todos las etiquetas tienen etiqueta de cierra y para que funcionen necesitan atributos.

### Anatomía de un documento HTML

- **!DOCTYPE** Le indica al navegador que el documento que está por leer es un documento HTML.
- **html** Es dónde irá encerrado todo nuestro documento HTML.
- **head** Es la cabecera donde colocaremos las cosas que no ve el usuario pero que son necesarias para el funcionamiento de nuestro sitio.
- **body** Dentro de esta etiqueta irá todo el contenido visual del sitio web.

### ¿Qué es el HTML semántico?

Todos los sitios web tienden a compartir componentes similares.

- Cabecera: ``<header> </header>``
- Barra de navegación: ``<nav> </nav>``
- Contenido prinicipal: ``<main> </main>``
- Varias subsecciones de contenido representado por: ``<article> </article>``, ``<section> </section>``, ``<div> </div>``
- Recuadro: ``<aside> </aside>`` a menudo colocado al interior de un ``<main> </main>``
- Pie de página: ``<footer> </footer>``

### Ventajas de usar HTML Semántico

- Mejora la accesibilidad:
  Las herramientas que utilizan una persona con discapacidad para usar la web utilizan las etiquetas para saber mejor dónde se encuentran.

- Mejora el posicionamiento SEO:
  Los buscadores bonifican a los sitios donde se utiliza el concepto de HTML semántico y penaliza a los sitios dónde no se usa.

- Nos permite tener un código mucho más claro, ligero y fácil de leer. Al tener cada sección con su respectiva etiqueta facilita el desarrollo y mantenimiento.

![HTML Page Structure](https://luis-ariza.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3955482a-82bc-455f-984d-388930188983%2FUntitled.png?table=block&id=a7148ffa-0d8a-4208-a26e-c20283af051d&spaceId=c7b8315d-dd68-4df0-89bf-78f67729047e&width=1630&userId=&cache=v2)

### Etiquetas de HTML más usadas

- **Layout**
  Cuando hablarmos de layout estamos hablando del diseño de nuestra página. Las etiquetas que utilizamos aquí son la base de donde va a ir el contenido.

- **Enlaces**
  Vamos a poder colocar diferentes enlaces para que el usuario le dé click o tap y nos redireccione dentro o fuera de nuestro sitio.

- **Textos**
  - h1 ... h6
    Nos indica la importancia de diferentes textos desde el más importante (h1) hasta elmenos importante (h6)

  - p
    Lo usamos para estructurar los párrafos.

  - span
    Semánticamente no tiene ningún significado al igual que ``<div> </div>``, es un comodín, nos ayuda a diferenciar cierto texto dentro de un párrafo.

- **Formularios**
  - form
    Es el lugar donde va a ir todo nuestro formulario.

  - input
    Hay muchos tipos de inputs.

  - label
    Es el texto que nos indica que tenemos que hacer con cierto input en particular.

  - button
    Nos permite enviar los formularios y hacen parte de otras partes de nuestra página si queremos.

## Maquetación con CSS

- **Selector**
  Es el medio que nos comunica entre el HTML y el CSS, con él podemos decir que etiqueta, clase o id queremos estilizar.

- **Propiedad**
  Hay muchos tipos y es el tipo o clase de estilos que queremos aplicar.

- **Valor**
  Es el valor que queremos que tenga nuestra propiedad.

### Tipos de selectores: básicos y combinaciones

Básicos

- De tipo: ``div { ... }``
- De clase: ``.elemento { ... }``
- De ID: ``#id-del-elemento { ... }``
- De atributo: ``a[href="..."] { ... }``
- Universal: ``* { ... }``

Combinaciones

- Descendientes: ``div p``
- Hijo directo: ``div > p``
- Elemento adyacente: ``div + p``
- General de hermanos: ``div ~ p``

### Tipos de selectores: pseudoclases y pseudoelementos

Los **pseudoclases** nos permite llegar a aquellas acciones que hace el usuario.

- ``:active``
- ``:focus``
- ``:hover``
- ``:nth-child(n)``

Los **pseudoelementos** nos permiten acceder a elementos de HTML que no son accesibles con los selectores ya vistos.

- ``::after``
- ``::before``
- ``::first-letter``
- ``::placeholder``

> Las pseudoclases se escriben con ``:`` y los pseudoelementos se escriben con ``::``

### Cascada y especificada en CSS

#### Stylesheets cascade

Esto significa que el orden de las reglas CSS importa, cuando se aplican dos reglas que tienen igual especificidad, la que vienen en último lugar en el CSS es la que se utilizará.

#### Especifidad

La especificidad es el medio por el que los navegadores deciden qué valores de propiedades CSS son los más relevantes para un elemento y, por tanto, se aplicarán. La especifidad se basa en reglas de corcondancia que se componen de diferentes tipos de selectores CSS. La cantidad de especifidad que tiene un selector se mide utilizando cuatro valores diferentes (o componentes).

![Especificidad CSS](https://luis-ariza.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6f605846-48d3-4399-8019-88e404356507%2FUntitled.png?table=block&id=6350a0a8-b55b-4e79-b48f-b5b37298928b&spaceId=c7b8315d-dd68-4df0-89bf-78f67729047e&width=1250&userId=&cache=v2)

>
> No utilices ``!important`` si se puede evitar.
>

### Tipos de display más usados: block, inline e inline-block

- **Block**
  Una de sus características es que ocupan todo el width disponible en pantalla por defecto, se le puede agregar o cambiar el ancho y largo.

- **Inline**
  El espacio que ocupa es el espacio que tiene como contenido, no se le puede modificar su width y height.

- **Inline-block**
  Agarra lo mejor de inline y de block, el espacio que ocupa es el espacio que tiene como contenido y además se le puede modificar su width y height. Su visualización es de tipo inline pero tiene caracterísitcas de block.

### Tipos de display más usados: flexbox y CSS grid

Tanto Grid como Flexbox se utilzan para ayudar a diseñar la estructura de una página web, aunque con diferencias entre ellas. Cada una tiene unas ventajas de uso según las características del proyecto que vayas a relizar y, según cada caso cocncreto, te interesará utilizar una o la otra.

- Flexbox se introdujo por primera vez en el 2009 como un nuevo sistema de formateo, de manera que puedas construir páginas responsive y organizar tus elementos fácilmente sin necesidad de utilizar técnicas demasiado complejas.

- Grid hizo su aparición con la idea de mejorar flex, y extender su uso más allá de barras horizontales y verticales de elementos, llegando incluso al maquetado completo de páginas web, con un diseño responsive y con más fácil mantenimiento.

La diferencia básica entre ambas está en que CSS Grid está basada en un formato de dos dimensiones, mientras que CSS Flexbox está basada en un formato de una sola dimensión.

### Estilos del modelo de caja

- Margin
  El estilo de margin puede ser un espacio externo de la caja hacia el exterior, la distancia que hay de un elemento y otro,

- Border
  Puede estar o no. Es la o las líneas que bordean un elemento por defecto viene transparente pero es posible agregarle color, grosor, etc.

- Padding
  Es disitinto al margin, ya que no es un espacio externo sino que es un espacio en el interior de la caja hacia dentro. Nos ayuda a posicionar el contenido de la caja.

- Contenido
  Puede ser cualquier cosa que sea visible, ya sea un texto, imágenes, vídeos, etc.

- Width
  Es lo largo o ancho que tiene la caja contenedora o el contenido.

- Height
  Es el alto que tiene o queremos que tenga el contenido.

![Model de Caja](https://luis-ariza.notion.site/image/https%3A%2F%2Fstatic.platzi.com%2Fmedia%2Fuser_upload%2FUntitled-4d0071c3-9c0f-445a-a59f-bc1d84f04898.jpg?table=block&id=5631365d-e65a-4691-a51e-5e0279607205&spaceId=c7b8315d-dd68-4df0-89bf-78f67729047e&width=1440&userId=&cache=v2)

### Buenas prácticas

Es una buena práctica resetear las propiedades que el navegador implementa por defecto, lo hacemos con el selctor universal ``*``.

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

#### box-sizing: border-box

Con esta propiedad y este valor podemos hacer un cáculo automático para que el padding y border no se salgan de las dimensiones que queremos para nuestro elemento.

### Colapso de márgenes

![Colápso de márgenes](https://luis-ariza.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11699c61-348d-409b-9709-05bdc5adebbb%2FUntitled.png?table=block&id=17cf95c0-6d67-4f04-8aea-e497035949fb&spaceId=c7b8315d-dd68-4df0-89bf-78f67729047e&width=1350&userId=&cache=v2)

## Posicionamiento en CSS

### ¿Qué es position?

Es la forma en la que podemos posicionar los contenedores, cajas o etiquetas de HTML cuando lo utilizamos.
Existen diferentes position en CSS, pero todas las etiquetas en HTML vienen por defecto con el position static. Exsiten:

- **Absolute**
  El elemento sale de su lugar y el navegador reacomoda los elementos, podemoso colocarlo como queramos.

- **Relative**
  El elemento mantiene su lugar, pero podemos posicionarlo como queramos. Podemos usarlo como contenedor para que los elementos que tengan un position absolute tomen como referencia al padre que nosotros queremos.

- **Fixed**
  Este valor nos permite que el elemento que queramos nos siga a todos lados desde el momento en el que nos topemos con él.

- **Sticky**
  Es similar a fixed con la diferencia que cuando se encuentra a otro elemento con su mismo position, sticky, le da lugar al elemento.

- **Initial**
  Vuelve el position de un elemento como estaba originalmente.

- **Inherit**
  Lo usamos si queremos que nuestro elemento herede el position de su padre.

- **Left, top, right y bottom**
  Con estas cuatro propiedades podemos mover a los elementos que tengan como position a absolute, relative, fixed o sticky a los lugares que queramos.

### Z-index y el contexto de apilamiento

Básicamente son capas que hay una encima de la otra, entonces a medida que vas poniendo más y más estas se van apilando. Esto es por el uso del ``position`` junto a la propiedad ``z-index``, porque ahora estamos trabajando en el eje Z.

## Diseño responsivo

### Unidades de medida

#### Medidas absolutas

Es la unidad de medida que no va a cambiar sin importar el tamaño de la pantalla. Una unidad absoluta pueden ser los píxeles.

#### Medidas relativas

Estás si se pueden cambiar en relación con el dispositivo que estamos viendo, variando según dea el tamaño de la pantalla.

- **em**
  Es un acrónimo de elemento, va a tomar el tamaño de fuente que tenga el padre directo. Por defecto 1em es 16px.

- **rem**
  Esta medida relativa siempre va a tener referencia o correlación con el estilo que tenga la etiqueta root o el root de nuestro proyecto. por defecto el font-size es de 16px.

  >
  > Tip
  > Definir el tamaño default a 10px con:
  >
  > ```css
  > html {
  >   font-size: 62.5%;
  > }
  > ```
  >

- **vw**
  Lo que hace esta unidad relativa es que toma como referencia el tamaño del viewport o pantalla.

- **vh**
  Lo que hace esta medida relativa es que toma como referencia el alto del viewport o pantalla.

- **min-width y max-width**
  Una regla importante cuando los usamos es que necesitamos tener un width base que casi siempre es en porcentajes. Lo que sucede es que limitan el crecimiento del contenedor o la reducción del mismo.

- **min-height y max-height**
  En este caso no necesitamos un height base. Se utiliza para evitar problemas de overflow. Le decimos que la altura del contenedor va a ser _x_, pero si tiene contenido que exceda esa altura mínima o por el contrario, limitamos el alto máximo.

>
> **Buenas prácticas**
>
> - Es bueno utilizar el rem y em
> - No es bueno tener un scroll horizontal en mobile.
>

## ¿Qué es responsive?

Es para que nuestro proyecto web puede ser multiplataforma, que se vea bien en diferentes dispositivos.

### Media queries

Podemos modificar el layout cuando la pantalla del dispositivo sea pequeña se ve de una forma, pero sí es más grande el contenido se adapte.

- **Breakpoint**
  Es la dimensión del viewport, es decir, el width y height de la pantalla en dónde vamos a generar un cambio.

- **Min-width**
  Cuando la pantalla sea igual o más grande que el valor dado el código dentro del media querie se va a ejecutar.

- **Max-width**
  Cuando la pantalla sea igual o más pequeá que el valor dado el código dentro del querie se va a ejecutar.

### La mejor forma de aplicarlos

Tiene como nombre Mobile First o Mobile Only. Esto quiere decir que el proyecto ya debe estar diseñado para dispositivos móviles, ya no debemos preocuparnos por que se vea bien desde una laptop. Parte de un mobile y va creciendo según el dispositivo.

### ¿Cómo se utiliza?

1. Arriba de los media qeuries vamos a tener el código base.
2. Vamos a generar un diferentes breakpoint para realizar cambios según el dispositivo.
3. Normalmente se crean para: iPad, Tablets, Netboosk, Laptop y Monitores grandes.

### Aplicado directamente desde HTML

Este método se utiliza dependiendo del dispositivo dónde este el usuario va a necesitar un archivo CSS u otro, es para evitar que se carguen los archivos que el usuario no va a utilizar.

Los agregamos en el ``<head> </head>``, aquí en vez de ligar un archivo de CSS vamos a ligar más de uno dependiendo de los dispositivos.

```html
  <link rel="stylesheet" href="style.css"> <!-- Los dispositiivos mobiles -->
  <link rel="stylesheet" href="tablet.css" media="screen and (min-width: 768px)">
  <link rel="stylesheet" href="desktop.css" media="screen and (min-width: 1024px)">
```

![Media Queries](https://luis-ariza.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe10a8cf1-0442-4010-a643-b8af6e676f19%2FUntitled.png?table=block&id=7763bed4-72cb-44ae-85e7-ebe04784c63c&spaceId=c7b8315d-dd68-4df0-89bf-78f67729047e&width=1470&userId=&cache=v2)

## Arquitectura CSS

### ¿Qué son y para qué nos sirven las arquitecturas CSS?

Sirven para mantener un orden y una coherencia durante todo el proyecto. Tiene los siguientes objetivos:

- **Predecibles:** Escribir reglas claras.
- **Reutilizable:** No escribir código redundante.
- **Mantenible:** Que sea fácil de leer y adaptable a los estándares.
- **Escalable:** Que pueda crecer fácilmente sin afectar el rendimiento.

Estos objetivos se deben ver reflejados en buenas prácticas que debe conocer todo el equipo involucrado en el proyecto como:

- Establecer reglas.
- Explicar la estructura base.
- Evitar largas hojas de estilo.
- Establecer estándares de codificación.
- Evitar largas hojas de estilo.
- Documentación.

### OOCSS, BEM, SMACSS, ITCSS y Atomic Design

Las metodologías o Arquitecturas CSS nos ayudarán a escribir código CSS más predecible, reutilizable, mantenible y escalable.

#### CSS Orientado a Objetos (OOCSS)

Nos permite separar el contenedor y el contenido con "objetos" CSS. Al igual que cualquier método de codificación basado en objetos, el objetivo de OCSS es fomentar la reutilización de código y, en última instancia, hojas de estilo más rápidas y eficientes que son más fáciles de agregar y mantener.

1. Estructura y piel separadas.
2. Contenedor separado y contenido.

#### Blocks, Elements and Modifiers (BEM)

Es una abreviatura de los elementos clave de la metodología, significa modificador de Bloques de Elementos por sus siglas en inglés. Sugiera una manera estructura de nombrar nuestras clases, basado en las propiedades del elemento en cuestión. Cuando utilizamos la metodología BEM, hay que tomar en cuenta que solamente podemos usar nombres de clases (no IDs). Los nombres de clases permiten repetir el nombre si es necesario y crear una estructura de código más consistente.

#### Scalable and Modular Architecture for CSS (SMACSS)

El núcleo de la Arquitectura en CSS escalable y modular está la categorización. Al clasificar las reglas CSS, comenzamos a ver patrones y podemos definir mejores prácticas en torno a cada uno de estos patrones. El objetivo principal de esta metodología es reducir la cantidad de código y simplificar el mantenimiento. Para ello, se dividen los estilos en cinco partes.

1. **Reglas básicas:**
  Se establen los estilos por defecto de los elementos HTML individuales.

2. **Reglas del Layout:**
  Se divide la página en secciones y se asignan los estilos relacionados con su estructura.

3. **Reglas de módulos:**
  Elementos que pueden ser reusables, modulares e independientes del contexto.

4. **Reglas de estados:**
  Se define el comportamiento del layout y sus módulos en diferentes estados.

5. **Reglas de temas:**
  Estilos que afectan el layout y módulos. Estas reglas son opcionales, y las puedes utilizar para estilos que puede que quieras reemplazar.

#### Scalable and Maintainable CSS Architecture - Xfive

ITCSS es una arquitectura que tiene como principal objetivo estructurar la forma en la que escribimos CSS.

- **Configuración:**
  Se utiliza con preprocesadores y contiene fuentes, definiciones de colores, etc.

- **Herramientas:**
  Mixins y funciones de uso global. Es importante no generar ningún CSS en las 2 primeras capas.

- **Genérico:**
  Restablecer y/o normalizar estilos, definiciónde tamaño de caja, etc. Esta es la primera capa que genera CSS real.

- **Elementos:**
  Estilo para elementos HTML desnudos. Estos vienen con un estilo predeterminado del navegador para que podamos redefinirlos aquí.

- **Objetos:**
  Selectores basados en clases que definen patrones de diseño no decorados, por ejemplo, objetos de medios conocidos de OOCSS.

- **Componentes:**
  Componentes específicos de la interfaz de usuario. Aquí es donde tiene lugar la mayor parte de nuestro trabajo y nuestros componentes de la interfaz de usuario a menudo están compuestos de objetos y componentes.

- **Utilidades:**
  Utilidades y clases auxiliares con la capacidad de anular cualquier cosa anterior al triángulo, por ejemplo. Ocultar clase auxiliar.

#### Atomic Design

El diseño atómico es una metodología para crear sist4mas de diseño. Hay cinco niveles distintos:

- **Átomos:**
  Son los componentes básicos de la materia. Aplicados a las interfaces web, los átomos son nuestras etiquetas HTML.

- **Moléculas:**
  Son grupos de átomos unidos entre sí y son las unidades fundamentales más pequeás de un compuesto.

- **Organismos:**
  Nos dan algunos bloques de cosntrucción para trabajar.

- **Plantillas:**
  Emepzamos a generar un contenido con más sentido para nuestros clientes y el resultado final.

- **Páginas:**
  Son instancias específicas de las plantillas. Aquí, el contenido del marcador de posición se reemplaza con contenido representativo real para dar una descripción precisa de lo que un usuario finalmente verá.
