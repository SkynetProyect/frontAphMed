import { useNavigate } from "react-router-dom";
import type ImagenInterface from "../../../interfaces/ImagenInterface";
import ImagenAdapter from "../../../services/ImagenAdapter";
import { getUserRole } from "../../../guards/token";


export default function ImgMosaico({
    objeto,
    index
}: Readonly<{
    objeto: ImagenInterface,
    index: number
}>) {
    const navigate = useNavigate();
    const isDoctor = getUserRole();
    const adapter = new ImagenAdapter();
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

                <img
                    src={objeto.url}
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
                    
                    onClick={() => {
                        adapter.delete(objeto.id!);
                        navigate(0);

                    }}
                >
                    Eliminar
                </button>
            )}

        </div>

    );
}