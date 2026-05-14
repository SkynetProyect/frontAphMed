import { use, useContext, useEffect } from "react";
import type SocketUpdateInterface from "../../interfaces/SocketUpdateInterface";
import { SocketContext } from "../../components/hooks/socket-reducers/SocketContext";


export default function Procedimientos(){
    const { socket } = useContext(SocketContext).SocketState;

    useEffect(() => {
        socket!.on("procedure_update", (data: SocketUpdateInterface) => {
            console.log("Received procedure update: "+data);
            
        });
        // Aquí puedes realizar la lógica para obtener los procedimientos desde tu backend o cualquier otra fuente de datos
    }, []);
    return (
        <>
            <h1> Procedimientos </h1>
            <p> listar procedimientos</p>
        </>
    );
}