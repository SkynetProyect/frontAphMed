import { useNavigate } from "react-router-dom";
import type DocumentoInterface from "../../../interfaces/DocumentoInterface";
import DocumentoAdapter from "../../../services/DocumentoAdapter";
import { getUserRole } from "../../../guards/token";

export default function DocMosaico({
    objeto,
    index
}: Readonly<{
    objeto: DocumentoInterface,
    index: number
}>) {

    const adapter = new DocumentoAdapter();
    const isDoctor = getUserRole();
    const navigate = useNavigate();

    return (

        <div
            key={index}
            className="
                group
                bg-white
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition
                relative
                border
            "
        >

            {/* 📄 PREVIEW PDF */}
            <a
                href={objeto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >

                <iframe
                    src={`${objeto.url}#toolbar=0`}
                    title={`documento-${index}`}
                    className="
                        w-full
                        h-64
                        pointer-events-none
                    "
                />

            </a>

            {isDoctor && (
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
                onClick={async () => {

                    await adapter.delete(objeto.id!);

                    navigate(0);

                }}
            >
                Eliminar
            </button>
            )}

        </div>

    );
}