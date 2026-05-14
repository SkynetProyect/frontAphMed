import type PacienteInterface from "../interfaces/PacienteInterface";

export default class Register implements PacienteInterface{
    nombre: string = "";
    email: string = "";
    telefono: string = "";
    tipo_documento: number = 0;
    identificacion: string = "";
    clave: string = "";
    
}