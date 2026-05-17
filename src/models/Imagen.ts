import type ImagenInterface from "../interfaces/ImagenInterface";
export default class Imagen implements ImagenInterface{
    id?: number;
    nombre?: string;
    procedimiento_id: number = 0;
    url: string = "";
}
