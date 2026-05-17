import { useNavigate } from "react-router-dom";
import type DocumentoInterface from "../../../interfaces/DocumentoInterface";
import DocumentoAdapter from "../../../services/DocumentoAdapter";

export default function DocMosaico({objeto, index}: Readonly<{objeto: DocumentoInterface, index: number}>) {
    const adapter = new DocumentoAdapter();
    const navigate = useNavigate();
    return (
        <div
            key={index}
            className="
                group
                bg-gray-100
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition
                relative
            "
        >

            {/* 🔗 CLICK PARA ABRIR */}
            <a
                href={objeto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >

        <div className="text-5xl">
            📄
        </div>

       </a>

            {/* 🗑 BOTÓN ELIMINAR (SOLO UI) */}
            <button
                className="
                    absolute
                    top-2
                    right-2
                    bg-red-600
                    text-white
                    text-xs
                    px-2
                    py-1
                    rounded-md
                    opacity-0
                    group-hover:opacity-100
                    transition
                "
                onClick={() => {
                    adapter.delete(objeto.id!);
                    navigate(0);

                 }}
            >
                Eliminar
            </button>

        </div>
    );
}