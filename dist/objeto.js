"use strict";
var roles;
(function (roles) {
    roles[roles["estudiante"] = 0] = "estudiante";
    roles[roles["profesor"] = 1] = "profesor";
})(roles || (roles = {}));
let persona = {
    nombre: "Rpdrigo",
    edad: 34,
    direccion: {
        calle: "calle 84",
        comuna: "ancon san mrtin",
    },
    curso: ["fluter", "ingles", 1, false],
    roles: roles.profesor,
};
console.log(persona);
