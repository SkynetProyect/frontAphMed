import { useState } from "react";
import VideoAdapter from "../../../services/VideoAdapter";
import type VideoInterface from "../../../interfaces/VideoInterface";
import Video from "../../../models/Video";

export default function UploadVideoCard({
    procedimientoId,
    onUpload
}: Readonly<{
    procedimientoId: number;
    onUpload?: () => void;
}>) {

    const adapter = new VideoAdapter();
    const videoData: VideoInterface = new Video();
    videoData.procedimiento_id = procedimientoId;
    videoData.url = "";

    const [loading, setLoading] = useState(false);
    const subirVideo = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        try {

            setLoading(true);

            await adapter.create( videoData,file);

            /* 🔄 callback opcional */
            onUpload?.();

        } catch (error) {

            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Error subiendo video"
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
                        : "Agregar video"
                }
            </span>

            <span className="text-sm mt-1">
                PNG, JPG, JPEG
            </span>

            <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={subirVideo}
                disabled={loading}
            />

        </label>

    );
}