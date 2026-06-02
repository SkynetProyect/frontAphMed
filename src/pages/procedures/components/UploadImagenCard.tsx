import { useState } from "react";
import ImagenAdapter from "../../../services/ImagenAdapter";
import type ImagenInterface from "../../../interfaces/ImagenInterface";
import Imagen from "../../../models/Imagen";

export default function UploadImagenCard({
    procedimientoId,
    onUpload
}: Readonly<{
    procedimientoId: number;
    onUpload?: () => void;
}>) {

    const adapter = new ImagenAdapter();
    const imagenData: ImagenInterface = new Imagen();
    imagenData.procedimiento_id = procedimientoId;
    imagenData.url = "";

    const [loading, setLoading] = useState(false);
    const subirImagen = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        try {

            setLoading(true);

            await adapter.create( imagenData,file);
        

            /* 🔄 callback opcional */
            onUpload?.();

        } catch (error) {

            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Error subiendo imagen"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <label
            className="
                border-2
                border-dashed
                border-gray-300
                rounded-2xl
                bg-gray-50
                hover:bg-gray-100
                transition
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                min-h-[220px]
                text-gray-500
                hover:text-gray-700
            "
        >

            <div className="text-5xl mb-3">
                ➕
            </div>

            <span className="font-semibold">
                {
                    loading
                        ? "Subiendo..."
                        : "Agregar imagen"
                }
            </span>

            <span className="text-sm mt-1">
                PNG, JPG, JPEG
            </span>

            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={subirImagen}
                disabled={loading}
            />

        </label>

    );
}