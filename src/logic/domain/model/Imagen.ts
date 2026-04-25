import type ImagenInterface from "../interfaces/ImagenInterface";
export default class Imagen implements ImagenInterface{
    id?: number;
    nombre?: string;
    url: string = "";
}
