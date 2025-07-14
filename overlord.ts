type sitrngOarray = string[] | string;

function reverse(stringOrray:sitrngOarray):string;
function reverse(stringOrray:sitrngOarray) : sitrngOarray {
    return typeof stringOrray === "string"?
    stringOrray.split("").reverse().join(''):
    stringOrray.slice().reverse()

} 

const hola = reverse(["a","b","c"])
console.log(hola)