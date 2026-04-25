import type ImagenInterface from "./ImagenInterface";
import type DocumentoInterface from "./DocumentoInterface";
import type VideoInterface from "./VideoInterface";
export default interface ProcedimientoInterface {
    id?: number;
    nombre: string;
    categoria_id: number;
    paciente_id: number;
    imagenes: ImagenInterface[];
    documentos: DocumentoInterface[];
    videos: VideoInterface[];
}