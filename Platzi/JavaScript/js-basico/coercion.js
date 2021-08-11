// Coarción implicita

4 + "7";    // "47" => typeof string
4 * "7";    // 28 => typeof number
2 + true;   // 3 => typeof number
false - 3;  // -3 => typeof number

// Coarción explicita

var a = 40;
var b = a + "";
var c = String(a);
var d = Number(c);

console.log(b);     // Print "40" => typeof string
console.log(c);     // Print "40" => typeof string
console.log(d);     // Print 40 => typeof number

// Truthy && Falsy

Boolean();          // false
Boolean(0);         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(false)      // false
Boolean("");        // false

Boolean(1);             // true (cualquier número diferente de 0)
Boolean("a");           // true (para cualquier caracter o espacio en blanco)
Boolean([])             // true (aunque esté vacio)
Boolean({})             // true (aunque esté vacio)
Boolean(function(){})   // Cualquier función es verdadera