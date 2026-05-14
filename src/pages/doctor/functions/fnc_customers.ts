import PacienteAdapter from "../../../services/PacienteAdapter";
import type PacienteInterface from "../../../interfaces/PacienteInterface";
import { useEffect, useState } from "react";

export default function fnc_customers() {
    const [pacientes, setPacientes] = useState<PacienteInterface[]>([]);
        
    useEffect(() => {
        new PacienteAdapter().getAll().then((data) => {
            setPacientes(data);
        }); 
    }, []);

    async function registerPacient(form: PacienteInterface) {
        const respuesta = await new PacienteAdapter().create(form);
        setPacientes([...pacientes, respuesta]);
    }
        
    return {pacientes, setPacientes, registerPacient};
}