import type ImagenInterface from "../../../interfaces/ImagenInterface";


export default function ImgMosaico({
    imagen,
    index
}: Readonly<{
    imagen: ImagenInterface,
    index: number
}>) {

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
                href={imagen.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >

                <img
                    src={imagen.url}
                    alt={`imagen-${index}`}
                    className="
                        w-full
                        h-52
                        object-cover
                        cursor-pointer
                        group-hover:scale-[1.02]
                        transition-transform
                    "
                />

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
                onClick={() => console.log("borrado")}
            >
                Eliminar
            </button>

        </div>

    );
}