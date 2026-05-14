import { useState } from "react";
import type PacienteInterface from "../../../interfaces/PacienteInterface";
import Procedimientos from "../../procedures/Procedimientos";

export default function CustomerList({ paciente }: { paciente: PacienteInterface }) {
    const [open, setOpen] = useState(false);

    return (
        <>
        <tr className="cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors" onClick={() => setOpen(!open)}>

            {/* Paciente */}
            <td className="px-6 py-5">
                <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white font-semibold">
                        {paciente.nombre.slice(0, 2).toUpperCase()}
                    </div>

                    {/* Nombre */}
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">
                            {paciente.nombre}
                        </span>

                        <span className="text-sm text-gray-500">
                            Identificacion: {paciente.identificacion}
                        </span>
                    </div>

                </div>
            </td>

            {/* Contacto */}
            <td className="px-6 py-5">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-700">
                        {paciente.telefono}
                    </span>

                    <span className="text-sm text-gray-500">
                        {paciente.email}
                    </span>
                </div>
            </td>

            {/* Estado */}
            <td className="px-6 py-5">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Activo
                </span>
            </td>

        </tr>
            <tr>
                <td colSpan={3} className="bg-gray-50 h-3/4 w-full">
                <div
                    className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ease-in-out
                        ${
                            open
                                ? "max-h-96 opacity-100 p-6"
                                : "max-h-0 opacity-0"
                        }
                    `}
                >

                    {open && (<Procedimientos />)}
                    </div>
                </td>
            </tr>
        
    </>
    );

}