# Modern HTML & CSS From The Beginning (Including Sass)

## How The Web Works (Summarized)

- A global network for computers.
- Each computer/router as a **IP Address**.
- Computers talk to eachother using the **TCP/IP** protocol.
- **HTTP** handles web traffic (requests/responses).
- **Websites/Webpages** are files stored on computers that run a piece of software called a **web server** (Apache, Nginx, etc).
- **Hosting companies** provide space on a server for your website.
- **Domain names** can be purchased from registrars and linked to your hosting account/web server.
- **DNS** is used to map IP addresses to domain names.

![How a Website Works](https://www.none.edu.vn/images/blog/1690435110How-a-Website-Works.png)

## The Roles of HTML & CSS in Web Development

### What is HTML?

- Hypertext Markup Language
- HTML is **not** a programing language.
- Markup for creating webpages / documents.
- HTML is extremely important & relevant but is also just the beginning.

### What is CSS?

- Cascading Style Sheets.
- Styling/Stylesheet Language.
- Used for styling HTML elements.
- Can be extended with Sass/Less.

---

- HTML = Content Display/Structure.
- CSS = Style & Design.
- JavaScript = Dynamic Frontend Programming.
- PHP, Python, C#, JS = Backend Programming.
- MySQL, MonogoDB = Database/Storage.

## HTML Basics

- Elements surrounded in angle brackets.
- Usually have a start end tag.
- Some tags close themselves (Remnant of xHTML).

## CSS Basics

```a { background-color : yellow ; }```

selector | declaration start | property | property/value separator | value | declaration separator | declaration end

### CSS Grid vs Flexbox

**Flexbox** is best suited for laying out single rows and columns, while **CSS Grid** is best for grid layouts with multiple rows and columns.

### CSS Units

Absolute:

- cm: Centimeters.
- mm: Millimeters.
- in: Inches.
- px: Pixels (1px = 1/96th of 1in).
- pt: Points (1pt = 1/72 of 1in).
- pc: Picas (1pc = 12pt).

Relative:

- %: To parent element.
- em: To font-size of parent element.
- rem: To font-size of root element.
- vw: To 1% of viewport width.
- vh: To 1% of viwport height.

### Position Values

- Static: Not affected by tblr(top, bottom, left, right) properties/values.
- Relative: tblr values cause element to be moved from its normal position.
- Absolute: Positioned relative to its parent element that is positioned "relative".
- Fixed: Positioned relative to the viewport.
- Sticky: POsitioned based on scroll position.

## Web Accessibility

- Designing and creating websites and applications in a way so that people with disabilities can use them.
- This includes people with visual, physical, speech, cognitive and neurological disabilities.
- Your websites should work well with screen readers.

### Accessibility Strategies

- Semantic elements (nav, main, header, footer, etc).
- Image alt tags.
- Descriptive link text.
- Logical tab order.
- Proper Labeling.
- ARIA-* attributes.
