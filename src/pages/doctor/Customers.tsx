import { useState } from "react";
import Paciente from "../../logic_components/domain/models/Paciente";
import SeeCustomer from "./SeeCustomer";

export default function Customers(){
    const [pacientes, setPacientes] = useState<Paciente []>([]);

    return (
        <>
            <table className="flex flex-col">
                <tr>
                    <th> paciente</th>
                    <th> contacto</th>
                    <th> estado </th>
                </tr>
                {pacientes.map((paciente) => (
                    < SeeCustomer key={paciente.id} paciente={paciente} />
                ))}

            </table>

            <button> Agregar </button>
        </>
    );

}