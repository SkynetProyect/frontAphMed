

import useNavMosaico from "../functions/fnc_navMosaico";
import { useNavigate, useParams } from "react-router-dom";
import FormDivText from "../../../components/logics/FormDivText";
import FormDivSelect from "../../../components/logics/FormDivSelect";
import ImgMosaico from "./ImgMosaico";
import VidMosaico from "./VidMosaico";
import type VideoInterface from "../../../interfaces/VideoInterface";
import type ImagenInterface from "../../../interfaces/ImagenInterface";
import DocMosaico from "./DocMosaico";
import UploadImagenCard from "./UploadImagenCard";
import UploadVideoCard from "./UploadVideoCard";
import UploadDocumentCard from "./UploadDocumentCard";
import { getUserRole } from "../../../guards/token";

export default function NavMosaico() {
    const isDoctor = getUserRole();
    const { id } = useParams();
    const navigator = useNavigate();

    const {form, handleChange, handleSubmit,
        activeTab, setActiveTab, visuales, eliminar,
        imagenes, videos, documentos, categorias } = useNavMosaico(Number(id), navigator);

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-6xl mx-auto p-6 space-y-6">

                {/* 🧾 FORMULARIO */}
                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                        Información del Procedimiento
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        <FormDivText
                            nombre="nombre"
                            titulo="Nombre"
                            id="nombre"
                            type="text"
                            visuals={visuales}
                            value={form.nombre}
                            alcambio={handleChange}
                        />

                        <FormDivText
                            nombre="descripcion"
                            titulo="Descripcion"
                            id="descripcion"
                            type="text"
                            visuals={visuales}
                            value={form.descripcion}
                            alcambio={handleChange}
                        />

                        <FormDivSelect
                            nombre="categoria_id"
                            titulo="Categoria"
                            id="categoria_id"
                            visuals={visuales}
                            value={String(form.categoria_id)}
                            alcambio={handleChange}
                            iterador={categorias}
                            nombredesignado={"nombre"}
                        />

                        <div className="flex justify-end pt-4">
                            {isDoctor && (
                                <>
                                 <button
                                type="submit"
                                className="
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    px-6
                                    py-2
                                    rounded-lg
                                    transition
                                    cursor-pointer
                                "
                            >
                                Modificar
                            </button>
                            <button
                                onClick={eliminar}
                                className="
                                    bg-red-600
                                    hover:bg-red-700
                                    text-white
                                    px-6
                                    py-2
                                    rounded-lg
                                    transition
                                    cursor-pointer
                                "
                            >
                                Eliminar
                            </button>
                            </>
                             )}
                           
                        </div>

                    </form>
                </div>

                {/* 📌 TABS */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                    <div className="flex border-b bg-gray-50">

                        <TabButton
                            label="Imágenes"
                            active={activeTab === "imagenes"}
                            onClick={() =>
                                setActiveTab("imagenes")
                            }
                        />

                        <TabButton
                            label="Videos"
                            active={activeTab === "videos"}
                            onClick={() =>
                                setActiveTab("videos")
                            }
                        />

                        <TabButton
                            label="Documentos"
                            active={activeTab === "documentos"}
                            onClick={() =>
                                setActiveTab("documentos")
                            }
                        />

                    </div>

                    {/* 📂 CONTENIDO */}
                    <div className="p-6">

                        {/* 🖼️ IMÁGENES */}
                        {activeTab === "imagenes" && (

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {imagenes?.map((imagen: ImagenInterface, index: number) => (
                                    <ImgMosaico key={index} objeto={imagen} index={index} />
                                ))}
                                <UploadImagenCard procedimientoId={Number(id)} onUpload={() => window.location.reload()}/>
                            </div>
                            

                        )}

                        {/* 🎥 VIDEOS */}
                        {activeTab === "videos" && (

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {videos?.map((video: VideoInterface, index: number) => (
                                    <VidMosaico key={index} index={index} objeto={video}/>
                                ))}
                                < UploadVideoCard procedimientoId={Number(id)} onUpload={() => window.location.reload()} />
                            </div>

                        )}

                        {/* 📄 DOCUMENTOS */}
                        {activeTab === "documentos" && (

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {documentos?.map((documento: any, index: number) => (
                                    <DocMosaico key={index} objeto={documento} index={index} />
                                ))}
                                < UploadDocumentCard procedimientoId={Number(id)} onUpload={() => window.location.reload()} />
                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

/* 🔘 BOTÓN TAB */
function TabButton({
    active,
    onClick,
    label
}: any) {

    return (
        <button
            onClick={onClick}
            className={`
                px-6
                py-4
                text-sm
                font-semibold
                transition
                border-b-2
                cursor-pointer
                ${active
                    ? "border-blue-600 text-blue-600 bg-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }
            `}
        >
            {label}
        </button>
    );
}