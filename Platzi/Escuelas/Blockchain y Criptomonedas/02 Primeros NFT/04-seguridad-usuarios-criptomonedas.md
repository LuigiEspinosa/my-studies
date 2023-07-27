# Seguridad para Usuarios de Criptomonedas

## La importancia de la seguridad.

Hay gente con intenciones maliciosas allá afuera que todos los días piensa en nuevas formas de robar información digital y utilizarla en nuestra contra. Más aún en el mundo descentralizado donde somos 100% responsables de la seguridad y nadie podrá ayudarnos si somos estafados.

- Capa 1:
  - Dispositivos de acceso / UI Interfaz de usuario.
  - (Laptop, Móvil, Reloj, Tablet, Pc, entre otros)

- Capa 2:
  - Interfaces de red.
  - (Cable submarino, ISP)

- Capa 3:
  - Los sitios que visitas.
  - (P2P, Redes Descentralizadas, Nube)

- Capa 4:
  - La autenticidad de la información a la que accedes.
  - (Metadata)

## Antivirus y personal firewall

Más allá de que los sistemas operativos se actualizan constantemente y resuelven problemas de seguridad, las vulnerabilidades aparecen todos los días y tal vez los parches de las actualizaciones no son suficientes. 

Los antivirus agregan una capa más de seguridad a los dispositivos. Se actualizan en tiempo real y los suele respaldar una gran base de datos que se construye con ayuda de los reportes de amenazas de miles de usuarios para mantener a toda la comunidad protegida. 

Busca los mejores antivirus para tu sistema operativo, tanto para los computadores como los dispositivos móviles. Sobre todo, si es tu intención manipular criptoactivos, tener un antivirus potenciará la seguridad de los mismos.

## La importancia del administrador de contraseñas

Somos seres digitales, y con el paso de los años, poseemos cada vez más cuentas en múltiples páginas para diferentes necesidades. Llevar un control de nuestras cuentas y sus contraseñas es un tema que no debe tomarse a la ligera.

Los administradores de contraseñas están para guardar cientos de contraseñas por nosotros. Se trata de software especializados en seguridad a los cuales no debes temer y puedes confiar en que mantendrán seguras tus contraseñas.

## Autenticación en 2 pasos

2FA (Two Factor Authentication) es un mecanismo de seguridad donde enlazamos nuestra cuenta de una aplicación, a un dispositivo físico que nos entregará un PIN para autenticarnos en el sitio que deseamos ingresar.

Dicho PIN suele ser de 6 caracteres numéricos y expira en cuestión de minutos. Debemos el código en la aplicación que nos lo solicita para concretar la autenticación. Si no poseemos el dispositivo físico con nosotros, no podremos autenticarnos en la app.

### Métodos de implementación

- 2FA por mensajes de texto o SMS es antiguo y para nada recomendado hoy en día. No posee grandes mecanismos de seguridad y encriptación y el acceso a esos mensajes es más fácil.
- El método ideal para implementar 2FA es a través de software especializados como Google Authenticator. Puedes instalar la app en - cualquier dispositivo celular, sea este Android o IOS, y en cuestión de minutos podrás enlazar tu cuenta con este tipo de mecanismos.
- También existen otro tipo de dispositivos físicos, muy similares a un pendrive, que puedes explorar para implementar 2FA. Los mismos suelen tener reconocimiento biométrico para potenciar aún más la seguridad para utilizar estos aparatos.

## Que es el DNS?

Los DNS (Domain Name System) son servidores especializados en traducir URL a su IP correspondiente. Por defecto, los proveedores de internet configuran sus propios DNS que funcionan muy bien para la gran mayoría de sus usuarios que desconocen lo que es un DNS y su funcionamiento. Este es el servidor DNS al cual apunta tu computador y usará para resolver cualquier página web.

## Tener un router seguro

El router/modem es ese aparato encargado de darle internet en tu hogar a todos los dispositivos que se conecten. No, no es lo mismo un modem y un enrutador. En pocas palabras, el modem es el encargado de proporcionar acceso a internet, mientras que el router permite la conexión simultánea de N cantidad de dispositivos para darle a todos ellos acceso a internet y "enruta" o dirige todos los paquetes al dispositivo que lo solicitó.

- Actualiza el firmware del dispositivo.
- Luego de la instalación del aparato, cambia la contraseña por una segura.
- Deshabilita el Wi-Fi y accede solo con cable Ethernet si deseas ser más exigente con tu seguridad.
- En teléfonos celulares, es recomendado tener tu propio plan de datos en lugar de utilizar conexión Wi-Fi.

## Necesito una VPN?

Una VPN (Virtual Private Network) es un servicio que crea un canal de comunicación privado sobre una red pública (internet) para garantizar seguridad o para realizar una conexión a un sitio solicitado particular, que podría ser inaccesible desde determinada ubicación geográfica.

Las empresas también suelen utilizar VPN para crear una red privada a la que solo puedan acceder sus empleados. Es aconsejable que los equipos de desarrollo desplieguen los diferentes entornos bajos de un sistema (development, testing, staging, etc) en redes privadas para que solo personal autorizado acceda a ellos.

## Que tipos de wallets existen

Cuando hablamos de wallets, nos referimos a una herramienta que puede ser tanto hardware como software y que almacena las claves públicas y privadas para el acceso a los criptoactivos. Las billeteras como tal no guardan las criptomonedas o los tokens. Los mismos siempre estarán dentro de la Blockchain a la cual pertenecen. Las wallets son quienes nos permiten acceder a esos activos digitales y, a través de las claves, demostramos ser los dueños de esos activos y podemos utilizarlos.

### Wallets Calients

Con "caliente" hacemos referencia a conexión a internet. Una wallet caliente, o Hot Wallet, se encuentra en constante conexión a internet. La conexión a internet le da a las wallets calientes un punto en contra, dado que no solemos desconectar el internet de nuestro celular o computador y tal vez no son las billeteras ideales para guardar gran cantidad de criptoactivos a largo plazo (años).

### Wallets Frias

Las wallets frias, o también denominadas Cold Wallet o hardware wallet, guardan las claves de recuperación de los criptoactivos en dispositivos hardware que no tienen acceso a internet. Son ideales para "holdear" criptomonedas durante años y guardar importante cantidad de dinero.

### Frases Mnemotécnicas

Todos los tipos de billeteras tienen un denominador en común, la frase de recuperación o clave semilla. Las mismas constan de 12, 18 o 24 palabras aleatorias que se utilizan para generar la clave privada de la billetera al pasarlas por un complejo algoritmo de encriptación.

## Marketplaces

Los marketplaces son aplicaciones que permiten a cripto-artistas publicar, comprar, vender o intercambiar sus obras de arte digitales. Incluso, gracias a la lógica que es posible programar en los contratos inteligentes, obtener regalías cada vez que sus obras se vuelvan a vender.

- Consulta la reputación del sitio antes de autorizar tu wallet a que se conecte con la app.
- Activa todos los mecanismos de seguridad que el marketplace ofrezca como 2FA.
- No interactúes con tokens que te hayan enviado sin haberlos solicitado, ya que pueden contener intenciones maliciosas.

## Exchanges

Los exchanges son plataformas donde podemos comprar, vender o intercambiar criptodivisas por otras, o por monedas FIAT. Poder interactuar de manera correcta y segura con un exchange tiene sus consejos y medidas de seguridad necesarias a considerar.

Existen diferentes tipos de exchanges, tanto centralizados como descentralizados. En cada exchange que decidamos utilizar, debemos tomar las medidas necesarias.

La posibilidad de intercambio de criptodivisas a través de P2P (Peer to peer) es una novedad de los exchanges, que no existe en las finanzas tradicionales. Intercambiar valor directamente a otro usuario de la plataforma, donde los contratos inteligentes hacen de intermediario para asegurar que cada parte reciba lo que le corresponde.

## Explorers

Los exploradores son aplicaciones técnicamente complejas de comprender, pero que te serán de suma importancia tanto para visualizar tus transacciones, como para corroborar que no te estén intentando engañar. Con los exploradores es posible examinar lo que necesites, desde una billetera para ver su historial de transacciones, todo un bloque para visualizar las transacciones dentro o hasta inspeccionar una transacción en particular o un token. A través de la dirección de la wallet, del hash del bloque o del transaccion hash, podrás obtener más información al respecto.

## Riesgo en las transacciones

### Man in the middle

Si alguien intercepta la conexión, podría tener acceso a los datos que viajan a través de esta. Este tipo de ataque se lo conoce como "man in the middle" o ataques de intermediario. Suceden cuando un atacante intercepta la comunicación entre dos personas y, sin que ellos se den cuenta, modifica la información que se intercambian.

- Conéctate solo a redes de confianza. Si la red no tiene clave, los datos viajan sin encriptación. Un hacker podría estar simulando ser la red de un aeropuerto sin que nos demos cuenta.
- Evita utilizar redes Wi-FI públicas de un parque o un hotel, las mismas son inseguras y fáciles de interceptar.
- No dejes solo tus dispositivos personales en lugares públicos. Podrían ser vulnerados si alguien aprovecha para acceder a ellos.

### Phishing

El Phishing consiste en la suplantación de la identidad de una persona o una empresa. Las técnicas de phishing son diversas, todas con el mismo objetivo, el robo de nuestros datos personales. Desde envío de emails maliciosos, mensajes de texto, páginas web falsas o hasta incluso técnicas más sofisticadas que hacen uso de la inteligencia artificial.

- Observa la dirección del emisor del correo, el dominio debe pertenecer a la empresa que lo envía. Asegúrate de que esté bien escrito, que no le falten letras.
- El saludo hacia ti en el email debe ser personal usando tu nombre, un saludo genérico es sospechoso.
- Nunca hagas click en ningún enlace en un correo electrónico sospechoso o que no solicitaste. Antes de realizarlo, posa el mouse por encima del enlace y asegúrate de a dónde te redireccionará.
- Revisa que la redirección al sitio siempre utilice HTTPS.

### Ingeniería social

Por más barreras de seguridad que hayas instalado en tus dispositivos, 2FA, firewalls, VPNs, administradores de contraseñas, horas y horas aplicando las mejores prácticas para el uso de wallets y de apps, de nada sirve si exponemos nuestros criptoactivos a nuestro entorno social. Muchas personas tienen grandes habilidades sociales y muy buena oratoria para convencer a otros de hacer algo. Por más expertos en tecnología que nos consideremos, estamos expuestos a que nos engañen con palabras que nos engatusan y nos hacen caer en trampas para hacer clic en un enlace o transferir nuestros criptoactivos voluntariamente.

Ya sea que dejes tu computador desbloqueado y solo en un lugar público como una cafetería o una biblioteca mientras vas al baño, escribir contraseñas en un trozo de papel y pegarlo al lado del computador, acceder a tus cuentas mientras alguien más ve tu pantalla. Tal vez hoy confías en una persona, puede que mañana ya no o dejes de tener relación y la misma aún conoce ciertas contraseñas que te pertenecen.

### Data Leaks

Las filtraciones de datos ocurren cuando una vulnerabilidad en un sistema es aprovechada para robar información de sus usuarios, hackeos a computadores o cuentas personales a un usuario particular, provoca que datos sensibles y confidenciales sean utilizados por personas no autorizadas.

No podemos evitar que una aplicación sea hackeada, pero si podemos tener presente qué información proporcionamos a estas empresas sobre nosotros. Debemos preguntarnos si es un riesgo que X información sea filtrada, y si la misma se puede reutilizar en otras plataformas.

### Dapps y Smart Contracts malignos

Existen aplicaciones que fueron creadas para robar y causar daños. Se trata de dapps que lucen muy bien, que presentan un interesante servicio a una comunidad, pero que de la noche a la mañana desaparecen, sus autores se quedan con todos los fondos y no dejan ningún tipo de rastro.

## Qué hacer después de un hackeo?

Deberás crear otra hot wallet o utilizar otra cold wallet idealmente. No utilices la misma que ya ha sido vulnerada. La frase semilla ya no sirve y tendrás que descargar esa billetera posteriormente. No sabrás cómo han logrado hackearte, por lo que es recomendable que tengas precaución sobre qué dispositivo físico vas a usar para interactuar y mover los activos.

Mover tus activos tendrá un importante costo económico, será una situación muy estresante y dramática donde debes permanecer calmado para actuar. Cuando roban tus activos digitales que poseías en un exchange, también debes reportarlo a pesar de que no podrán ayudarte a recuperar lo que te pertenece.
