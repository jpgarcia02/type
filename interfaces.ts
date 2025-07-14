enum Role{
    Doctor,
    Anestesiologo,
    Asiste,
    Adminsitrativo 
};

interface Staff {
    nombre:string,
    email: string,
    role: Role,
};

interface Billable{
    total:number,
    currentBill(): string,
}


const medico={
    nombre: "pedro",
    email:"pedor@gmail.com",
    role: Role.Doctor,
    total : 25,
    currentBill(){
        return `El valor actual de la factura es de ${this.total} `;
    }


};

const printStaff = (staff:Staff)=>{
    console.log(staff)
};

const printFac =(bill: Billable)=>{
    console.log(bill.currentBill())
}

printStaff(medico)
printFac(medico)
