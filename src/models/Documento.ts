import type DocumentoInterface from "../interfaces/DocumentoInterface";
export default class Documento implements DocumentoInterface{
    id?: number;
    nombre?: string = "Sin nombre";
    procedimiento_id: number = 0;
    url: string = "";
}