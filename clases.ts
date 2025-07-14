 interface facturar{
    facturacion():string;
 }
 interface carroV{
    altitud(): string 
 }
 
 abstract class Vehiculos {
    
    constructor(
        protected readonly marca:string, 
        private readonly modelo: string,
        private readonly color: string,
        private price: number  ){}
        
        set cambiarP(value:number){
            this.price =value;


        }
        get precioA(){
            return this.price
        }
     abstract manejar():void 

    static convetir(value:number,tipomoneda:string){

        let resultado = "";
        switch(tipomoneda){
            case "USD":{
                resultado= "US"+ value
                break;
            }
            case "PESO":{
                resultado= "$"+ value
                break;
            }
             
        }   
        return resultado
         
    }
    
}

class Ariplane extends Vehiculos implements facturar,carroV {

    manejar(): void {
        console.log("Estoy conduciendo un auto")
    } 
    facturacion():string{
        return "la facturacion actual es de 200"
    }
    altitud(): string {
        return "El carro vuela a 5000000000000000 mil metros de altura"
    }

}

const vehicle = new Ariplane("Mazda","2025","verde",200)
