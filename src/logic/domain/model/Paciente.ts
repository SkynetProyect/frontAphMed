import type PacienteInterface from "../interfaces/PacienteInterface";

export default class Paciente implements PacienteInterface{
    id: number = 0;
    nombre: string = "";
    email: string = "";
    telefono: string = "";
    tipo_documento: string = "";
    identificacion: string = "";
    
}