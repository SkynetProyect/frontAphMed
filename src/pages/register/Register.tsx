import { useEffect, useRef } from "react";
import videoBg from "../../../public/mainescene.mp4";
import FormularioRegister from "./forms/FormularioRegister";
import useCreatePacient from "./functions/fnc_createPacient";
import type PacienteInterface from "../../interfaces/PacienteInterface";
import { useNavigate } from "react-router-dom";
import createPacient from "./functions/fnc_createPacient";

export default function Register() {

    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();

        const handleCreatePacient =
        async (form: PacienteInterface) => {
            form.tipo_documento = Number(form.tipo_documento);
            await createPacient(
                form,
                navigate
            );

        };
    useEffect(() => {

        const video = videoRef.current;

        if (!video) return;

        const handleLoadedMetadata = () => {

            const handleTimeUpdate = () => {

                // detener al llegar a la mitad
                if (video.currentTime >= 0.5) {

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

                <FormularioRegister fnc={handleCreatePacient}/>

            </div>

        </div>

    );

}