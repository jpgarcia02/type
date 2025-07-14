"use strict";
const notas = [5, 2, 3, 4, 5];
function sumarNotas(notas) {
    let total = 0;
    for (let nota of notas) {
        total += nota;
    }
    return total;
}
console.log(sumarNotas(notas));
let infoProducto = ["detergente", 20.000, false];
