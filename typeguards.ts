class pajaro{
    fly(): void{
        console.log('volando')
    };
}

class Pez{
    nadar(): void{
        console.log('nadando')
    };
}

type Uknowpet = Pez | pajaro;

function imprimir(pet: Uknowpet)
{
    if(pet instanceof Pez) 
        pet.nadar();
    
}


const pet = new Pez();
imprimir(pet)