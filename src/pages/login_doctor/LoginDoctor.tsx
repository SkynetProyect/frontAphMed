import { useEffect, useRef } from "react";
import videoBg from "../../../public/operationroom.mp4";
import FormularioLoginDoctor from "./forms/FormularioLoginDoctor";

export default function LoginDoctor() {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        const video = videoRef.current;

        if (!video) return;

        const handleLoadedMetadata = () => {

            const handleTimeUpdate = () => {

                // detener al llegar a la mitad
                if (video.currentTime >= 8) {

                    video.pause();

                    video.removeEventListener(
                        "timeupdate",
                        handleTimeUpdate
                    );

                }

            };

            video.addEventListener(
                "timeupdate",
                handleTimeUpdate
            );

        };

        video.addEventListener(
            "loadedmetadata",
            handleLoadedMetadata
        );

        return () => {

            video.removeEventListener(
                "loadedmetadata",
                handleLoadedMetadata
            );

        };

    }, []);

    return (

        <div className="relative w-screen h-screen overflow-hidden">

            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="
                    fixed
                    top-0
                    left-0
                    w-full
                    h-full
                    object-cover
                    -z-10
                "
            >
                <source
                    src={videoBg}
                    type="video/mp4"
                />
            </video>

            <div className="flex justify-center items-center w-full h-full">

                <FormularioLoginDoctor />

            </div>

        </div>

    );

}