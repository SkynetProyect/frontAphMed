import { useState } from "react";
import type Procedimiento from "../../logic_components/domain/models/Procedimiento";
import type Paciente from "../../logic_components/domain/models/Paciente";

export default function SeeCustomer({ paciente }: { paciente: Paciente }) {
    const [procedimientos, setProcedimientos] = useState<Procedimiento []>([]);


    return (
        <div>
            <tr key={paciente.id} >
                <td>{paciente.nombre}</td>
                <td>{paciente.telefono}</td>
                <td>activo</td>
            </tr>
        </div>
    );

}