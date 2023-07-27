# Gestión de Criptoactivos

## Capa 1: Blockchain - Estructura general y escalabilidad

### Componentes básicos

- Peer-To-Peer descentralizado: Conjunto de computadoras, conectadas unas con otras que comparten información se conectan por medio de protocolos las cuales comparten un libro contable o también llamado **ledger**. Cada computador tiene una copia de este libro.

- Funciones hash (criptografía): Provee de seguridad en dos componentes.
  - Hash criptograficos (son únicos).
  - criptografía asimétrica, esta tiene dos llaves, una pública y una privada. La pública similar al número de cuenta se puede compartir sin problema, la llave privada no se debe compartir con nadie.

- Estructura de la cadena (consenso): Permitir el ordenamiento de las transacciones, creando y sellando bloques y subirlos a la cadena principal, y esto genera esta cadena de bloques.  los computadores deben tener un consenso como PoW o PoS.
  - PoW: Es el algoritmo de consenso original en una red de Blockchain. Su principal objetivo es la protección frente a los ataques.
  - PoS: Prueba de expanción.

### Tipos de confianza

- Local: transacciones de personas a persona.
- Institucional: Instituciones que permiten generar espacios de confianza para poder realizar una transacción a cambio de una comisión.
- Distribuida: Se realizan las transacciones a través de un algoritmo matemático en donde quedan registradas las transacciones.

### Bitcoin

- Bitcoin es la tecnología y bitcoin la unidad de cuenta.
- Cada bloque se genera cada 10 minutos, dando una remuneración de 6.25 de bitcoin y su limite es de 21 millones de bitcoin en existencia.
- Cada 21.0000, cuatro años aproximadamente sucede el halving que disminuye la recompensa a la mitad.

### Ethereum

- Ethereum es la tecnología y Ether es la unidad de cuenta.
- Cada bloque y se genera cada 5 segundos dando 2 Ether de remuneración y su máxima cantidad es infinita.
- Encima de esta capa se ubica la capa de las criptomonedas, contratos inteligentes, aplicaciones y activos digitales (tokens y criptomonedas)
- Una criptomoneda es nativa de una red y un token es programado por medio de un contrato inteligente.

### ¿Qué es Blockchain?

Blockchain es una red descentralizada de computadoras conectadas manteniendo una copia común e inmutable de información, con unas reglas preestablecidas sobre la escritura del mismo.

- 1ra generación, 2009 Bitcoin
  - La primera segura y descentralizada. Puede llegar a 7 transacciones por segundo.

- 2° Generación, 2015 Ethereum.
  - Agrega de contratos inteligentes aplicaciones, tokens. Hace de 15 a 20 transacciones por segundo.

- 3° Generación, 2018 Otras como Solana.
  - Buscan más escalabilidad a las redes de primera capa. Pueden procesar hasta 100 mil transacciones por segundo.

## Capa 2: Escalabilidad

### Estructura de capas

- Application and Presentation Layer
  - Smart Contracts
  - Chaincode
  - DApps
  - User Interface

- Consensus Layer
  - PoW
  - PoS
  - DPoS
  - PoET
  - PBFT

- Network Layer
  - Peer-to-Peer (p2P)

- Data Layer
  - Data Structure
  - Digital Signature
  - Hash
  - Merkel Tree
  - Transaction

- Hardware / Infrastructure Layer
  - Virtual Machine
  - Containers
  - Services
  - Messaging

### Blockchain Trilemma

Escalabilidad - Seguridad - Descentralización.

![Blockchain Trilemma](https://static.platzi.com/media/user_upload/security-5c156927-23eb-4815-89fb-b0a537b72cd7.jpg)

### ¿Cómo funcionan estas soluciones?

1. Canales de pagos: Lighning Network (es una red que no permite la trazabilidad de los pagos que son anónimos lo que hace que se puedan realizar pagos rápidamente incluso hasta 1 millón de transacciones por segundo).

2. Plasma: Es una tecnología realizada por dos proyectos OMG y Matic (nace por un launchpad de Binance): esta tecnología genera una pequeña de bloques que cada cierto tiempo se envía a la red base. Y el costo de la transacción se distribuye entre los diferentes bloques.
Matic quiere evolucionar para crear una infraestructura que permita una interoperabilidad entre las diferentes maquinas virtuales.

3. Sidechains: xDAI tiene un puente para transferir los valores entre ambas cadenas sin embargo funcionan de manera independiente, de hecho tienen diferentes algoritmos de consenso.

4. Rollups: Permite unir una gran cantidad de transacciones, enrollarlas y incorporarlas en la capa base de Ethereum.

![Layer Ethereum](https://static.platzi.com/media/user_upload/4-Layer-2-Ethereum-3db7b368-138a-4cde-864b-a3e4a6f6d916.jpg)

## Billeteras

- Piezas de software que almacenan llaves.
- Interfaz para conectarse a una red blockchain.
- Cada red blockchain cuenta con su propio tipo de billetera.

### Caracteristicas

- Llave pública (~34 caracteres)
- Llave privada (~64 caracteres)

## ¿Qué son las palabras semillas?

- Se la representación de las llaves privadas.
- Generalmente se componen de 12 a 24 palabras aleatorias.
- No forman ninguna oración coherente.
- Muy fáciles de anotar en un papel, pero guardándose muy bien.
- Esas palabras no se puede perder.
- Si alguien accede a esas palabras puede acceder a tu billetera.
- Mucha responsabilidad.

## Tipos

- Custodiales: Es cuando tus fondos, tus llaves privadas están bajo cuidad y vigilancia de un tercero.
  - Exchanges de criptomonedas.
  - Servicios de ahorro y crédito.
  - Algunas aplicaciones móviles.

- No custodiales: Es cuando el cuidado de tus fondos, de tu llave privada esta bajo tu exclusiva responsabilidad.
  - Billeteras de papel.
  - Algunas aplicaciones móviles y de escritorio.
  - Algunas extensiones de navegadores.
  - Hardware wallets o billeteras físicas.

Importante al elegir:

- 12 o 24 palabras de recuperación.
- Exportar llave privada.
- Customizar el fee.

---

- Mobile
  - https://bluewallet.io
  - https://samouraiwallet.com
  - https://defiantapp.tech
  - https://muun.com

- Desktop
  - https://electrum.org
  - https://bitcoincore.org
  - https://www.wasabiwallet.io
  - https://bluewallet.io

- Hardware
  - https://trezor.io
  - https://www.ledger.com
  - https://coldcardwallet.com
  - https://shiftcrypto.ch

---

### Adquirir criptomonedas

- Plataformas P2P
  - Transacciones directamente con otra persona, por medio de una plataforma.
  - Puedes acceder con dinero fiat.
  - Algunas requieren registro, otras no.
  - La reputación de los usuarios es fundamental.
  - Tecnología que utilizan.
  - Custodiales vs. no custodiales.
  - Reviews de usuarios.

- Plataformas de intercambio (latinoamericanas)
  - Requieren de un proceso de registro.
  - Operaciones entre anonimos de compra y venta.
  - Custodiales.
  - Puedes acceder con dinero fiat.

- Plataformas de intercambio (globales)
  - Acceso a más liquidez.
  - Más opciones de criptoactivos.
  - Servicios adicionales a los de intercambio como staking, ahorro, créditos, mineria, derivados, etc.

#### A tener en cuenta

- Riesfos de dejar tus criptoactivos en servicios custodiales.
- Revisar las comisiones de los diferentes servicios (operación y de retiro).
- Los precios de plataformas P2P por lo general pueden estar un +5% en relación con los servicios de intercambio.

## Comisiones de Transacciones

Las comisiones son el precio por la inclusión de nuestra transacción en un bloque, el esfuerzo computacional de mineros o validación de parte de validadores. El precio depende de factores propios de cada red blockchain donde se opera, algunas son variables, otras son fijas.

- Cada vez que paso mis monedas entre wallets tengo que pagar comisiones para que se validen (entren al bloque).
- La comisión varía entre varias redes (en las más demandadas hay una guerra de pujas para lograr entrar en el bloque ETH o BTC).
- Las redes de tercera generación tienen un precio bajo de transacción (avax, sol).
- Las segunda capas (lightning o matic) hacen que sea económico.

> Almacenar ETH o BTC en su Wallet puede ser costoso, la comisión puede ser de entre 20 y 50 dólares por transacción.
> Para evitar estos costos tan altos es necesario usar redes de capa 2, en las cuales las comisiones son de menos de 1 dólar por transacción.

## Exploradores de bloques

- Herramientas que permiten entender como se mueve el flujo de transacciones dentro de las redes Blockchain.
- Para cada red siempre existe un explorador de bloques
- Son software que permiten leer de mejor manera la información que va dentro de la cadena de bloques a la que dichos exploradores estan conectados

> si solo quieres transferir valor, hacer un pago o enviar una remesa, bitcoin es mejor alternativa. Para entrar en DeFi, NFT y aplicaciones construidas en la red de Ethereum, Ethereum es la unica alternativa.

> Estas herramientas permiten estimar el mejor momento para hacer las transacciones en alguna de estas redes

## Que son los criptoactivos?

- Unidad de cuenta de una red blockchain.
- Medio de incentivo para su mineros/validadores.
- Pago de comisiones.
- Politica monetaria propia de cada red.

![Coins vs Tokens](https://static.platzi.com/media/user_upload/12-Coins-Vs-Tokens-a05dbf5c-5dd6-4c06-922b-e1081b18354b.jpg)

### Que son Criptomonedas?

Las Criptomonedas (coin) corren en su propia red o bajo su propio BlockChain y se generan a partir del trabajo de los mineros (en redes como Bitcoin y Ethereum) o los validadores ( en redes como solana y cardano).

### Que son Tokens?

Los Tokens son monedas generados por medio de contratos inteligentes y corren bajo la red o BlockChain ajenas un ejemplo son Shiba Inu (red de Ethereum) y CRO (red de Ethereum); la generación de nuevos Tokens está a discreción de su creador o (Tokenomics).

- Se crean mediante contratos inteligentes.
- Se usa para casos especificos.
- Se pueden utilizar para representar diferentes valores.
- Politica monetaria depende de quien lo creo (tokenomics).

## Tipos y clasificación de criptoactivos

- Criptomonedas: se utilizan para transferencia de valor.
- Fuel  Network: moneda que se utiliza para cobrar comisiones en el uso de la red.
- Token de utilidad RC20 se utilizad para representar cosas simples por ejemplo millas.
- Coleccionables conocidos como NFT.
- Stablecoins se basan en dinero real.
- Token de valor siguen algún elemento financiero acciones o bonos/
- Token de gobernanza: permite participar en la toma de decisiones de algún proyecto.
- Diversas formas de tokenizacion: criptoarte, Copia del genoma humano, Tokenizar un bien raiz, Criptopunk, Token que representa el oro, Criptokities ERC 721 después se creo el  ERC 1155.

## Como obtener informacion sobre un criptoactivo?

- Revisamos su página web, whitepaper y equipo.
- Auditoría de sus contratos inteligentes.
- Revisamos plataformas como CoinmarketCap o Coingecko.
- Revisamos sus redes sociales y grupos públicos (Discord y/o Telegram).
- Revisamos tokenomics y distribución de sus tokens.
- Analizamos y concluimos.

## Introduccion a DeFi

![Productos DeFi](https://static.platzi.com/media/user_upload/18-DeFi-aff6b16d-1a1a-43c0-a936-635182f42132.jpg)

- Codigo abierto e interoperable.
  - Todos los programas nacen en crear contratos inteligentes, cuyo código es totalmente abierto, para que cualquier pueda revisarlos.
  - Interoperabilidad tiene que ver en que cada uno de estos proyectos, sus respectivos contratos inteligentes, su respectiva lógica de funcionamiento, es posible usarlo entre ellos.

- Accesibilidad e inclusion financiera.
  - Cualquier de nosotros con un teléfono inteligente, wallet, computador, puede acceder a estos servicios financieros, no necesitas pasar por ningún proceso, nadie te va a pedir tus datos, solo conectas tu billetera y accedes a estos productos financieros que existen.

- Transparencia financiera.
  - Puedes revisar, las garantías de estas aplicaciones, de los proyectos que están detrás, podemos hacerlo con herramientas como etherscan, etc.

![DeFi x Blockchains](https://static.platzi.com/media/user_upload/19-DeFi-Blockchain-36a7bce0-c027-4f06-8a25-d34ecdcbd4ba.jpg)
