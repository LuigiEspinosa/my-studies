# Curso Básico de Vue.js 2

## Qué es Vue.js y cuáles son sus similitudes con otros frameworks

Caracteristicas:

- Framework progresivo.
- View de MV\*.
- Reactivo.
- Basado en Core.
- Orientado a Componentes.

---

- Declarative Rendering.
- Component System.
- Client-Side Routing.
- Large Scale State Management.
- Build System.

## El framework progresivo

Es una pequeña librería que se encarga de resolver el problema de la vista dentro de lo que es el patrón MVC (Modelo, Vista, Controlador), pero también puede ser muy potente cuando la combinamos con parte de su ecosistema, es decir,que Vue puede ir escalando a medida que nuestro proyecto vaya incrementando los requerimientos o vaya incrementando su complejidad.

## Introducción al Rendering Declarativo

El Declarative Rendering es la opción que nos propone VueJS para interactuar con el DOM, principal con el concepto de Two Way Data Binding, esto quiere decir que vamos a tener:

- Vista: aquí tenemos el HTML.
- Estado: aquí tenemos nuestros datos de JS.
- Usuario: es el que introduce cambios en la vista.

La vista se encarga de decirle al estado que hay cambios, a lo cual el estado va a reaccionar y mandar una nueva vista. El estado se encarga de decirle a la vista como y cuando tiene que compilar y cual es el resultado que se tiene que lograr, esto lo hace con una función que se llama render.

### Tow data binding

Two-way data binding es un patrón MVVM (model -> view -> view -> model) donde se enlazan 2 elementos en 2 direcciones (cuando cambia uno cambia el otro).

## Sistema de Componentes

Se basan en las especificaciones de web components APIs. Permiten modularizar la aplicación. Básicamente crear un componente es crear un pedazo funcional de tu página, y al final a al unir todos los componentes puedes formar una aplicación completa, y su ventaja es que son reutilizables, pues tienen "encapsulados" sus estilos y funcionalidades.

## Lifecycle Hooks

Los hooks son diferentes eventos que podemos representar dentro de nuestros componentes a través de funciones, con lo cual podemos disparar código a medida que nuestra componente transite por estas diferentes etapas.

- beforeCreate.
- created.
- beforeMount.
- mounted.
- beforeUpdate.
- updated.
- beforeDestroy.
- destroyed.

![Lifecycle Diagram](https://vuejs.org/assets/lifecycle.16e4c08e.png)
