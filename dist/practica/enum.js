"use strict";
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido[EstadoPedido["Pendiente"] = 0] = "Pendiente";
    EstadoPedido[EstadoPedido["Enviado"] = 1] = "Enviado";
    EstadoPedido[EstadoPedido["Entregado"] = 2] = "Entregado";
})(EstadoPedido || (EstadoPedido = {}));
let Mipedido = EstadoPedido.Enviado;
console.log(Mipedido);
console.log(EstadoPedido[Mipedido]);
