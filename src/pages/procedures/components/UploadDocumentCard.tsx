import { useState } from "react";
import DocumentoAdapter from "../../../services/DocumentoAdapter";
import type DocumentoInterface from "../../../interfaces/DocumentoInterface";
import Documento from "../../../models/Documento";

export default function UploadDocumentCard({
        procedimientoId,
        onUpload
    }: Readonly<{
        procedimientoId: number;
        onUpload?: () => void;
    }>) {

    const adapter = new DocumentoAdapter();
    const documentoData: DocumentoInterface = new Documento();
    documentoData.procedimiento_id = procedimientoId;
    documentoData.url = "";

    const [loading, setLoading] = useState(false);
    const subirDocumento = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        try {

            setLoading(true);

            const response = adapter.create( documentoData, file);
            

            alert("Documento subida correctamente");

            /* 🔄 callback opcional */
            onUpload?.();

        } catch (error) {

            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Error subiendo documento"
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
                        : "Agregar documento"
                }
            </span>

            <span className="text-sm mt-1">
                PNG, JPG, JPEG
            </span>

            <input
                type="file"
                accept="documento*"
                className="hidden"
                onChange={subirDocumento}
                disabled={loading}
            />

        </label>

    );
}