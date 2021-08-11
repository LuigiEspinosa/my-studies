/* ==================== Array.flat ==================== */

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());
console.log(array.flat(2));




/* ==================== Array.flatMap ==================== */

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));




/* ==================== String trim ==================== */

let start = '    hello world';

console.log(start);
console.log(start.trimStart());

let end = 'hello world    ';

console.log(end);
console.log(end.trimEnd());




/* ==================== try - catch ==================== */

try {
    /* ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch. */
} catch {
    error
}




/* ==================== Object.fromEntries() ==================== */

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));




/* ==================== Symbol.prototype.description ==================== */

let mySymbl = 'My symbol';
let symbol = Symbol(mySymbl);

console.log(symbol.description);
