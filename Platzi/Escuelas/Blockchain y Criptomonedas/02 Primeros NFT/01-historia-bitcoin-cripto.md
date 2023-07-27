# Audiocurso de Historia de Bitcoin y Criptomonedas

## Cómo nace Bitcoin

- En la **primera criptomoneda** de la historia.
- Motivada por la crisis subprime del 2008 que causó inestabilidad global por decisiones gubernamentales y de entes financierons importantes.
- A inicios de 2009 se presenta Bitcoin a través de la tecnología Blockchain.
- Funciona como un libro público que registra cada una de las transacciones.
- Asegura que cada una de las monedas se pueda ocupar sólo una vez.
- Ocurre en una red descentralizada, sin intermediarios ni entes gubernamentales.
- En 2009 se publica el white paper y se minan los primeros 50 Bitcoins.
- En 2010 se realiza el primero pago de BTC, comprando pizzas por 10.000 BTC.

[Bitcoin open source implementation of P2P currency](https://p2pfoundation.ning.com/forum/topics/bitcoin-open-source?commentId=2003008%3AComment%3A9493)

## Bitcoin antes del Bitcoin

[White Paper Bitcoin](https://bitcoin.org/bitcoin.pdf)

### Criptografía

- Es el arte de escribir con calve secreta o de un modo enigmático.
- Alan Turing fue el responsable de descubrir Enigma, el código encriptado de los Alemanes.

### Criptografía asimétrica

Whitfield Diffie y Martin E. Hellman en 1976 publicaron su artículo sobre cifrado asimétrico. Utiliza dos claves: Una pública, que se comparte. Y otra privada, que asegura el acceso privado. Solo contando con ambas se puede acceder a la información entre dos terminales de comunicación.

Sin su aporte los pagos online no hubieran sido posibles ya que no exsitiría la seguridad de los mismos que propician el comercio electrónico o el envío de archivos.

### El árbol Merkle

Ralph Merkle, creó en 1979 un sistema de verficación de datos altamente eficiente. Lo llamó Árbol Merkle, un tipo de árbol binario que proveía una solución de primer nivel al problema de verficación de datos. Merkle presentó y patentó este trabajo poco antes de terminar sus estudios de Doctorado en Ingeniería Eléctrica en la Universidad de Standford.

[Árbol Merkle](https://es.cointelegraph.com/explained/merkle-tree-the-key-to-blockchain-verification)

### Dinero digital

- En 1982 David Chaum preenta el primer protocolo de dinero digital que podías ser realmente anónimo.
- Este proucto utilizaba criptografía e introduce conceptos como firma ciega.
- En los siguientes años sigue creando más proyectos relacionados, como digicash, etc.
- En 1997 aparece HashCash como una propuesta para combatir el spam. La idea es que cada envío de un mensaje tenga un coste de CPU, lo que se conoce como Proof Of Work. Gracias a este gasto POW se desalienta el uso de correos basura masivos.
- En 1998 aparece el conepto de criptomoneda por primera vez en el mundo. Wei Dai: b-money.
- Se distribuyó en el ecosistema CypherPunk: un colectivo que se encargó de promover la protección criptográfica de la información pública.

## El problema de los generales bizantinos

Es una situacion hipotética que ilustra los problemas de comunicación de una red informática descentralizada. Hay distintos nodos de comunicación separados, la comunicación únicamente puede ser de nodo a nodo, no existe una autoridad ni intermediario. La mayoría de la red debe estar de acuerdo para que el plan funcione. Si uno o más nodos son maliciosos podrían sabotear el plan de coordinación.

Satoshi Nakamoto, creador de Bitcoin, lo resolvió mediante hashes, prueba de trabajo y comprobación periódica. Los hashes permiten que se detece cuando un nodo comunica información errónea o falsa, exsite un mecanismo de consenso en la red. Cada nodo es recompensado o castigado de función de decir o no la verdad. Emitir un mensaje falso implica una inversión computacional desde el emisor, lo que lo desincentiva, teninendo en cuents que siempre será detectable gracias al mecanismo de hash.

Gana el consenso según la mayoría de votos, cuando se genera una controversia, es decir un mensaje distinto, se crean dos cadenas. Al final se elige la cadena que tenga más votos.

![Blockchain](https://margrade.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6a062618-8a4a-4021-a0f2-eeba29638d3f%2FUntitled.png?table=block&id=bb2f6eab-e8cb-4f7c-bc86-d8ca1958b1e3&spaceId=d647b21e-f80c-49f3-8a0e-814850000195&width=1870&userId=&cache=v2)

## Aprendiendo Bitcoin

- Nace con la intención de descentralizar el dinero.
- Monedas digitales, no existen copias físicas.
- Sistemas P2P, esto es, no existe un ente central que las controle, regula ni del cuál dependan.

Creación de monedas:

- Se crean a través de la minería: un protocolo de solución a problemas matemáticos complejos.
- A la vez, esa creación implica la validación y procesamiento de todas las operaciones de la red.
- Los mineros son recompensados con Bitcoins o fracciones de BTC.
- Así, la minería descentraliza la emisión de monedas, siendo todos los mineros parte del proceso.

Custodia de monedas:

- Se guardan en billeteras electrónicas que contienen llaves públicas y privadas.
- Las llaves públicas son un código único que funciona como dirección para enviar BTC.

Blockchain:

- Una cadena de bloques es un libro de transacciones distribuidas, por eso es posible aplicarlo a diversos sistemas.
- Registra toda las transacciones, se comparte y distribuye en distintos lugares de la red.
- Solo puede ser modificada bajo el consenso de la mayoría de los nodos de la red.
- Es imposible borrar la información de la red.
- Una vez se realiza una transacción, para a ser parte de un bloque, los cuales son verificados por los mineros.

Solamente existirán 21.000.000 de unidades y cada 4 años, al recompensa de Bitcoins creados en cada bloque se reduce a la mitad, a esto se le conoce como Halving. Y, aunque el Halving no necvesariamente es cada 4 años como una regla rígida, este suceso se produce cada 210.000 bloques, lo que bajó la potencia de minado y dificultad de la red en cliclos pasados han sido equivalentes a 4 años aproximadamente pero esto puede variar, sobre todo ahora que el "Hashrate" esta rompiendo nuevos máximos históricos y los equipos cada vez son más potentes para el procesamiento de datos.

## The internet of Money - Andreas M. Antonopoulos

- Bitcoin no es una compañía ni organización.
- Es un estándar de protocolo, así como IP.
- No pertenece a nadie.
- Son reglas que todo aquel que participa en la red acepta cumplir.
- Es capaz de permitir que una red de computadoras completamente descentralizada acuerdan cada una de las transacciones que tuvieron lugar y quién tiene el dinero en cada momento.
- Una moneda es sólo una de las aplicaciones.
- Lo poderoso de la tecnología es que se trata de un sisema basado en consenso desentralizado.
- Votación descentralizada justa, propiedad de acciones, registro de activos, etc.

## Personas involucradas en el crecimiento/desarrollo de BTC

- **Hal Finney (Core Developer):** Uno de los primeros devs que recibieron el paper por email, experto en criptografía y pionera del ecosistema. En 2009 recibió 10 BTC por parte de Satoshi, siendo la primera transacción de la historia. Se enviaba emails con Satoshi para corregir errores del ecosistema.
- **Gavin Andresen (Core Developer):** Uno de los primeros devs que recibieron el paper por mail.
- **Wladimir van der Laan (Core Developer):** Uno de los primeros devs que recibieron el paper por mail.
- **Craig Steven Wright (Minero):** Un empresario que quiso hacerse para por Satoshi

## ¿Qué hace especial a Bitcoin?

- Ha significado un importante auxilio u opción financiera paa países com problemas económicos como Argentina o Venezuela.
- Bitcoin está pensando en ser ideal de sobrellevar las crisis económicas (nace luego de la crisis subprime del 2008).
- El uso de BTC como remesa ha ido en aumento constante en todo el mundo.

Pros

- Seguridad y transparencia altísimas.
- Virtualmente inviolable.
- Global y descentralizado.
- Bajos costos transaccionales.
- Inmediatez de acuerdo el criptoactivo.
- No tiene intermediarios.

Contras

- La implementación y el uso dependen del usuario, es muy importante el entendimiento del mismo.
- El uso de las wallets dependen del usuario.
- Gran volatilidad en los precios.
- Coste enérgico y ambiental.

## Altcoins y Stablecoins

Altcoins, son básicamente todas las criptomonedas que no son Bitcoin, entre las más populares están: Ethereum, Solana, Cardano, Binance, etc. Actualmente existen más de 10.000 proyectos de altcoins en la blockchain.

Stablecoins, son monedas estables y su valor no se basa en la oferta y demanda del mercado, sino que son 1 a 1 con alguna moneda fiduciaria, por ejemplo USDT que cuesta un dolar cada uno. De hecho la forma en la que empiezas a invertir en Criptomonedas es a través de las Stablecoins, que es dicho intercambio entre la unidad monetaria fiduciaria y la digital.

Sobre esta blockchain se han creado muchos proyectos. i.e. ETH funciona como plataforma para crear contratos inteligentes.

## Linea del tiempo

![Linea del tiempo Bitcoin](https://margrade.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf827095-5721-4e04-bd3f-40774e74e012%2FUntitled.png?table=block&id=355ebd54-8f0b-4622-961d-3e8a3f30d007&spaceId=d647b21e-f80c-49f3-8a0e-814850000195&width=1370&userId=&cache=v2)

## Criptomonedas: ¿Revolución o Burbuja?

![Esquema de una burbuja](https://margrade.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd3b2ab4-38b8-4955-b1df-2cb04e2c472d%2FUntitled.png?table=block&id=b42972aa-a0b9-45b6-8e88-4d6d1e0752b7&spaceId=d647b21e-f80c-49f3-8a0e-814850000195&width=1750&userId=&cache=v2)

Una burbuja financiera se da cuando hay un aumento infundado en alguna clase de activos o productos. Casi siempre surgen de ideas innovadoras, muy atrayentes para los inversores. Esta situación genera ilusiones y emociones desbordads hasta el punto de atrear a personas que ignorar el funcionamiento de ese mercado, pero que se dejan llevar por la moda.

## Características

- Aumento exagerado de precios de manera prolongada.
- Especulación.
- Euforia de los nuevos inversores.
- Factor psicológico por la ilusión de una especia de oportunidad mágina.
- Producto novedoso.
- Volatilidad.

[La primera burbuja económica de la historia](https://www.bbva.com/es/tulipomania-primera-burbuja-economica-historia/)

## ¿Cuál es el verdadero potencial de las criptomonedas?

1. **Trading:** El arte y la ciencia de comprar y vender activos con el obketivo de generar rentabilidad en el tiempo. Es una profesión que requiere mucho estudio, paciencia, tiempo y esfuerzo.
2. *Finanzas descentralizadas:* Básicamente el mundo financiero tradicional traído al mundo digital, pero esta sobre blockchain.
3. *NFT:* Tanto si eres un coleccionista como si eres criptoartista son muchas las posibilidades pero para ello debes tener conocimiento suficiente del ecosistma y conocer muy bien tu nicho.
4. **Holding:** Comprar, acumular y mantener criptomonedas en el tiempo durante meses y años. Si bien el ecosistema es volátil el tiempo nos ha demostrado que los pacientes siempre serán recompensados.

## ¿Por qué entrar al mundo cripto?

- Es una tecnología que llegó para quedarse.
- Es como sumarse a internet cuando recién arrancaba.
- Se suele comprar a blockchain con el protocolo TCP/IP.
- Cripto es el dinero del futuro.
- DeFi: una excelente oportunidad para mejorar nuestras finanzas, sin intermediarios.
- Se puede experimentar en el ecosistema con cantidades mínimas.
- La adopción del ecosistema está empezando.
- Todavía queda mucho camino por recorrer.

---

## Glosario

- **Monedas de privacidad**: altcoins con la finalidad de proporcionar transaciones privadas (monero, zcash, dash, etc.)
- **Stablecoins**: valor anclado a una moneda fiduciaria para reducir el riesgo de inversión por la volatilidad en el criptoecosistema (Tether, USD-Coin, etc.)
- **Tokens de Exchanges**: para facilitar las operaciones dentro del exchange (Binance Coin, etc.)
- **Monedas digitales de Banco Central**: **EL DIABLO MISMO** creadas y respaldadas por bancos centrales (Yuan digital, Eurochain, etc.) Tienen valores transversalmente contrarios a los de Bitcoin.
