enum Genero {
    Ficcion,
    Noficcion,
    Ciencia,
    Historia,
    Fantasia

}


type Libro ={
    id: number| string ,
    titulo: string,
    autor : string,
    genero: Genero,
    disponible: boolean
    idioma: "ES"|"EN"|"FR"

}

const biblioteca: Libro[] = [
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

function BuscaLibro(id: number|string):Libro|undefined{

    return biblioteca.find(libro => libro.id === id );

}

const resultado1 = BuscaLibro(1);
console.log(resultado1);
// Si existe, te imprime el objeto Libro; si no, undefined.

const resultado2 = BuscaLibro("A2B3");
console.log(resultado2);