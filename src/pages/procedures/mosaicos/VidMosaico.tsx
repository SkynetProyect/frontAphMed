
import type VideoInterface from "../../logic/domain/interfaces/VideoInterface";

export default function VidMosaico({videos}: Readonly<{videos: VideoInterface[]}>) {
    return (
        <>
        {videos.map((video: VideoInterface) => (
            <div key={video.id}>
                <video src={video.url} controls />
            </div>
        ))}
        </>
    );
}