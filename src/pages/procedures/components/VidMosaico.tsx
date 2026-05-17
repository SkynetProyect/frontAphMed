
import type VideoInterface from "../../../interfaces/VideoInterface";

export default function VidMosaico({video, index}: Readonly<{video: VideoInterface, index: number}>) {
    return (
        <div
            key={index}
            className="
                bg-gray-100
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition
            "
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
                    src={video.url}
                />
            </video>

        </div>
    );
}