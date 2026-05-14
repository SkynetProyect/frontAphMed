import type DocumentoInterface from "../../logic/domain/interfaces/DocumentoInterface";

export default function DocMosaico({documentos}: Readonly<{documentos: DocumentoInterface[]}>) {
    return (
        <>
        {documentos.map((documento: DocumentoInterface) => (
            <div key={documento.id}>
                <iframe src={documento.url} title={documento.nombre} />
            </div>
        ))}
        </>
    );
}