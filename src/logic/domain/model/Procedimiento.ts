import type DocumentoInterface from "../interfaces/DocumentoInterface";
import type ImagenInterface from "../interfaces/ImagenInterface";
import type VideoInterface from "../interfaces/VideoInterface";

export default class Procedimiento {
    id?: number;
    nombre: string= "";
    categoria_id: number = 0;
    paciente_id: number = 0;
    imagenes: ImagenInterface[] = [];
    documentos: DocumentoInterface[] = [];
    videos: VideoInterface[] = [];
}