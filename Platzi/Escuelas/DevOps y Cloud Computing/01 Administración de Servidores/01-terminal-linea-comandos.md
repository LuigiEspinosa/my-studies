# Curso de Introducción a la Terminal y Línea de Comandos

## ¿Qué es la terminal?

La terminal es un programa que ejecuta líneas de comandos, que a su vez estas líneas de comando ejecutan acciones y aquí tienes que aprender dos conceptos: terminal y shell. Ahora la terminal no ejecuta líneas de código, solo la recibe, es la shell quien hace todo el proceso de tomar el comando, ir con el procesador y la memoria RAM

- Bourne Shell
- Bash Shell
- Z Shell
- C Shell
- Korn Shell
- Fish Shell
- PowerShell

## ¿Qué es un comando?

Un comando por definicion es un mensaje enviado al ordenador que provoca una respuesta en este sistema y se comporta como una orden, pues informa al dispositivo informático que debe ejecutar una acción según la indicación que pueda enviarse. Puden ser 4 cosas:

- Un programa ejecutable.
- Un comando de utilidad.
- Una funcion de shell.
- Un alias.

![Comandos](https://static.platzi.com/media/user_upload/que-es-un-comando-7115bdf1-045c-4ff2-84bf-3e2d10a9bcb5.jpg)

## Wildcards

Las wildcards o comodines son una serie de caracteres especiales que nos permiten encontrar patrones o realizar búsquedas más avanzadas. Es aplicable para archivos y directorios.

Las wildcards te sirven para realizar seccionamiento de archivos o directorios, ademas de ls los wildcards tambien pueden usarse con cualquier comando que realice la manipulación de archivos como mv, cp y rm.

Ejemplos de estos patrones:

1. Filtrar archivos que terminen en una extensión en particular.
    
    ```bash
    ls *.txt
    ```
    
2. Filtrar archivos que contengan una palabra en específico.
    
    ```bash
    ls datos*
    ```
    
3. Filtrar archivos que contengan solo un carácter después de la palabra especificada.
    
    ```bash
    ls datos?
    ```
    
4. Filtrar archivos que tengan tres caracteres después de la palabra especificada.
    
    ```bash
    ls datos???
    ```
    
5. Filtrar todos los archivos y directorios que inicien con una mayúscula.
    
    ```bash
    ls [[:upper:]]* # Busca en todo el arbol
    ls -d [[:upper:]]* # Busca solo en el directorio actual
    ```
    
6. Filtrar todos los archivos y directorios que inicien con una minúscula.
    
    ```bash
    ls [[:lower:]]* # Busca en todo el arbol
    ls -d [[:lower:]]* # Busca solo en el directorio actual
    ```
    
7. Mostrar todos los archivos que comiencen con una `a` o `d`.

## Redirecciones

![Tabla de Operadores](https://static.platzi.com/media/user_upload/rendirecciones-9e82da05-a575-4132-90df-5e8bf0d8b7db.jpg)

En la consola nosotros generamos una entrada cuando escribimos y una salida casi siempre que ejecutamos un comando. A las entradas típicamente se les suele llamar Standard Input y a las salidas Standard Output, además se les suele abreviar como stdin y stdout respectivamente.

### File Descriptors

Los file descriptors son números que identifican un recurso. Funciona asociando un número con una acción, archivo o programa, en el caso de la shell tenemos 3 file descriptors:

![File Descriptors](https://static.platzi.com/media/articlases/Images/image%28100%29.png)

El 2 es Standard Error.

### Pipe operator

Pipe operator es un operador que permite tomar la salida de un comando y pasarla como entrada de otro comando. Aprendamos más comandos que te van a ayudar.

- Unir cadenas de texto (cat).
- Crear un archivo con base en una salida (tee)
- Organizar archivos (sort).

## Operadore de control

Los operadores de control son símbolos reservados por la terminal que nos permiten encadenar comandos.

- Comandos en la misma línea (;).
- Comandos asíncronos (&).
- Condición and (&&).
- Condicional or (||).

## Manejo de permisos

Los permisos son las capacidades que tiene cada usuario dentro del sistema operativo, no todos los usuarios pueden hacer todas las acciones sobre ciertos archivos y carpetas.

- **Owner:**
    El dueño del archivo, si no se ha cambiado, es quien lo creo y tiene mayor jerarquía sobre los otros 3. Le corresponden los primeros 3 caracteres de los permisos.

- **Group:**
    Se puede crear grupos de usuarios para darle a todos o varios los mismos permisos. A estos usuarios le corresponden el cuarto, quinto y sexto caracter de los permisos de usuarios y tienen mayor jerarquía que el último.

- **World:**
    También llamado "otros", es cualquier otro usuario que no pertenezca a un grupo de usuario y tampoco sea el dueño, este tiene la menor jerarquía.

### Tipos de modo

- r - Permite abrir y leer un archivo.
- w - Permite escribir en un archivo; sin embargo, este atributo no permite cambiar el nombre de los archivos o eliminarlos. La capacidad de eliminar o cambiar el nombre de los archivos está determinado por los atributos del directorio
- x - Permite que un archivo sea tratado como un programa y pueda ser ejecutado.


### Tipos de archivo

- ー - Un archivo normal.
- d - Un directorio.
- l - Un link simbolico.
- b - Un archivo de bloque especial. Son archivos que manejan la informacion de los bloques de datos como una USB.

![](https://static.platzi.com/media/user_upload/1-0e5c063a-3fba-42a8-84cc-a2bf6687206b.jpg)

### Modo simbolico

- u - Solo para el usuario.
- g - Solo para el grupo.
- o - Solo para otros (world).
- a - Aplica para todos.

## Modificando permisos en la terminal

```bash
chmod [simboloDelUsuario][operador][permiso] [archivoParaCambiarSusPermisos]
```

## Variables de entorno

Las variables de entorno son útiles cuando necesitamos que cierta información prevalezca para poder trabajar más rápido o necesitamos guardar información para no tener que recordarla constantemente.

## Comandos de busqueda

```bash
find [rutaDesdeDondeEmpezarBuscar] [opciones]
```

## Comando grep

"Grep" significa Global Regular Expression Print. El comando grep utiliza regex (Regular Expression) para realizar su búsqueda.

```bash
grep [ExpresiónRegular] [archivoDondeBuscar]
```

- -m - Limita las líneas de la búsqueda
- -c - Cuenta las ocurrencias
- -v - Excluye las ocurrencias
- -i - Ignora él case sensitive

## Utilidades de Red

- ifconfig - sirve para ver la mascara de red, puerto de transmisión, tarjeta de red, etc

- ping - nos muestra si una ip o pagina, esta activa, si salen paquetes es porque hay conexión.

- curl pagina_web - podemos traer el html de una pagina, podríamos guardarlo con el estándar output.

- wget pagina_web - nos descarga el archivo html, pero con formato.

- traceroute pagina_web - Muestra los saltos que dan los paquetes para llegar al destino, es decir, los routers o enrutadores que atraviesan.

- netstat -i - nos muestra los dispositivos de red.

## Comprimiendo archivos tar y zip

El formato .tar es un tipo de compresión bastante usado en UNIX. Originalmente era utilizado para almacenar información en cintas magnéticas, así que está hecho especialmente para comprimir los archivos de forma lineal.

```bash
tar [opciones] [nombreDelArchivoComprimido] [archivoAComprimir]
```

```bash
zip -r copressed.zip Documents/toCompress/
```

## Manejo de procesos

- ps - Nos muestra los procesos que están corriendo actualmente. Cada proceso tiene un PID. Podemos ver los procesos que estén en el background (por ejemplo, CAT).
- kill <PID> - Nos ayuda a terminar procesos fuera de nuestra terminal.
- top <PID> - Nos muestra los procesos que están usando más recursos de nuestra computadora. Podemos filtrar los procesos (para ver como, usamos bandera h → help).

### Procesos en foreground y background

Cuando un proceso está en ejecución sin que sea mostrado en la terminal se dice que se está ejecutando en el background. Si se muestra la ejecución del comando dentro de la terminal se dice que está en el foreground.

Podemos escribir algo y después terminar el input del texto con CTRL+D, pero, para suspender el proceso, lo haremos con CTRL+Z. El resultado que nos mostrará la terminal deberá ser uno donde nos indique la suspensión del comando, por lo tanto, se movera exitosamente al background de la terminal.

Si queremos traer la ejecución de nuevo a la terminal, es decir, al foreground; debemos usar el comando fg y especificar qué número de trabajo queremos continuar.

Existen otras formas de enviar comandos al background. La primera es usando el operador de control & al final de un comando. Este operador nos permite enviar de manera directa un proceso al background una vez ejecutado. Por ejemplo:

```bash
cat > mi_nota.txt &
```

La segunda forma es con el comando bg. Este sirve de manera similar que fg solo que en vez de traerlo al foreground este lleva un trabajo al background.
