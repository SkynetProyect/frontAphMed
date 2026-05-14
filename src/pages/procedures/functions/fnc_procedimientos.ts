import { use, useContext, useEffect, useState } from "react";
import type SocketUpdateInterface from "../../../interfaces/SocketUpdateInterface";
import { SocketContext } from "../../../components/hooks/socket-reducers/SocketContext";
import ProcedimientoAdapter from "../../../services/ProcedimientoAdapter";
import type CategoriaInterface from "../../../interfaces/CategoriaInterface";
import type ProcedimientoInterface from "../../../interfaces/ProcedimientoInterface";
import CategoriaAdapter from "../../../services/CategoriaAdapter copy";

export default function fnc_procedimientos(idpatient:number){
    const { socket } = useContext(SocketContext).SocketState;
    const [procedimientos, setProcedimientos] = useState<ProcedimientoInterface[]>([]);
    const [categorias, setCategorias] = useState<CategoriaInterface[]>([]);
    
    useEffect(() => {
        new ProcedimientoAdapter().getAll().then((data) => {
            setProcedimientos(data);
        }); 
        new CategoriaAdapter().getAll().then((data) => {
            setCategorias(data);
        }); 
        socket!.on("procedure_update", (data: SocketUpdateInterface) => {
            console.log("Received procedure update: "+data);
        });

    }, []);

    return {socket, procedimientos, setProcedimientos, categorias, setCategorias};
}