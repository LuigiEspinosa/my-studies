El **web scraping** o _raspado web_ es una técnica valiosa que nos permite extraer información de sitios web automáticamente. Pero, ¿qué significa realmente? En términos simples, es el proceso de **escribir código** para recopilar datos de páginas web.

Plataformas como **CamelCamelCamel** utilizan web scraping para rastrear y mostrar la evolución de precios de productos en Amazon, algo que a menudo no está disponible mediante APIs.

Cuando hablamos de scraping, pensamos en **robots** o **bots** que navegan por las webs, recuperando información como títulos, contenido y enlaces. Google, por ejemplo, utiliza técnicas de scraping para indexar su vasto contenido.

Sin embargo, es importante ser consciente de las normas y restricciones que pueden existir en la página web que deseas scrapear. Algunos sitios tienen protecciones para evitar el scraping.

## Introducción al Scraping

### Legalidad del Scraping

**Extraer datos** de una página web en sí mismo no es necesariamente un acto ilícito, pero el _uso_ que hagas de esos datos sí puede serlo.

Es vital entender que el **contexto** y el **uso** son fundamentales en la legalidad del scraping. Por ejemplo, extraer datos de un periódico puede ser legítimo, pero si decides publicarlos sin hacer ningún tipo de trabajo adicional o sin permiso, podrías meterte en problemas. Esto es un aspecto clave que se relaciona con la **propiedad intelectual**.

### Consideraciones Importantes

Recuerda que el scraping puede no funcionar en todas las páginas web debido a:

- **Captchas**: Muchos sitios pueden implementar mecanismos anti-scraping.
- **Estructura HTML cambiante**: Las páginas web pueden modificar su estructura, lo que puede romper tu código.

## Scraping con BeautifulSoup

Una característica potente de **Beautiful Soup** es la capacidad de navegar por la estructura del HTML. Puedes acceder a elementos padres, hermanos y atributos. Por ejemplo, si quieres encontrar el padre de la etiqueta total que acabamos de extraer, puedes utilizar:

```python
# pip3 install bs4

padre = sopa.title.parent
print('El padre del título es:', padre)
```

### Ventajas

1. **Rapidez de Implementación**: Beautiful Soup es increíblemente fácil de usar, lo que te permitirá comenzar a extraer datos rápidamente.
2. **Filtrado Sencillo**: La biblioteca permite localizar elementos y atributos de forma intuitiva, facilitando el proceso de scraping.

### Desventajas

1. **Limitaciones en Navegación**: Aunque puede seguir enlaces, esto no simula la navegación de un usuario real. Su capacidad para “navegar” está restringida a seguir URLs ya encontradas.
2. **Problemas con Firewalls**: Beautiful Soup puede enfrentar dificultades al trabajar detrás de firewalls, lo que puede limitar su eficacia en algunos sitios web.

## Saltando CAPTCHAs con Python

Los CAPTCHAs son mecanismos diseñados para evitar que los bots accedan a contenido específico en la web. Sin embargo, existen métodos para sortearlos:

1. **Manipulación de Headers**: Aprenderás a falsificar el `User-Agent` en tus peticiones.
2. **Uso de Cookies**: La importancia de obtener y reutilizar cookies generadas tras una interacción manual con un CAPTCHA.

```python
import requests

headers = {
	'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
}

response = requests.get('https://example.com', headers=headers)

print(response.text)
```

El código anterior envía una petición a `example.com`, haciéndose pasar por Googlebot, lo que puede ayudar a evadir restrictions y evitar CAPTCHAs.

### Precauciones

Al emplear técnicas de scraping, **siempre** es recomendable utilizar una VPN para salvaguardar tu dirección IP original. Esto minimizará el riesgo de ser bloqueado por los servidores web.

## Introducción a Playwright

Playwright se destaca porque:

- **Simula un navegador real**: A diferencia de otras herramientas como `Requests` o `BeautifulSoup`, **Playwright abre un navegador** de verdad (Chrome, Firefox, Safari, etc.) y permite interactuar con la página de forma activa.
- **Prueba a fondo**: No solo sirve para **extraer datos**, sino también para verificar que las páginas funcionen como se espera.

### Ventajas de Usar Playwright

1. **Interacción Completa**: Puedes iniciar sesión, enviar formularios y más.
2. **Capturas de Pantalla**: Generar imágenes del estado de la página.
3. **Carga de JavaScript**: Esperar a que se cargue el contenido dinámico de la página.

Sin embargo, hay que tener en cuenta que **levantar un navegador** puede ser **más lento y costoso** en comparación con métodos simples de scraping.

### Scraping con XPaths

XPath es un lenguaje de consulta que permite seleccionar nodos de un documento XML (o HTML). Su uso en el web scraping es imprescindible para acceder a datos específicos sin tener que navegar por toda la estructura del HTML.

#### Ventajas del uso de XPath

- **Rápido**: Puedes obtener elementos específicos en cuestión de segundos.
- **Flexible**: Permite utilizar distintos métodos para seleccionar elementos, como texto, clases, o IDs.

#### Consideraciones a tener en cuenta

Si bien XPath es útil, es importante recordar que:

- **Fragilidad**: Cambios en la estructura HTML pueden romper tus selectores XPath.
- **Mejores Prácticas**: Siempre intenta ser específico y combina XPath con clases o IDs cuando sea posible, para mantener la estabilidad de tu código.

#### Consejos para un scraping eficaz

1. **Valida la estructura**: Utiliza herramientas de desarrollo de navegador para verificar el XPath antes de implementarlo.
2. **Alternativas**: Si tienes tiempo y necesitas estabilidad, considera usar selectores de clase o ID.
3. **Pruebas**: Asegúrate de realizar pruebas frecuentes cuando trabajes con XPath, pues puede volverse obsoleto con los cambios en la página.
