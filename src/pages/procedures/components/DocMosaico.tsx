import type DocumentoInterface from "../../../interfaces/DocumentoInterface";

export default function DocMosaico({documento, index}: Readonly<{documento: DocumentoInterface, index: number}>) {
    return (
    <a
        key={index}
        href={documento.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
            border
            rounded-xl
            p-6
            bg-gray-50
            hover:bg-blue-50
            hover:border-blue-400
            transition
            flex
            flex-col
            items-center
            justify-center
            text-center
            gap-3
        "
    >

        <div className="text-5xl">
            📄
        </div>

        <span className="font-medium text-gray-700 break-all">
            Documento {index + 1}
        </span>

    </a>
    );
}