let httpserver: {[key:string] : ApiEndpoint } ={};

interface ApiEndpoint{
    get() : string,
    post(request:{token:string, body:string}): void
}

@registrerEndpoint
class Families {
    private house = ["lannister","targaryen"];


    get(){
        return this.house
    }
    
    @protect("3212")
    post(request: {token:string, body:string}){
        this.house.push(request.body)
    }
}

@registrerEndpoint
class Castles{
    private castles = ["winterfall","caster rock"];

    get(){
        return this.castles
    }

    
    @protect("123")
    post(@paradecorator request: {token:string, body:string}){
        this.castles.push(request.body)
    }
}

function protect(token: string){
    return function (target: any, key: string, desciptor:PropertyDescriptor){

        const metod = desciptor.value;
        desciptor.value= function(request: {token:string, body:string}){
            if(request.token != token){
                console.log("403 forbiden!!")
            }else{
            const bindorginal = metod.bind(this)
            const result = bindorginal(request)

            return result 
            }
        }
    } 
}   

function paradecorator(target:any, key: string, index:number){
    console.log(target)
    console.log(key)
    console.log(index)
}


function registrerEndpoint (target : any){
   
    const className = target.name
    const endpointpath = "/" + className
    httpserver[endpointpath] = new target();
}


httpserver["/Castles"].post({ token: "1223", body: "Castle Black" });

console.log(httpserver['/Castles'].get())
