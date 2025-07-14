"use strict";
var Genero;
(function (Genero) {
    Genero[Genero["Ficcion"] = 0] = "Ficcion";
    Genero[Genero["Noficcion"] = 1] = "Noficcion";
    Genero[Genero["Ciencia"] = 2] = "Ciencia";
    Genero[Genero["Historia"] = 3] = "Historia";
    Genero[Genero["Fantasia"] = 4] = "Fantasia";
})(Genero || (Genero = {}));
const biblioteca = [
    {
        id: 1,
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        genero: Genero.Fantasia,
        disponible: true,
        idioma: "ES",
    },
    {
        id: "A2B3",
        titulo: "A Brief History of Time",
        autor: "Stephen Hawking",
        genero: Genero.Ciencia,
        disponible: false,
        idioma: "EN",
    },
    {
        id: 3,
        titulo: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        genero: Genero.Historia,
        disponible: true,
        idioma: "ES",
    },
];
function BuscaLibro(id) {
    return biblioteca.find(libro => libro.id === id);
}
const resultado1 = BuscaLibro(1);
console.log(resultado1);
// Si existe, te imprime el objeto Libro; si no, undefined.
const resultado2 = BuscaLibro("A2B3");
console.log(resultado2);
