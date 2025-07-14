interface Media{
    titulo: string,
    genero: string[],
    director? : {name: string},
}


const mediadata : Media ={
    titulo: "goodfellas",
    genero: ["drama","terror","ficcion"],
    
    
}



console.log(mediadata.director?? 'director no encontrado')


