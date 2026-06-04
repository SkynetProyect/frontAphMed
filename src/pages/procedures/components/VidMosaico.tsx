
import { useNavigate } from "react-router-dom";
import type VideoInterface from "../../../interfaces/VideoInterface";
import VideoAdapter from "../../../services/VideoAdapter";
import { getUserRole } from "../../../guards/token";

export default function VidMosaico({objeto, index}: Readonly<{objeto: VideoInterface, index: number}>) {
    const adapter = new VideoAdapter();
    const isDoctor = getUserRole();
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

            <video
                controls
                className="
                    w-full
                    h-72
                    bg-black
                "
            >
                <source
                    src={objeto.url}
                />
            </video>

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