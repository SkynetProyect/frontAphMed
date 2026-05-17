import type ImagenInterface from "../../../interfaces/ImagenInterface";
import { use, useEffect, useState } from "react";
import type VideoInterface from "../../../interfaces/VideoInterface";
import type DocumentoInterface from "../../../interfaces/DocumentoInterface";
import Procedimiento from "../../../models/Procedimiento";
import type ProcedimientoInterface from "../../../interfaces/ProcedimientoInterface";
import ProcedimientoAdapter from "../../../services/ProcedimientoAdapter";
import useForm from "../../../components/hooks/useForm";
import type CategoriaInterface from "../../../interfaces/CategoriaInterface";
import CategoriaAdapter from "../../../services/CategoriaAdapter";
import type { NavigateFunction } from "react-router-dom";
import ImagenAdapter from "../../../services/ImagenAdapter";
import VideoAdapter from "../../../services/VideoAdapter";
import DocumentoAdapter from "../../../services/DocumentoAdapter";

export default function useNavMosaico(procedimientoId: number, navigator: NavigateFunction) {
    
    const [activeTab, setActiveTab] = useState<"imagenes" | "videos" | "documentos">("imagenes");
    const adapter = new ProcedimientoAdapter();
    const actualizar = (formulario: ProcedimientoInterface) => {
        adapter.update(formulario);
        navigator(0);
    }
    const [imagenes, setImagenes] = useState<ImagenInterface[]>([]);
    const [videos, setVideos] = useState<VideoInterface[]>([]);
    const [documentos, setDocumentos] = useState<DocumentoInterface[]>([]);

    const {form, setForm, handleChange, handleSubmit} = useForm<ProcedimientoInterface>(Procedimiento, actualizar);
    const [categorias, setCategorias] = useState<CategoriaInterface[]>([]);
    const visuales:string ="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg";
    const eliminar = () => {
        new ImagenAdapter().deleteByProcedimiento(procedimientoId);
        new VideoAdapter().deleteByProcedimiento(procedimientoId);
        new DocumentoAdapter().deleteByProcedimiento(procedimientoId);
        adapter.delete(procedimientoId);
        navigator("/procedimientos/"+form.paciente_id);
    }

    useEffect(() => {
        Promise.all([
            adapter.getById(procedimientoId),
            new CategoriaAdapter().getAll()
        ])
        .then(([procedimientoData, categoriasData]) => {
            setForm(procedimientoData);
            setCategorias(categoriasData);
  
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        })
    }, [procedimientoId]);

        /* 🧠 3. SOLO IMÁGENES */
    useEffect(() => {

        new ImagenAdapter()
            .getByProcedimiento(procedimientoId)
            .then(setImagenes)
            .catch(console.error);

    }, [procedimientoId]);


    useEffect(() => {

        new VideoAdapter()
            .getByProcedimiento(procedimientoId)
            .then(setVideos)
            .catch(console.error);

    }, [procedimientoId]);


    useEffect(() => {

        new DocumentoAdapter()
            .getByProcedimiento(procedimientoId)
            .then(setDocumentos)
            .catch(console.error);

    }, [procedimientoId]);
    


    return {form, setForm,handleChange, handleSubmit,
        activeTab, setActiveTab, visuales, eliminar,
        imagenes, videos, documentos, categorias };
}