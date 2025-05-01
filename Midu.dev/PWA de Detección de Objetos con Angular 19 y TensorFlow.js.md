> [!info]
> [Crea una PWA de Detección de Objetos con Angular 19 y TensorFlow.js - Cursos de Programación y Desarrollo Web | midudev](https://midu.dev/curso/creando-pwa-angular19-deteccion-objetos)

## Introducción a las PWA

Una **Progressive Web Application** (PWA) es una potente combinación de aplicaciones web y aplicaciones móviles nativas. Se ejecutan en un navegador, pero tienen la capacidad de ser instaladas en dispositivos móviles o de escritorio, funcionando incluso sin conexión a internet.

1. Instalables
2. Offline First
3. Rápidas y Eficientes

## Introducción a Signals

Una Signal es sencillamente una **especie de wrapper** alrededor de un valor. Este valor notificará a todos sus consumidores interesados una vez que cambie. Las Signals pueden contener cualquier valor, desde datos primitivos hasta estructuras de datos complejas.

Para **leer una Signal**, necesitamos llamar a su función getter. Podemos crear Signals que sean **writable** (escribibles) o **readonly** (de solo lectura).

Cuando declaramos una Signal, debemos asignarle un valor por defecto.

## Reactividad en Angular

La **reactividad** es la capacidad de una aplicación para reaccionar automáticamente a los cambios en los datos y el estado. Esto significa que cualquier modificación en los datos actualizará la interfaz de usuario sin intervención manual por parte del desarrollador.

Dentro de la reactividad, vamos a conocer las **Computed Signals**. Estas Signals calculan su valor basado en otras Signals.

Recuerda que las **Computed Signals** son de solo lectura y no se pueden reasignar.

Finalmente, hablemos de los **Efectos**, que son funciones reactivas diseñadas para ejecutar lógica basada en cambios de Signals. Se utilizan comúnmente para tareas como monitoreo o registro de cambios.

## Control de Flujo en Angular

El nuevo **Control Flow Syntax** de Angular, que introduce directivas estructurales como `@if`, `@else`, `@for`, `@switch`, `@case`, y `@default`. Estas directivas presentan una forma más declarativa y eficiente de manejar la lógica de control en nuestras aplicaciones.

Las nuevas directivas no solo hacen que nuestro código sea más limpio, sino que también optimizan el **bundle** final, lo que resulta en un mejor rendimiento general de la aplicación. Además, el **type safety** mejora considerablemente, lo que permite a los desarrolladores trabajar de manera más cómoda y segura.
