import PacienteAdapter from "../../../services/PacienteAdapter";
import type PacienteInterface from "../../../interfaces/PacienteInterface";
import { useEffect, useState } from "react";

export default function fnc_customers() {
    const [pacientes, setPacientes] = useState<PacienteInterface[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
        
    useEffect(() => {
        new PacienteAdapter().getAll(page, pageSize).then((result) => {
            setPacientes(result.data);
            setTotal(result.total);
            setTotalPages(result.totalPages);
        }); 
    }, [page, pageSize]);

    async function registerPacient(form: PacienteInterface) {
        try {
            const respuesta = await new PacienteAdapter().create(form);
            setPacientes([...pacientes, respuesta]);
        } catch (error) {
            console.log(error)
            // error already shown by showBackendErrors, just don't update state
        }
    }
        
    return { pacientes, setPacientes, registerPacient, page, setPage, pageSize, total, totalPages };
}