type user = {
    name: string;
    StartDate : Date;
};

type Admin ={
    name: string,
    permisos: string[];

}

type UserAdmin = user & Admin;

const doctor: UserAdmin = {
    name: "carlos",

    StartDate : new Date(),
    permisos : ["ver paciente","ver historial "]

}