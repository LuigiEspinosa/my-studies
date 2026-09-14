---
source: platzi
url: https://platzi.com/cursos/ciberseguridad/
slug: platzi/ciberseguridad
status: done
started: 2026-09-07
finished: 2026-09-14
tags: [cyber-security, phishing, opsec]
code: []
kind: note
---

# Curso de Ciberseguridad Preventiva

Fortalece tu seguridad digital personal con criterios y prácticas para proteger correo, redes sociales, contraseñas, WhatsApp y línea celular frente a filtraciones, phishing, extorsión y suplantación de identidad. Entenderás cómo reducir riesgos, recuperar acceso a tus cuentas y resguardar información sensible para disminuir el impacto personal, reputacional y financiero de un incidente.

## Cómo saber qué datos tuyos ya filtraron

Los **breach forums** son espacios, muchos de ellos anónimos, donde alguien sube una base de datos robada y la ofrece de forma gratuita o a la venta. Antes, este tipo de contenido vivía exclusivamente en la _deep web_ y requería conocimientos técnicos para acceder. Hoy, gran parte de esta información se comparte abiertamente en canales de **Telegram**.

Las autoridades persiguen y eliminan estos foros constantemente, pero reaparecen con facilidad. Cualquier persona puede buscar bases de datos de empresas reconocidas, hospitales o dependencias gubernamentales sin necesidad de saber programar ni usar herramientas como _Kali Linux_.

Antes de protegerte, necesitas saber **qué información tuya ya está expuesta**. Si no mapeas lo que tienes registrado, los atacantes lo descubrirán primero y encontrarán el **vector de ataque** más vulnerable.

Existen herramientas especializadas en _OSINT_ (inteligencia de fuentes abiertas) que permiten hacer esta auditoría:

- **osint.industries**: muestra qué plataformas están asociadas a tu correo o teléfono, como Airbnb, TikTok, Temu o PayPal. Tiene un costo por consulta que aumenta según el nivel de detalle.
- **Epieos**: ofrece un mapeo más detallado, incluyendo fecha de creación de cuentas, reseñas de Google Maps e incluso la ubicación aproximada de la persona a partir de esas reseñas.
- **Have I Been Pwned**: página gratuita que indica si tu correo electrónico aparece en filtraciones conocidas, con fechas y nombres de las brechas.

## Modus operandi de estafas telefónicas

Estas estafas funcionan con una estructura bien definida:

- Hay quienes **coordinan toda la operación**.
- Otros se encargan de **obtener bases de datos** con información personal.
- Un grupo adicional se dedica a **realizar llamadas o enviar correos masivos**.

Las personas detrás de estos fraudes **replican con exactitud el ambiente de una llamada bancaria real**: la música de espera, el tono profesional y, lo más peligroso, cuentan con toda tu información. Hoy no solo piden un código que llega por SMS, sino que solicitan que **compartas tu pantalla** para ver los códigos directamente.

## Suplantación de identidad con IA

La suplantación de identidad no es un problema nuevo, pero la tecnología actual lo ha convertido en una amenaza mucho más sofisticada y peligrosa. Durante la pandemia se multiplicaron los casos de personas que **usurparon la identidad de fallecidos** aprovechando que sus líneas telefónicas, correos electrónicos y redes sociales seguían activos.

Nuestras voces están en todas partes: mensajes de WhatsApp, audios en correos electrónicos, cursos en línea. Con herramientas como **Eleven Labs** o **Suno AI**, es posible clonar una voz con apenas segundos de muestra o incluso generar una animación realista de una persona a partir de una fotografía.

Este tipo de tecnología ya ha causado estragos documentados. Existen casos públicos en los que empleados depositaron **grandes cantidades de dinero** tras recibir un audio que parecía ser de su jefe o jefa solicitando una transferencia.

Una medida simple pero poderosa es establecer una **palabra de seguridad** con tu entorno más cercano. Esta palabra debe cumplir ciertas condiciones:

- No debe ser el nombre de una mascota.
- No debe ser el nombre de tu calle o datos públicos.
- Debe ser algo que **solo tus familiares comprendan**.

Afortunadamente, la región ha avanzado en marcos legales. La **Ley Olimpia**, vigente en México y con equivalentes en Argentina, establece que la difusión de videos, imágenes o cualquier contenido que muestre la intimidad de una persona, incluyendo material generado por inteligencia artificial, **está penado por la ley**. No importa si la imagen fue creada digitalmente; si el rostro identifica a la víctima, constituye un delito.

Existen sitios como _stopncii.org_ que ofrecen ayuda para dar de baja contenido íntimo no consentido. Sin embargo, las autoridades mexicanas advierten algo crucial:

- **No compartas tus fotografías** con plataformas no verificadas.
- No sabes a quién realmente se las estás entregando ni dónde van a parar.
- Las únicas personas que deben tener acceso son **las autoridades competentes** que llevan tu caso.

## Qué NO hacer si te hackean

Uno de los errores más graves es seguir el consejo de empleados de _carriers_ que sugieren simplemente sacar otra línea. **Cancelar tu línea telefónica corta el acceso a servicios críticos** que dependen de ella: cuentas bancarias, Gmail y cualquier plataforma que use un segundo factor de autenticación vía SMS o llamada.

Si cancelas la línea, el número puede reasignarse a otra persona que quizá no colabore contigo. Aunque obtengas un recibo de cancelación que te proteja legalmente, **a nivel de recuperación de cuentas es contraproducente** porque pierdes la vía para recibir códigos de verificación.

Circula un supuesto correo de soporte ([support@whatsapp.com](mailto:support@whatsapp.com)) que promete solucionar todo por arte de magia. La realidad es que los propios ciberdelincuentes conocen este recurso y lo aprovechan: te llaman haciéndose pasar por WhatsApp o incluso por la policía cibernética para seguir extrayendo datos. **No respondas a estas llamadas ni compartas información adicional**, especialmente si se dirigen a personas mayores a quienes suelen pedir acceso a Gmail, considerado "oro puro" para los atacantes.

### ¿Qué medidas tomar durante la crisis activa?

Cambiar contraseñas mientras el atacante aún controla tu WhatsApp es inútil. Cada vez que tú cambias una clave, ellos la recuperan con el código que llega al WhatsApp que manejan. Entras en un ciclo interminable que además puede provocar que plataformas como Facebook bloqueen tus propios intentos de acceso.

**La llave Yubico entra como factor diferenciador**. Al presentar un acceso físico, obtienes prioridad sobre los atacantes para realizar cambios. En vez de competir cambiando contraseñas, ganas control real.

Otra acción indispensable es **desactivar el buzón de voz**. Un intento fallido de recuperación de WhatsApp por llamada puede dejar un mensaje con un código de seis dígitos en tu buzón. Si el atacante accede remotamente a esa grabación, te quita la cuenta de nuevo sin importar cuántos cronómetros hayas esperado. En dispositivos Apple, desactiva también el **buzón en vivo**.

Por último, no confíes solo en biométricos como huella o reconocimiento facial para tus servicios bancarios. Existe una versión web accesible con usuario y contraseña, sin biométrico. Si alguna vez compartiste credenciales o identificaciones por WhatsApp, esos datos ya están comprometidos. La recomendación es vincular tus bancos a un **correo cifrado como Protonmail**, fuera del alcance de quienes controlan tu WhatsApp.
