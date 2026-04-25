import type ImagenInterface from "../../logic/domain/interfaces/ImagenInterface";
import { use, useEffect, useState } from "react";
import type VideoInterface from "../../logic/domain/interfaces/VideoInterface";
import type DocumentoInterface from "../../logic/domain/interfaces/DocumentoInterface";
import DocMosaico from "./DocMosaico";
import ImgMosaico from "./ImgMosaico";
import VidMosaico from "./VidMosaico";

export default function NavMosaico({procedimientoId}: Readonly<{procedimientoId: number}>) {

    const [activeTab, setActiveTab] = useState<"imagenes" | "videos" | "documentos">("imagenes");
    const [imagenes, setImagenes] = useState<ImagenInterface[]>([]);
    const [videos, setVideos] = useState<VideoInterface[]>([]);
    const [documentos, setDocumentos] = useState<DocumentoInterface[]>([]);

    useEffect(() => {
        // Aquí puedes cargar las imágenes, videos y documentos relacionados con el procedimientoId
        // Por ejemplo, podrías hacer una llamada a una API para obtener los datos y luego actualizar los estados correspondientes.
    }, []);

    return (
        <div>
            <div>
                <button onClick={() => setActiveTab("imagenes")}>Imagenes</button>
                <button onClick={() => setActiveTab("videos")}>Videos</button>
                <button onClick={() => setActiveTab("documentos")}>Documentos</button>
            </div>
            <div>
                {activeTab === "imagenes" && <ImgMosaico imagenes={imagenes} />}
                {activeTab === "videos" && <VidMosaico videos={videos} />}
                {activeTab === "documentos" && <DocMosaico documentos={documentos} />}
            </div>

        </div>
    );
}