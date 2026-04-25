import type ImagenInterface from "../../logic/domain/interfaces/ImagenInterface";

export default function ImgMosaico({imagenes}: Readonly<{imagenes: ImagenInterface[]}>) {
    return (
        <>
        {imagenes.map((imagen: ImagenInterface) => (
            <div key={imagen.id}>
                <img src={imagen.url} alt={imagen.nombre?? "Imagen sin nombre"} />
            </div>
        ))}
        </>
    );
}