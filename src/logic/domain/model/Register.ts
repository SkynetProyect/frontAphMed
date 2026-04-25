import type RegisterInterface from "../interfaces/RegisterInterface";

export default class Register implements RegisterInterface{
    nombre: string = "";
    email: string = "";
    telefono: string = "";
    tipo_documento: string = "";
    identificacion: string = "";
    clave: string = "";
    
}