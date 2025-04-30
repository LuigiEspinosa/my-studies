> [!info]
> [Aprende lo último de JavaScript (ES2023 & ES2024) - Cursos de Programación y Desarrollo Web | midudev](https://midu.dev/curso/aprende-lo-ultimo-de-javascript)

## Arrays

### Nuevo método `.at()` para Arrays

El método `at()` recibe un número entero como parámetro y lo utiliza para acceder a esa posición del array. **Si el número es negativo, empezará a contar desde el final del array.**

Igual que con los corchetes `[]`, el método `at()` también devuelve `undefined` si el índice que le pasamos no existe.

### Facilita cambios inmutables en arrays con el método` array.with()`

El método `with()` de los arrays en JavaScript permite crear una **copia** de un array y modificar un valor en un índice específico de manera inmutable, es decir, sin alterar el array original.

### Agrupa datos en JavaScript utilizando `Object.groupBy`

`Object.groupBy` es una nueva adición a JavaScript, introducida en las últimas versiones, y su función principal es agrupar elementos de un array según el resultado de aplicarles una función `callback`.

Lo que hace es devolver un objeto donde las propiedades representan las claves que definen los grupos, y los valores son arrays con los elementos que corresponden a cada grupo.

La función `Object.groupBy` toma dos parámetros:

- Un array
- Una función `callback` que toma un elemento del array como parámetro y devuelve una clave para agrupar los elementos.

### Realiza operaciones de conjuntos con los métodos de `Set` en JavaScript

Las estructuras de datos `Set` han recibido nuevos métodos que permiten realizar operaciones de conjuntos en JavaScript. Estos métodos son `intersection()`, `union()`, `difference()` y `symmetricDifference()`, `isSubsetOf()`, `isSupersetOf()` y `isDisjointWith()`.

#### Intersección

La intersección de dos conjuntos es aquel conjunto que tiene elementos que están presentes en ambos conjuntos. En JavaScript, podemos realizar intersecciones de conjuntos utilizando el método `intersection()`.

#### Union

La unión de dos conjuntos es aquel conjunto que tiene todos los elementos de ambos conjuntos. En JavaScript, podemos realizar uniones de conjuntos utilizando el método `union()`.

#### Diferencia

La diferencia de dos conjuntos es aquel conjunto que tiene todos los elementos de uno de los conjuntos, pero no tiene los elementos de otro conjunto. En JavaScript, podemos realizar diferencias de conjuntos utilizando el método `difference()`.

#### Symmetric Difference

La diferencia simétrica de dos conjuntos es aquel conjunto que tiene todos los elementos de uno de los conjuntos, pero no tiene los elementos de otro conjunto.

Además, tiene todos los elementos de otro conjunto, pero no tiene los elementos de uno de los conjuntos. En JavaScript, podemos realizar diferencias simétricas de conjuntos utilizando el método `symmetricDifference()`.

#### Subconjunto

Un subconjunto de un conjunto es aquel conjunto que contiene todos los elementos de otro conjunto. Para saber si un conjunto es un subconjunto de otro, podemos utilizar el método `isSubsetOf()`.

#### Superconjunto

Un superconjunto de un conjunto es aquel conjunto que contiene todos los elementos del otro conjunto. Para saber si un conjunto es un superconjunto de otro, podemos utilizar el método `isSupersetOf()`.

#### Disjuntos

Y, finalmente, para revisar si dos conjuntos no comparten ningún elemento en común, podemos utilizar el método `isDisjointWith()`.

## Promesas

### `Promise.allSettled()`

`Promise.allSettled()` es un método de JavaScript que toma un array de promesas y devuelve una sola promesa que se resuelve cuando todas las promesas dadas se han completado, ya sea que se hayan cumplido (fulfilled) o rechazado (rejected).

A diferencia de `Promise.all()`, que se rechaza si cualquiera de las promesas se rechaza, `Promise.allSettled()` proporciona una forma de conocer el resultado de cada promesa, sin importar su estado final.

La diferencia más importante entre `Promise.all()` y `Promise.allSettled()` es que `Promise.allSettled()` siempre resuelve, independientemente de si se hayan resuelto o rechazado las promesas.

**En los resultados tendremos un array de objetos**, donde cada objeto es la promesa (según el orden que hemos usado en el array que le pasamos a `Promise.allSettled()`) y su estado final.

Si la promesa se resuelve correctamente, tendremos un objeto con el estado `fulfilled` y el valor de la promesa como propiedad `value`.

Si la promesa se rechaza, tendremos un objeto con el estado `rejected` y la razón por la que se rechazó como propiedad `reason`.

### `Promise.any()`

`Promise.any()` es un método de JavaScript que te permite quedarte con la promesa que resuelve más rápido. Este método es muy útil cuando se trabaja con promesas que pueden resolverse en diferentes momentos y quieres saber cuál de ellas resuelve primero.

`Promise.any()` toma un array de promesas y devuelve una sola promesa que se resuelve cuando una de las promesas que se le pasan como parámetro ha sido resuelta.

Si todas las promesas se han resuelto, devuelve la primera promesa que se resuelve.

`Promise.any()` y `Promise.race()` son dos métodos de JavaScript que se utilizan para manejar promesas en paralelo. Sin embargo, hay una diferencia clave.

`Promise.any()` devuelve la primera promesa que se resuelve, mientras que `Promise.race()` devuelve la primera promesa que se completa (ya sea resuelta o rechazada).

### `Promise.try`, envuelve resultados de funciones en promesas

`Promise.try()` toma una función (puede devolver un valor o lanzar un error, de manera sincrónica o asincrónica) y envuelve su resultado en una promesa. Esto simplifica el manejo de funciones que podrían comportarse de forma síncrona o asíncrona, permitiéndote gestionar todo como promesas sin preocuparte.

¿Por qué no envolver simplemente tu callback con `Promise.resolve`? Hay una diferencia clave y es que el callback que le pasamos al `then()` siempre se ejecuta de forma asíncrona.

En cambio `Promise.try` intenta ejecutar la función de manera sincrónica y, si puede, resuelve la promesa inmediatamente.

Además, al combinar `Promise.try()` con `.catch()` y `.finally()`, puedes manejar tanto errores síncronos como asíncronos en una sola cadena de promesas. Esto hace que el manejo de errores con promesas sea muy similar al manejo de errores en código sincrónico, lo que lo vuelve más simple y predecible.

Este comportamiento permite que `Promise.try()` capture y maneje errores de cualquier tipo (sincrónicos o asíncronos) en un flujo uniforme, mientras que `Promise.resolve` es algo más limitado o requiere más código.

### `Promise.withResolvers`, manejo simplificado de promesas y sus resoluciones

`Promise.withResolvers()` es un método estático que simplifica la creación y manejo de promesas al devolver un objeto con tres propiedades clave: `promise`, `resolve`, y `reject`. **Este patrón facilita el manejo y control de las resoluciones** y rechazos de las promesas, especialmente en casos donde necesites tener acceso explícito a esos métodos fuera del contexto de la promesa.

El método `Promise.withResolvers()` simplifica la creación de promesas al proporcionarnos un objeto con `resolve` y `reject`, permitiéndonos manejar resoluciones o rechazos sin tener que escribir la estructura completa de `new Promise()`. Esto hace que nuestro código sea más limpio y fácil de entender.

Este método es útil en escenarios donde necesitas crear una promesa pero no quieres inmediatamente resolverla o rechazarla, o donde el control sobre la resolución de la promesa ocurre fuera de la función en la que fue creada.

## Nuevos Operadores

### Nullish Coalescing Operator (`??`) en JavaScript

El **Nullish Coalescing Operator** (`??`) es una característica de JavaScript que permite proporcionar un valor alternativo cuando una variable es `null` o `undefined`. Es especialmente útil para manejar valores predeterminados sin los inconvenientes del operador `||` que considera otros valores “falsy”.

A diferencia del operador `||`, el operador `??` solo revisa si el valor es `null` o `undefined` en lugar de _falsy_. Esto es muy útil cuando queremos un valor predeterminado sin alterar valores como `0` o `""`, que son _falsy_ pero podrían ser válidos según el contexto.

### Operadores de asignación lógica `&&=`, `||=`, `??=`

##### Operador `&&=`

El operador `&&=` asigna un valor solo si la variable ya es “truthy”.

##### Operador `||=`

El operador `||=` asigna un valor solo si la variable es “falsy”.

#### Operador `??=`

El operador `??=` asigna un valor solo si la variable es `null` o `undefined`.

Además de que el código queda más corto, **también evitamos la asignación en el caso de que no sea necesario.**

Dicho de otra forma, si no se cumple la condición según el operador, en el caso de `&&=`, `??=` y `||=` **no se realiza ninguna asignación** mientras que en el caso de `&&`, `||` y `??` se realiza siempre independientemente de si la condición se cumple o no.

## Clean Code

## Numeric Separator, mejora la legibilidad de tu código

Los separadores numéricos te permite añadir guiones bajos a los números de tu código JavaScript para que sean más legibles.

Ten en cuenta que los separadores numéricos no modifican el valor de la variable de ninguna forma y son ignorados en la evaluación de la expresión.

Además puedes colocarlos en cualquier lugar y no se hace ningún control sobre se uso, por lo que el buen uso de la separación depende completamente de ti.

Los separadores numéricos también se pueden usar en otros tipos de números, como por ejemplo los números hexadecimales, octales o binarios.

Los separadores numéricos tienen una regla clave: Se pueden poner donde quieras siempre que separe dos dígitos:

1. No puedes poner dos guiones bajos juntos.
2. No puedes poner un guión bajo al principio de un número.
3. No puedes poner un guión bajo al final de un número.

## Symbol y la propiedad description

La propiedad `description` de los símbolos en _JavaScript_ te permite acceder directamente a la descripción que se proporcionó al crear un `Symbol`.

En _JavaScript_, un `Symbol` es un tipo de dato primitivo que se introdujo en _ES6_. **Se utiliza para crear identificadores únicos que no pueden ser duplicados.**

Los símbolos son útiles cuando quieres asegurar que una propiedad en un objeto no entre en conflicto con otras propiedades, ya que cada símbolo es completamente único.

Un `Symbol` puede ser usado como clave de una propiedad en un objeto, garantizando que dicha clave será única, incluso si otros símbolos con el mismo nombre existen.

A diferencia de otros tipos de datos como strings, aunque dos símbolos tengan la misma descripción, siguen siendo únicos e inmutables.

Si un `Symbol` se crea sin descripción, la propiedad `description` devolverá `undefined`.

Es importante recordar que la descripción de un `Symbol` no afecta su identidad o valor. Los símbolos con la misma descripción son únicos.
Manejo de Errores en JS
