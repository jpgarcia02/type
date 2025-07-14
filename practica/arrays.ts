const notas: number[]=[5,2,3,4,5]


function sumarNotas(notas:number[]){

    let total= 0

    for (let nota of notas){

        total+= nota 


    }
    return total

}

console.log(sumarNotas(notas))


type info=[string,number,boolean]
let infoProducto:info =["detergente",20.000,false]